import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CongratulationsJobModal } from './CongratulationsJobModal';

export const JobOfferDetailScreen: React.FC = () => {
  const { worker, language, setCurrentTab, updateWorker, addToast } = useApp();
  const [showSignModal, setShowSignModal] = useState<boolean>(false);
  const [showCongratsModal, setShowCongratsModal] = useState<boolean>(false);
  const workerFullName = worker.fullName || 'Guadalupe Ramírez';

  const handleOpenSignModal = () => {
    setShowSignModal(true);
  };

  const handleCloseSignModal = () => {
    setShowSignModal(false);
  };

  const handleConfirmSignature = () => {
    setShowSignModal(false);
    setShowCongratsModal(true);
  };

  const handleFinalVisaSubmit = () => {
    updateWorker({
      appliedJobId: '1',
      hasSignedContract: true,
      status: 'oferta_firmada'
    });
    addToast(
      language === 'es' ? '¡Solicitud de visa iniciada!' : 'Visa Application Started!',
      language === 'es'
        ? 'Firmaste la oferta de trabajo. Revisa los detalles para enviar tu formulario de visa.'
        : 'You signed the job offer. Check the details to submit your visa form.',
      'success'
    );
    setShowCongratsModal(false);
    setCurrentTab('home');
  };

  const handleDeclineOffer = () => {
    addToast(
      language === 'es' ? 'Oferta Declinada' : 'Offer Declined',
      language === 'es'
        ? 'Puedes revisar otras vacantes disponibles en cualquier momento.'
        : 'You can check other available jobs at any time.',
      'info'
    );
    setCurrentTab('home');
  };

  return (
    <div
      className="bg-[#f5f5f5] overflow-hidden flex-1 w-full flex flex-col justify-between animate-fade-in relative h-full min-h-0 font-['Inter',sans-serif] text-left"
      data-node-id="1082:16842"
    >
      {/* Sticky Header Row (Node 1082:16843) */}
      <div
        className="sticky top-0 z-20 bg-[#f5f5f5] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="1082:16843"
      >
        {/* Circular Back Icon Button */}
        <button
          onClick={() => setCurrentTab('job_details')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
          data-node-id="I1082:16843;3529:1306"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        {/* Center Title */}
        <h1
          className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2"
          data-node-id="I1082:16843;3490:907"
        >
          {language === 'es' ? 'Oferta de trabajo' : 'Job Offer'}
        </h1>

        {/* Spacer for symmetry */}
        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Scrollable View Area - Document Preview (Node 1082:16844) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col items-stretch gap-4 w-full" data-node-id="1082:16844">
        {/* PDF Page 1 Container (Node 1082:16845) */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[16px] p-6 shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] w-full text-left text-[#171717] font-serif space-y-4 leading-relaxed relative"
          data-node-id="1082:16845"
          data-name="PDF Page 1"
        >
          {/* Company & Document Header */}
          <div className="text-center space-y-1 pb-3 border-b border-[#e5e5e5]">
            <h2 className="font-bold text-[18px] text-[#171717] italic">Sample Job Offer Letter</h2>
            <h3 className="font-bold text-[15px] text-[#262626]">Sunnydale Orchards Farm / Acme Company, Inc.</h3>
            <p className="text-[11px] text-[#525252] font-sans">123 Easy Street, Lafayette, LA 70504</p>
            <p className="text-[11px] text-[#525252] font-sans">(Tel) (000) 000-0000 | (Fax) (000) 000-0000</p>
          </div>

          {/* Letter Body Meta */}
          <div className="text-[13px] space-y-3 font-sans">
            <div className="flex justify-between items-center text-[12px] text-[#525252]">
              <p><strong>{language === 'es' ? 'Fecha:' : 'Date:'}</strong> 12/04/2025</p>
              <p><strong>{language === 'es' ? 'Ref:' : 'Ref:'}</strong> H2A-2025-089</p>
            </div>
            <p><strong>{language === 'es' ? 'Para:' : 'To:'}</strong> Office of International Affairs</p>

            <p className="text-[#262626] leading-relaxed">
              <span className="underline font-semibold">{workerFullName}</span>{' '}
              {language === 'es'
                ? 'ha sido seleccionado(a) formalmente para integrarse como trabajador(a) agrícola temporal en nuestra empresa para la temporada 2025.'
                : 'has been formally selected for employment as a temporary agricultural worker at our company for the 2025 season.'}
            </p>

            <div className="bg-[#f8f9fa] border border-[#e5e5e5] rounded-[8px] p-3 space-y-2 text-[12px]">
              <p>
                <strong>{language === 'es' ? 'Ubicación física del empleo:' : 'Physical job location:'}</strong> 123 Easy Street / Lafayette, LA 70504
              </p>
              <p>
                <strong>{language === 'es' ? 'Horas semanales:' : 'Hours per week:'}</strong> 40 {language === 'es' ? 'horas / semana' : 'hrs / week'}
              </p>
              <p>
                <strong>{language === 'es' ? 'Tarifa de pago:' : 'Pay Rate:'}</strong> $12.00 USD / {language === 'es' ? 'hora' : 'hour'}
              </p>
              <p>
                <strong>{language === 'es' ? 'Puesto:' : 'Job Title:'}</strong> Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores
              </p>
            </div>
          </div>

          {/* Page Number Badge Footer */}
          <div className="pt-2 border-t border-[#f0f0f0] flex justify-between items-center text-[11px] text-[#737373] font-sans">
            <span>Sunnydale Orchards Farm</span>
            <span>{language === 'es' ? 'Página 1 de 2' : 'Page 1 of 2'}</span>
          </div>
        </div>

        {/* PDF Page 2 Container (Node 1082:16847) */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[16px] p-6 shadow-[1px_1px_6px_2px_rgba(0,0,0,0.05)] w-full text-left text-[#171717] font-serif space-y-4 leading-relaxed relative"
          data-node-id="1082:16847"
          data-name="PDF Page 2"
        >
          {/* Header Bar Page 2 */}
          <div className="pb-2 border-b border-[#e5e5e5] flex justify-between items-center font-sans text-[12px]">
            <span className="font-bold text-[#262626]">Sunnydale Orchards Farm</span>
            <span className="text-[#737373]">{language === 'es' ? 'Anexo de Términos y Funciones' : 'Terms & Duties Addendum'}</span>
          </div>

          {/* Duties & Conditions */}
          <div className="text-[12px] space-y-3 font-sans">
            <p>
              <strong>{language === 'es' ? 'Funciones y responsabilidades:' : 'Job duties & responsibilities:'}</strong>
            </p>
            <p className="text-[#525252] text-[12px] leading-relaxed">
              {language === 'es'
                ? 'El trabajador asistirá en la inspección periódica de huertos, manejo integrado de plagas, conservación de especies polinizadoras, monitoreo de riego y preparación del terreno según los estándares H-2A.'
                : 'The worker will assist in periodic orchard inspection, integrated pest management, pollinator conservation, irrigation monitoring, and field preparation according to H-2A standards.'}
            </p>

            <div className="pt-2 space-y-1 text-[11px] text-[#525252]">
              <p><strong>{language === 'es' ? 'Supervisor responsable:' : 'Supervisor in charge:'}</strong> John Smith</p>
              <p><strong>{language === 'es' ? 'Teléfono de contacto:' : 'Contact phone:'}</strong> (000) 000-0000</p>
              <p><strong>{language === 'es' ? 'Correo electrónico:' : 'Email address:'}</strong> jsmith@yahoo.com</p>
              <p><strong>E-Verify #:</strong> 0000000 | <strong>EIN:</strong> 00-0000000</p>
            </div>
          </div>

          {/* Signatures & Closing Block */}
          <div className="pt-4 text-[12px] font-serif space-y-4 border-t border-[#e5e5e5]">
            <p className="italic text-[11px] text-[#525252] font-sans">
              {language === 'es'
                ? 'Si requiere información adicional sobre esta oferta laboral, por favor no dude en contactarnos directamente.'
                : 'Should you need further information regarding this job offer, please do not hesitate to contact us directly.'}
            </p>

            <div className="flex justify-between items-end pt-4">
              <div>
                <p className="font-bold text-[13px]">John Smith</p>
                <p className="text-[11px] text-[#525252] font-sans">President, Sunnydale Orchards Farm</p>
              </div>

              <div className="border-b border-[#171717] w-[140px] text-center pb-1">
                <span className="text-[10px] text-[#737373] font-sans">{language === 'es' ? 'Firma del Empleador' : 'Employer Signature'}</span>
              </div>
            </div>
          </div>

          {/* Page Number Badge Footer */}
          <div className="pt-2 border-t border-[#f0f0f0] flex justify-between items-center text-[11px] text-[#737373] font-sans">
            <span>Sunnydale Orchards Farm</span>
            <span>{language === 'es' ? 'Página 2 de 2' : 'Page 2 of 2'}</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Footer (Node 1082:16851) */}
      <div
        className="w-full bg-[#fafafa] border-t border-[#e5e5e5] p-4 flex flex-col gap-3 shrink-0 shadow-lg z-20"
        data-node-id="1082:16851"
      >
        {/* Primary Button: Accept Job Offer (Node 1082:16853) */}
        <button
          onClick={handleOpenSignModal}
          className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
          data-node-id="1082:16853"
        >
          {language === 'es' ? 'Aceptar oferta de trabajo' : 'Accept job offer'}
        </button>

        {/* Secondary Red Button: Decline Job (Node 1402:1118) */}
        <button
          onClick={handleDeclineOffer}
          className="w-full h-[44px] text-center font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#c7290e] hover:text-[#9e1c07] active:scale-95 transition-all duration-150 cursor-pointer flex items-center justify-center rounded-full"
          data-node-id="1402:1118"
        >
          {language === 'es' ? 'No quiero este trabajo' : "I don't want this job"}
        </button>
      </div>

      {/* Signature Bottom Sheet Modal Overlay (Node 1082:16854 / 1082:16872 / 1082:16895) */}
      {showSignModal && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-xs animate-fade-in">
          {/* Backdrop Click */}
          <div className="flex-1 w-full" onClick={handleCloseSignModal} />

          {/* Bottom Sheet Modal Container (Node 1082:16895) */}
          <div
            className="w-full bg-[#fafafa] border-t border-[#e5e5e5] rounded-t-[24px] p-4 pb-6 flex flex-col gap-4 shadow-2xl animate-slide-up text-left font-['Inter',sans-serif]"
            data-node-id="1082:16895"
          >
            {/* Drag Handle Container (Node 1082:16897) */}
            <div className="flex items-center justify-center py-1 shrink-0" data-node-id="1082:16897">
              <div className="w-[27px] h-[4px] bg-[#191c1b] rounded-[12px]" data-node-id="1082:16898" />
            </div>

            {/* Header Title & Subtitle (Node 1082:16900) */}
            <div className="flex flex-col gap-2" data-node-id="1082:16900">
              <h2
                className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[26px] text-[#171717] tracking-[-0.16px]"
                data-node-id="1082:16902"
              >
                {language === 'es' ? 'Firma tu oferta de trabajo' : 'Sign your job offer'}
              </h2>
              <p
                className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]"
                data-node-id="1082:16908"
              >
                {language === 'es'
                  ? 'Hemos registrado tu nombre legal. Solo selecciona Firmar para continuar con la oferta de trabajo.'
                  : 'We have recorded your legal name. Just select Sign to continue with the job offer.'}
              </p>
            </div>

            {/* Legal Name Form Field Container (Node 2857:30241) */}
            <div className="flex flex-col gap-1.5 my-1" data-node-id="2857:30241">
              <label
                className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-[2px]"
                data-node-id="I2857:30241;523:17952"
              >
                {language === 'es' ? 'Nombre legal' : 'Legal Name'}
              </label>
              <div
                className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-3 py-2.5 flex items-center shadow-2xs"
                data-node-id="I2857:30241;523:17953"
              >
                <span
                  className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]"
                  data-node-id="I2857:30241;523:17955"
                >
                  {workerFullName}
                </span>
              </div>
            </div>

            {/* Modal Action Buttons (Node 1082:16912) */}
            <div className="flex flex-col gap-3 pt-2" data-node-id="1082:16912">
              {/* Primary Action Button: Sign (Node 1082:16914) */}
              <button
                onClick={handleConfirmSignature}
                className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all duration-150 cursor-pointer flex items-center justify-center"
                data-node-id="1082:16914"
              >
                {language === 'es' ? 'Firmar' : 'Sign'}
              </button>

              {/* Secondary Outline Button: Go back (Node 1082:16913) */}
              <button
                onClick={handleCloseSignModal}
                className="w-full h-[54px] min-h-[44px] px-4 py-[10px] bg-white border border-[#e5e5e5] hover:bg-[#f5f5f5] active:scale-[0.98] text-[#525252] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-2xs transition-all duration-150 cursor-pointer flex items-center justify-center"
                data-node-id="1082:16913"
              >
                {language === 'es' ? 'Regresar' : 'Go back'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Congratulations Bottom Sheet Modal (Node 1082:16918) */}
      <CongratulationsJobModal
        isOpen={showCongratsModal}
        onClose={() => setShowCongratsModal(false)}
        onConfirm={handleFinalVisaSubmit}
      />
    </div>
  );
};
