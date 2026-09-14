import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const VisaApplicationConsentScreen: React.FC = () => {
  const { language, setCurrentTab, worker } = useApp();
  const [showSignModal, setShowSignModal] = useState(false);

  const handleClose = () => {
    setCurrentTab('visa_review_hub');
  };

  const handleReject = () => {
    setCurrentTab('visa_review_hub');
  };

  const handleOpenSign = () => {
    setShowSignModal(true);
  };

  const handleConfirmSign = () => {
    setShowSignModal(false);
    setCurrentTab('visa_review_success');
  };

  return (
    <div
      className="bg-white flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:35490"
    >
      {/* Top Header Row with Close 'X' button */}
      <div className="p-4 flex items-center justify-between shrink-0">
        <button
          onClick={handleClose}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="size-[44px]" />
      </div>

      {/* Main Consent Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col items-center gap-6 w-full text-center">
        {/* Zipmi Logo Circle */}
        <div className="size-[56px] rounded-full bg-[#0038d0] flex items-center justify-center text-white font-bold text-[28px] shadow-sm">
          Z
        </div>

        {/* Title */}
        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#0038d0] tracking-tight">
          {language === 'es' ? 'Solicitud de Visa' : 'Visa Application'}
        </h1>

        {/* Legal Disclaimers */}
        <div className="flex flex-col gap-4 text-left font-['Inter',sans-serif] text-[15px] leading-[23px] text-[#262626]">
          <p>
            {language === 'es'
              ? 'Mi DS-160 utiliza la información que he ingresado. La he revisado. No falta nada ni hay errores. Si doy respuestas falsas o incompletas, mi solicitud de visa podría ser rechazada, podría perder mi visa o enfrentar cargos penales.'
              : 'My DS-160 uses the information I entered. I checked it. Nothing is missing or wrong. If I give false or missing answers, my visa application could be denied, I could lose my visa, or face criminal charges.'}
          </p>

          <p>
            {language === 'es'
              ? 'Una visa no garantiza que pueda ingresar a los EE. UU. Mi oferta de trabajo depende de la aprobación de mi solicitud de visa.'
              : 'A visa does not guarantee I can enter the US. My job offer depends on the approval of my visa application.'}
          </p>

          <p>
            {language === 'es'
              ? 'Una vez que presione Enviar, no podré realizar cambios en mi solicitud de visa DS-160.'
              : 'Once I press Submit, I cannot make changes to my DS-160 visa application.'}
          </p>

          <p>
            {language === 'es'
              ? 'Al presionar Enviar, entiendo y acepto que estoy enviando mi propia DS-160 al Departamento de Estado de los EE. UU. Mi empleador o su agente pueden aparecer como el preparador. Zipmi no modificó mis respuestas.'
              : 'By pressing Submit, I understand and agree that I am sending my own DS-160 to the US Department of State. My employer or their agent may be listed as the preparer. Zipmi did not change my answers.'}
          </p>
        </div>
      </div>

      {/* Bottom Actions Row */}
      <div className="p-6 border-t border-[#f0f0f0] bg-white flex items-center gap-3 shrink-0">
        {/* Reject Button */}
        <button
          onClick={handleReject}
          className="flex-1 h-[48px] bg-white border border-[#e5e5e5] rounded-full font-semibold text-[16px] text-[#171717] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer shadow-2xs"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
          <span>{language === 'es' ? 'Rechazar' : 'Reject'}</span>
        </button>

        {/* Submit Button */}
        <button
          onClick={handleOpenSign}
          className="flex-1 h-[48px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-sm transition-all cursor-pointer flex items-center justify-center"
        >
          {language === 'es' ? 'Enviar' : 'Submit'}
        </button>
      </div>

      {/* Screen 16 (508:35509): Sign to confirm Bottom Sheet */}
      {showSignModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="flex-1 w-full" onClick={() => setShowSignModal(false)} />

          <div
            className="w-full bg-white rounded-t-[24px] p-6 pb-6 flex flex-col gap-4 shadow-2xl animate-slide-up text-left font-['Inter',sans-serif]"
            data-node-id="508:35509"
          >
            {/* Drag handle */}
            <div className="flex items-center justify-center py-1">
              <div className="w-[32px] h-[4px] bg-[#191c1b] rounded-full" />
            </div>

            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[22px] leading-[28px] text-[#171717]">
              {language === 'es' ? 'Firmar para confirmar' : 'Sign to confirm'}
            </h2>

            <p className="font-normal text-[14px] leading-[20px] text-[#525252]">
              {language === 'es'
                ? 'Hemos registrado tu nombre legal. Solo selecciona Firmar para continuar.'
                : 'We have recorded your legal name. Just select Sign to continue.'}
            </p>

            <div className="flex flex-col gap-1.5 my-1">
              <label className="font-medium text-[14px] text-[#171717]">
                {language === 'es' ? 'Nombre legal' : 'Legal Name'}
              </label>
              <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-[8px] h-[44px] px-3.5 flex items-center">
                <span className="font-normal text-[15px] text-[#171717]">
                  {worker.fullName || 'Guadalupe Ramírez'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleConfirmSign}
                className="w-full h-[48px] bg-[#0038d0] active:scale-[0.98] text-white rounded-full font-semibold text-[16px] shadow-sm transition-all cursor-pointer flex items-center justify-center"
              >
                {language === 'es' ? 'Firmar' : 'Sign'}
              </button>

              <button
                onClick={() => setShowSignModal(false)}
                className="w-full h-[48px] bg-white border border-[#e5e5e5] active:scale-[0.98] text-[#525252] rounded-full font-semibold text-[16px] transition-all cursor-pointer flex items-center justify-center shadow-2xs"
              >
                {language === 'es' ? 'Regresar' : 'Go back'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
