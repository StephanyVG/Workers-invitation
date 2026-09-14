import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const PushNotificationBanner: React.FC = () => {
  const { showPushBanner, setShowPushBanner, setCurrentTab, language, worker, pushBannerData } = useApp();

  useEffect(() => {
    if (showPushBanner) {
      // Auto-hide push notification after at least 8 seconds (8000ms)
      const timer = setTimeout(() => {
        setShowPushBanner(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showPushBanner, setShowPushBanner]);

  if (!showPushBanner) return null;

  const isDs160Submitted = worker.status === 'solicitud_visa' || pushBannerData?.targetTab === 'documents';
  const isOfferSent = worker.status === 'oferta_enviada';

  const title = pushBannerData?.title || (
    isDs160Submitted
      ? (language === 'es' ? 'Tu DS-160 ha sido enviado' : 'Your DS-160 has been submitted')
      : isOfferSent
      ? (language === 'es' ? 'Sunnydale Orchards te envió una oferta' : 'Sunnydale Orchards sent you an offer')
      : (language === 'es' ? 'Sunnydale Orchards quiere tener una entrevista,' : 'Sunnydale Orchards wants to have an interview,')
  );

  const description = pushBannerData?.description || (
    isDs160Submitted
      ? (language === 'es' ? 'Puedes ver los detalles de tu DS-160 en “Solicitar Visa de Trabajo de EE. UU.”' : 'You can view the details of your DS-160 in the “Apply for US Work Visa”')
      : isOfferSent
      ? (language === 'es' ? 'Por favor revisa el contrato e infórmale al empleador si deseas aceptar el trabajo.' : 'Please review the contract and let the employer know if you wish to accept the job.')
      : (language === 'es' ? 'Elige un horario para reunirte con ellos' : 'Choose a time to meet with them')
  );

  const time = pushBannerData?.time || (
    language === 'es' ? 'Hace 2 h' : '2 hrs ago'
  );

  const handleBannerClick = () => {
    setShowPushBanner(false);
    if (pushBannerData?.targetTab) {
      setCurrentTab(pushBannerData.targetTab);
    } else if (isDs160Submitted) {
      setCurrentTab('documents');
    } else if (isOfferSent) {
      setCurrentTab('job_offer_detail');
    } else {
      setCurrentTab('available_times');
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPushBanner(false);
  };

  return (
    <div
      onClick={handleBannerClick}
      className="absolute top-[60px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[345px] animate-push-move-in pointer-events-auto bg-[#e7f6ff] border border-[#b0deff] rounded-[16px] p-[16px] flex gap-[12px] items-start shadow-xl cursor-pointer active:scale-[0.99] transition-transform"
      data-node-id={isDs160Submitted ? '1241:16248' : isOfferSent ? '1082:17134' : '1004:4817'}
    >
      {/* Left Zipmi Icon */}
      <div className="size-[28px] shrink-0 relative flex items-center justify-center">
        <img
          src="/assets/push_notification/zipmi_icon.svg"
          alt="Zipmi Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Column */}
      <div className="flex-1 flex flex-col gap-[4px] text-left">
        <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-[#222222] tracking-[-0.028px]">
          {title}
        </p>
        <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#262626] tracking-[-0.056px]">
          {description}
        </p>
        <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#525252] tracking-[-0.056px]">
          {time}
        </p>
      </div>

      {/* Dismiss Trash Button */}
      <button
        onClick={handleDismiss}
        className="bg-white border border-[#e5e5e5] rounded-full p-[6px] size-[32px] flex items-center justify-center shadow-xs hover:bg-slate-50 active:scale-90 transition-all shrink-0 cursor-pointer"
        aria-label="Dismiss notification"
        data-node-id="3958:1411"
      >
        <img
          src="/assets/push_notification/trash_icon.svg"
          alt="Delete"
          className="size-[16px] object-contain opacity-70 hover:opacity-100"
        />
      </button>
    </div>
  );
};
