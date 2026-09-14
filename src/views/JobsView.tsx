import React from 'react';
import { useApp } from '../context/AppContext';

const imgChat31 = "/assets/messages_empty/imgChat31.png";
const imgEllipse311 = "/assets/messages_empty/imgEllipse311.svg";
const imgEllipse317 = "/assets/messages_empty/imgEllipse317.svg";
const imgEllipse318 = "/assets/messages_empty/imgEllipse318.svg";
const imgEllipse319 = "/assets/messages_empty/imgEllipse319.svg";
const imgEllipse316 = "/assets/messages_empty/imgEllipse316.svg";

export const JobsView: React.FC = () => {
  const { language } = useApp();

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col items-center justify-between overflow-hidden animate-fade-in relative h-full min-h-0 select-none font-['Inter',sans-serif]"
      data-node-id="3677:70564"
    >
      {/* Sticky Top Header (3677:70710) */}
      <div
        className="w-full bg-white px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-center shrink-0 shadow-2xs z-20"
        data-node-id="3677:70710"
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px]"
          data-node-id="I3677:70710;3490:907"
        >
          {language === 'es' ? 'Mensajes' : 'Messages'}
        </h1>
      </div>

      {/* Main Empty State Content Container (3677:70573 / 3677:70574) */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-8 w-full my-auto"
        data-node-id="3677:70573"
      >
        <div className="h-[309px] w-[328px] relative flex flex-col items-center justify-center" data-node-id="3677:70574">
          {/* Chat Speech Bubbles Illustration (3677:70575) */}
          <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[133px] top-[21.5px]" data-node-id="3677:70575">
            <img alt="Chat" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChat31} />
          </div>

          {/* Headline & Subtitle Text (3677:70576) */}
          <div className="-translate-x-1/2 absolute flex flex-col gap-3 items-center left-1/2 top-[154.5px] w-[296px] text-center" data-node-id="3677:70576">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]" data-node-id="3677:70577">
              {language === 'es' ? 'Aún no hay mensajes' : 'No Messages yet'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373] text-center" data-node-id="3677:70578">
              {language === 'es'
                ? 'Verás los nuevos mensajes de los empleadores en esta sección.'
                : "You'll see new messages from employers in this section."}
            </p>
          </div>

          {/* Ground Shadow & Floating Accent Circles */}
          <div className="-translate-x-1/2 absolute h-[9px] left-[calc(50%-0.5px)] top-[139px] w-[117px]" data-node-id="3677:70579">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse311} />
          </div>
          <div className="absolute inset-[8.09%_26.22%_87.06%_69.21%]" data-node-id="3677:70580">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} />
          </div>
          <div className="absolute inset-[33.66%_73.17%_63.11%_23.78%]" data-node-id="3677:70581">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse318} />
          </div>
          <div className="absolute inset-[34.95%_26.83%_61.49%_69.82%]" data-node-id="3677:70582">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute inset-[15.86%_67.99%_80.58%_28.66%]" data-node-id="3677:70583">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute left-[163px] size-[16px] top-[17px]" data-node-id="3677:70584">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse316} />
          </div>
        </div>
      </div>
    </div>
  );
};
