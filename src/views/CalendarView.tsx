import React from 'react';
import { useApp } from '../context/AppContext';

const imgVector = "/assets/calendar_empty/imgVector.svg";
const imgVector1 = "/assets/calendar_empty/imgVector1.svg";
const imgVector2 = "/assets/calendar_empty/imgVector2.svg";
const imgVector3 = "/assets/calendar_empty/imgVector3.svg";
const imgVector4 = "/assets/calendar_empty/imgVector4.svg";
const imgVector5 = "/assets/calendar_empty/imgVector5.svg";
const imgVector6 = "/assets/calendar_empty/imgVector6.svg";
const imgVector7 = "/assets/calendar_empty/imgVector7.svg";
const imgVector8 = "/assets/calendar_empty/imgVector8.svg";
const imgVector9 = "/assets/calendar_empty/imgVector9.svg";
const imgVector10 = "/assets/calendar_empty/imgVector10.svg";
const imgVector11 = "/assets/calendar_empty/imgVector11.svg";
const imgVector12 = "/assets/calendar_empty/imgVector12.svg";
const imgVector13 = "/assets/calendar_empty/imgVector13.svg";
const imgVector14 = "/assets/calendar_empty/imgVector14.svg";
const imgVector15 = "/assets/calendar_empty/imgVector15.svg";
const imgVector16 = "/assets/calendar_empty/imgVector16.svg";

const imgEllipse311 = "/assets/calendar_empty/imgEllipse311.svg";
const imgEllipse317 = "/assets/calendar_empty/imgEllipse317.svg";
const imgEllipse318 = "/assets/calendar_empty/imgEllipse318.svg";
const imgEllipse319 = "/assets/calendar_empty/imgEllipse319.svg";
const imgEllipse316 = "/assets/calendar_empty/imgEllipse316.svg";

export const CalendarView: React.FC = () => {
  const { language } = useApp();

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col items-center justify-between overflow-hidden animate-fade-in relative h-full min-h-0 select-none font-['Inter',sans-serif]"
      data-node-id="3675:70238"
    >
      {/* Sticky Top Header (3675:70406) */}
      <div
        className="w-full bg-white px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-center shrink-0 shadow-2xs z-20"
        data-node-id="3675:70406"
      >
        <h1
          className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] text-center tracking-[-0.096px]"
          data-node-id="I3675:70406;3490:907"
        >
          {language === 'es' ? 'Calendario' : 'Calendar'}
        </h1>
      </div>

      {/* Main Empty State Content Container (3675:70247 / 3675:70248) */}
      <div
        className="flex-1 flex flex-col items-center justify-center px-4 py-8 w-full my-auto"
        data-node-id="3675:70247"
      >
        <div className="h-[309px] w-[328px] relative flex flex-col items-center justify-center" data-node-id="3675:70248">
          {/* Calendar Icon Illustration (3675:70249) */}
          <div className="-translate-x-1/2 absolute aspect-[90/90] bottom-[54.48%] left-1/2 overflow-clip top-[13.15%]" data-node-id="3675:70249">
            <div className="absolute contents inset-[6.78%_9.8%_6.82%_9.8%]" data-node-id="3675:70250">
              <div className="absolute contents inset-[20.27%_11.43%_16.11%_12.01%]" data-node-id="3675:70251">
                <div className="absolute inset-[20.27%_11.43%_65.05%_12.01%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} /></div>
                <div className="absolute inset-[43.69%_18.77%_16.11%_70.04%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} /></div>
              </div>
              <div className="absolute contents inset-[6.78%_9.8%_6.82%_9.8%]" data-node-id="3675:70254">
                <div className="absolute inset-[75.87%_19.47%_16.88%_70.82%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} /></div>
                <div className="absolute inset-[44.25%_72.04%_47.62%_19.29%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} /></div>
                <div className="absolute inset-[75.87%_72.04%_16.88%_19.29%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} /></div>
                <div className="absolute inset-[37.26%_12.7%_9.67%_12.7%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} /></div>
                <div className="absolute inset-[75.87%_45.4%_16.88%_44.18%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} /></div>
                <div className="absolute inset-[75.87%_58.72%_16.88%_30.86%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} /></div>
                <div className="absolute inset-[65.58%_58.72%_27.02%_30.86%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[65.58%_32.08%_27.02%_57.5%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[65.58%_19.47%_27.02%_70.82%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} /></div>
                <div className="absolute inset-[75.87%_32.08%_16.88%_57.5%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} /></div>
                <div className="absolute inset-[65.58%_72.04%_27.02%_19.29%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} /></div>
                <div className="absolute inset-[55.28%_72.04%_37.32%_19.29%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} /></div>
                <div className="absolute inset-[44.25%_32.08%_47.62%_57.5%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} /></div>
                <div className="absolute inset-[65.58%_45.4%_27.02%_44.18%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[55.28%_45.4%_37.32%_44.18%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[44.25%_45.4%_47.62%_44.18%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} /></div>
                <div className="absolute inset-[55.28%_58.72%_37.32%_30.86%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[44.25%_58.72%_47.62%_30.86%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} /></div>
                <div className="absolute inset-[9.66%_29.21%_80.71%_64%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} /></div>
                <div className="absolute inset-[9.66%_65.94%_80.72%_27.26%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} /></div>
                <div className="absolute inset-[55.28%_32.08%_37.32%_57.5%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
                <div className="absolute inset-[55.28%_19.47%_37.32%_70.82%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} /></div>
                <div className="absolute inset-[22.19%_12.8%_65.64%_12.7%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector13} /></div>
                <div className="absolute inset-[44.25%_19.47%_47.62%_70.82%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector14} /></div>
                <div className="absolute inset-[6.78%_9.8%_6.82%_9.8%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} /></div>
                <div className="absolute inset-[41.35%_16.56%_14%_16.39%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} /></div>
              </div>
            </div>
          </div>

          {/* Headline & Subtitle Text (3675:70281) */}
          <div className="-translate-x-1/2 absolute flex flex-col gap-3 items-center left-1/2 top-[154.5px] w-[296px] text-center" data-node-id="3675:70281">
            <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]" data-node-id="3675:70282">
              {language === 'es' ? 'Aún no hay eventos' : 'No Events yet'}
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#737373] text-center" data-node-id="3675:70283">
              {language === 'es'
                ? 'Verás los nuevos eventos de los empleadores en esta sección.'
                : "You'll see new events from employers in this section."}
            </p>
          </div>

          {/* Ground Shadow & Floating Accent Circles */}
          <div className="-translate-x-1/2 absolute h-[9px] left-[calc(50%-0.5px)] top-[139px] w-[117px]" data-node-id="3675:70284">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse311} />
          </div>
          <div className="absolute inset-[8.09%_26.22%_87.06%_69.21%]" data-node-id="3675:70285">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} />
          </div>
          <div className="absolute inset-[33.66%_73.17%_63.11%_23.78%]" data-node-id="3675:70286">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse318} />
          </div>
          <div className="absolute inset-[34.95%_26.83%_61.49%_69.82%]" data-node-id="3675:70287">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute inset-[15.86%_67.99%_80.58%_28.66%]" data-node-id="3675:70288">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} />
          </div>
          <div className="absolute left-[163px] size-[16px] top-[17px]" data-node-id="3675:70289">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse316} />
          </div>
        </div>
      </div>
    </div>
  );
};
