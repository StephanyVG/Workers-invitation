import React from 'react';
import { useApp } from '../../context/AppContext';

const imgEllipse311 = "/assets/thumbs_up/imgEllipse311.svg";
const imgVector = "/assets/thumbs_up/imgVector.svg";
const imgVector1 = "/assets/thumbs_up/imgVector1.svg";
const imgVector2 = "/assets/thumbs_up/imgVector2.svg";
const imgVector3 = "/assets/thumbs_up/imgVector3.svg";
const imgVector4 = "/assets/thumbs_up/imgVector4.svg";
const imgVector5 = "/assets/thumbs_up/imgVector5.svg";
const imgVector6 = "/assets/thumbs_up/imgVector6.svg";
const imgVector7 = "/assets/thumbs_up/imgVector7.svg";
const imgVector8 = "/assets/thumbs_up/imgVector8.svg";
const imgVector9 = "/assets/thumbs_up/imgVector9.svg";
const imgVector10 = "/assets/thumbs_up/imgVector10.svg";
const imgVector11 = "/assets/thumbs_up/imgVector11.svg";
const imgVector12 = "/assets/thumbs_up/imgVector12.svg";
const imgVector13 = "/assets/thumbs_up/imgVector13.svg";
const imgEllipse317 = "/assets/thumbs_up/imgEllipse317.svg";
const imgEllipse318 = "/assets/thumbs_up/imgEllipse318.svg";
const imgEllipse319 = "/assets/thumbs_up/imgEllipse319.svg";
const imgEllipse320 = "/assets/thumbs_up/imgEllipse320.svg";
const imgEllipse316 = "/assets/thumbs_up/imgEllipse316.svg";

export const ConfirmationScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const handleReturn = () => {
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col items-center justify-between animate-fade-in relative h-full min-h-0 select-none"
      data-node-id="631:28567"
    >
      {/* Header Close Button (631:28601 / 631:28602) */}
      <div className="w-full flex items-center justify-start px-4 pt-4 pb-2 z-20" data-node-id="631:28601">
        <button
          onClick={handleReturn}
          className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all duration-150 cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          data-node-id="631:28602"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
      </div>

      {/* Illustration Section (631:28568) */}
      <div
        className="h-[321px] relative shrink-0 w-full overflow-hidden"
        data-node-id="631:28568"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0.7%, rgba(216, 227, 255, 0) 100%)"
        }}
      >
        <div className="-translate-x-1/2 absolute h-[9px] left-[calc(50%-13px)] top-[293px] w-[126px]" data-node-id="631:28569">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse311} />
        </div>
        <div className="-translate-x-1/2 absolute aspect-[100/100] bottom-[10.28%] left-1/2 overflow-clip top-[26.17%]" data-node-id="631:28570">
          <div className="absolute contents inset-[10.36%_18.37%_10.31%_18.32%]" data-node-id="631:28571">
            <div className="absolute inset-[84.98%_53.51%_14.38%_45.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} /></div>
            <div className="absolute inset-[83.63%_76.67%_15.18%_20.77%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} /></div>
            <div className="absolute inset-[51.99%_24.83%_41.21%_56.37%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} /></div>
            <div className="absolute inset-[59.62%_45.1%_39.91%_54.48%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} /></div>
            <div className="absolute inset-[81.7%_36.47%_13.52%_49.47%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} /></div>
            <div className="absolute inset-[72.74%_31.1%_21.89%_53.84%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} /></div>
            <div className="absolute inset-[62.44%_27.11%_30.74%_54.06%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} /></div>
            <div className="absolute inset-[88.53%_51.51%_11.29%_47.14%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} /></div>
            <div className="absolute inset-[82.69%_59.66%_11.8%_19.29%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} /></div>
            <div className="absolute inset-[67.19%_46.93%_14.38%_42%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} /></div>
            <div className="absolute inset-[36.77%_18.37%_58.7%_71.99%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} /></div>
            <div className="absolute inset-[10.36%_32.99%_80.43%_62.67%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} /></div>
            <div className="absolute inset-[20.97%_21%_72.52%_70.34%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} /></div>
            <div className="absolute inset-[29.81%_21.6%_10.31%_18.32%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector13} /></div>
          </div>
        </div>
        <div className="absolute inset-[59.5%_17.5%_35.83%_78.33%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} /></div>
        <div className="absolute inset-[82.24%_75.83%_14.64%_21.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse318} /></div>
        <div className="absolute inset-[85.36%_26.94%_11.21%_70%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse319} /></div>
        <div className="absolute inset-[40.19%_75.83%_56.39%_21.11%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse320} /></div>
        <div className="absolute left-[161px] size-[16px] top-[63px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse316} /></div>
      </div>

      {/* Main Content Body (631:28591) */}
      <div className="flex-1 flex flex-col justify-between p-6 w-full text-left" data-node-id="631:28591">
        <div className="space-y-4" data-node-id="631:28592">
          {/* Headline (631:28593) */}
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#0038d0] tracking-[-0.112px]"
            data-node-id="631:28593"
          >
            {language === 'es' ? '¡Todo listo!' : 'All set!'}
          </h1>

          {/* Messages (631:28594) */}
          <div className="space-y-3 text-[16px] leading-[22px] text-[#0a0a0a]" data-node-id="631:28594">
            <p className="font-['Inter',sans-serif] font-normal tracking-[-0.032px]" data-node-id="631:28595">
              {language === 'es'
                ? 'La empresa se pondrá en contacto contigo pronto para agendar tu entrevista de trabajo.'
                : 'The company will contact you soon to schedule your job interview.'}
            </p>
            <p className="font-['Inter',sans-serif] font-semibold" data-node-id="631:28596">
              {language === 'es' ? '¡Mantente al pendiente de las notificaciones!' : 'Stay tuned for notifications!'}
            </p>
          </div>
        </div>

        {/* Primary Action Button (631:28597) */}
        <div className="pt-6 pb-2 w-full">
          <button
            onClick={handleReturn}
            className="w-full h-[44px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] active:scale-[0.98] text-white font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center rounded-full shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
            data-node-id="631:28597"
          >
            {language === 'es' ? 'Regresar a mis invitaciones de trabajo' : 'Return to my job invitations'}
          </button>
        </div>
      </div>
    </div>
  );
};
