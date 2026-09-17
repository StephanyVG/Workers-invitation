import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { FinalReviewModal } from './FinalReviewModal';

export const EditJob1ChangesScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    job1Data,
    updateJob1Data,
    setJob1Status,
    dontShowFinalReviewAgain,
    setShowEmployerChangesSuccessToast,
    addToast,
  } = useApp();

  const [formData, setFormData] = useState({
    employerName: job1Data.employerName || 'Employment Name',
    jobTitle: job1Data.jobTitle || 'Job title',
    description: job1Data.description || 'Description of he work',
    startMonthYear: job1Data.startDate || 'January, 2023',
    endMonthYear: job1Data.endDate || 'January, 2024',
    city: job1Data.city || 'Mexico',
    state: job1Data.state || 'Mexico',
    stateDontRemember: false,
    address: job1Data.streetAddress1 || 'Los Pinos',
    addressDontRemember: false,
    workPhone: job1Data.telephone || '(000) 000-0000',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (field: string, value: any) => {
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
    updateJob1Data({
      employerName: formData.employerName,
      jobTitle: formData.jobTitle,
      description: formData.description,
      startDate: formData.startMonthYear,
      endDate: formData.endMonthYear,
      city: formData.city,
      state: formData.stateDontRemember ? "I don't remember" : formData.state,
      streetAddress1: formData.addressDontRemember ? "I don't remember" : formData.address,
      telephone: formData.workPhone,
    });
    setJob1Status('resolved');
    setShowEmployerChangesSuccessToast(true);
    setShowModal(false);
    addToast(
      language === 'es' ? 'Información enviada' : 'Information sent',
      language === 'es'
        ? 'Tus cambios han sido actualizados con éxito.'
        : 'Your changes have been updated successfully.',
      'success'
    );
    setCurrentTab('visa_employer_changes_review');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] min-h-screen overflow-y-auto custom-scrollbar animate-fade-in text-left font-['Inter',sans-serif] pb-12"
      data-node-id="17:32071"
    >
      {/* Header */}
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
          {language === 'es' ? 'Editar los cambios' : 'Edit the Changes'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Container */}
      <div className="px-4 py-4 sm:px-6 max-w-[400px] mx-auto w-full flex flex-col gap-6">
        {/* Intro */}
        <div className="flex flex-col gap-3">
          <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#262626] tracking-[-0.08px]">
            {language === 'es' ? 'Ayúdanos a corregirlo' : 'Help us fix it'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#262626] tracking-[-0.032px]">
            {language === 'es'
              ? 'Completamos algunos detalles por ti. Si algo está mal, solo toca el campo para cambiarlo. Si es correcto, puedes dejarlo así.'
              : "We filled in some details for you. If anything is wrong, just tap the box to change it. If it's correct, you can leave it"}
          </p>
        </div>

        {/* Gray Container: Old information */}
        <div className="bg-[#e5e5e5] border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-3">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
            {language === 'es' ? 'Información anterior' : 'Old information'}
          </h3>

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

        {/* White Card: Job 1 Form */}
        <div className="bg-white border border-[#e5e5e5] rounded-[24px] p-5 shadow-xs flex flex-col gap-4">
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
            Job 1
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

          {/* Type of work performed */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Tipo de trabajo realizado' : 'Type of work performed'}
            </label>
            <input
              type="text"
              value={formData.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              className="h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors"
            />
          </div>

          {/* Describe the work you did */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Describe el trabajo que realizaste' : 'Describe the work you did'}
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="p-3 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors resize-none"
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

          {/* End Month/Year */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Mes/Año de fin' : 'End Month/Year'}
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData.endMonthYear}
                onChange={(e) => handleChange('endMonthYear', e.target.value)}
                className="w-full h-[44px] px-3.5 pr-10 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors"
              />
              <span className="material-symbols-outlined text-[20px] text-[#667085] absolute right-3 pointer-events-none">
                calendar_today
              </span>
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Ciudad' : 'City'}
            </label>
            <select
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors cursor-pointer"
            >
              <option value="Mexico">Mexico</option>
              <option value="Tijuana">Tijuana</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Monterrey">Monterrey</option>
            </select>
          </div>

          {/* State */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Estado' : 'State'}
            </label>
            <select
              disabled={formData.stateDontRemember}
              value={formData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className="h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors cursor-pointer disabled:bg-gray-100 disabled:text-gray-400"
            >
              <option value="Mexico">Mexico</option>
              <option value="Baja California">Baja California</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Nuevo Leon">Nuevo Leon</option>
            </select>
            <label className="flex items-center gap-2 mt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.stateDontRemember}
                onChange={(e) => handleChange('stateDontRemember', e.target.checked)}
                className="size-4 rounded border-[#d0d5dd] text-[#0038d0] focus:ring-[#0038d0]"
              />
              <span className="text-[13px] text-[#525252]">
                {language === 'es' ? 'No recuerdo' : "I don't remember"}
              </span>
            </label>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Dirección' : 'Address'}
            </label>
            <input
              type="text"
              disabled={formData.addressDontRemember}
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors disabled:bg-gray-100 disabled:text-gray-400"
            />
            <label className="flex items-center gap-2 mt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.addressDontRemember}
                onChange={(e) => handleChange('addressDontRemember', e.target.checked)}
                className="size-4 rounded border-[#d0d5dd] text-[#0038d0] focus:ring-[#0038d0]"
              />
              <span className="text-[13px] text-[#525252]">
                {language === 'es' ? 'No recuerdo' : "I don't remember"}
              </span>
            </label>
          </div>

          {/* Work phone number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#344054]">
              {language === 'es' ? 'Teléfono del trabajo' : 'Work phone number'}
            </label>
            <div className="flex items-center gap-2">
              <div className="h-[44px] px-3 rounded-[10px] border border-[#d0d5dd] bg-white flex items-center gap-1.5 text-[14px] text-[#101828] shrink-0">
                <span>🇲🇽</span>
                <span className="font-medium">+52</span>
                <span className="material-symbols-outlined text-[18px] text-[#667085]">arrow_drop_down</span>
              </div>
              <input
                type="tel"
                value={formData.workPhone}
                onChange={(e) => handleChange('workPhone', e.target.value)}
                placeholder="(000) 000-0000"
                className="flex-1 h-[44px] px-3.5 rounded-[10px] border border-[#d0d5dd] bg-white text-[15px] text-[#101828] focus:outline-none focus:border-[#0038d0] focus:ring-1 focus:ring-[#0038d0] transition-colors"
              />
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
