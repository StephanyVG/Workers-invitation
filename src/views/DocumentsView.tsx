import React from 'react';
import { useApp } from '../context/AppContext';

const imgLayer9 = "/assets/documents_empty/imgLayer9.svg";
const imgLayer3 = "/assets/documents_empty/imgLayer3.svg";
const imgEllipse311 = "/assets/documents_empty/imgEllipse311.svg";
const imgEllipse317 = "/assets/documents_empty/imgEllipse317.svg";
const imgEllipse318 = "/assets/documents_empty/imgEllipse318.svg";
const imgEllipse319 = "/assets/documents_empty/imgEllipse319.svg";
const imgEllipse316 = "/assets/documents_empty/imgEllipse316.svg";

export const DocumentsView: React.FC = () => {
  const { language } = useApp();

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col items-center justify-between overflow-hidden animate-fade-in relative h-full min-h-0 select-none"
      data-node-id="2023:45431"
    >
      {/* Sticky Top Header (2023:45524) */}
      <div
        className="w-full bg-white px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-center shrink-0 shadow-2xs z-20"
        data-node-id="2023:45524"
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px]"
          data-node-id="I2023:45524;3490:907"
        >
          {language === 'es' ? 'Documentos' : 'Documents'}
        </h1>
      </div>

      {/* Main Empty State Content Container (2023:45434 / 2023:45533) */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-8 w-full my-auto"
        data-node-id="2023:45434"
      >
        <div className="h-[309px] w-[328px] relative flex flex-col items-center justify-center" data-node-id="2023:45533">
          {/* Document & Profile Badge Illustration (2023:45576) */}
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[100px] top-[calc(50%-67.5px)]" data-node-id="2023:45576">
            <div className="absolute contents inset-[10.15%_17.35%_10.13%_17.35%]" data-node-id="2023:45577">
              <div className="absolute inset-[12.34%_19.16%_12.38%_18.04%]" data-node-id="2023:45578">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer9} />
              </div>
              <div className="absolute inset-[10.15%_17.35%_10.13%_17.35%]" data-node-id="2023:45581">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
              </div>
            </div>
          </div>

          {/* Headline & Description (2023:45566) */}
          <div className="-translate-x-1/2 absolute flex flex-col gap-3 items-center left-1/2 top-[154.5px] w-[296px] text-center" data-node-id="2023:45566">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]" data-node-id="2023:45567">
              {language === 'es' ? 'Aún no hay documentos' : 'No documents yet'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373] text-center" data-node-id="2023:45568">
              {language === 'es'
                ? 'Tus documentos aparecerán en este espacio. Podrás revisarlos a lo largo de tu proceso.'
                : 'Your documents will appear in this space. You can review them throughout your process'}
            </p>
          </div>

          {/* Ground Shadow & Floating Accent Circles */}
          <div className="-translate-x-1/2 absolute h-[9px] left-[calc(50%-0.5px)] top-[139px] w-[117px]" data-node-id="2023:45569">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse311} />
          </div>
          <div className="absolute inset-[8.09%_26.22%_87.06%_69.21%]" data-node-id="2023:45570">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} />
          </div>
          <div className="absolute inset-[33.66%_73.17%_63.11%_23.78%]" data-node-id="2023:45571">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse318} />
          </div>
          <div className="absolute inset-[34.95%_26.83%_61.49%_69.82%]" data-node-id="2023:45572">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute inset-[15.86%_67.99%_80.58%_28.66%]" data-node-id="2023:45573">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute left-[163px] size-[16px] top-[17px]" data-node-id="2023:45574">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse316} />
          </div>
        </div>
      </div>
    </div>
  );
};
