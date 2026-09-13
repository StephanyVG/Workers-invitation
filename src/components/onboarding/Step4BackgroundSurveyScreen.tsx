import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step4BackgroundSurveyScreen: React.FC = () => {
  const { language, setCurrentTab, setShowWelcomeModal } = useApp();

  // 11 Questions initial states - All start as null (none pre-selected)
  const [q1, setQ1] = useState<'yes' | 'no' | null>(null);
  const [q2, setQ2] = useState<'yes' | 'no' | null>(null);
  const [q3, setQ3] = useState<'yes' | 'no' | null>(null);
  const [q4, setQ4] = useState<'yes' | 'no' | null>(null);
  const [q5, setQ5] = useState<'yes' | 'no' | null>(null);
  const [q6, setQ6] = useState<'yes' | 'no' | null>(null);
  const [q7, setQ7] = useState<'yes' | 'no' | null>(null);
  const [q8, setQ8] = useState<'yes' | 'no' | null>(null);
  const [q9, setQ9] = useState<'no' | 'family' | 'agent' | null>(null);
  const [q10, setQ10] = useState<'yes' | 'no' | null>(null);
  const [q11, setQ11] = useState<'yes' | 'no' | null>(null);

  // Conditional sub-card state for Q1 ("Are you a citizen of another country?" - Figma 463:26310)
  const [nationalityCountry, setNationalityCountry] = useState<string>('');
  const [hasNationalityPassport, setHasNationalityPassport] = useState<'yes' | 'no'>('yes');
  const [nationalityPassportNumber, setNationalityPassportNumber] = useState<string>('');
  const [extraCountries, setExtraCountries] = useState<string[]>([]);

  // Conditional sub-card state for Q2 ("Are you a permanent resident of another country?" - Figma 463:27183)
  const [residencyCountry, setResidencyCountry] = useState<string>('');
  const [extraResidencyCountries, setExtraResidencyCountries] = useState<string[]>([]);

  // Conditional sub-card state for Q3 ("Have you ever been to the U.S.?" - Figma 463:28180)
  const [arrivalDate, setArrivalDate] = useState<string>('2022-05-15');
  const [stayDurationNumber, setStayDurationNumber] = useState<string>('6');
  const [stayDurationUnit, setStayDurationUnit] = useState<string>(language === 'es' ? 'Meses' : 'Months');

  // Conditional sub-card state for Q4 ("Have you ever been granted a U.S. visa?" - Figma 466:42299)
  const [visaImageUploaded, setVisaImageUploaded] = useState<boolean>(true);

  // Conditional sub-card state for Q11 ("Have you ever had a US driver's license?" - Figma 466:45009)
  const [driverLicenseNumber, setDriverLicenseNumber] = useState<string>('');

  const handleAddAnotherCountry = () => {
    setExtraCountries((prev) => [...prev, '']);
  };

  const handleAddAnotherResidencyCountry = () => {
    setExtraResidencyCountries((prev) => [...prev, '']);
  };

  const handleComplete = () => {
    setCurrentTab('step5_emergency_contact');
  };

  const handleBack = () => {
    setCurrentTab('step3_address_id');
  };

  const toggleYesNo = (
    currentVal: 'yes' | 'no' | null,
    setVal: React.Dispatch<React.SetStateAction<'yes' | 'no' | null>>,
    target: 'yes' | 'no'
  ) => {
    setVal(currentVal === target ? null : target);
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none"
      data-node-id="463:26252"
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

        {/* Progress Bar for Part 4 (100%) */}
        <div className="w-full bg-[#e5e5e5] h-[4px] relative overflow-hidden">
          <div className="bg-[#2874ff] h-[4px] w-[100%] absolute left-0 top-0 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] pb-[32px] space-y-5">
        {/* Questions Cards List matching Figma 463:26252 */}
        <div className="space-y-4 w-full">
          {/* Question 1 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Eres ciudadano de otro país?'
                : 'Are you a citizen of another country?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q1 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q1 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>

            {/* Sub-Card Details when YES is selected for Question 1 (Figma Node 463:26310) */}
            {q1 === 'yes' && (
              <div
                className="bg-[#fafafa] border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left mt-3 animate-fadeIn"
                data-node-id="I463:26310;4207:6807"
              >
                {/* Section Header */}
                <div className="space-y-1">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                    {language === 'es' ? 'Detalles de nacionalidad' : 'Nationality Details'}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
                    {language === 'es'
                      ? 'Por favor proporciona más información sobre tu situación.'
                      : 'Please provide more information about your situation.'}
                  </p>
                </div>

                {/* Field 1: Country of Nationality */}
                <div className="flex flex-col gap-1 w-full text-left">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                    {language === 'es' ? 'País de nacionalidad' : 'Country of Nationality'}
                  </label>
                  <div className="relative w-full">
                    <select
                      value={nationalityCountry}
                      onChange={(e) => setNationalityCountry(e.target.value)}
                      className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                    >
                      <option value="" disabled>
                        {language === 'es' ? 'Selecciona una opción' : 'Select an option'}
                      </option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Honduras">Honduras</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Mexico">México</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Otro">{language === 'es' ? 'Otro' : 'Other'}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Field 2: Passport Question */}
                <div className="flex flex-col gap-2 w-full text-left pt-1">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                    {language === 'es'
                      ? '¿Tienes pasaporte de este país?'
                      : 'Do you have a passport for this country?'}
                  </label>
                  <div className="flex items-center gap-6 pt-0.5">
                    {/* Yes Radio Option */}
                    <label
                      onClick={() => setHasNationalityPassport('yes')}
                      className="flex items-center gap-2 cursor-pointer select-none"
                    >
                      <div
                        className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                          hasNationalityPassport === 'yes'
                            ? 'border-[#0038d0] bg-[#0038d0]'
                            : 'border-[#737373] bg-white'
                        }`}
                      >
                        {hasNationalityPassport === 'yes' && (
                          <div className="size-[8px] rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">
                        {language === 'es' ? 'Sí' : 'Yes'}
                      </span>
                    </label>

                    {/* No Radio Option */}
                    <label
                      onClick={() => setHasNationalityPassport('no')}
                      className="flex items-center gap-2 cursor-pointer select-none"
                    >
                      <div
                        className={`size-[20px] rounded-full border flex items-center justify-center transition-all ${
                          hasNationalityPassport === 'no'
                            ? 'border-[#0038d0] bg-[#0038d0]'
                            : 'border-[#737373] bg-white'
                        }`}
                      >
                        {hasNationalityPassport === 'no' && (
                          <div className="size-[8px] rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-['DM_Sans',sans-serif] font-semibold text-[14px] text-[#171717]">
                        No
                      </span>
                    </label>
                  </div>
                </div>

                {/* Field 3: Passport Number Input */}
                <div className="flex flex-col gap-1 w-full text-left pt-1">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                    {language === 'es' ? 'Número de pasaporte' : 'Passport Number'}
                  </label>
                  <input
                    type="text"
                    value={nationalityPassportNumber}
                    onChange={(e) => setNationalityPassportNumber(e.target.value)}
                    placeholder={language === 'es' ? 'Número de pasaporte' : 'Passport Number'}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs uppercase"
                  />
                </div>

                {/* Dynamic Extra Countries Added */}
                {extraCountries.map((_, idx) => (
                  <div key={idx} className="flex flex-col gap-1 w-full text-left pt-2 border-t border-[#e5e5e5]">
                    <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                      {language === 'es' ? `Otro país de nacionalidad (${idx + 2})` : `Another Country (${idx + 2})`}
                    </label>
                    <div className="relative w-full">
                      <select
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                      >
                        <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Colombia">Colombia</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                ))}

                {/* Action Button: Add Another Country */}
                <button
                  type="button"
                  onClick={handleAddAnotherCountry}
                  className="bg-white border border-[#e5e5e5] rounded-[100px] h-[44px] px-4 w-full flex items-center justify-center gap-2 text-[#525252] font-['Inter',sans-serif] font-semibold text-[15px] leading-[22px] shadow-2xs active:scale-[0.98] transition-all cursor-pointer mt-1"
                  data-node-id="I463:26310;4207:6827"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>{language === 'es' ? 'Agregar otro país' : 'Add another country'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Eres residente permanente de otro país?'
                : 'Are you a permanent resident of another country?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q2 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q2 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>

            {/* Sub-Card Details when YES is selected for Question 2 (Figma Node 463:27183) */}
            {q2 === 'yes' && (
              <div
                className="bg-[#fafafa] border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left mt-3 animate-fadeIn"
                data-node-id="I463:27183;4207:6807"
              >
                {/* Section Title */}
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                  {language === 'es' ? 'Detalles de otra residencia' : 'Other residency details'}
                </h3>

                {/* Field 1: Country of nationality / residency */}
                <div className="flex flex-col gap-1 w-full text-left">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                    {language === 'es' ? 'País de residencia' : 'Country of nationality'}
                  </label>
                  <div className="relative w-full">
                    <select
                      value={residencyCountry}
                      onChange={(e) => setResidencyCountry(e.target.value)}
                      className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                    >
                      <option value="" disabled>
                        {language === 'es' ? 'Selecciona el país' : 'Select country'}
                      </option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Honduras">Honduras</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Mexico">México</option>
                      <option value="Canada">Canadá</option>
                      <option value="Estados Unidos">Estados Unidos</option>
                      <option value="Otro">{language === 'es' ? 'Otro' : 'Other'}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Dynamic Extra Residency Countries */}
                {extraResidencyCountries.map((_, idx) => (
                  <div key={idx} className="flex flex-col gap-1 w-full text-left pt-2 border-t border-[#e5e5e5]">
                    <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                      {language === 'es' ? `Otro país de residencia (${idx + 2})` : `Another Country (${idx + 2})`}
                    </label>
                    <div className="relative w-full">
                      <select
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                      >
                        <option value="">{language === 'es' ? 'Selecciona el país' : 'Select country'}</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Canada">Canadá</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                ))}

                {/* Action Button: Add another country */}
                <button
                  type="button"
                  onClick={handleAddAnotherResidencyCountry}
                  className="bg-white border border-[#e5e5e5] rounded-[100px] h-[44px] px-4 w-full flex items-center justify-center gap-2 text-[#525252] font-['Inter',sans-serif] font-semibold text-[15px] leading-[22px] shadow-2xs active:scale-[0.98] transition-all cursor-pointer mt-1"
                  data-node-id="I463:27183;4207:6827"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>{language === 'es' ? 'Agregar otro país' : 'Add another country'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has estado alguna vez en los EE. UU.?'
                : 'Have you ever been to the U.S.?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q3 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q3 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>

            {/* Sub-Card Details when YES is selected for Question 3 (Figma Node 463:28180) */}
            {q3 === 'yes' && (
              <div
                className="bg-[#fafafa] border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left mt-3 animate-fadeIn"
                data-node-id="463:28180"
              >
                {/* Section Header */}
                <div className="space-y-1">
                  <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717] tracking-[-0.072px]">
                    {language === 'es' ? 'Información de la estancia' : 'Stay Information'}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[22px] text-[#525252] tracking-[-0.064px]">
                    {language === 'es'
                      ? 'Por favor proporciona información sobre tu última estancia en los EE. UU.'
                      : 'Please provide information about your last stay in the U.S.'}
                  </p>
                </div>

                {/* Field 1: Date of Arrival */}
                <div className="flex flex-col gap-1 w-full text-left">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                    {language === 'es' ? 'Fecha de llegada a EE. UU.' : 'Date of Arrival in the U.S.'}
                  </label>
                  <input
                    type="date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs cursor-pointer"
                  />
                </div>

                {/* Field 2: Length of Stay */}
                <div className="flex flex-col gap-1 w-full text-left">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px] pl-0.5">
                    {language === 'es' ? 'Duración de la estancia' : 'Length of Stay'}
                  </label>
                  <div className="flex gap-2 w-full">
                    <input
                      type="number"
                      value={stayDurationNumber}
                      onChange={(e) => setStayDurationNumber(e.target.value)}
                      className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] w-[90px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] text-center focus:outline-none focus:border-[#0038d0] transition-colors shadow-2xs"
                      min="1"
                    />
                    <div className="relative flex-1">
                      <select
                        value={stayDurationUnit}
                        onChange={(e) => setStayDurationUnit(e.target.value)}
                        className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] pr-[36px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] focus:outline-none focus:border-[#0038d0] transition-colors w-full appearance-none shadow-2xs cursor-pointer"
                      >
                        <option value={language === 'es' ? 'Días' : 'Days'}>
                          {language === 'es' ? 'Días' : 'Days'}
                        </option>
                        <option value={language === 'es' ? 'Semanas' : 'Weeks'}>
                          {language === 'es' ? 'Semanas' : 'Weeks'}
                        </option>
                        <option value={language === 'es' ? 'Meses' : 'Months'}>
                          {language === 'es' ? 'Meses' : 'Months'}
                        </option>
                        <option value={language === 'es' ? 'Años' : 'Years'}>
                          {language === 'es' ? 'Años' : 'Years'}
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Question 4 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                {language === 'es'
                  ? '¿Se te ha otorgado alguna vez una visa de EE. UU.?'
                  : 'Have you ever been granted a U.S. visa?'}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#737373] mt-1">
                {language === 'es'
                  ? 'Selecciona SÍ si alguna vez has tenido una visa H2 o de turista.'
                  : 'Select YES if you have ever had an H2 or tourist visa.'}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q4 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q4 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>

            {/* Sub-Card Details when YES is selected for Question 4 (Figma Node 466:42299) */}
            {q4 === 'yes' && (
              <div
                className="bg-[#fafafa] border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-4 text-left mt-3 animate-fadeIn"
                data-node-id="466:42299"
              >
                <p className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[22px] text-[#171717]">
                  {language === 'es'
                    ? 'Si aún conservas tu visa, por favor sube una foto.'
                    : 'If you still have your visa, please upload a photo.'}
                </p>

                {/* Visa Image Card Preview */}
                <div className="bg-[#e6ecff] border border-[#e5e5e5] rounded-[12px] p-2 flex items-center justify-center overflow-hidden shadow-xs">
                  <img
                    src="/pasaporte.svg"
                    alt="US Visa Sample"
                    className="w-full max-w-[280px] h-auto max-h-[160px] object-contain block select-none rounded-[8px]"
                  />
                </div>

                {/* Upload Again Button (Figma 466:42380) */}
                <button
                  type="button"
                  onClick={() => setVisaImageUploaded(true)}
                  className="bg-[#d3efff] text-[#0045ff] font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] h-[36px] rounded-[100px] w-full flex items-center justify-center shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
                  data-node-id="466:42380"
                >
                  {language === 'es' ? 'Volver a subir' : 'Upload again'}
                </button>
              </div>
            )}
          </div>

          {/* Question 5 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                {language === 'es'
                  ? '¿Estás solicitando el mismo tipo de visa nuevamente?'
                  : 'Are you applying for the same type of visa again?'}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#737373] mt-1">
                {language === 'es'
                  ? 'Selecciona SÍ si alguna vez has trabajado con una visa H2.'
                  : 'Select YES if you have ever worked on an H2 visa.'}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q5 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q5 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 6 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has dado tus huellas dactilares en una cita consular para tu visa?'
                : 'Have you given your fingerprints at a consular appointment for your visa?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setQ6('yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q6 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => setQ6('no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q6 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 7 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez perdiste o te robaron tu visa de EE. UU.?'
                : 'Has your U.S. visa ever been lost or stolen?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setQ7('yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q7 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => setQ7('no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q7 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 8 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguien ha solicitado alguna vez una Green Card de EE. UU. para ti?'
                : 'Has anyone ever applied for a U.S. green card for you?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setQ8('yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q8 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => setQ8('no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q8 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 9 - 3 Stacked Options */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguien ha solicitado una Green Card por ti?'
                : 'Has anyone ever applied for a U.S. green card for you?'}
            </p>
            <div className="flex flex-col gap-2.5 w-full">
              <button
                type="button"
                onClick={() => setQ9('no')}
                className={`w-full min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q9 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>

              <button
                type="button"
                onClick={() => setQ9('family')}
                className={`w-full min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q9 === 'family'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí, un familiar' : 'Yes, Family member'}
              </button>

              <button
                type="button"
                onClick={() => setQ9('agent')}
                className={`w-full min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q9 === 'agent'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí, agente / empleador' : 'Yes, Agent/Employer'}
              </button>
            </div>
          </div>

          {/* Question 10 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez te han denegado una visa de EE. UU. (incluyendo turista o H2) o la entrada en la frontera?'
                : 'Have you ever been denied a U.S. visa (including tourist or H2 visa) or been denied entry to the U.S. at the border?'}
            </p>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setQ10('yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q10 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => setQ10('no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q10 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 11 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-4 shadow-2xs space-y-3.5 text-left">
            <div>
              <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                {language === 'es'
                  ? '¿Alguna vez has tenido una licencia de conducir de los EE. UU.?'
                  : "Have you ever had a US driver's license?"}
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#737373] mt-1">
                {language === 'es'
                  ? 'Si seleccionas "SÍ" deberás agregar el número de licencia.'
                  : 'If you select "YES" you need to add the driver\'s license number'}
              </p>
            </div>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setQ11('yes')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q11 === 'yes'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => setQ11('no')}
                className={`flex-1 min-h-[46px] px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer ${
                  q11 === 'no'
                    ? 'bg-[#0045ff] text-white font-semibold shadow-[-2px_0px_8px_8px_rgba(4,71,255,0.18)] scale-[1.01]'
                    : 'bg-white border border-[#e5e5e5] text-[#262626] font-medium active:scale-[0.98]'
                }`}
              >
                No
              </button>
            </div>

            {/* Sub-Card Details when YES is selected for Question 11 (Figma Node 466:45009) */}
            {q11 === 'yes' && (
              <div
                className="bg-[#fafafa] border border-[#e5e5e5] rounded-[16px] p-4 sm:p-5 space-y-3 text-left mt-3 animate-fadeIn"
                data-node-id="466:45009"
              >
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#171717]">
                  {language === 'es' ? 'Licencia de conducir' : "Driver's license"}
                </h3>
                <div className="flex flex-col gap-1.5 w-full text-left">
                  <label className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717]">
                    {language === 'es' ? 'Número de licencia de conducir' : "Driver's license number"}
                  </label>
                  <input
                    type="text"
                    value={driverLicenseNumber}
                    onChange={(e) => setDriverLicenseNumber(e.target.value)}
                    placeholder={language === 'es' ? 'Ingresa el número de licencia' : 'Add the license number'}
                    className="bg-white border border-[#e5e5e5] rounded-[8px] h-[44px] px-[12px] font-['Inter',sans-serif] font-normal text-[14px] text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#0038d0] transition-colors w-full shadow-2xs"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center">
        <button
          onClick={handleComplete}
          className="w-full min-h-[56px] h-auto px-4 py-[16px] bg-[#0038d0] active:scale-[0.98] text-[#f5f5f5] rounded-[100px] font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{language === 'es' ? 'Seleccionar para continuar' : 'Select to Continue'}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
