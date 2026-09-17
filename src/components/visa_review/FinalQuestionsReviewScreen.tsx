import React from 'react';
import { useApp } from '../../context/AppContext';

export const FinalQuestionsReviewScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    setVisaReviewSection,
    finalQuestionsData,
    setEditingFinalQuestionFromReview,
  } = useApp();

  const renderYesNo = (val: 'yes' | 'no' | null) => {
    if (val === 'yes') return language === 'es' ? 'Sí' : 'Yes';
    if (val === 'no') return 'No';
    return language === 'es' ? 'No seleccionado' : 'Not selected';
  };

  const handleBack = () => {
    setCurrentTab('visa_review_hub');
  };

  const handleContinue = () => {
    // Marks Section 3 (Final Questions) as completed!
    setVisaReviewSection(3);
    setCurrentTab('visa_review_hub');
  };

  const handleEditSection = (sectionNumber: number) => {
    setEditingFinalQuestionFromReview(true);
    switch (sectionNumber) {
      case 1:
        setCurrentTab('step19_social_info');
        break;
      case 2:
        setCurrentTab('step20_health_safety');
        break;
      case 3:
        setCurrentTab('step21_criminal_history');
        break;
      case 4:
        setCurrentTab('step22_security_terrorism');
        break;
      case 5:
        setCurrentTab('step23_human_rights');
        break;
      case 6:
        setCurrentTab('step24_immigration_legal');
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full h-full flex flex-col justify-between overflow-hidden relative animate-fade-in font-['Inter',sans-serif] text-left select-none"
      data-node-id="508:35869"
    >
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-20 bg-[#fafafa] border-b border-[#e5e5e5] px-4 py-3 flex items-center justify-between shadow-2xs shrink-0">
        <button
          onClick={handleBack}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Back'}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] tracking-[-0.064px] text-center flex-1 mx-2">
          {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Review Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pt-6 pb-10 flex flex-col gap-6 w-full max-w-lg mx-auto min-h-0">
        {/* Screen Title and Subtitle */}
        <div className="flex flex-col gap-2 text-left">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] tracking-[-0.096px] text-[#171717]">
            {language === 'es' ? 'Preguntas Finales' : 'Final Questions'}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#171717]">
            {language === 'es' ? (
              <>
                Revisa tu información abajo. Si algo está mal, toca “<span className="font-semibold">Modificar</span>” para corregirlo
              </>
            ) : (
              <>
                Check your information below. If anything is wrong, tap “<span className="font-semibold">Change</span>” to fix it
              </>
            )}
          </p>
        </div>

        {/* Card 1: Social Information */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:35876"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Información Social' : 'Social Information'}
          </h3>

          {/* Item 1: Military Service */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has servido alguna vez en el ejército?:'
                : 'Have you ever served in the military?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.militaryServed)}
            </p>
          </div>

          {/* Sub-block: Military Service Details */}
          {finalQuestionsData.social.militaryServed === 'yes' && (
            <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'País:' : 'Country:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militaryCountry || 'USA'}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'Rama del servicio:' : 'Branch of service:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militaryBranch || 'Branch of service'}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'Rango/Posición:' : 'Rank/Position:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militaryRank || 'Rank/Position'}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'Especialidad militar:' : 'Military Speciality:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militarySpecialty || 'Military Speciality'}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'Desde Mes/Año:' : 'From Month/Year:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militaryFromDate || 'MM/YYYY'}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                  {language === 'es' ? 'Hasta Mes/Año:' : 'To Month/Year:'}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                  {finalQuestionsData.social.militaryToDate || 'MM/YYYY'}
                </span>
              </div>
            </div>
          )}

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2: Travel to other countries */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has viajado a otros países en los últimos 5 años?'
                : 'Have you traveled to other countries in the last 5 years?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.traveledCountries)}
            </p>
          </div>

          {/* Sub-block: Traveled countries */}
          {finalQuestionsData.social.traveledCountries === 'yes' && (
            <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-[8px] p-4 flex flex-col gap-3 w-full">
              {(finalQuestionsData.social.visitedCountries && finalQuestionsData.social.visitedCountries.length > 0
                ? finalQuestionsData.social.visitedCountries.map((v) => v.country).filter(Boolean)
                : ['USA', 'Panamá']
              ).map((country, idx) => (
                <div key={idx} className="flex flex-col gap-1 items-start w-full">
                  <span className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
                    {language === 'es' ? 'País:' : 'Country:'}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
                    {country}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3: Tribe or clan */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Eres miembro de una tribu o clan?:'
                : 'Are you a member of a tribe or clan?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.clanMember)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 4: Groups, clubs, organizations */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Has pertenecido a algún grupo, club u organización?:'
                : 'Have you belonged to any groups, clubs, or organizations?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.belongedGroups)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 5: Trained to use weapons */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has recibido entrenamiento para usar armas?:'
                : 'Have you ever been trained to use weapons?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.weaponsTraining)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 6: Group that fights the government */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has estado en un grupo que luche contra el gobierno?:'
                : 'Have you ever been in a group that fights the government?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.social.rebelGroup)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(1)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 2: Health and Safety */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:35927"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Salud y Seguridad' : 'Health and Safety'}
          </h3>

          {/* Item 1 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Tienes alguna enfermedad grave que pueda contagiarse a otros, como tuberculosis?'
                : 'Do you have a serious disease that could spread to others, like tuberculosis?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.health.contagiousDisease)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Tienes alguna enfermedad física o mental que pueda ser peligrosa para ti o para otros?'
                : 'Do you have any physical or mental illness that could be dangerous to yourself or others?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.health.dangerousIllness)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has sido adicto a las drogas?'
                : 'Have you ever been addicted to drugs?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.health.drugAddiction)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(2)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 3: Criminal History */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:35941"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Historial Penal' : 'Criminal History'}
          </h3>

          {/* Item 1 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has sido arrestado o has ido a la cárcel por cualquier motivo?'
                : 'Have you ever been arrested or gone to jail for any reason?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q1)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has usado o vendido drogas ilegales?'
                : 'Have you ever used or sold illegal drugs?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q2)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Vas a los EE. UU. a trabajar en prostitución, o lo has hecho en los últimos 10 años?'
                : 'Are you going to the U.S. to work in prostitution, or have you done that in the past 10 years?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q3)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 4 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has ayudado a mover u ocultar dinero proveniente de un delito?'
                : 'Have you ever helped move or hide money that came from a crime?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q4)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 5 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has sido parte del tráfico de personas?'
                : 'Have you ever been part of human trafficking?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q5)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 6 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Algún familiar cercano ha estado involucrado en tráfico de personas en los últimos 5 años?'
                : 'Has a close family member been involved in human trafficking in the last 5 years?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q6)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 7 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has ayudado a alguien más con el tráfico de personas?'
                : 'Have you ever helped someone else with human trafficking?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.criminal.q7)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(3)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 4: Security and Terrorism */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:35971"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Seguridad y Terrorismo' : 'Security and Terrorism'}
          </h3>

          {/* Item 1 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Planeas espiar o hacer algo ilegal en los EE. UU.?'
                : 'Do you plan to spy or do anything illegal in the U.S.?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.security.q1)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Planeas cometer terrorismo o alguna vez has hecho algo parecido?'
                : 'Do you plan to commit terrorism, or have you ever done something like that?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.security.q2)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has dado dinero o ayuda a terroristas o grupos terroristas?'
                : 'Have you ever given money or help to terrorists or terrorist groups?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.security.q3)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 4 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Eres parte de un grupo terrorista?'
                : 'Are you part of a terrorist group?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.security.q4)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 5 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Tu cónyuge o hijo alguna vez han ayudado a un grupo terrorista?'
                : 'Has your spouse or child ever helped a terrorist group?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.security.q5)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(4)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 5: Human Rights and Violence */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:35993"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Derechos Humanos y Violencia' : 'Human Rights and Violence'}
          </h3>

          {/* Item 1 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has ayudado con genocidio (asesinato de un grupo de personas)?'
                : 'Have you ever helped with genocide (killing a group of people)?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.humanRights.q1)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has ayudado con torturas?'
                : 'Have you ever helped with torture?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.humanRights.q2)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has ayudado con asesinatos políticos u otra violencia?'
                : 'Have you ever helped with political killings or other violence?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.humanRights.q3)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 4 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has hecho que niños luchen en la guerra?'
                : 'Have you ever made children fight in war?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.humanRights.q4)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 5 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[22px] tracking-[-0.064px] text-[#171717]">
              {language === 'es'
                ? 'Si trabajaste para un gobierno, ¿alguna vez impediste que las personas practicaran su religión?'
                : 'If you worked for a government, did you ever stop people from practicing their religion?'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.humanRights.q5)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(5)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>

        {/* Card 6: Immigration and Legal Issues */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-4 flex flex-col gap-4 shadow-2xs text-left w-full"
          data-node-id="508:36015"
        >
          <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.08px] text-[#262626]">
            {language === 'es' ? 'Asuntos Migratorios y Legales' : 'Immigration and Legal Issues'}
          </h3>

          {/* Item 1 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has mentido o usado documentos falsos para intentar obtener una visa o entrar a EE. UU.?:'
                : 'Have you ever lied or used fake documents to try to get a visa or enter the U.S.?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q1)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 2 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has sido deportado o expulsado de algún país?:'
                : 'Have you ever been deported or sent out of any country?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q2)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 3 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez te has llevado a un niño ciudadano estadounidense del padre que tenía la custodia legal?:'
                : 'Have you ever taken a U.S. citizen child away from the parent who had legal custody?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q3)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 4 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has votado en los EE. UU. sin estar autorizado?:'
                : 'Have you ever voted in the U.S. when you were not allowed?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q4)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 5 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Alguna vez has renunciado a tu ciudadanía estadounidense para evitar pagar impuestos?:'
                : 'Have you ever given up your U.S. citizenship to avoid paying taxes?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q5)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 6 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Tuviste una visa J-1 anteriormente y aún estás obligado a permanecer en tu país de origen por 2 años?:'
                : 'Did you have a J-1 visa before and are you still required to stay in your home country for 2 years?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q6)}
            </p>
          </div>

          <div className="w-full h-px bg-[#e5e5e5]" />

          {/* Item 7 */}
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#171717]">
              {language === 'es'
                ? '¿Asististe a una escuela pública de EE. UU. con una visa de estudiante (F) sin reembolsar a la escuela?:'
                : 'Did you attend a U.S. public school on a student visa (F) without paying the school back?:'}
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.032px] text-[#404040]">
              {renderYesNo(finalQuestionsData.immigration.q7)}
            </p>
          </div>

          {/* Change Button */}
          <div className="pt-1 w-full">
            <button
              type="button"
              onClick={() => handleEditSection(6)}
              className="w-full min-h-[44px] h-[44px] bg-[#d3efff] hover:bg-[#b0deff] active:scale-[0.98] text-[#0045ff] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center"
            >
              {language === 'es' ? 'Modificar' : 'Change'}
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div
        className="bg-[#fafafa] border-t border-[#e5e5e5] px-4 pt-4 pb-6 flex flex-col items-center shrink-0 w-full"
        data-node-id="508:36045"
      >
        <button
          onClick={handleContinue}
          className="w-full max-w-lg min-h-[44px] h-[44px] bg-[#0038d0] hover:bg-[#002bb0] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.09)] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>
            {language === 'es'
              ? 'Información correcta, continuar'
              : 'Correct information, continue'}
          </span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
