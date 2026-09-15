import React from 'react';
import { useApp, AppTab } from '../../context/AppContext';

type CategoryKey = 'visa' | 'transport' | 'hotel' | 'food';

interface CategoryItem {
  key: CategoryKey;
  icon: string;
  openTitle: string;
  completedTitle: string;
  targetTab: AppTab;
  nodeIds: {
    open: string;
    completed: string;
    disabled: string;
  };
}

export const RefundsHubScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    refundsProgress,
    markRefundCategoryDone,
    submitAllRefunds,
    setShowRefundConfirmModal,
  } = useApp();

  const visaDone = refundsProgress.visa.completed;
  const transportDone = refundsProgress.transport.completed;
  const hotelDone = refundsProgress.hotel.completed;
  const foodDone = refundsProgress.food.completed;

  const anyDone = visaDone || transportDone || hotelDone || foodDone;
  const allDone = visaDone && transportDone && hotelDone && foodDone;

  const categories: CategoryItem[] = [
    {
      key: 'visa',
      icon: 'badge',
      openTitle: language === 'es' ? 'Pagué mis tarifas de solicitud de visa' : 'I Paid My Visa Application Fees',
      completedTitle: language === 'es' ? 'Tarifas de solicitud de visa' : 'Visa application fees',
      targetTab: 'refunds_visa',
      nodeIds: {
        open: '2308:50446',
        completed: '2308:50498',
        disabled: '2308:50478',
      },
    },
    {
      key: 'transport',
      icon: 'airport_shuttle',
      openTitle: language === 'es' ? 'Pagué boletos de autobús o transporte' : 'I Paid for Bus or Travel Tickets',
      completedTitle: language === 'es' ? 'Autobús y transporte' : 'Bus and Travel',
      targetTab: 'refunds_transport',
      nodeIds: {
        open: '2308:49400',
        completed: '2308:50543',
        disabled: '2308:50478',
      },
    },
    {
      key: 'hotel',
      icon: 'hotel',
      openTitle: language === 'es' ? 'Pagué hospedaje o estancias de hotel' : 'I Paid for Hotel Stays',
      completedTitle: language === 'es' ? 'Hotel o alojamiento' : 'Hotel or Housing',
      targetTab: 'refunds_accommodation',
      nodeIds: {
        open: '2308:50456',
        completed: '2308:50592',
        disabled: '2308:50478',
      },
    },
    {
      key: 'food',
      icon: 'restaurant',
      openTitle: language === 'es' ? 'Pagué por comida u otros' : 'I Paid for Food or Others',
      completedTitle: language === 'es' ? 'Comida u otros' : 'Food or others',
      targetTab: 'refunds_food',
      nodeIds: {
        open: '2308:50467',
        completed: '2308:50639',
        disabled: '2308:50478',
      },
    },
  ];

  // Separate active/completed categories from notApplicable ones so disabled ones are moved to the bottom
  const activeOrCompleted = categories.filter((cat) => !refundsProgress[cat.key].notApplicable);
  const notApplicableCategories = categories.filter((cat) => !!refundsProgress[cat.key].notApplicable);
  const displayCategories = [...activeOrCompleted, ...notApplicableCategories];

  const handleSubmit = () => {
    setShowRefundConfirmModal(true);
  };

  const getNodeDataId = () => {
    if (allDone) return '2308:50639';
    if (visaDone && transportDone && hotelDone) return '2308:50592';
    if (visaDone && transportDone) return '2308:50543';
    if (visaDone) return '2308:50492';
    if (notApplicableCategories.length > 0 && !anyDone) return '2308:50440';
    return '2308:50388';
  };

  const renderCategoryCard = (cat: CategoryItem) => {
    const isCompleted = refundsProgress[cat.key].completed;
    const isNotApplicable = !!refundsProgress[cat.key].notApplicable;

    if (isNotApplicable) {
      // Disabled Card moved to the bottom (Figma node 2308:50478 in 2308:50440)
      return (
        <div
          key={cat.key}
          className="bg-[#fafafa] border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs w-full transition-all"
          data-node-id={cat.nodeIds.disabled}
          data-name="CardApplicant"
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-2 w-full" data-name="Container">
            <div className="size-[24px] flex items-center justify-center shrink-0 text-[#737373]">
              <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#404040] truncate">
                {cat.openTitle}
              </p>
            </div>
          </div>

          {/* Disabled Upload receipts Button */}
          <div
            className="bg-[#e5e5e5] border border-[#d4d4d4] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] flex items-center justify-center gap-1 h-[32px] px-3 py-1.5 rounded-full w-full cursor-not-allowed select-none"
            data-name="Button"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#737373] tracking-[-0.024px]">
              {language === 'es' ? 'Subir recibos' : 'Upload receipts'}
            </span>
            <span className="material-symbols-outlined text-[18px] text-[#737373]">arrow_forward</span>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-[#e5e5e5]" />

          {/* "I didn't pay for this" Button - clicking restores/unmarks it */}
          <button
            type="button"
            onClick={() => markRefundCategoryDone(cat.key, false)}
            className="w-full flex items-center justify-center h-[32px] py-1.5 rounded-full cursor-pointer hover:bg-neutral-100 transition-colors"
            data-name="Button"
            title={language === 'es' ? 'Clic para reactivar categoría' : 'Click to re-enable category'}
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#737373] tracking-[-0.024px]">
              {language === 'es' ? 'No pagué por esto' : "I didn’t pay for this"}
            </span>
          </button>
        </div>
      );
    }

    if (isCompleted) {
      // Completed Green Card (Figma node 2308:50498)
      return (
        <div
          key={cat.key}
          onClick={() => setCurrentTab(cat.targetTab)}
          className="bg-[#eefff1] border border-[#068f2a] rounded-[8px] p-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all w-full"
          data-node-id={cat.nodeIds.completed}
          data-name="CardApplicant"
        >
          <div className="flex items-center gap-2 flex-1 min-w-0" data-name="Container">
            <div className="relative shrink-0 size-[24px] rounded-full bg-[#068f2a] flex items-center justify-center text-white shrink-0">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#404040] truncate">
              {cat.completedTitle}
            </p>
          </div>
          <div className="bg-[#d7ffe2] px-2 py-1 rounded-[24px] shrink-0 flex items-center justify-center" data-name="Badge">
            <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#068f2a] tracking-[-0.048px]">
              {language === 'es' ? 'Completado' : 'Completed'}
            </span>
          </div>
        </div>
      );
    }

    // Open Active Card (Figma node 2308:50446)
    return (
      <div
        key={cat.key}
        className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs w-full transition-all"
        data-node-id={cat.nodeIds.open}
        data-name="CardApplicant"
      >
        <div className="flex items-center gap-2 w-full" data-name="Container">
          <div className="size-[24px] flex items-center justify-center shrink-0 text-[#0038d0]">
            <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#404040] truncate">
              {cat.openTitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCurrentTab(cat.targetTab)}
          className="w-full h-[32px] px-3 bg-[#d3efff] hover:bg-[#b0deff] active:scale-98 text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[12px] flex items-center justify-center gap-1 transition-all cursor-pointer shadow-2xs"
          data-name="Button"
        >
          <span>{language === 'es' ? 'Subir recibos' : 'Upload receipts'}</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <div className="w-full border-t border-[#f0f0f0]" />

        <button
          type="button"
          onClick={() => markRefundCategoryDone(cat.key, true)}
          className="w-full text-center font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#0038d0] hover:text-[#002b9e] cursor-pointer py-1"
          data-name="Button"
        >
          {language === 'es' ? 'No pagué por esto' : "I didn’t pay for this"}
        </button>
      </div>
    );
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id={getNodeDataId()}
    >
      {/* Sticky Top Header */}
      <div
        className="sticky top-0 z-20 w-full bg-[#f5f5f5] px-6 py-3 border-b border-[#e5e5e5] flex items-center justify-between shrink-0"
        data-node-id="2308:50390"
      >
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center tracking-[-0.064px] flex-1 mx-2">
          {language === 'es' ? 'Reembolsos' : 'Refunds'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 py-6 w-full flex flex-col gap-6 max-w-[480px] mx-auto">
        {/* Dynamic Heading Title */}
        <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]">
          {anyDone
            ? (language === 'es'
                ? 'Solo sube los recibos que tengas.'
                : 'Only upload the receipts you have.')
            : (language === 'es'
                ? 'Agrega los recibos de cada categoría en la que hayas gastado dinero.'
                : 'Add receipts for each category you spent money on.')}
        </h2>

        {/* Categories List Container */}
        <div className="flex flex-col gap-4 w-full">
          {displayCategories.map(renderCategoryCard)}
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div
        className="sticky bottom-0 z-20 bg-[#fafafa] border-t border-[#e5e5e5] p-4 flex flex-col items-center w-full max-w-[480px] mx-auto shrink-0"
        data-node-id="2308:50437"
      >
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-98 text-white rounded-full font-['Inter',sans-serif] font-semibold text-[16px] shadow-md transition-all cursor-pointer flex items-center justify-center"
          data-node-id="2308:50438"
        >
          {language === 'es' ? 'Listo. Enviar solicitud' : "I’m Done. Submit Request"}
        </button>
      </div>
    </div>
  );
};
