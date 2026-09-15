import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const I9InformationReviewScreen: React.FC = () => {
  const {
    language,
    setCurrentTab,
    setShowI9SignBottomSheet,
    i9FormData,
    showI9SavedToast,
    setShowI9SavedToast,
  } = useApp();

  useEffect(() => {
    if (showI9SavedToast) {
      const timer = setTimeout(() => {
        setShowI9SavedToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showI9SavedToast, setShowI9SavedToast]);

  const fields = [
    {
      label: language === 'es' ? 'Apellido (Nombre de familia):' : 'Last Name (Family Name):',
      value: i9FormData.lastName || 'García',
    },
    {
      label: language === 'es' ? 'Primer nombre (Nombre de pila):' : 'First Name (Given Name):',
      value: i9FormData.firstName || 'Francisco',
    },
    {
      label: language === 'es' ? 'Inicial del segundo nombre:' : 'Middle Initial:',
      value: i9FormData.middleInitial || '-',
    },
    {
      label: language === 'es' ? 'Fecha de nacimiento:' : 'Date of Birth:',
      value: i9FormData.dateOfBirth || '24/12/1960',
    },
    {
      label: language === 'es' ? 'Estado de ciudadanía/inmigración:' : 'Citizenship/Immigration Status:',
      value:
        language === 'es'
          ? i9FormData.citizenshipStatus === 'A citizen of the United States'
            ? 'Ciudadano de los Estados Unidos'
            : i9FormData.citizenshipStatus === 'A lawful permanent resident (Enter USCIS or A-Number.)'
            ? 'Residente permanente legal'
            : i9FormData.citizenshipStatus === 'An alien authorized to work until'
            ? 'Extranjero autorizado para trabajar'
            : 'Nacional no ciudadano de los Estados Unidos'
          : i9FormData.citizenshipStatus || 'A noncitizen national of the United States',
    },
    {
      label: language === 'es' ? 'Dirección (calle, ciudad, estado, C.P.):' : 'Address (street, city, state, ZIP):',
      value: i9FormData.address || '123 Farm Rd, Sunnyside, WA 98944',
    },
    {
      label: language === 'es' ? 'Número de pasaporte extranjero:' : 'Foreign Passport Number:',
      value: i9FormData.passportNumber || '123213',
    },
    {
      label: language === 'es' ? 'País de emisión:' : 'Country of Issuance:',
      value: i9FormData.countryOfIssuance || 'Mexico',
    },
    {
      label: language === 'es' ? 'Fecha de vencimiento de la visa:' : 'Visa date of expiration:',
      value: i9FormData.visaExpirationDate || '12/12/2026',
    },
  ];

  const handleInformationWrong = () => {
    setCurrentTab('i9_edit');
  };

  return (
    <div
      className="flex-1 flex flex-col bg-[#f5f5f5] overflow-y-auto custom-scrollbar animate-fade-in relative h-full min-h-0 text-left font-['Inter',sans-serif] pb-10"
      data-node-id="3520:36195"
    >
      {/* Top Header Bar */}
      <div
        className="sticky top-0 z-30 bg-[#f5f5f5] w-full px-4 py-3 border-b border-[#e5e5e5] flex items-center justify-between shadow-2xs shrink-0"
        data-node-id="3520:36197"
      >
        <button
          onClick={() => setCurrentTab('home')}
          className="bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#171717] shadow-xs active:scale-90 transition-all cursor-pointer shrink-0"
          aria-label={language === 'es' ? 'Regresar' : 'Go back'}
          data-node-id="3520:36197;3529:1306"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>

        <h1 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-[#0038d0] text-center truncate flex-1 px-2">
          {language === 'es' ? 'Revisión de Información I-9' : 'I9 Information Review'}
        </h1>

        <div className="size-[44px] shrink-0" />
      </div>

      {/* Main Container */}
      <div className="p-4 sm:p-6 flex flex-col gap-6 max-w-[480px] mx-auto w-full relative">
        {/* Green Saved Toast Tooltip (Figma Node 3525:37838) */}
        {showI9SavedToast && (
          <div
            className="bg-[#d7ffe2] border border-[#068f2a] rounded-[12px] px-4 py-3 flex items-center justify-between gap-3 shadow-md animate-fade-in w-full"
            data-node-id="3525:37980"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-[#068f2a] shrink-0">
                check_circle
              </span>
              <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#0b5c22] tracking-[-0.056px]">
                {language === 'es' ? 'Tu información ha sido guardada' : 'Your information has been save'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowI9SavedToast(false)}
              className="text-[#068f2a] hover:text-[#0b5c22] cursor-pointer"
              aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        )}

        {/* Title & Instruction */}
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h2
            className="font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px] text-[#0038d0] tracking-[-0.096px]"
            data-node-id="3520:36201"
          >
            {language === 'es' ? 'Revisión de Información I-9' : 'I9 Information Review'}
          </h2>
          <p
            className="font-['Inter',sans-serif] font-normal text-[16px] leading-[22px] text-[#171717] tracking-[-0.032px]"
            data-node-id="3520:36204"
          >
            {language === 'es'
              ? 'Revisa la información cuidadosamente. Para editar errores, selecciona "La información es incorrecta".'
              : 'Review the information carefully. To edit errors, select "The information is wrong."'}
          </p>
        </div>

        {/* Info Card with Bulleted List */}
        <div
          className="bg-white border border-[#e5e5e5] rounded-[24px] p-5 flex flex-col gap-4 shadow-xs"
          data-node-id="3520:36205"
        >
          <div className="flex flex-col gap-3.5">
            {fields.map((field, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="pt-1.5 shrink-0">
                  <div className="size-[8px] rounded-full bg-[#0038d0]" />
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#171717] tracking-[-0.056px]">
                    {field.label}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[18px] text-[#404040] tracking-[-0.056px]">
                    {field.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full pt-2">
          {/* Secondary Button: The information is wrong -> Navigates to Edit Information (Figma 3520:37481) */}
          <button
            type="button"
            onClick={handleInformationWrong}
            className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-white hover:bg-slate-50 active:scale-[0.98] border border-[#e5e5e5] text-[#171717] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-xs transition-all cursor-pointer flex items-center justify-center"
            data-node-id="3520:36205;secondary"
          >
            <span>
              {language === 'es' ? 'La información es incorrecta' : 'The information is wrong'}
            </span>
          </button>

          {/* Primary Button: The information is correct */}
          <button
            type="button"
            onClick={() => setShowI9SignBottomSheet(true)}
            className="w-full h-[48px] min-h-[44px] px-4 py-[10px] bg-[#0038d0] hover:bg-[#0030b3] active:scale-[0.98] text-[#f5f5f5] rounded-full font-['Inter',sans-serif] font-semibold text-[16px] leading-[22px] text-center shadow-md transition-all cursor-pointer flex items-center justify-center"
            data-node-id="3520:36205;primary"
          >
            <span>
              {language === 'es' ? 'La información es correcta' : 'The information is correct'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
