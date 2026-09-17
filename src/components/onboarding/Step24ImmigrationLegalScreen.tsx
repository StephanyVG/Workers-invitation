import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const Step24ImmigrationLegalScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    addToast,
    finalQuestionsData,
    updateFinalQuestions,
    editingFinalQuestionFromReview,
    setEditingFinalQuestionFromReview,
  } = useApp();

  const [q1, setQ1] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q1);
  const [q2, setQ2] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q2);
  const [q3, setQ3] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q3);
  const [q4, setQ4] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q4);
  const [q5, setQ5] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q5);
  const [q6, setQ6] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q6);
  const [q7, setQ7] = useState<'yes' | 'no' | null>(finalQuestionsData.immigration.q7);

  const toggleYesNo = (
    currentVal: 'yes' | 'no' | null,
    setVal: React.Dispatch<React.SetStateAction<'yes' | 'no' | null>>,
    target: 'yes' | 'no'
  ) => {
    setVal(currentVal === target ? null : target);
  };

  const handleContinue = () => {
    if (editingFinalQuestionFromReview) {
      updateFinalQuestions({
        immigration: { q1, q2, q3, q4, q5, q6, q7 },
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
    setCurrentTab('step25_final_review');
  };

  const handleCancel = () => {
    setEditingFinalQuestionFromReview(false);
    setCurrentTab('visa_review_final_questions');
  };

  const handleSelectNoForAll = () => {
    setQ1('no');
    setQ2('no');
    setQ3('no');
    setQ4('no');
    setQ5('no');
    setQ6('no');
    setQ7('no');
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
    setCurrentTab('step23_human_rights');
  };

  const getOptionButtonClass = (isSelected: boolean) => {
    return isSelected
      ? 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-[#0045ff] text-white shadow-[0px_0px_12px_rgba(4,71,255,0.4)] border border-[#0045ff]'
      : 'flex-1 min-h-[48px] px-4 py-3 rounded-[12px] font-["Inter",sans-serif] font-medium text-[16px] leading-[22px] flex items-center justify-center transition-all cursor-pointer bg-white border border-[#d4d4d4] text-[#171717] hover:border-[#0045ff]';
  };

  return (
    <div
      className="bg-[#fafafa] flex-1 w-full flex flex-col justify-between overflow-hidden animate-slide-right relative select-none h-full min-h-0"
      data-node-id="1:6956"
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
              ? (language === 'es' ? 'Modificar Inmigración y Legal' : 'Edit Immigration & Legal')
              : (language === 'es' ? 'Preguntas Finales' : 'Final Questions')}
          </span>

          <div className="w-[40px]" />
        </div>

        {/* Step Progress Bar (80% progress into Final Questions sequence) */}
        {!editingFinalQuestionFromReview && (
          <div className="w-full h-[4px] bg-[#e5e5e5]">
            <div className="h-full bg-[#0038d0] transition-all duration-300 w-[80%]" />
          </div>
        )}
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-[16px] py-[24px] space-y-6 min-h-0 text-left">
        {/* Section Title */}
        <h1 className="font-['DM_Sans',sans-serif] font-bold text-[24px] leading-[32px] text-[#171717] tracking-[-0.096px] text-center my-2">
          {language === 'es' ? 'Immigración y asuntos legales' : 'Immigration and Legal Issues'}
        </h1>

        <div className="space-y-4 w-full">
          {/* Question 1 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has mentido o usado documentos falsos para intentar obtener una visa o entrar a EE. UU.?'
                : 'Have you ever lied or used fake documents to try to get a visa or enter the U.S.?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'yes')}
                className={getOptionButtonClass(q1 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q1, setQ1, 'no')}
                className={getOptionButtonClass(q1 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has sido deportado o expulsado de algún país?'
                : 'Have you ever been deported or sent out of any country?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'yes')}
                className={getOptionButtonClass(q2 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q2, setQ2, 'no')}
                className={getOptionButtonClass(q2 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez le has quitado un hijo ciudadano estadounidense al padre que tenía la custodia legal?'
                : 'Have you ever taken a U.S. citizen child away from the parent who had legal custody?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'yes')}
                className={getOptionButtonClass(q3 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q3, setQ3, 'no')}
                className={getOptionButtonClass(q3 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has votado en los EE. UU. cuando no estabas autorizado?'
                : 'Have you ever voted in the U.S. when you were not allowed?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'yes')}
                className={getOptionButtonClass(q4 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q4, setQ4, 'no')}
                className={getOptionButtonClass(q4 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Alguna vez has renunciado a la ciudadanía estadounidense para evitar pagar impuestos?'
                : 'Have you ever given up your U.S. citizenship to avoid paying taxes?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'yes')}
                className={getOptionButtonClass(q5 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q5, setQ5, 'no')}
                className={getOptionButtonClass(q5 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 6 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Tuviste una visa J-1 anteriormente y aún estás obligado a permanecer en tu país de origen por 2 años?'
                : 'Did you have a J-1 visa before and are you still required to stay in your home country for 2 years?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q6, setQ6, 'yes')}
                className={getOptionButtonClass(q6 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q6, setQ6, 'no')}
                className={getOptionButtonClass(q6 === 'no')}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 7 */}
          <div className="bg-white border border-[#e5e5e5] rounded-[16px] p-5 shadow-2xs space-y-4 text-left">
            <h2 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[28px] text-[#171717] tracking-[-0.08px]">
              {language === 'es'
                ? '¿Asististe a una escuela pública de EE. UU. con visa de estudiante (F) sin reembolsar a la escuela?'
                : 'Did you attend a U.S. public school on a student visa (F) without paying the school back?'}
            </h2>
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => toggleYesNo(q7, setQ7, 'yes')}
                className={getOptionButtonClass(q7 === 'yes')}
              >
                {language === 'es' ? 'Sí' : 'Yes'}
              </button>
              <button
                type="button"
                onClick={() => toggleYesNo(q7, setQ7, 'no')}
                className={getOptionButtonClass(q7 === 'no')}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed-bottom-bar w-full flex flex-col items-center gap-2.5 shrink-0">
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
