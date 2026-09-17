import React, { useEffect } from 'react';
import { useApp } from '../../../context/AppContext';

export const EmployerChangesReviewScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    job1Status,
    setJob1Status,
    job2Status,
    setJob2Status,
    job3Status,
    setJob3Status,
    job1Data,
    job2Data,
    showEmployerChangesSuccessToast,
    setShowEmployerChangesSuccessToast,
  } = useApp();

  const isJob1Resolved = job1Status !== 'pending';
  const isJob2Resolved = job2Status !== 'pending';
  const isJob3Resolved = job3Status !== 'pending';

  const allResolved = isJob1Resolved && isJob2Resolved && isJob3Resolved;

  // When all changes are resolved, transition to final confirmation
  useEffect(() => {
    if (allResolved) {
      const timer = setTimeout(() => {
        setCurrentTab('visa_employer_changes_confirmation');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [allResolved, setCurrentTab]);

  const handleApproveJob1 = () => {
    setJob1Status('approved');
    setShowEmployerChangesSuccessToast(true);
  };

  const handleRejectJob1 = () => {
    setJob1Status('rejected');
    setShowEmployerChangesSuccessToast(true);
  };

  const handleApproveJob2 = () => {
    setJob2Status('approved');
    setShowEmployerChangesSuccessToast(true);
  };

  const handleRejectJob2 = () => {
    setJob2Status('rejected');
    setShowEmployerChangesSuccessToast(true);
  };

  const handleAcceptJob3 = () => {
    setJob3Status('accepted');
    setCurrentTab('visa_employer_changes_confirmation');
  };

  const handleRejectJob3 = () => {
    setJob3Status('rejected');
    setCurrentTab('visa_employer_changes_confirmation');
  };

  // Determine dynamic heading based on Figma (17:32372 uses "Confirm each change...")
  const isOnlyJob3Left = isJob1Resolved && isJob2Resolved && !isJob3Resolved;

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] min-h-screen overflow-y-auto custom-scrollbar animate-fade-in text-left font-['Inter',sans-serif] relative pb-12"
      data-node-id="17:32148"
    >
      {/* Top Bar / Header matching Figma node 17:32150 */}
      <div className="bg-[#f5f5f5] px-4 py-3 flex items-center justify-between w-full relative shrink-0">
        <button
          type="button"
          onClick={() => setCurrentTab('home')}
          className="size-[44px] rounded-[200px] bg-white border border-[#e5e5e5] flex items-center justify-center text-[#191c1b] shadow-2xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label="Volver"
          data-node-id="I17:32150;3529:1306"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 tracking-normal">
          {language === 'es' ? 'Revisa los cambios' : 'Check the Changes'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Floating Success Toast (Figma node 17:32268 / 17:32351) */}
      {showEmployerChangesSuccessToast && (
        <div className="px-4 w-full flex justify-center mt-1 mb-2 animate-slide-down">
          <div
            className="w-full max-w-[360px] bg-[#d7ffe2] border border-[#068f2a] rounded-[12px] px-4 py-3 flex items-center justify-between shadow-[0px_3px_3px_rgba(0,0,0,0.12),0px_6px_8px_rgba(0,0,0,0.08)]"
            data-node-id="17:32268"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#068f2a] text-[20px] shrink-0">
                check_circle
              </span>
              <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#0b5c22] tracking-[-0.056px]">
                {language === 'es'
                  ? 'Tu información ha sido enviada'
                  : 'Your information has been sent'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowEmployerChangesSuccessToast(false)}
              className="text-[#0b5c22] hover:opacity-75 p-0.5 cursor-pointer flex items-center"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Title + Question Section (Figma node 17:32151) */}
      <div className="px-4 py-4 sm:px-6 max-w-[400px] mx-auto w-full flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#262626] tracking-[-0.08px]">
            {isOnlyJob3Left
              ? language === 'es'
                ? 'Confirma cada cambio que hizo el empleador.'
                : 'Confirm each change the employer made.'
              : language === 'es'
              ? 'Revisa cada cambio que hizo el empleador.'
              : 'Review each change the employer made.'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#262626] tracking-[-0.032px]">
            {language === 'es'
              ? 'Aprueba o modifica la información a continuación.'
              : 'Approve or change the information below.'}
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#e5e5e5]" data-node-id="17:32157" />

        {/* Change Counter */}
        <div className="flex items-center" data-node-id="17:32158">
          <p className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#262626] tracking-[-0.08px]">
            {language === 'es' ? 'Cambio 6 de 6' : 'Change 6 of 6'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CARD 1: Job 1 - Information Updated (Figma 17:32186)                       */}
        {/* ========================================================================= */}
        {!isJob1Resolved && (
          <div
            className="bg-[#e7f6ff] border border-[#2874ff] rounded-[16px] p-4 flex flex-col gap-6 shadow-xs"
            data-node-id="17:32186"
          >
            <div className="flex flex-col gap-4">
              {/* Status Header */}
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0038d0] tracking-[-0.072px]">
                {language === 'es' ? 'Información actualizada' : 'Information Updated'}
              </h3>

              {/* Sub-header: Job details */}
              <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                {language === 'es' ? 'Detalles del empleo' : 'Job details'}
              </h4>

              {/* Internal Divider */}
              <div className="w-full h-px bg-[#2874ff]/20" />

              {/* Job 1 Title */}
              <h5 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                Job 1
              </h5>

              {/* Key/Value Information List */}
              <div className="flex flex-col gap-2 text-[14px] leading-[18px]">
                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Nombre del empleador:' : 'Employer Name:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.employerName || 'Employment Name'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Tipo de trabajo realizado:' : 'Type of work performed:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.jobTitle || 'Job title'}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Descripción del trabajo:' : 'Description of the work:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.description || 'Description of he work'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Mes/Año de inicio:' : 'Start Month/Year:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.startDate || 'January, 2023'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Mes/Año de fin:' : 'End Month/Year:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.endDate || 'January, 2024'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Ciudad:' : 'City:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.city || 'Mexico'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Estado:' : 'State:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.state || 'Tijuana'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Dirección:' : 'Adress:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.streetAddress1 || 'I don’t remember'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Teléfono del trabajo:' : 'Work phone number:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job1Data.telephone || '+52 33456789'}
                  </span>
                </div>
              </div>

              {/* Inner Gray Container: Old information (Figma 1959:35066) */}
              <div
                className="bg-[#e5e5e5] border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-3 mt-2"
                data-node-id="1959:35066"
              >
                <h5 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                  {language === 'es' ? 'Información anterior' : 'Old information'}
                </h5>

                <div className="flex items-center justify-between text-[14px] leading-[18px] tracking-[-0.056px]">
                  <span className="font-['Inter',sans-serif] font-medium text-[#171717]">
                    {language === 'es' ? 'Fecha de llegada:' : 'Date Arrived:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040]">
                    24/12/1960
                  </span>
                </div>

                <div className="flex items-center justify-between text-[14px] leading-[18px] tracking-[-0.056px]">
                  <span className="font-['Inter',sans-serif] font-medium text-[#171717]">
                    {language === 'es' ? 'Duración de la estancia:' : 'Length of stay:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040]">
                    3 weeks
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Job 1 */}
            <div className="flex flex-col gap-3 pt-2" data-node-id="1959:35076">
              <button
                type="button"
                onClick={() => setCurrentTab('visa_employer_change_edit_job1')}
                className="w-full h-[36px] bg-white border border-[#e5e5e5] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#525252] hover:bg-gray-50 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                data-node-id="1959:35077"
              >
                {language === 'es' ? 'La información es incorrecta' : 'The information is wrong'}
              </button>

              <div className="w-full h-px bg-[#2874ff]/20 my-1" />

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleApproveJob1}
                  className="w-full h-[36px] bg-[#0038d0] hover:bg-[#0030b3] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#f5f5f5] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                  data-node-id="1959:35080"
                >
                  {language === 'es' ? 'Apruebo los cambios' : 'I Approve the changes'}
                </button>

                <button
                  type="button"
                  onClick={handleRejectJob1}
                  className="w-full h-[36px] bg-[#c7290e] hover:bg-[#b0240c] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#fafafa] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                  data-node-id="1959:35081"
                >
                  {language === 'es' ? 'Rechazar' : 'Reject'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CARD 2: Job 2 - Information added (Figma 17:32160 / 1959:35096)           */}
        {/* ========================================================================= */}
        {!isJob2Resolved && (
          <div
            className="bg-[#ffe5a6] border border-[#a0480c] rounded-[16px] p-4 flex flex-col gap-6 shadow-[0px_2px_32px_5px_rgba(255,151,12,0.12)]"
            data-node-id="17:32160"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#461c04] tracking-[-0.072px]">
                {language === 'es' ? 'Información agregada' : 'Information added'}
              </h3>

              <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                {language === 'es' ? 'Detalles del empleo' : 'Job details'}
              </h4>

              <div className="w-full h-px bg-[#a0480c]/20" />

              <h5 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                Job 2
              </h5>

              <div className="flex flex-col gap-2 text-[14px] leading-[18px]">
                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Nombre del empleador:' : 'Employer Name:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job2Data.employerName || 'Employment Name'}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Tipo de trabajo realizado:' : 'Type of work performed:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job2Data.jobTitle || 'Job title'}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Descripción del trabajo:' : 'Description of the work:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    {job2Data.description || 'Description of he work'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Job 2 */}
            <div className="flex flex-col gap-3 pt-2" data-node-id="1959:35040">
              <button
                type="button"
                onClick={() => setCurrentTab('visa_employer_change_edit_job2')}
                className="w-full h-[36px] bg-white border border-[#e5e5e5] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#525252] hover:bg-gray-50 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                data-node-id="1959:35041"
              >
                {language === 'es' ? 'La información es incorrecta' : 'The information is wrong'}
              </button>

              <div className="w-full h-px bg-[#a0480c]/20 my-1" />

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleApproveJob2}
                  className="w-full h-[36px] bg-[#0038d0] hover:bg-[#0030b3] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#f5f5f5] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                  data-node-id="1959:35044"
                >
                  {language === 'es' ? 'Apruebo los cambios' : 'I Approve the changes'}
                </button>

                <button
                  type="button"
                  onClick={handleRejectJob2}
                  className="w-full h-[36px] bg-[#c7290e] hover:bg-[#b0240c] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#fafafa] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                  data-node-id="1959:35045"
                >
                  {language === 'es' ? 'Rechazar' : 'Reject'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CARD 3: Job 3 - Information removed (Figma 1959:35140 / 17:32327)         */}
        {/* ========================================================================= */}
        {!isJob3Resolved && (
          <div
            className="bg-white border border-[#525252] rounded-[16px] p-4 flex flex-col gap-6 shadow-xs"
            data-node-id="1959:35140"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#262626] tracking-[-0.072px]">
                {language === 'es' ? 'Información eliminada' : 'Information removed'}
              </h3>

              <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                {language === 'es' ? 'Detalles del empleo' : 'Job details'}
              </h4>

              <div className="w-full h-px bg-[#e5e5e5]" />

              <h5 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                Job 3
              </h5>

              <div className="flex flex-col gap-2 text-[14px] leading-[18px]">
                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Nombre del empleador:' : 'Employer Name:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    Employment Name
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[#171717] tracking-[-0.028px] whitespace-nowrap">
                    {language === 'es' ? 'Mes/Año de fin:' : 'End Month/Year:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[#404040] tracking-[-0.056px]">
                    January, 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Job 3 */}
            <div className="flex flex-col gap-3 pt-2" data-node-id="1959:35161">
              <button
                type="button"
                onClick={handleAcceptJob3}
                className="w-full h-[36px] bg-[#0038d0] hover:bg-[#0030b3] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#f5f5f5] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
              >
                {language === 'es' ? 'Aceptar cambio' : 'Accept change'}
              </button>

              <button
                type="button"
                onClick={handleRejectJob3}
                className="w-full h-[36px] bg-[#c7290e] hover:bg-[#b0240c] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#fafafa] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center tracking-[-0.028px]"
                data-node-id="1959:35162"
              >
                {language === 'es' ? 'Rechazar' : 'Reject'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
