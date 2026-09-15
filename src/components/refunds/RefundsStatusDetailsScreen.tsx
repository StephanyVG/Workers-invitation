import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsStatusDetailsScreen: React.FC = () => {
  const { language, setCurrentTab, refundsProgress, triggerPushBanner, setRefundStatus } = useApp();

  useEffect(() => {
    if (refundsProgress.status !== 'refunded') {
      // 1. Trigger push notification banner (Figma Node 2308:50071)
      const notifyTimer = setTimeout(() => {
        triggerPushBanner({
          title: language === 'es' ? 'Actualización de reembolso' : 'Refund Update',
          description: language === 'es' ? 'Tu empleador ha enviado un reembolso.' : 'Your employer has sent a refund.',
          time: language === 'es' ? 'Hace 2 horas' : '2 hours ago',
          targetTab: 'home',
        });

        // 2. Exactly 4 seconds later, home status updates to approved/refunded (Figma Node 2308:53215)
        const updateTimer = setTimeout(() => {
          setRefundStatus('refunded');
        }, 4000);

        return () => clearTimeout(updateTimer);
      }, 1500);

      return () => clearTimeout(notifyTimer);
    }
  }, [refundsProgress.status, language, triggerPushBanner, setRefundStatus]);

  const items = [
    {
      id: 'visa_appointment',
      title: language === 'es' ? 'Tarifa de cita consular' : 'Visa Appointmet',
      active: !refundsProgress.visa.notApplicable && refundsProgress.visa.appointmentFee,
    },
    {
      id: 'border_crossing',
      title: language === 'es' ? 'Tarifa de cruce fronterizo' : 'Border crossing fee',
      active: !refundsProgress.visa.notApplicable && refundsProgress.visa.borderFee,
    },
    {
      id: 'transport_consulate',
      title: language === 'es' ? 'Transporte al consulado' : 'Transportation to consulate',
      active: !refundsProgress.transport.notApplicable && refundsProgress.transport.consulateTransport,
    },
    {
      id: 'transport_workplace',
      title: language === 'es' ? 'Transporte al lugar de trabajo' : 'Transportation to workplace',
      active: !refundsProgress.transport.notApplicable && refundsProgress.transport.workplaceTransport,
    },
    {
      id: 'accommodation',
      title: language === 'es' ? 'Alojamiento' : 'Accommodation',
      active: !refundsProgress.hotel.notApplicable,
    },
    {
      id: 'meals',
      title: language === 'es' ? 'Comidas' : 'Meals',
      active: !refundsProgress.food.notApplicable,
    },
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49819"
    >
      <div className="w-full flex flex-col">
        {/* Top Gradient Header with Back Button */}
        <div
          className="w-full px-4 pt-6 pb-6 flex flex-col gap-4"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgb(216, 227, 255) 0%, rgba(216, 227, 255, 0) 100%)',
          }}
          data-node-id="2308:49821"
        >
          {/* Back Button */}
          <div data-node-id="2308:49822">
            <button
              type="button"
              onClick={() => setCurrentTab('home')}
              className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
              data-node-id="2308:49823"
              aria-label={language === 'es' ? 'Regresar' : 'Back'}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          </div>

          {/* Pending reimbursement header box */}
          <div className="flex gap-3 items-start w-full" data-node-id="2308:49824">
            <div
              className="size-[40px] rounded-[8px] bg-[#b0deff] flex items-center justify-center shrink-0 text-[#0038d0]"
              data-node-id="2308:49826"
            >
              <span className="material-symbols-outlined text-[24px]">sync</span>
            </div>

            <div className="flex flex-col gap-1.5 flex-1 min-w-0" data-node-id="2308:49828">
              <div>
                <span
                  className="bg-[#f5f5f5] text-[#262626] font-medium text-[12px] leading-[16px] px-2 py-1 rounded-[24px]"
                  data-node-id="2308:49830"
                >
                  {language === 'es' ? 'En revisión' : 'Under review'}
                </span>
              </div>

              <h1
                className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]"
                data-node-id="2308:49833"
              >
                {language === 'es' ? 'Reembolso pendiente' : 'Pending reimbursement'}
              </h1>

              <div
                className="flex items-center gap-1 text-[12px] text-[#737373]"
                data-node-id="2308:49834"
              >
                <span className="font-semibold text-[#404040]">
                  {language === 'es'
                    ? 'Fecha de envío de recibos:'
                    : 'Receipt submission date:'}
                </span>
                <span>04/June/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Content */}
        <div className="px-4 py-4 flex flex-col gap-3 w-full max-w-[480px] mx-auto" data-node-id="2308:49837">
          <h2
            className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717] tracking-[-0.064px]"
            data-node-id="2308:49838"
          >
            {language === 'es' ? 'Resumen:' : 'Summary:'}
          </h2>

          <div className="flex flex-col gap-3 w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-2 shadow-2xs w-full"
                data-name="CardApplicant"
              >
                <div className="flex items-center">
                  <span className="bg-[#f5f5f5] text-[#262626] font-medium text-[12px] leading-[16px] px-2 py-1 rounded-[24px]">
                    {language === 'es' ? 'En revisión' : 'Under review'}
                  </span>
                </div>
                <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#171717]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
