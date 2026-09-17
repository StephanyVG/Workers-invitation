import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface VisitedCountry {
  id: number;
  country: string;
}

export const Step19SocialInfoScreen: React.FC = () => {
  const {
    setCurrentTab,
    language,
    addToast,
    finalQuestionsData,
    updateFinalQuestions,
    editingFinalQuestionFromReview,
    setEditingFinalQuestionFromReview,
  } = useApp();

  // 1. Military service state
  const [militaryServed, setMilitaryServed] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.militaryServed
  );
  const [militaryCountry, setMilitaryCountry] = useState<string>(
    finalQuestionsData.social.militaryCountry
  );
  const [militaryBranch, setMilitaryBranch] = useState<string>(
    finalQuestionsData.social.militaryBranch
  );
  const [militaryRank, setMilitaryRank] = useState<string>(
    finalQuestionsData.social.militaryRank
  );
  const [militarySpecialty, setMilitarySpecialty] = useState<string>(
    finalQuestionsData.social.militarySpecialty
  );
  const [militaryFromDate, setMilitaryFromDate] = useState<string>(
    finalQuestionsData.social.militaryFromDate
  );
  const [militaryToDate, setMilitaryToDate] = useState<string>(
    finalQuestionsData.social.militaryToDate
  );

  // 2. Clan or tribe state
  const [clanMember, setClanMember] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.clanMember
  );
  const [clanName, setClanName] = useState<string>(
    finalQuestionsData.social.clanName || ''
  );

  // 3. Travel history state
  const [traveledCountries, setTraveledCountries] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.traveledCountries
  );
  const [visitedCountries, setVisitedCountries] = useState<VisitedCountry[]>(
    finalQuestionsData.social.visitedCountries && finalQuestionsData.social.visitedCountries.length > 0
      ? finalQuestionsData.social.visitedCountries
      : [{ id: 1, country: '' }]
  );

  // 4. Groups/Clubs state
  const [belongedGroups, setBelongedGroups] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.belongedGroups
  );
  const [organizationName, setOrganizationName] = useState<string>(
    finalQuestionsData.social.organizationName || ''
  );

  // 5. Weapons training state
  const [weaponsTraining, setWeaponsTraining] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.weaponsTraining
  );
  const [weaponsDetails, setWeaponsDetails] = useState<string>(
    finalQuestionsData.social.weaponsDetails || ''
  );

  // 6. Rebel group state
  const [rebelGroup, setRebelGroup] = useState<'yes' | 'no' | null>(
    finalQuestionsData.social.rebelGroup
  );
  const [rebelDetails, setRebelDetails] = useState<string>(
    finalQuestionsData.social.rebelDetails || ''
  );

  const toggleOption = (current: 'yes' | 'no' | null, setter: (val: 'yes' | 'no' | null) => void, choice: 'yes' | 'no') => {
    if (current === choice) {
      setter(null);
    } else {
      setter(choice);
    }
  };

  const handleAddCountryRow = () => {
    setVisitedCountries(prev => [...prev, { id: Date.now(), country: '' }]);
  };

  const handleCountryChange = (id: number, val: string) => {
    setVisitedCountries(prev => prev.map(item => item.id === id ? { ...item, country: val } : item));
  };

  const handleRemoveCountryRow = (id: number) => {
    if (visitedCountries.length > 1) {
      setVisitedCountries(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleContinue = () => {
    if (editingFinalQuestionFromReview) {
      updateFinalQuestions({
        social: {
          militaryServed,
          militaryCountry,
          militaryBranch,
          militaryRank,
          militarySpecialty,
          militaryFromDate,
          militaryToDate,
          traveledCountries,
          visitedCountries,
          clanMember,
          clanName,
          belongedGroups,
          organizationName,
          weaponsTraining,
          weaponsDetails,
          rebelGroup,
          rebelDetails,
        },
      });
      setEditingFinalQuestionFromReview(false);
      addToast(
        language === 'es' ? 'Cambios guardados' : 'Changes saved',
        language === 'es' ? 'Se guardaron los cambios correctamente.' : 'Changes have been saved successfully.',
        'success'
      );
      setCurrentTab('visa_review_final_questions');
      return;
    }
    setCurrentTab('step20_health_safety');
  };

  const handleCancel = () => {
    setEditingFinalQuestionFromReview(false);
    setCurrentTab('visa_review_final_questions');
  };

  const handleSelectNoForAll = () => {
    setMilitaryServed('no');
    setClanMember('no');
    setTraveledCountries('no');
    setBelongedGroups('no');
    setWeaponsTraining('no');
    setRebelGroup('no');
    setTimeout(() => {
      handleContinue();
    }, 400);
  };

  const handleBack = () => {
    if (editingFinalQuestionFromReview) {
      setEditingFinalQuestionFromReview(false);
      setCurrentTab('visa_review_final_questions');
      return;
    }
    setCurrentTab('step18_part4_intro');
  };

  const countriesList = [
    { value: '', labelEs: 'Selecciona una opción', labelEn: 'Select an option' },
    { value: 'US', labelEs: 'Estados Unidos', labelEn: 'United States' },
    { value: 'MX', labelEs: 'México', labelEn: 'Mexico' },
    { value: 'GT', labelEs: 'Guatemala', labelEn: 'Guatemala' },
    { value: 'HN', labelEs: 'Honduras', labelEn: 'Honduras' },
    { value: 'SV', labelEs: 'El Salvador', labelEn: 'El Salvador' },
    { value: 'NI', labelEs: 'Nicaragua', labelEn: 'Nicaragua' },
    { value: 'CO', labelEs: 'Colombia', labelEn: 'Colombia' },
    { value: 'VE', labelEs: 'Venezuela', labelEn: 'Venezuela' },
    { value: 'PE', labelEs: 'Perú', labelEn: 'Peru' },
    { value: 'OTHER', labelEs: 'Otro país', labelEn: 'Other country' }
  ];

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'bg-[#0045ff] text-white rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff] h-[48px] transition-all cursor-pointer flex items-center justify-center'
      : 'bg-white border border-[#d4d4d4] text-[#171717] rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] hover:border-[#0045ff] h-[48px] transition-all cursor-pointer flex items-center justify-center';
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:5395"
    >
      {/* Top Header Bar & Progress */}
      <div className="w-full bg-[#fafafa] border-b border-[#e5e5e5] flex flex-col shrink-0 sticky top-0 z-20">
        <div className="px-[16px] py-[12px] flex items-center justify-between w-full">
          <button
            onClick={handleBack}
            className="size-[40px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#171717] hover:bg-[#f5f5f5] active:scale-95 transition-all cursor-pointer shadow-2xs"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>

          <span className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#0038d0]">
            {editingFinalQuestionFromReview
              ? (language === 'es' ? 'Modificar Información Social' : 'Edit Social Information')
              : (language === 'es' ? 'Preguntas Finales' : 'Final Questions')}
          </span>

          <div className="w-[40px]" />
        </div>

        {/* Step Progress Bar (Part 4 Step 1 of 2) */}
        {!editingFinalQuestionFromReview && (
          <div className="w-full h-[4px] bg-[#e5e5e5]">
            <div className="h-full bg-[#0038d0] transition-all duration-300 w-[50%]" />
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[20px] max-w-md mx-auto w-full flex flex-col gap-6">
        {/* Screen Title */}
        <div className="w-full text-center">
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px] text-center my-2">
            {language === 'es' ? 'Información social' : 'Social information'}
          </h1>
        </div>

        {/* Question 1: Military Service */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="1:5396">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es' ? '¿Has servido en las fuerzas armadas?' : 'Have you ever served in the military?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
              {language === 'es'
                ? 'Selecciona SÍ si serviste en el ejército, marina o fuerza aérea de cualquier país.'
                : 'Select YES if you served in the army, navy, or air force of any country.'}
            </p>
          </div>

          {/* Yes / No Toggle Buttons with exact Figma 1:6251 styling */}
          <div className="grid grid-cols-2 gap-3 w-full" data-node-id="1:6251">
            <button
              type="button"
              onClick={() => toggleOption(militaryServed, setMilitaryServed, 'yes')}
              className={getOptionButtonClass(militaryServed === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(militaryServed, setMilitaryServed, 'no')}
              className={getOptionButtonClass(militaryServed === 'no')}
            >
              No
            </button>
          </div>

          {/* Conditional Military Details Form */}
          {militaryServed === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-4 animate-fadeIn mt-1" data-node-id="1:6243">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles del servicio' : 'Details of the service'}
              </h3>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'País' : 'Country'}
                </label>
                <select
                  value={militaryCountry}
                  onChange={(e) => setMilitaryCountry(e.target.value)}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] transition-colors"
                >
                  {countriesList.map(c => (
                    <option key={c.value} value={c.value}>
                      {language === 'es' ? c.labelEs : c.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Rama del Servicio' : 'Branch of Service'}
                </label>
                <input
                  type="text"
                  value={militaryBranch}
                  onChange={(e) => setMilitaryBranch(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Ejército, Marina' : 'Enter the information'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff]"
                />
              </div>

              {/* Rank */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Rango / Posición' : 'Rank/Position'}
                </label>
                <input
                  type="text"
                  value={militaryRank}
                  onChange={(e) => setMilitaryRank(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Soldado, Cabo' : 'Enter the information'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff]"
                />
              </div>

              {/* Specialty */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Especialidad militar' : 'Military specialty'}
                </label>
                <input
                  type="text"
                  value={militarySpecialty}
                  onChange={(e) => setMilitarySpecialty(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Infantería' : 'Enter specialty'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff]"
                />
              </div>

              {/* Service Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                    {language === 'es' ? 'Desde' : 'From'}
                  </label>
                  <input
                    type="date"
                    value={militaryFromDate}
                    onChange={(e) => setMilitaryFromDate(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0045ff] w-full min-w-0"
                  />
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                    {language === 'es' ? 'Hasta' : 'To'}
                  </label>
                  <input
                    type="date"
                    value={militaryToDate}
                    onChange={(e) => setMilitaryToDate(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0045ff] w-full min-w-0"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Question 2: Clan or Tribe */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:47679">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es' ? '¿Eres miembro de alguna tribu o clan?' : 'Are you a member of a tribe or clan?'}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(clanMember, setClanMember, 'yes')}
              className={getOptionButtonClass(clanMember === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(clanMember, setClanMember, 'no')}
              className={getOptionButtonClass(clanMember === 'no')}
            >
              No
            </button>
          </div>

          {clanMember === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Agrega la información a continuación' : 'Add the information below'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Nombre del clan o tribu' : 'Clan or tribe name'}
                </label>
                <input
                  type="text"
                  value={clanName}
                  onChange={(e) => setClanName(e.target.value)}
                  placeholder={language === 'es' ? 'Ingresa el nombre del clan o tribu...' : 'Enter the name of the clan or tribe...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 3: Travel History */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:48145">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Has viajado a otros países en los últimos 5 años?'
                : 'Have you traveled to other countries in the last 5 years?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
              {language === 'es'
                ? 'Si tienes una visa H2 reciente, presiona SÍ y elige Estados Unidos.'
                : 'If you have a recent H2 visa, press YES and choose United States.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(traveledCountries, setTraveledCountries, 'yes')}
              className={getOptionButtonClass(traveledCountries === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(traveledCountries, setTraveledCountries, 'no')}
              className={getOptionButtonClass(traveledCountries === 'no')}
            >
              No
            </button>
          </div>

          {traveledCountries === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-4 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Agrega el nombre de los países.' : 'Add the name of the countries.'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>

              {/* Countries Dynamic List */}
              <div className="flex flex-col gap-3">
                {visitedCountries.map((row) => (
                  <div key={row.id} className="flex items-center gap-2">
                    <select
                      value={row.country}
                      onChange={(e) => handleCountryChange(row.id, e.target.value)}
                      className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] flex-1 max-w-full min-w-0"
                    >
                      {countriesList.map(c => (
                        <option key={c.value} value={c.value}>
                          {language === 'es' ? c.labelEs : c.labelEn}
                        </option>
                      ))}
                    </select>

                    {visitedCountries.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveCountryRow(row.id)}
                        className="size-[40px] rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center text-[#dc2626] hover:bg-[#fee2e2] shrink-0 transition-colors"
                        aria-label="Remove"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddCountryRow}
                  className="w-full h-[44px] rounded-[100px] border border-[#d4d4d4] bg-white text-[#171717] hover:bg-[#f5f5f5] font-['Inter',sans-serif] font-medium text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer mt-1"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0045ff]">add</span>
                  <span>{language === 'es' ? '+ Agregar más países' : '+ Add more countries'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Question 4: Organizations */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:48713">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Has pertenecido a grupos, clubes u organizaciones?'
                : 'Have you belonged to any groups, clubs, or organizations?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
              {language === 'es'
                ? 'Esto incluye grupos de trabajo, equipos deportivos, sindicatos u organizaciones de voluntarios.'
                : 'This includes work groups, sports teams, unions, or volunteer organizations.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(belongedGroups, setBelongedGroups, 'yes')}
              className={getOptionButtonClass(belongedGroups === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(belongedGroups, setBelongedGroups, 'no')}
              className={getOptionButtonClass(belongedGroups === 'no')}
            >
              No
            </button>
          </div>

          {belongedGroups === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Agrega el nombre de las organizaciones.' : 'Add the name of the organizations.'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Nombre de la organización' : 'Organization name'}
                </label>
                <input
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  placeholder={language === 'es' ? 'Nombre del grupo u organización...' : 'Enter organization name...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 5: Weapons Training */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:49281">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Has recibido entrenamiento en armas, explosivos o químicos?'
                : 'Have you ever been trained to use weapons?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
              {language === 'es'
                ? 'Responde sí si recibiste entrenamiento para armas, explosivos o químicos'
                : 'Answer yes if you received training for guns, explosives, or chemicals'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(weaponsTraining, setWeaponsTraining, 'yes')}
              className={getOptionButtonClass(weaponsTraining === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(weaponsTraining, setWeaponsTraining, 'no')}
              className={getOptionButtonClass(weaponsTraining === 'no')}
            >
              No
            </button>
          </div>

          {weaponsTraining === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles del entrenamiento' : 'Training details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor explica qué tipo de entrenamiento recibiste (por ejemplo: policial, militar o seguridad)'
                  : 'Please explain what kind of training you received (for example: police, military, or security)'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={weaponsDetails}
                  onChange={(e) => setWeaponsDetails(e.target.value)}
                  rows={3}
                  placeholder={
                    language === 'es'
                      ? 'Por ejemplo: si fue para un trabajo de seguridad o servicio militar...'
                      : 'For example: if it was for a security job or military service'
                  }
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 6: Rebel / Insurgent Group */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:49744">
          <div className="flex flex-col gap-2">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Has pertenecido a un grupo que lucha contra el gobierno?'
                : 'Have you ever been in a group that fights the government?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
              {language === 'es'
                ? 'Esto incluye ser parte de un grupo rebelde, guerrilla o insurgente.'
                : 'This includes being part of a rebel, guerrilla, or insurgent group.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(rebelGroup, setRebelGroup, 'yes')}
              className={getOptionButtonClass(rebelGroup === 'yes')}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(rebelGroup, setRebelGroup, 'no')}
              className={getOptionButtonClass(rebelGroup === 'no')}
            >
              No
            </button>
          </div>

          {rebelGroup === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px] text-[#171717]">
                {language === 'es' ? 'Detalles del grupo' : 'Group details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#525252]">
                {language === 'es'
                  ? 'Dinos el nombre del grupo y cuál era tu rol mientras estuviste allí.'
                  : 'Tell us the name of the group and what your role was while you were there.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[14px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={rebelDetails}
                  onChange={(e) => setRebelDetails(e.target.value)}
                  rows={3}
                  placeholder={language === 'es' ? 'Tipo de entrenamiento y fechas...' : 'Type of training and date...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[15px] text-[#171717] focus:outline-none focus:border-[#0045ff] resize-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-2.5">
        {editingFinalQuestionFromReview ? (
          <>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] hover:bg-[#002bb0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'es' ? 'Guardar cambios' : 'Save changes'}</span>
              <span className="material-symbols-outlined text-[20px]">check</span>
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="w-full min-h-[44px] h-auto px-4 py-2.5 bg-white border border-[#e5e5e5] hover:bg-[#f5f5f5] active:scale-[0.98] text-[#525252] rounded-[100px] font-['Inter',sans-serif] font-medium text-[15px] leading-[20px] text-center transition-all cursor-pointer"
            >
              {language === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleContinue}
              className="w-full min-h-[48px] h-auto px-4 py-3 bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>

            <button
              type="button"
              onClick={handleSelectNoForAll}
              className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[15px] leading-[20px] hover:underline cursor-pointer py-1 text-center"
            >
              {language === 'es' ? 'Seleccionar "No" para todo' : 'Select "No" for all'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Step19SocialInfoScreen;
