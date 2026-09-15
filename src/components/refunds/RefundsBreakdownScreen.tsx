import React from 'react';
import { useApp } from '../../context/AppContext';

export const RefundsBreakdownScreen: React.FC = () => {
  const { language, setCurrentTab } = useApp();

  const approvedItems = [
    {
      id: 'appr_visa_appointment',
      badge: language === 'es' ? 'Pago total' : 'Total payment',
      badgeClass: 'bg-[#d3efff] text-[#0038d0]',
      amount: '$23 USD',
      title: language === 'es' ? 'Cita de visa' : 'Visa Appointment',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso total'
          : 'A full refund was issued',
    },
    {
      id: 'appr_border_crossing',
      badge: language === 'es' ? 'Pago total' : 'Total payment',
      badgeClass: 'bg-[#d3efff] text-[#0038d0]',
      amount: '$23 USD',
      title: language === 'es' ? 'Tarifa de cruce fronterizo' : 'Border crossing fee',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso total'
          : 'A full refund was issued',
    },
    {
      id: 'appr_meals',
      badge: language === 'es' ? 'Pago total' : 'Total payment',
      badgeClass: 'bg-[#d3efff] text-[#0038d0]',
      amount: '$23 USD',
      title: language === 'es' ? 'Comidas' : 'Meals',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
    {
      id: 'appr_transport_consulate',
      badge: language === 'es' ? 'Pago parcial' : 'Partial payment',
      badgeClass: 'bg-[#fff4d3] text-[#813d0d]',
      amount: '$12 USD',
      title: language === 'es' ? 'Transporte al consulado' : 'Transportation to consulate',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
    {
      id: 'appr_transport_workplace_1',
      badge: language === 'es' ? 'Pago parcial' : 'Partial payment',
      badgeClass: 'bg-[#fff4d3] text-[#813d0d]',
      amount: '$12 USD',
      title: language === 'es' ? 'Transporte al lugar de trabajo' : 'Transportation to workplace',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
    {
      id: 'appr_transport_workplace_2',
      badge: language === 'es' ? 'Pago parcial' : 'Partial payment',
      badgeClass: 'bg-[#fff4d3] text-[#813d0d]',
      amount: '$12 USD',
      title: language === 'es' ? 'Transporte al lugar de trabajo' : 'Transportation to workplace',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
  ];

  const rejectedItems = [
    {
      id: 'rej_accommodation',
      badge: language === 'es' ? 'Rechazado' : 'Rejected',
      amount: '',
      title: language === 'es' ? 'Alojamiento' : 'Accommodation',
      reason:
        language === 'es'
          ? 'Una noche superó el límite permitido por la empresa. Se ajustó al precio autorizado.'
          : 'One night exceeded the limit allowed by the company. Adjusted to the authorized price.',
    },
    {
      id: 'rej_meals_1',
      badge: language === 'es' ? 'Rechazado' : 'Rejected',
      amount: '$23 USD',
      title: language === 'es' ? 'Comidas' : 'Meals',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
    {
      id: 'rej_meals_2',
      badge: language === 'es' ? 'Rechazado' : 'Rejected',
      amount: '$23 USD',
      title: language === 'es' ? 'Comidas' : 'Meals',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
    {
      id: 'rej_meals_3',
      badge: language === 'es' ? 'Rechazado' : 'Rejected',
      amount: '$23 USD',
      title: language === 'es' ? 'Comidas' : 'Meals',
      reason:
        language === 'es'
          ? 'Se emitió un reembolso parcial'
          : 'A partial refund was issued',
    },
  ];

  const handleConfirmReceived = () => {
    setCurrentTab('refunds_completed_success');
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] select-none"
      data-node-id="2308:49885"
    >
      <div className="w-full flex flex-col pb-6">
        {/* Top Gradient Header with Back Button */}
        <div
          className="w-full px-4 pt-6 pb-6 flex flex-col gap-4"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgb(216, 227, 255) 0%, rgba(216, 227, 255, 0) 100%)',
          }}
          data-node-id="2308:49887"
        >
          {/* Back Button */}
          <div data-node-id="2308:49888">
            <button
              type="button"
              onClick={() => setCurrentTab('home')}
              className="bg-[#fafafa] border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-95 transition-all cursor-pointer"
              data-node-id="2308:49889"
              aria-label={language === 'es' ? 'Regresar' : 'Back'}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          </div>

          {/* Refunded Header Card */}
          <div className="flex gap-3 items-start w-full" data-node-id="2308:49890">
            <div
              className="size-[40px] rounded-[4px] bg-[#b0deff] flex items-center justify-center shrink-0 text-[#0038d0]"
              data-node-id="2308:49892"
            >
              <span className="material-symbols-outlined text-[20px]">sync</span>
            </div>

            <div className="flex flex-col gap-1.5 flex-1 min-w-0" data-node-id="2308:49894">
              <div>
                <span
                  className="bg-[#eefff1] text-[#068f2a] font-medium text-[12px] leading-[16px] px-2 py-1 rounded-[24px]"
                  data-node-id="2308:49896"
                >
                  {language === 'es' ? 'Reembolsado' : 'Refunded'}
                </span>
              </div>

              <div className="flex flex-col gap-0.5" data-node-id="2308:49898">
                <p className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
                  {language === 'es' ? 'Monto total reembolsado:' : 'Total amount refunded:'}
                </p>
                <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0]">
                  $317.00 USD
                </p>
              </div>

              <div
                className="flex items-center gap-1 text-[12px] text-[#737373]"
                data-node-id="2308:49901"
              >
                <span className="font-semibold text-[#404040]">
                  {language === 'es' ? 'Fecha de reembolso:' : 'Refund date:'}
                </span>
                <span>04/June/2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-3 flex flex-col gap-5 w-full max-w-[480px] mx-auto" data-node-id="2308:49904">
          {/* Subtitle message */}
          <p
            className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#262626] tracking-[-0.032px]"
            data-node-id="2308:49906"
          >
            {language === 'es'
              ? 'Tu empleador te reembolsó estos recibos. Es posible que recibas más dinero después de terminar la mitad de tu contrato.'
              : 'Your employer paid you back for these receipts. You may get more money back after you finish half your contract.'}
          </p>

          <div className="border-t border-[#e5e5e5] w-full" data-node-id="2308:49907" />

          {/* Approved Section */}
          <div className="flex flex-col gap-3 w-full">
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717] tracking-[-0.064px]"
              data-node-id="2308:49908"
            >
              {language === 'es' ? 'Aprobado' : 'Approved'}
            </h2>

            <div className="flex flex-col gap-3 w-full">
              {approvedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-3 shadow-2xs w-full"
                  data-name="CardApplicant"
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span
                      className={`font-medium text-[12px] leading-[16px] px-2 py-1 rounded-[24px] ${item.badgeClass}`}
                    >
                      {item.badge}
                    </span>
                    <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0]">
                      {item.amount}
                    </span>
                  </div>

                  <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#171717]">
                    {item.title}
                  </p>

                  <div className="border-t border-[#f0f0f0] w-full" />

                  <p className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#404040]">
                    <span className="font-semibold text-[#404040]">
                      {language === 'es' ? 'Motivo: ' : 'Reason: '}
                    </span>
                    <span className="text-[#595959]">{item.reason}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Rejected Section */}
          <div className="flex flex-col gap-3 w-full pt-2">
            <h2
              className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717] tracking-[-0.064px]"
              data-node-id="2308:49969"
            >
              {language === 'es' ? 'Rechazado' : 'Rejected'}
            </h2>

            <div className="flex flex-col gap-3 w-full">
              {rejectedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-3 shadow-2xs w-full"
                  data-name="CardApplicant"
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className="bg-[#ffe5e0] text-[#c7290e] font-medium text-[12px] leading-[16px] px-2 py-1 rounded-[20px]">
                      {item.badge}
                    </span>
                    {item.amount && (
                      <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0]">
                        {item.amount}
                      </span>
                    )}
                  </div>

                  <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#171717]">
                    {item.title}
                  </p>

                  <div className="border-t border-[#f0f0f0] w-full" />

                  <p className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#404040]">
                    <span className="font-semibold text-[#404040]">
                      {language === 'es' ? 'Motivo: ' : 'Reason: '}
                    </span>
                    <span className="text-[#595959]">{item.reason}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div
        className="sticky bottom-0 z-20 bg-[#fafafa] border-t border-[#e5e5e5] px-4 py-4 flex flex-col gap-3 items-center w-full max-w-[480px] mx-auto shrink-0 shadow-lg"
        data-node-id="2308:50009"
      >
        <p
          className="font-['Inter',sans-serif] font-bold text-[14px] leading-[18px] text-[#262626] text-center tracking-[-0.056px] w-full"
          data-node-id="2308:50012"
        >
          {language === 'es'
            ? 'Si tienes alguna duda, habla con tu empleador.'
            : 'If you have any questions, speak with your employer.'}
        </p>

        <button
          type="button"
          onClick={handleConfirmReceived}
          className="w-full min-h-[44px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer"
          data-node-id="2308:50013"
        >
          <span>{language === 'es' ? 'Reembolso recibido' : 'Refund Received'}</span>
        </button>
      </div>
    </div>
  );
};
