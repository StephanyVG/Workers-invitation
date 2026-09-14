import React from 'react';
import { useApp } from '../../context/AppContext';

export const JobOfferDetailScreen: React.FC = () => {
  const { language, setCurrentTab, updateWorker, triggerConfetti, addToast } = useApp();

  const handleAcceptOffer = () => {
    updateWorker({
      appliedJobId: '1',
      status: 'entrevista'
    });
    triggerConfetti();
    addToast(
      language === 'es' ? '¡Invitación Aceptada!' : 'Invitation Accepted!',
      language === 'es'
        ? 'Aceptaste la invitación de Sunnydale Orchards farm. Tu proceso ha avanzado.'
        : 'You accepted the invitation from Sunnydale Orchards farm. Your process advanced.',
      'success'
    );
    setCurrentTab('home');
  };

  const handleDeclineOffer = () => {
    addToast(
      language === 'es' ? 'Oferta Declinada' : 'Offer Declined',
      language === 'es'
        ? 'Puedes revisar otras vacantes disponibles en cualquier momento.'
        : 'You can check other available jobs at any time.',
      'info'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col justify-between animate-slide-right relative h-full min-h-0"
      data-node-id="631:28603"
    >
      {/* Top Floating Header & Back Icon Button (631:28678) */}
      <div className="absolute top-4 left-4 z-20" data-node-id="631:28678">
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-md active:scale-90 transition-all duration-150 cursor-pointer"
          aria-label="Regresar"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
      </div>

      {/* Main Scrollable View Content (631:28605) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col" data-node-id="631:28605">
        {/* Top Job Banner Image (631:28604) - Height 154px (Apple orchard image) */}
        <div className="w-full h-[154px] bg-slate-200 relative shrink-0" data-node-id="631:28604">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80"
            alt="Sunnydale Orchards farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Job Content Body (px-4 py-8 space-y-6) */}
        <div className="p-4 space-y-6 text-left font-['Inter',sans-serif]">
          {/* Job Summary Section (631:28606) */}
          <div className="space-y-2" data-node-id="631:28606">
            <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0038d0] tracking-[-0.072px]" data-node-id="631:28608">
              Integrated Pest Management and Pollinator Conservation Coordinator
            </h1>
            <p className="font-normal text-[14px] leading-[24px] text-[#171717] underline underline-offset-2" data-node-id="631:28609">
              Sunnydale Orchards farm
            </p>
            <p className="font-normal text-[14px] leading-[24px] text-[#171717]" data-node-id="631:28610">
              City, State
            </p>
          </div>

          {/* Divider Line (631:28611) */}
          <div className="border-t border-[#e5e5e5]" data-node-id="631:28611" />

          {/* Job Details Frame (631:28612) */}
          <div className="space-y-4" data-node-id="631:28612">
            {/* Job Info Row 3-Columns (631:28613) */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 flex gap-3 items-start w-full shadow-2xs" data-node-id="631:28613">
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-1" data-node-id="631:28614">
                <span className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] capitalize" data-node-id="631:28616">
                  {language === 'es' ? 'Fecha Inicio' : 'Start Date'}
                </span>
                <span className="font-normal text-[14px] text-[#171717] tracking-[-0.056px]" data-node-id="631:28617">
                  12/04/2025
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center gap-1 border-x border-[#f0f0f0] px-1" data-node-id="631:28618">
                <span className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] capitalize" data-node-id="631:28620">
                  {language === 'es' ? 'Período' : 'Period'}
                </span>
                <span className="font-normal text-[14px] text-[#171717] tracking-[-0.056px]" data-node-id="631:28621">
                  3 Months
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center gap-1" data-node-id="631:28622">
                <span className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] capitalize" data-node-id="631:28624">
                  {language === 'es' ? 'Tarifa Pago' : 'Pay Rate'}
                </span>
                <span className="font-normal text-[14px] text-[#171717] tracking-[-0.056px]" data-node-id="631:28625">
                  12 USD
                </span>
              </div>
            </div>

            {/* Job Description Container (631:28626) */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 space-y-2 shadow-2xs" data-node-id="631:28626">
              <h3 className="font-semibold text-[16px] text-[#171717] capitalize tracking-[-0.064px]" data-node-id="631:28629">
                {language === 'es' ? 'Descripción' : 'Description'}
              </h3>
              <p className="font-normal text-[14px] leading-[18px] text-[#171717]" data-node-id="631:28630">
                A design system for enterprise-level products.
              </p>
            </div>

            {/* Job Requirements Container (631:28631) */}
            <div className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 space-y-4 shadow-2xs" data-node-id="631:28631">
              <h3 className="font-semibold text-[16px] text-[#171717] capitalize tracking-[-0.064px]" data-node-id="631:28632">
                {language === 'es' ? 'Requisitos' : 'Requirements'}
              </h3>

              <div className="space-y-3 text-[14px] text-[#171717]" data-node-id="631:28633">
                {/* Work Schedule */}
                <div className="space-y-1" data-node-id="631:28634">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28635">
                    {language === 'es' ? 'Horario de trabajo' : 'Work Schedule'}
                  </p>
                  <div className="flex items-center justify-between font-normal" data-node-id="631:28636">
                    <span>Monday - Friday</span>
                    <span>09:00 - 18:00</span>
                  </div>
                </div>

                {/* Minimum Education/Training Required */}
                <div className="space-y-1" data-node-id="631:28639">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28640">
                    {language === 'es' ? 'Educación/Capacitación mínima requerida' : 'Minimum Education/Training Required'}
                  </p>
                  <p className="font-normal" data-node-id="631:28642">
                    Bachelor’s
                  </p>
                </div>

                {/* Minimum Experience Required */}
                <div className="space-y-1" data-node-id="631:28643">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28644">
                    {language === 'es' ? 'Experiencia mínima requerida' : 'Minimum experience required'}
                  </p>
                  <p className="font-normal" data-node-id="631:28646">
                    1 year
                  </p>
                </div>

                {/* Environmental conditions */}
                <div className="space-y-1" data-node-id="631:28647">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28648">
                    {language === 'es' ? 'Condiciones ambientales' : 'Environmental conditions'}
                  </p>
                  <p className="font-normal" data-node-id="631:28650">
                    Chemicals, Heat,, Cold, Pushing, Pulling
                  </p>
                </div>

                {/* Language and level */}
                <div className="space-y-1" data-node-id="631:28651">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28652">
                    {language === 'es' ? 'Idioma y nivel' : 'Language and level'}
                  </p>
                  <div className="flex items-center justify-between font-normal" data-node-id="631:28653">
                    <span>English</span>
                    <span>B2-Intermediate</span>
                  </div>
                </div>

                {/* Required to drive */}
                <div className="space-y-1" data-node-id="631:28656">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28657">
                    {language === 'es' ? 'Requerido conducir' : 'Required to drive'}
                  </p>
                  <p className="font-normal" data-node-id="631:28659">
                    Yes
                  </p>
                </div>

                {/* Minimum Lift */}
                <div className="space-y-1" data-node-id="631:28660">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28661">
                    {language === 'es' ? 'Carga mínima' : 'Minimum Lift'}
                  </p>
                  <p className="font-normal" data-node-id="631:28663">
                    50Kg
                  </p>
                </div>

                {/* Required to supervise others */}
                <div className="space-y-1" data-node-id="631:28664">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28665">
                    {language === 'es' ? 'Requerido supervisar a otros' : 'Required to supervise others'}
                  </p>
                  <p className="font-normal" data-node-id="631:28667">
                    No
                  </p>
                </div>

                {/* Meals Provided */}
                <div className="space-y-1" data-node-id="631:28668">
                  <p className="font-semibold text-[#525252] capitalize" data-node-id="631:28669">
                    {language === 'es' ? 'Comidas provistas' : 'Meals Provided'}
                  </p>
                  <p className="font-normal" data-node-id="631:28671">
                    No
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Container (631:28673 / 631:28674) */}
      <div
        className="w-full bg-[#fafafa] border-t border-[#e5e5e5] px-4 pt-3 pb-4 flex flex-col gap-3 shrink-0 shadow-lg z-20"
        data-node-id="631:28673"
      >
        {/* Primary Button: Accept invitation (631:28675) */}
        <button
          onClick={handleAcceptOffer}
          className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] active:scale-[0.98] text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="631:28675"
        >
          {language === 'es' ? 'Aceptar invitación' : 'Accept invitation'}
        </button>

        {/* Ghost/Secondary Button: Decline job offer (631:28676) */}
        <button
          onClick={handleDeclineOffer}
          className="w-full h-[44px] text-center font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#c7290e] active:scale-95 transition-all duration-150 cursor-pointer flex items-center justify-center rounded-full"
          data-node-id="631:28676"
        >
          {language === 'es' ? 'No quiero esta oferta' : "I don't want this job"}
        </button>
      </div>
    </div>
  );
};
