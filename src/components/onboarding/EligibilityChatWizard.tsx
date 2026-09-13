import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export const EligibilityChatWizard: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  // Wizard Step:
  // 0: Initial greeting shown -> user needs to click "Let's see if I'm eligible"
  // 1: Q1 (Citizenship) shown -> user picks country
  // 2: Q2 (Temporary US Work) shown -> user picks Yes/No
  // 3: Q3 (Crime Conviction) shown -> user picks Yes/No
  // 4: Q4 (Valid Passport) shown -> user picks Yes/No
  // 5: Completion state -> show final CTA to enter app
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'init_bot_1',
      sender: 'bot',
      text:
        language === 'es'
          ? '¡Hola! Soy Zipmi. Te haré algunas preguntas. Este es solo el primer paso. No decide si obtendrás la visa.'
          : 'Hi! I’m Zipmi. I will ask you a few questions. This is only the first step. It does not decide if you get the visa.'
    }
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom whenever messages or typing state update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatMessages, currentStep, isTyping]);

  // Organic helper function to simulate human-like typing delays sequentially
  const simulateBotResponse = async (messages: string[], nextStep: number) => {
    setCurrentStep(-1); // Temporarily hide user options while bot is typing

    for (let i = 0; i < messages.length; i++) {
      // 1. Brief natural pause before typing indicator shows up
      await new Promise((res) => setTimeout(res, 350));

      // 2. Show typing indicator
      setIsTyping(true);

      // 3. Typing duration scales organically with message length (min 850ms, max 1300ms)
      const typingTime = Math.min(1300, Math.max(850, messages[i].length * 22));
      await new Promise((res) => setTimeout(res, typingTime));

      // 4. Hide typing indicator & add message
      setIsTyping(false);
      const msgText = messages[i];
      setChatMessages((prev) => [
        ...prev,
        { id: `bot_msg_${Date.now()}_${i}`, sender: 'bot', text: msgText }
      ]);
    }

    // 5. Brief pause before revealing user options smoothly
    await new Promise((res) => setTimeout(res, 450));
    setCurrentStep(nextStep);
  };

  // Handle Step 0: Click "Let's see if I'm eligible"
  const handleStartEligibility = () => {
    const userMsg = language === 'es' ? 'Veamos si soy elegible.' : "Let's see if I'm eligible.";
    const botMsg1 = language === 'es' ? '¡Genial! La primera pregunta es:' : 'Great! The first question is:';
    const botMsg2 = language === 'es' ? '¿De qué país eres ciudadano?' : 'What country are you a citizen of?';

    setChatMessages((prev) => [...prev, { id: 'user_0', sender: 'user', text: userMsg }]);
    simulateBotResponse([botMsg1, botMsg2], 1);
  };

  // Handle Step 1: Select Country
  const handleSelectCountry = (countryName: string, flag: string) => {
    const userMsg = `${flag} ${countryName}`;
    const botMsg =
      language === 'es'
        ? '¿Buscas trabajar temporalmente en los Estados Unidos?'
        : 'Are you looking to work temporarily in the United States?';

    setChatMessages((prev) => [...prev, { id: `user_1_${countryName}`, sender: 'user', text: userMsg }]);
    simulateBotResponse([botMsg], 2);
  };

  // Handle Step 2: Select Temporary Work (Yes/No)
  const handleSelectTempWork = (answer: 'yes' | 'no') => {
    const userMsg = answer === 'yes' ? (language === 'es' ? 'Sí' : 'Yes') : (language === 'es' ? 'No' : 'No');
    const botMsg =
      language === 'es'
        ? '¿Alguna vez has sido condenado por un delito que no sea una falta menor?'
        : 'Have you ever been convicted of a crime that is not a misdemeanor?';

    setChatMessages((prev) => [...prev, { id: `user_2_${answer}`, sender: 'user', text: userMsg }]);
    simulateBotResponse([botMsg], 3);
  };

  // Handle Step 3: Select Crime Conviction (Yes/No)
  const handleSelectCrime = (answer: 'yes' | 'no') => {
    const userMsg = answer === 'yes' ? (language === 'es' ? 'Sí' : 'Yes') : (language === 'es' ? 'No' : 'No');
    const botMsg =
      language === 'es'
        ? '¿Tienes un pasaporte válido y vigente?'
        : 'Do you have a valid and current passport?';

    setChatMessages((prev) => [...prev, { id: `user_3_${answer}`, sender: 'user', text: userMsg }]);
    simulateBotResponse([botMsg], 4);
  };

  // Handle Step 4: Select Passport (Yes/No) -> Directly navigates smoothly to Great News H2 Screen
  const handleSelectPassport = async (answer: 'yes' | 'no') => {
    const userMsg = answer === 'yes' ? (language === 'es' ? 'Sí' : 'Yes') : (language === 'es' ? 'No' : 'No');

    setChatMessages((prev) => [...prev, { id: `user_4_${answer}`, sender: 'user', text: userMsg }]);
    setCurrentStep(-1);

    await new Promise((res) => setTimeout(res, 350));
    setIsTyping(true);
    await new Promise((res) => setTimeout(res, 900));
    setIsTyping(false);
    setCurrentTab('great_news_h2');
  };

  return (
    <div
      className="bg-[#fafafa] overflow-hidden flex-1 w-full flex flex-col justify-between animate-slide-right relative"
      data-node-id="3:65264"
    >
      {/* Header Bar */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] px-[16px] py-[12px] flex items-center justify-between sticky top-0 z-20">
        <button
          onClick={() => setCurrentTab('h2_visa_intro')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#0038d0] text-center">
          {language === 'es' ? 'Elegibilidad' : 'Eligibility'}
        </h1>
        <div className="size-[44px]"></div>
      </div>

      {/* Scrollable Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[16px] space-y-4"
      >
        {chatMessages.map((msg) => {
          if (msg.sender === 'bot') {
            return (
              <div key={msg.id} className="flex items-start gap-2.5 w-full animate-chat-bubble" data-node-id="3:65271">
                {/* BubbleZip.svg Avatar */}
                <img
                  src="/BubbleZip.svg"
                  alt="Zipmi"
                  className="size-10 rounded-full object-contain shrink-0 shadow-xs mt-0.5 select-none"
                />
                {/* ZipChat / ChatBox Container (Figma node 3:65272) */}
                <div
                  className="bg-[#d4d4d4] text-[#171717] p-[16px] rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] rounded-tl-xs max-w-[82%] shadow-2xs font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] tracking-[-0.056px]"
                  data-node-id="3:65272"
                >
                  {msg.text}
                </div>
              </div>
            );
          } else {
            return (
              <div key={msg.id} className="flex items-center justify-end w-full animate-chat-bubble">
                {/* User Message ChatBox Container */}
                <div className="bg-[#c2e7ff] text-[#0038d0] border border-[#a2d8ff] p-[16px] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] rounded-tr-xs max-w-[80%] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] tracking-[-0.056px] shadow-2xs">
                  {msg.text}
                </div>
              </div>
            );
          }
        })}

        {/* Organic Bot Typing Indicator Animation (Figma Node 3:65260) */}
        {isTyping && (
          <div className="flex items-start gap-2.5 w-full animate-chat-bubble" data-node-id="3:65260">
            <img
              src="/BubbleZip.svg"
              alt="Zipmi"
              className="size-10 rounded-full object-contain shrink-0 shadow-xs mt-0.5 select-none"
            />
            {/* ChatBox Typing Container (Figma node 3:65260) */}
            <div
              className="bg-[#d4d4d4] text-[#171717] p-[16px] rounded-bl-[24px] rounded-br-[24px] rounded-tr-[24px] rounded-tl-xs shadow-2xs flex items-center justify-center h-[42px]"
              data-node-id="3:65260"
            >
              <div className="flex items-center gap-1.5 px-1">
                <span className="size-2 bg-[#525252] rounded-full animate-bounce [animation-delay:-0.32s] [animation-duration:0.9s]" />
                <span className="size-2 bg-[#525252] rounded-full animate-bounce [animation-delay:-0.16s] [animation-duration:0.9s]" />
                <span className="size-2 bg-[#525252] rounded-full animate-bounce [animation-duration:0.9s]" />
              </div>
            </div>
          </div>
        )}

        {/* Step 0 Action Pill (Figma Node 3:65264) */}
        {currentStep === 0 && (
          <div className="flex justify-end pt-2 animate-chat-bubble" data-node-id="3:65264">
            <button
              onClick={handleStartEligibility}
              className="bg-[#e7f6ff] text-[#0038d0] hover:bg-[#d0edff] border border-[#bce3ff] rounded-full px-5 py-3 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'Veamos si soy elegible.' : "Let's see if I'm eligible."}
            </button>
          </div>
        )}

        {/* Step 1 Country Selection List (Figma Node 3:65389) */}
        {currentStep === 1 && (
          <div className="flex flex-col items-end gap-2.5 pt-2 animate-chat-bubble" data-node-id="3:65389">
            {[
              { name: language === 'es' ? 'México' : 'Mexico', flag: '🇲🇽' },
              { name: 'Guatemala', flag: '🇬🇹' },
              { name: 'Honduras', flag: '🇭🇳' },
              { name: 'El Salvador', flag: '🇸🇻' },
              { name: 'Jamaica', flag: '🇯🇲' },
              { name: language === 'es' ? 'Otros países' : 'Other countries', flag: '🌎' }
            ].map((c) => (
              <button
                key={c.name}
                onClick={() => handleSelectCountry(c.name, c.flag)}
                className="bg-[#e7f6ff] text-[#0038d0] hover:bg-[#d0edff] border border-[#bce3ff] rounded-full px-5 py-3 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Step 2 Temporary Work Options (Figma Node 3:65439) */}
        {currentStep === 2 && (
          <div className="flex flex-col items-end gap-2 pt-2 animate-chat-bubble" data-node-id="3:65439">
            <button
              onClick={() => handleSelectTempWork('yes')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              onClick={() => handleSelectTempWork('no')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'No' : 'No'}
            </button>
          </div>
        )}

        {/* Step 3 Crime Conviction Options (Figma Node 3:65529) */}
        {currentStep === 3 && (
          <div className="flex flex-col items-end gap-2 pt-2 animate-chat-bubble" data-node-id="3:65529">
            <button
              onClick={() => handleSelectCrime('yes')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              onClick={() => handleSelectCrime('no')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'No' : 'No'}
            </button>
          </div>
        )}

        {/* Step 4 Valid Passport Options (Figma Node 3:65644) */}
        {currentStep === 4 && (
          <div className="flex flex-col items-end gap-2 pt-2 animate-chat-bubble" data-node-id="3:65644">
            <button
              onClick={() => handleSelectPassport('yes')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>
            <button
              onClick={() => handleSelectPassport('no')}
              className="bg-[#e7f6ff] text-[#0038d0] border border-[#bce3ff] rounded-full px-6 py-2.5 font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              {language === 'es' ? 'No' : 'No'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

