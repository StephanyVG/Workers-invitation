import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface VisitedCountry {
  id: number;
  country: string;
}

export const Step19SocialInfoScreen: React.FC = () => {
  const { setCurrentTab, language } = useApp();

  // 1. Military service state
  const [militaryServed, setMilitaryServed] = useState<'yes' | 'no' | null>(null);
  const [militaryCountry, setMilitaryCountry] = useState<string>('');
  const [militaryBranch, setMilitaryBranch] = useState<string>('');
  const [militaryRank, setMilitaryRank] = useState<string>('');
  const [militarySpecialty, setMilitarySpecialty] = useState<string>('');
  const [militaryFromDate, setMilitaryFromDate] = useState<string>('');
  const [militaryToDate, setMilitaryToDate] = useState<string>('');

  // 2. Clan or tribe state
  const [clanMember, setClanMember] = useState<'yes' | 'no' | null>(null);
  const [clanName, setClanName] = useState<string>('');

  // 3. Travel history state
  const [traveledCountries, setTraveledCountries] = useState<'yes' | 'no' | null>(null);
  const [visitedCountries, setVisitedCountries] = useState<VisitedCountry[]>([{ id: 1, country: '' }]);

  // 4. Groups/Clubs state
  const [belongedGroups, setBelongedGroups] = useState<'yes' | 'no' | null>(null);
  const [organizationName, setOrganizationName] = useState<string>('');

  // 5. Weapons training state
  const [weaponsTraining, setWeaponsTraining] = useState<'yes' | 'no' | null>(null);
  const [weaponsDetails, setWeaponsDetails] = useState<string>('');

  // 6. Rebel group state
  const [rebelGroup, setRebelGroup] = useState<'yes' | 'no' | null>(null);
  const [rebelDetails, setRebelDetails] = useState<string>('');

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
    setCurrentTab('step20_health_safety');
  };

  const handleBack = () => {
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
            {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
          </span>

          <div className="w-[40px]" />
        </div>

        {/* Step Progress Bar (Part 4 Step 1 of 2) */}
        <div className="w-full h-[4px] bg-[#e5e5e5]">
          <div className="h-full bg-[#0038d0] transition-all duration-300 w-[50%]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[20px] max-w-md mx-auto w-full flex flex-col gap-5">
        {/* Screen Title */}
        <div className="w-full">
          <h1 className="font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px] text-[#171717] tracking-[-0.32px]">
            {language === 'es' ? 'Información social' : 'Social information'}
          </h1>
        </div>

        {/* Question 1: Military Service */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="1:5396">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es' ? '¿Has servido en las fuerzas armadas?' : 'Have you ever served in the military?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
              {language === 'es'
                ? 'Selecciona SÍ si serviste en el ejército, marina o fuerza aérea de cualquier país.'
                : 'Select YES if you served in the army, navy, or air force of any country.'}
            </p>
          </div>

          {/* Yes / No Toggle Buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(militaryServed, setMilitaryServed, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                militaryServed === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(militaryServed, setMilitaryServed, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                militaryServed === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {/* Conditional Military Details Form */}
          {militaryServed === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-4 animate-fadeIn mt-1" data-node-id="1:6243">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Detalles del servicio' : 'Details of the service'}
              </h3>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'País' : 'Country'}
                </label>
                <select
                  value={militaryCountry}
                  onChange={(e) => setMilitaryCountry(e.target.value)}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors"
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
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Rama del Servicio' : 'Branch of Service'}
                </label>
                <input
                  type="text"
                  value={militaryBranch}
                  onChange={(e) => setMilitaryBranch(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Ejército, Marina' : 'Enter the information'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0]"
                />
              </div>

              {/* Rank */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Rango / Posición' : 'Rank/Position'}
                </label>
                <input
                  type="text"
                  value={militaryRank}
                  onChange={(e) => setMilitaryRank(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Soldado, Cabo' : 'Enter the information'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0]"
                />
              </div>

              {/* Specialty */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Especialidad militar' : 'Military specialty'}
                </label>
                <input
                  type="text"
                  value={militarySpecialty}
                  onChange={(e) => setMilitarySpecialty(e.target.value)}
                  placeholder={language === 'es' ? 'Ej: Infantería' : 'Enter specialty'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0]"
                />
              </div>

              {/* Service Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                    {language === 'es' ? 'Desde' : 'From'}
                  </label>
                  <input
                    type="date"
                    value={militaryFromDate}
                    onChange={(e) => setMilitaryFromDate(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] w-full min-w-0"
                  />
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                    {language === 'es' ? 'Hasta' : 'To'}
                  </label>
                  <input
                    type="date"
                    value={militaryToDate}
                    onChange={(e) => setMilitaryToDate(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] w-full min-w-0"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Question 2: Clan or Tribe */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:47679">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es' ? '¿Eres miembro de alguna tribu o clan?' : 'Are you a member of a tribe or clan?'}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(clanMember, setClanMember, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                clanMember === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(clanMember, setClanMember, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                clanMember === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {clanMember === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Agrega la información a continuación' : 'Add the information below'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Nombre del clan o tribu' : 'Clan or tribe name'}
                </label>
                <input
                  type="text"
                  value={clanName}
                  onChange={(e) => setClanName(e.target.value)}
                  placeholder={language === 'es' ? 'Ingresa el nombre del clan o tribu...' : 'Enter the name of the clan or tribe...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 3: Travel History */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:48145">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has viajado a otros países en los últimos 5 años?'
                : 'Have you traveled to other countries in the last 5 years?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
              {language === 'es'
                ? 'Si tienes una visa H2 reciente, presiona SÍ y elige Estados Unidos.'
                : 'If you have a recent H2 visa, press YES and choose United States.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(traveledCountries, setTraveledCountries, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                traveledCountries === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(traveledCountries, setTraveledCountries, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                traveledCountries === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {traveledCountries === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-4 animate-fadeIn mt-1">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Agrega el nombre de los países.' : 'Add the name of the countries.'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>

              {/* Countries Dynamic List */}
              <div className="flex flex-col gap-3">
                {visitedCountries.map((row, index) => (
                  <div key={row.id} className="flex items-center gap-2">
                    <select
                      value={row.country}
                      onChange={(e) => handleCountryChange(row.id, e.target.value)}
                      className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] flex-1 max-w-full min-w-0"
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
                  className="w-full h-[44px] rounded-[100px] border border-[#d4d4d4] bg-white text-[#171717] hover:bg-[#f5f5f5] font-['Inter',sans-serif] font-medium text-[14px] flex items-center justify-center gap-2 transition-all cursor-pointer mt-1"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#0038d0]">add</span>
                  <span>{language === 'es' ? '+ Agregar más países' : '+ Add more countries'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Question 4: Organizations */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:48713">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has pertenecido a grupos, clubes u organizaciones?'
                : 'Have you belonged to any groups, clubs, or organizations?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
              {language === 'es'
                ? 'Esto incluye grupos de trabajo, equipos deportivos, sindicatos u organizaciones de voluntarios.'
                : 'This includes work groups, sports teams, unions, or volunteer organizations.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(belongedGroups, setBelongedGroups, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                belongedGroups === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(belongedGroups, setBelongedGroups, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                belongedGroups === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {belongedGroups === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Agrega el nombre de las organizaciones.' : 'Add the name of the organizations.'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor proporciona más información sobre tu situación.'
                  : 'Please provide more information about your situation.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Nombre de la organización' : 'Organization name'}
                </label>
                <input
                  type="text"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  placeholder={language === 'es' ? 'Nombre del grupo u organización...' : 'Enter organization name...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[14px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 5: Weapons Training */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:49281">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has recibido entrenamiento en armas, explosivos o químicos?'
                : 'Have you ever been trained to use weapons?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
              {language === 'es'
                ? 'Responde sí si recibiste entrenamiento para armas, explosivos o químicos'
                : 'Answer yes if you received training for guns, explosives, or chemicals'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(weaponsTraining, setWeaponsTraining, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                weaponsTraining === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(weaponsTraining, setWeaponsTraining, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                weaponsTraining === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {weaponsTraining === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Detalles del entrenamiento' : 'Training details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
                {language === 'es'
                  ? 'Por favor explica qué tipo de entrenamiento recibiste (por ejemplo: policial, militar o seguridad)'
                  : 'Please explain what kind of training you received (for example: police, military, or security)'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
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
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Question 6: Rebel / Insurgent Group */}
        <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs flex flex-col gap-4" data-node-id="471:49744">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has pertenecido a un grupo que lucha contra el gobierno?'
                : 'Have you ever been in a group that fights the government?'}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
              {language === 'es'
                ? 'Esto incluye ser parte de un grupo rebelde, guerrilla o insurgente.'
                : 'This includes being part of a rebel, guerrilla, or insurgent group.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleOption(rebelGroup, setRebelGroup, 'yes')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                rebelGroup === 'yes'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              {language === 'es' ? 'Sí' : 'Yes'}
            </button>

            <button
              type="button"
              onClick={() => toggleOption(rebelGroup, setRebelGroup, 'no')}
              className={`h-[48px] rounded-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all cursor-pointer flex items-center justify-center ${
                rebelGroup === 'no'
                  ? 'bg-[#0038d0] text-white shadow-md border border-[#0038d0]'
                  : 'bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0038d0]'
              }`}
            >
              No
            </button>
          </div>

          {rebelGroup === 'yes' && (
            <div className="bg-[#f9fafb] border border-[#e5e5e5] rounded-[12px] p-4 flex flex-col gap-3 animate-fadeIn mt-1">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] text-[#171717]">
                {language === 'es' ? 'Detalles del grupo' : 'Group details'}
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#525252]">
                {language === 'es'
                  ? 'Dinos el nombre del grupo y cuál era tu rol mientras estuviste allí.'
                  : 'Tell us the name of the group and what your role was while you were there.'}
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#171717]">
                  {language === 'es' ? 'Escribe aquí' : 'Write here'}
                </label>
                <textarea
                  value={rebelDetails}
                  onChange={(e) => setRebelDetails(e.target.value)}
                  rows={3}
                  placeholder={language === 'es' ? 'Tipo de entrenamiento y fechas...' : 'Type of training and date...'}
                  className="bg-white border border-[#e5e5e5] rounded-[8px] p-[12px] font-['Inter',sans-serif] text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] resize-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-3">
        <button
          onClick={handleContinue}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="text-[#0038d0] font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] hover:underline cursor-pointer py-1"
        >
          {language === 'es' ? 'Guardar y continuar más tarde' : 'Save and Continue Later'}
        </button>
      </div>
    </div>
  );
};

export default Step19SocialInfoScreen;
