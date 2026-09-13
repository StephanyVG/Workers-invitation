import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface RelativeDetail {
  id: string;
  fullName: string;
  relationship: string;
  legalStatus: string;
}

export const Step8FamilyUSScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();
  const [selectedFamily, setSelectedFamily] = useState<string[]>([]);

  // Sub-card state for relatives (Figma Nodes 1:4787, 1746:21730 & 1746:21561)
  const [relativesList, setRelativesList] = useState<RelativeDetail[]>([
    { id: 'rel-1', fullName: '', relationship: '', legalStatus: '' }
  ]);

  const toggleOption = (id: string) => {
    if (id === 'none') {
      setSelectedFamily(['none']);
    } else {
      setSelectedFamily((prev) => {
        const filtered = prev.filter((item) => item !== 'none');
        if (filtered.includes(id)) {
          return filtered.filter((item) => item !== id);
        } else {
          return [...filtered, id];
        }
      });
    }
  };

  const handleAddAnotherRelative = () => {
    setRelativesList((prev) => [
      ...prev,
      { id: `rel-${Date.now()}`, fullName: '', relationship: '', legalStatus: '' }
    ]);
  };

  const handleRemoveRelative = (id: string) => {
    setRelativesList((prev) => {
      if (prev.length === 1) return prev; // keep at least 1
      return prev.filter((rel) => rel.id !== id);
    });
  };

  const handleRelativeChange = (id: string, field: keyof RelativeDetail, value: string) => {
    setRelativesList((prev) =>
      prev.map((rel) => (rel.id === id ? { ...rel, [field]: value } : rel))
    );
  };

  const handleComplete = () => {
    setCurrentTab('step9_part2_intro');
  };

  const handleBack = () => {
    setCurrentTab('step7_marital_status');
  };

  const options = [
    {
      id: 'none',
      labelEs: 'Ninguno',
      labelEn: 'None'
    },
    {
      id: 'child_sibling',
      labelEs: 'Tengo un hijo o hermano en EE. UU.',
      labelEn: 'I have a child or sibling in the U.S.'
    },
    {
      id: 'other_relatives',
      labelEs: 'Tengo otros parientes en EE. UU.',
      labelEn: 'I have other relatives in the U.S.'
    }
  ];

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="1:4743"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
            aria-label="Regresar"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>

          <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center flex-1 truncate px-2">
            {language === 'es' ? 'Información personal' : 'Personal Information'}
          </h1>

          <div className="size-[44px] shrink-0"></div>
        </div>

        {/* Progress Bar (100% Complete) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[100%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[20px] py-[24px] pb-[32px] space-y-6 text-left">
        {/* Screen Header Titles */}
        <div className="space-y-2">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[28px] leading-[36px] text-[#171717] tracking-[-0.1px]">
            {language === 'es' ? 'Familiares en los EE. UU.' : 'Family in the US'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
            {language === 'es'
              ? 'Selecciona las opciones que correspondan. Si no tienes familia en EE. UU., puedes seleccionar ninguno.'
              : "Select any that apply to you. If you don't have family in the U.S., you can just select none."}
          </p>
        </div>

        {/* Checkbox Options List - Matching Figma 1:4733 / 1:4743 */}
        <div className="space-y-3.5 pt-1 w-full">
          {options.map((opt) => {
            const isChecked = selectedFamily.includes(opt.id);
            const showSubCardUnderThisOption =
              isChecked && (opt.id === 'child_sibling' || opt.id === 'other_relatives');

            return (
              <React.Fragment key={opt.id}>
                {/* Option Container Item */}
                <div
                  onClick={() => toggleOption(opt.id)}
                  className={`w-full min-h-[64px] py-[14px] px-[16px] rounded-[12px] relative flex items-center justify-center transition-all cursor-pointer select-none active:scale-[0.99] ${
                    isChecked
                      ? 'bg-[#0045ff] text-white shadow-[-2px_0px_12px_8px_rgba(0,56,208,0.18)] scale-[1.01]'
                      : 'bg-white border border-[#e5e5e5] text-[#171717]'
                  }`}
                  data-node-id={isChecked ? '1:4733' : undefined}
                >
                  {/* Checkbox Icon on Left */}
                  <div className="absolute left-[16px] flex items-center justify-center">
                    <div
                      className={`size-[24px] rounded-[6px] flex items-center justify-center transition-all ${
                        isChecked
                          ? 'bg-white text-[#0045ff]'
                          : 'border-2 border-[#d4d4d4] bg-white'
                      }`}
                    >
                      {isChecked && (
                        <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                      )}
                    </div>
                  </div>

                  {/* Centered Option Label */}
                  <span
                    className={`font-['DM_Sans',sans-serif] font-medium text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-center tracking-[-0.08px] px-8 ${
                      isChecked ? 'text-white' : 'text-[#171717]'
                    }`}
                  >
                    {language === 'es' ? opt.labelEs : opt.labelEn}
                  </span>
                </div>

                {/* Sub-card Details placed DIRECTLY DEBAJO (below) this selected container inside a WHITE box (Figma Node 1:4787 & 1746:21561) */}
                {showSubCardUnderThisOption && (
                  <div
                    className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left shadow-2xs my-3 animate-fadeIn"
                    data-node-id="1:4787"
                  >
                    {/* Header Title inside White Box */}
                    <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
                      {language === 'es' ? 'Agrega la información a continuación' : 'Add the information bellow'}
                    </h3>

                    {/* Relative Form Fields Containers (Relative 1, Relative 2, etc. - Figma Node 1746:21561) */}
                    {relativesList.map((rel, idx) => (
                      <div
                        key={rel.id}
                        className="bg-[#fafafa] border border-[#e5e5e5] rounded-[8px] sm:rounded-[12px] p-4 flex flex-col gap-4 w-full text-left"
                        data-node-id="1746:21730"
                      >
                        {/* Header Bar with Relative 1, Relative 2 title and red trash delete button */}
                        <div className="flex items-center justify-between w-full">
                          <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                            {language === 'es' ? `Familiar ${idx + 1}` : `Relative ${idx + 1}`}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleRemoveRelative(rel.id)}
                            className="bg-[#c7290e] text-white size-[36px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-2xs active:scale-95 transition-all shrink-0"
                            title={language === 'es' ? 'Eliminar familiar' : 'Remove relative'}
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>

                        {/* Field 1: Relative Full Name */}
                        <div className="flex flex-col gap-1 w-full text-left">
                          <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                            {language === 'es' ? 'Nombre completo del familiar' : 'Relative Full Name'}
                          </label>
                          <input
                            type="text"
                            value={rel.fullName}
                            onChange={(e) => handleRelativeChange(rel.id, 'fullName', e.target.value)}
                            placeholder={
                              language === 'es'
                                ? 'Ingresa el nombre y apellido del familiar'
                                : 'Enter the relative first name and last name'
                            }
                            className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                          />
                        </div>

                        {/* Field 2: Relationship */}
                        <div className="flex flex-col gap-1 w-full text-left">
                          <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                            {language === 'es' ? 'Parentesco' : 'Relationship'}
                          </label>
                          <div className="relative w-full">
                            <select
                              value={rel.relationship}
                              onChange={(e) => handleRelativeChange(rel.id, 'relationship', e.target.value)}
                              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                            >
                              <option value="" disabled>
                                {language === 'es' ? 'Selecciona una opción' : 'Select an option'}
                              </option>
                              <option value="Child">{language === 'es' ? 'Hijo(a)' : 'Child'}</option>
                              <option value="Sibling">{language === 'es' ? 'Hermano(a)' : 'Sibling'}</option>
                              <option value="Parent">{language === 'es' ? 'Padre / Madre' : 'Parent'}</option>
                              <option value="Spouse">{language === 'es' ? 'Cónyuge' : 'Spouse'}</option>
                              <option value="Other">{language === 'es' ? 'Otro pariente' : 'Other relative'}</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                              expand_more
                            </span>
                          </div>
                        </div>

                        {/* Field 3: Choose legal status */}
                        <div className="flex flex-col gap-1 w-full text-left">
                          <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                            {language === 'es' ? 'Elegir estado legal' : 'Choose legal status'}
                          </label>
                          <div className="relative w-full">
                            <select
                              value={rel.legalStatus}
                              onChange={(e) => handleRelativeChange(rel.id, 'legalStatus', e.target.value)}
                              className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                            >
                              <option value="" disabled>
                                {language === 'es' ? 'Selecciona una opción' : 'Select an option'}
                              </option>
                              <option value="Nonimmigrant">{language === 'es' ? 'No inmigrante' : 'Nonimmigrant'}</option>
                              <option value="Citizen">{language === 'es' ? 'Ciudadano' : 'Citizen'}</option>
                              <option value="Permanent Resident">
                                {language === 'es' ? 'Residente permanente' : 'Permanent Resident'}
                              </option>
                              <option value="Other">{language === 'es' ? 'Otro' : 'Other'}</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                              expand_more
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Action Button: Add another relative inside bottom of white box */}
                    <button
                      type="button"
                      onClick={handleAddAnotherRelative}
                      className="bg-white border border-[#e5e5e5] rounded-[100px] h-[44px] px-4 w-full flex items-center justify-center gap-2 text-[#525252] font-['Inter',sans-serif] font-semibold text-[15px] leading-[22px] shadow-2xs active:scale-[0.98] transition-all cursor-pointer mt-1"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                      <span>{language === 'es' ? 'Agregar otro familiar' : 'Add another relative'}</span>
                    </button>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleComplete}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Continuar a la Parte 2' : 'Continue to Part 2'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleComplete}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};
