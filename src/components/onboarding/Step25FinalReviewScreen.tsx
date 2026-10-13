import React from 'react';
import { useApp } from '../../context/AppContext';

export const Step25FinalReviewScreen: React.FC = () => {
  const { language, setCurrentTab, queueJobOfferModal, updateWorker } = useApp();

  const handleAllSet = () => {
    updateWorker({ appliedJobId: '1' });
    setCurrentTab('home');
    queueJobOfferModal(2000);
  };

  const handleEditPart = (part: 1 | 2 | 3 | 4) => {
    switch (part) {
      case 1:
        // Direct to contact details with prefilled data (skipping passport/profile photo capture)
        setCurrentTab('step2_contact_details');
        break;
      case 2:
        setCurrentTab('step10_visa_preference');
        break;
      case 3:
        setCurrentTab('step15_education_level');
        break;
      case 4:
        setCurrentTab('step19_social_info');
        break;
    }
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:4982"
    >
      {/* Top Header Bar */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col shrink-0 sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <div className="w-[40px]" />

          <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#0038d0]">
            {language === 'es' ? 'Revisión' : 'Review'}
          </span>

          <div className="w-[40px]" />
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6 min-h-0 text-left">
        {/* Main Heading */}
        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px]">
          {language === 'es'
            ? 'Si deseas editar o revisar cualquier información, puedes regresar a cada paso.'
            : 'If you want to edit or review any information you can return to each step.'}
        </h1>

        {/* 4 Cards */}
        <div className="space-y-4 w-full">
          {/* Card 1: Part 1 Personal Information */}
          <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 shadow-2xs space-y-3.5 text-left">
            <div className="flex items-center gap-3 w-full">
              <div
                className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0%, rgba(216, 227, 255, 0) 100%)',
                }}
              >
                <span className="material-symbols-outlined text-[#0038d0] text-[28px]">
                  badge
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#262626] tracking-[-0.056px] flex-1">
                {language === 'es'
                  ? 'Parte 1: Información personal'
                  : 'Part 1: Personal information'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleEditPart(1)}
              className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] h-[44px] rounded-[100px] w-full flex items-center justify-center shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              {language === 'es' ? 'Realizar cambios' : 'Make changes'}
            </button>
          </div>

          {/* Card 2: Part 2 Work Preferences */}
          <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 shadow-2xs space-y-3.5 text-left">
            <div className="flex items-center gap-3 w-full">
              <div
                className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0%, rgba(216, 227, 255, 0) 100%)',
                }}
              >
                <span className="material-symbols-outlined text-[#0038d0] text-[28px]">
                  work
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#262626] tracking-[-0.056px] flex-1">
                {language === 'es'
                  ? 'Parte 2: Preferencias de trabajo'
                  : 'Part 2: Work Preferences'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleEditPart(2)}
              className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] h-[44px] rounded-[100px] w-full flex items-center justify-center shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              {language === 'es' ? 'Realizar cambios' : 'Make changes'}
            </button>
          </div>

          {/* Card 3: Part 3 Work and Education */}
          <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 shadow-2xs space-y-3.5 text-left">
            <div className="flex items-center gap-3 w-full">
              <div
                className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0%, rgba(216, 227, 255, 0) 100%)',
                }}
              >
                <span className="material-symbols-outlined text-[#0038d0] text-[28px]">
                  school
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#262626] tracking-[-0.056px] flex-1">
                {language === 'es'
                  ? 'Parte 3: Trabajo y educación'
                  : 'Part 3: Work and Education'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleEditPart(3)}
              className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] h-[44px] rounded-[100px] w-full flex items-center justify-center shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              {language === 'es' ? 'Realizar cambios' : 'Make changes'}
            </button>
          </div>

          {/* Card 4: Part 4 Final Questions */}
          <div className="bg-white border border-[#e5e5e5] rounded-[12px] p-4 shadow-2xs space-y-3.5 text-left">
            <div className="flex items-center gap-3 w-full">
              <div
                className="size-[48px] rounded-[8px] flex items-center justify-center shrink-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(216, 227, 255, 0.5) 0%, rgba(216, 227, 255, 0) 100%)',
                }}
              >
                <span className="material-symbols-outlined text-[#0038d0] text-[28px]">
                  fact_check
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#262626] tracking-[-0.056px] flex-1">
                {language === 'es'
                  ? 'Parte 4: Preguntas finales'
                  : 'Part 4: Final Questions'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleEditPart(4)}
              className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] h-[44px] rounded-[100px] w-full flex items-center justify-center shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              {language === 'es' ? 'Realizar cambios' : 'Make changes'}
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center shrink-0">
        <button
          onClick={handleAllSet}
          className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#068f2a] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>{language === 'es' ? '¡Todo listo!' : 'All set'}</span>
          <span className="material-symbols-outlined text-[22px]">check</span>
        </button>
      </div>
    </div>
  );
};
