import React from 'react';
import { useApp } from '../../context/AppContext';

export const JobInvitationDetailScreen: React.FC = () => {
  const { language, setCurrentTab, addToast, updateWorker, onboardingPath } = useApp();

  const handleSeeJobOffer = () => {
    updateWorker({ appliedJobId: '1' });
    setCurrentTab('job_offer_detail');
  };

  const handleDeclineJob = () => {
    addToast(
      language === 'es' ? 'Invitación rechazada' : 'Invitation declined',
      language === 'es'
        ? 'Has declinado la invitación para esta vacante.'
        : 'You have declined the invitation for this job.',
      'info'
    );
    setCurrentTab('home');
  };

  const handleBack = () => {
    if (onboardingPath === 'invite') {
      setCurrentTab('terms_service');
    } else {
      setCurrentTab('home');
    }
  };

  return (
    <div
      className="bg-[#f5f5f5] flex-1 w-full flex flex-col justify-between overflow-y-auto custom-scrollbar relative h-full min-h-0 select-none font-['Inter',sans-serif] text-left animate-fade-in"
      data-node-id="631:28603"
      data-name="Job Details"
    >
      {/* Scrollable Container with Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Header Banner: Height 154px (Figma node 631:28604) */}
        <div className="h-[154px] relative shrink-0 w-full overflow-hidden" data-node-id="631:28604" data-name="Job Image">
          {/* Cover Image with fallback */}
          <img
            src="/apples_orchard.png"
            alt="Sunnydale Orchards apples"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Circular Back Button (Figma node 631:28678) */}
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 z-20 bg-[#fafafa]/95 hover:bg-white border border-[#e5e5e5] rounded-full size-[44px] flex items-center justify-center text-[#191c1b] shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label={language === 'es' ? 'Regresar' : 'Back'}
            data-node-id="631:28678"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        </div>

        {/* Content Container (Figma node 631:28605) */}
        <div className="flex flex-col gap-[24px] items-start px-[16px] py-[24px] w-full" data-node-id="631:28605">
          {/* Job Summary (Figma node 631:28606) */}
          <div className="flex flex-col gap-[8px] items-start w-full" data-node-id="631:28606">
            <h1
              className="font-['DM_Sans',sans-serif] font-semibold text-[18px] leading-[24px] text-[#0038d0] tracking-[-0.072px] text-left"
              data-node-id="631:28608"
            >
              {language === 'es'
                ? 'Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores'
                : 'Integrated Pest Management and Pollinator Conservation Coordinator'}
            </h1>

            <p
              className="font-normal text-[14px] leading-[24px] text-[#171717] underline decoration-solid cursor-pointer hover:text-[#0038d0] transition-colors"
              data-node-id="631:28609"
            >
              {language === 'es' ? 'Granja Sunnydale Orchards' : 'Sunnydale Orchards farm'}
            </p>

            <p className="font-normal text-[14px] leading-[24px] text-[#171717]" data-node-id="631:28610">
              {language === 'es' ? 'Ciudad, Estado' : 'City, State'}
            </p>
          </div>

          {/* Divider (Figma node 631:28611) */}
          <div className="w-full border-t border-[#e5e5e5]" data-node-id="631:28611" />

          {/* Job Details Cards Section (Figma node 631:28612) */}
          <div className="flex flex-col gap-[16px] items-start w-full" data-node-id="631:28612">
            {/* Card 1: Job Info Row (Figma node 631:28613) */}
            <div
              className="bg-white border border-[#e5e5e5] flex gap-[12px] items-center justify-between p-[16px] rounded-[8px] w-full shadow-2xs"
              data-node-id="631:28613"
            >
              {/* Start Date */}
              <div className="flex flex-1 flex-col gap-[4px] items-center text-center" data-node-id="631:28614">
                <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] whitespace-nowrap">
                  {language === 'es' ? 'Fecha Inicio' : 'Start Date'}
                </p>
                <p className="font-normal text-[14px] text-[#171717] tracking-[-0.056px] whitespace-nowrap">
                  12/04/2025
                </p>
              </div>

              {/* Period */}
              <div className="flex flex-1 flex-col gap-[4px] items-center text-center" data-node-id="631:28618">
                <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] whitespace-nowrap">
                  {language === 'es' ? 'Período' : 'Period'}
                </p>
                <p className="font-normal text-[14px] text-[#171717] tracking-[-0.056px] whitespace-nowrap">
                  {language === 'es' ? '3 Meses' : '3 Months'}
                </p>
              </div>

              {/* Pay Rate */}
              <div className="flex flex-1 flex-col gap-[4px] items-center text-center" data-node-id="631:28622">
                <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px] whitespace-nowrap">
                  {language === 'es' ? 'Tarifa' : 'Pay rate'}
                </p>
                <p className="font-normal text-[14px] text-[#171717] tracking-[-0.056px] whitespace-nowrap">
                  12 USD
                </p>
              </div>
            </div>

            {/* Card 2: Job Description Container (Figma node 631:28626) */}
            <div
              className="bg-white border border-[#e5e5e5] flex flex-col items-start p-[16px] rounded-[8px] w-full shadow-2xs gap-[8px]"
              data-node-id="631:28626"
            >
              <h2 className="font-semibold text-[16px] text-[#171717] tracking-[-0.064px]">
                {language === 'es' ? 'Descripción' : 'Description'}
              </h2>
              <p className="font-normal text-[14px] leading-[18px] text-[#171717]">
                {language === 'es'
                  ? 'A design system for enterprise-level products.'
                  : 'A design system for enterprise-level products.'}
              </p>
            </div>

            {/* Card 3: Requirements Container (Figma node 631:28631) */}
            <div
              className="bg-white border border-[#e5e5e5] flex flex-col gap-[16px] items-start p-[16px] rounded-[8px] w-full shadow-2xs"
              data-node-id="631:28631"
            >
              <h2 className="font-semibold text-[16px] text-[#171717] tracking-[-0.064px]">
                {language === 'es' ? 'Requisitos' : 'Requirements'}
              </h2>

              <div className="flex flex-col gap-[12px] items-start w-full text-left" data-node-id="631:28633">
                {/* Work Schedule */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28634">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Horario de trabajo' : 'Work Schedule'}
                  </p>
                  <div className="flex font-normal text-[14px] text-[#171717] justify-between items-center w-full">
                    <span>{language === 'es' ? 'Lunes - Viernes' : 'Monday - Friday'}</span>
                    <span>09:00 - 18:00</span>
                  </div>
                </div>

                {/* Minimum Education/Training Required */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28639">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es'
                      ? 'Educación/Formación mínima requerida'
                      : 'Minimum Education/Training Required'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es' ? 'Licenciatura' : "Bachelor's"}
                  </p>
                </div>

                {/* Minimum experience required */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28643">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Experiencia mínima requerida' : 'Minimum experience required'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es' ? '1 año' : '1 year'}
                  </p>
                </div>

                {/* Environmental conditions */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28647">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Condiciones ambientales' : 'Environmental conditions'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es'
                      ? 'Químicos, Calor, Frío, Empujar, Jalar'
                      : 'Chemicals, Heat,, Cold, Pushing, Pulling'}
                  </p>
                </div>

                {/* Language and level */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28651">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Idioma y nivel' : 'Language and level'}
                  </p>
                  <div className="flex font-normal text-[14px] text-[#171717] justify-between items-center w-full">
                    <span>{language === 'es' ? 'Inglés' : 'English'}</span>
                    <span>B2-Intermediate</span>
                  </div>
                </div>

                {/* Required to drive */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28656">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Requiere conducir' : 'Required to drive'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es' ? 'Sí' : 'Yes'}
                  </p>
                </div>

                {/* Minimum Lift */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28660">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Carga mínima' : 'Minimum Lift'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">50Kg</p>
                </div>

                {/* Required to supervise others */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28664">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Supervisar a otros' : 'Required to supervise others'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es' ? 'No' : 'No'}
                  </p>
                </div>

                {/* Meals Provided */}
                <div className="flex flex-col gap-[4px] w-full" data-node-id="631:28668">
                  <p className="font-semibold text-[14px] text-[#525252] tracking-[-0.056px]">
                    {language === 'es' ? 'Comidas provistas' : 'Meals Provided'}
                  </p>
                  <p className="font-normal text-[14px] text-[#171717]">
                    {language === 'es' ? 'No' : 'No'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Footer Action Bar (Figma node 631:28673) */}
      <div
        className="sticky bottom-0 bg-[#fafafa] border-t border-[#e5e5e5] flex flex-col items-center shrink-0 w-full z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
        data-node-id="631:28673"
      >
        <div className="w-full flex flex-col gap-[12px] items-center px-[16px] pt-[12px] pb-[16px]">
          {/* Primary Action Button: See job offer (Figma node 631:28675) */}
          <button
            onClick={handleSeeJobOffer}
            className="w-full bg-[#0038d0] border border-[#2874ff] hover:bg-[#0030b3] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.09)] flex items-center justify-center min-h-[44px] px-[16px] py-[10px] rounded-[100px] text-[#f5f5f5] font-semibold text-[16px] leading-[22px] transition-all cursor-pointer"
            data-node-id="631:28675"
          >
            {language === 'es' ? 'Ver oferta de trabajo' : 'See job offer'}
          </button>

          {/* Ghost Action Button: I don't want this job (Figma node 631:28676) */}
          <button
            onClick={handleDeclineJob}
            className="w-full h-[44px] flex items-center justify-center py-[10px] rounded-[100px] text-[#c7290e] hover:bg-red-50 active:scale-[0.98] font-semibold text-[16px] leading-[22px] transition-all cursor-pointer"
            data-node-id="631:28676"
          >
            {language === 'es' ? 'No quiero este trabajo' : "I don't want this job"}
          </button>
        </div>

        {/* Gesture Navigation Handle */}
        <div className="h-[20px] w-full flex items-center justify-center pb-2" data-node-id="631:28677">
          <div className="bg-[#191c1b] h-[4px] w-[108px] rounded-[12px]" />
        </div>
      </div>
    </div>
  );
};
