import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { FinalReviewModal } from './FinalReviewModal';

export const EditJob2RequiredScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    job2Data,
    updateJob2Data,
    setJob2Status,
    dontShowFinalReviewAgain,
    setShowEmployerChangesSuccessToast,
    addToast,
  } = useApp();

  const [formData, setFormData] = useState({
    employerName: job2Data.employerName || 'Employment Name',
    startMonthYear: job2Data.startDate || 'January, 2023',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClick = () => {
    if (dontShowFinalReviewAgain) {
      commitSave();
    } else {
      setShowModal(true);
    }
  };

  const commitSave = () => {
    updateJob2Data({
      employerName: formData.employerName,
      startDate: formData.startMonthYear,
    });
    setJob2Status('resolved');
    setShowEmployerChangesSuccessToast(true);
    setShowModal(false);
    addToast(
      language === 'es' ? 'Información completada' : 'Information completed',
      language === 'es'
        ? 'Se ha completado la información requerida de este empleo.'
        : 'Required information has been completed successfully.',
      'success'
    );
    setCurrentTab('visa_employer_changes_review');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] min-h-screen overflow-y-auto custom-scrollbar animate-fade-in text-left font-['Inter',sans-serif] pb-12"
      data-node-id="17:32124"
    >
      {/* Top Bar / Header */}
      <div className="bg-[#f5f5f5] px-4 py-3 flex items-center justify-between w-full relative shrink-0">
        <button
          type="button"
          onClick={() => setCurrentTab('visa_employer_changes_review')}
          className="size-[44px] rounded-[200px] bg-white border border-[#e5e5e5] flex items-center justify-center text-[#191c1b] shadow-2xs hover:bg-gray-50 active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 tracking-normal">
          {language === 'es' ? 'Información requerida' : 'Required information'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Form Container */}
      <div className="px-4 py-4 sm:px-6 max-w-[400px] mx-auto w-full flex flex-col gap-6">
        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#262626] tracking-[-0.08px]">
            {language === 'es' ? 'Completa estos detalles' : 'Complete these details'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#262626] tracking-[-0.032px]">
            {language === 'es'
              ? 'Necesitamos esta información para tu trámite. Por favor llena los campos a continuación para continuar.'
              : 'We need this information for your process. Please fill in all the blank spaces below to continue.'}
          </p>
        </div>

        {/* White Card: Job 2 */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-5 shadow-xs flex flex-col gap-4">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
            Job 2
          </h3>

          {/* Employer Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Nombre del empleador' : 'Employer Name'}
            </label>
            <input
              type="text"
              value={formData.employerName}
              onChange={(e) => handleChange('employerName', e.target.value)}
              className="h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors"
            />
          </div>

          {/* Start Month/Year */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Mes/Año de inicio' : 'Start Month/Year'}
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData.startMonthYear}
                onChange={(e) => handleChange('startMonthYear', e.target.value)}
                className="w-full h-[44px] px-3.5 pr-10 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors"
              />
              <span className="material-symbols-outlined text-[20px] text-[#667085] absolute right-3 pointer-events-none">
                calendar_today
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            type="button"
            onClick={handleSaveClick}
            className="w-full h-[48px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.99] text-[#f5f5f5] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] rounded-[100px] shadow-sm transition-all cursor-pointer flex items-center justify-center"
          >
            {language === 'es' ? 'Guardar cambios' : 'Save changes'}
          </button>

          <button
            type="button"
            onClick={() => setCurrentTab('visa_employer_changes_review')}
            className="w-full py-2 text-[#0038d0] hover:underline font-['Inter',sans-serif] font-semibold text-[14px] text-center cursor-pointer transition-colors"
          >
            {language === 'es' ? 'Volver' : 'Go back'}
          </button>
        </div>
      </div>

      {/* Confirmation Bottom Sheet */}
      <FinalReviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={commitSave}
      />
    </div>
  );
};
