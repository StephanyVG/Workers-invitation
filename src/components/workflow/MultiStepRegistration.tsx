import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SignaturePad } from '../ui/SignaturePad';
import { 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Phone, 
  FileCheck, 
  Briefcase, 
  Camera, 
  ShieldCheck,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export const MultiStepRegistration: React.FC = () => {
  const { worker, updateWorker, applyToJob, jobs, setCurrentTab, addToast, signContract } = useApp();

  const [step, setStep] = useState<number>(1);

  // Form State
  const [fullName, setFullName] = useState<string>(worker.fullName || '');
  const [phone, setPhone] = useState<string>(worker.phone || '');
  const [passportNumber, setPassportNumber] = useState<string>(worker.passportNumber || '');
  const [selectedJobId, setSelectedJobId] = useState<string>(jobs[0]?.id || '');
  const [hasUploadedPhoto, setHasUploadedPhoto] = useState<boolean>(!!worker.photoUrl);
  const [hasUploadedPassport, setHasUploadedPassport] = useState<boolean>(true);
  const [signatureData, setSignatureData] = useState<string | null>(worker.signatureUrl);

  // Friendly Validation Errors
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; passport?: string }>({});

  const validateStep1 = () => {
    const newErrors: { fullName?: string; phone?: string; passport?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 5) {
      newErrors.fullName = 'Por favor escribe tu nombre y apellidos completos para saber cómo llamarte.';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Por favor escribe los 10 números de tu teléfono para poder comunicarnos contigo.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = () => {
    if (validateStep1()) {
      updateWorker({ fullName, phone });
      addToast('¡Datos Guardados!', 'Avanzamos al siguiente paso para revisar tus papeles.', 'success');
      setStep(2);
    }
  };

  const handleNextStep2 = () => {
    if (!hasUploadedPhoto) {
      addToast('Falta tu Foto', 'Por favor sube o tómate una foto donde se vea bien tu rostro.', 'warning');
      return;
    }
    setStep(3);
  };

  const handleNextStep3 = () => {
    if (!selectedJobId) {
      addToast('Selecciona un Trabajo', 'Elige la vacante que más te interese para continuar.', 'warning');
      return;
    }
    setStep(4);
  };

  const handleFinalSubmit = () => {
    if (!signatureData) {
      addToast('Firma Requerida', 'Por favor dibuja tu firma en el recuadro blanco para terminar.', 'warning');
      return;
    }

    // Apply job and save signature
    applyToJob(selectedJobId);
    signContract(signatureData);
    setCurrentTab('home');
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar p-4">
      {/* Header with back button & visual progress */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => {
            if (step > 1) setStep(step - 1);
            else setCurrentTab('home');
          }}
          className="p-2 text-slate-600 hover:text-slate-900 bg-white rounded-xl shadow-sm border border-slate-200"
          aria-label="Regresar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
          Paso {step} de 4
        </span>
      </div>

      {/* Progress Bar Header */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-6 overflow-hidden">
        <div 
          className="bg-sky-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {/* STEP 1: Datos Personales Sencillos */}
      {step === 1 && (
        <div className="flex-1 flex flex-col animate-fadeIn">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
              1. Escribe tus Datos Personales
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Solo necesitamos tu nombre y tu número de teléfono celular para ponernos en contacto contigo.
            </p>
          </div>

          <div className="space-y-4 flex-1">
            {/* Nombre Completo */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <User className="w-4 h-4 text-sky-600" />
                Tu Nombre Completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                }}
                placeholder="Ejemplo: Mateo Hernández Ruiz"
                className={`w-full p-3 text-sm bg-slate-50 border rounded-xl outline-none transition-all ${
                  errors.fullName ? 'border-amber-500 bg-amber-50/50 text-amber-950' : 'border-slate-300 focus:border-sky-500 focus:bg-white'
                }`}
              />
              {errors.fullName ? (
                <p className="text-xs text-amber-700 font-medium flex items-center gap-1.5 mt-1">
                  <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.fullName}
                </p>
              ) : (
                <p className="text-[11px] text-slate-400">Escríbelo exactamente como viene en tu credencial.</p>
              )}
            </div>

            {/* Teléfono */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600" />
                Número de Teléfono Celular
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="Ejemplo: 811 456 7890"
                className={`w-full p-3 text-sm bg-slate-50 border rounded-xl outline-none transition-all ${
                  errors.phone ? 'border-amber-500 bg-amber-50/50 text-amber-950' : 'border-slate-300 focus:border-sky-500 focus:bg-white'
                }`}
              />
              {errors.phone ? (
                <p className="text-xs text-amber-700 font-medium flex items-center gap-1.5 mt-1">
                  <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.phone}
                </p>
              ) : (
                <p className="text-[11px] text-slate-400">Te enviaremos un mensaje de texto para avisarte cuando tu trabajo sea aprobado.</p>
              )}
            </div>

            {/* Pasaporte opcional */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-600" />
                Número de Pasaporte (Si lo tienes a la mano)
              </label>
              <input
                type="text"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                placeholder="Ejemplo: G29481059"
                className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-sky-500 focus:bg-white transition-all uppercase"
              />
              <p className="text-[11px] text-slate-400">Si no lo tienes ahora, no te preocupes. Puedes agregarlo después.</p>
            </div>
          </div>

          <button
            onClick={handleNextStep1}
            className="w-full mt-6 py-3.5 px-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            Continuar al Paso 2
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Carga de Papeles y Foto */}
      {step === 2 && (
        <div className="flex-1 flex flex-col animate-fadeIn">
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
              2. Tus Fotos y Documentos
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Es muy sencillo: solo toma una foto clara de tu rostro y de tu pasaporte o identificación.
            </p>
          </div>

          <div className="space-y-4 flex-1">
            {/* Foto de Rostro */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  hasUploadedPhoto ? 'bg-emerald-100 text-emerald-600' : 'bg-sky-100 text-sky-600'
                }`}>
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Foto de tu Rostro</h4>
                  <p className="text-[11px] text-slate-500">
                    {hasUploadedPhoto ? '¡Foto lista y aceptada!' : 'Tómate una foto donde se vea bien tu cara'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setHasUploadedPhoto(true);
                  addToast('Foto Capturada', 'Se guardó la foto de tu rostro correctamente.', 'success');
                }}
                className={`px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                  hasUploadedPhoto
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
              >
                {hasUploadedPhoto ? 'Cambiar Foto' : 'Tomar Foto'}
              </button>
            </div>

            {/* Foto Pasaporte */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  hasUploadedPassport ? 'bg-emerald-100 text-emerald-600' : 'bg-sky-100 text-sky-600'
                }`}>
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Foto de Pasaporte</h4>
                  <p className="text-[11px] text-slate-500">
                    {hasUploadedPassport ? 'Pasaporte capturado' : 'Foto de la hoja principal con tu foto'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setHasUploadedPassport(true);
                  addToast('Pasaporte Guardado', 'Se registró la fotografía de tu pasaporte.', 'success');
                }}
                className={`px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                  hasUploadedPassport
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
              >
                {hasUploadedPassport ? 'Ver Foto' : 'Subir Foto'}
              </button>
            </div>

            {/* Cuadro informativo de ayuda */}
            <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <p className="text-xs text-sky-900 leading-relaxed">
                <strong>Tus datos están protegidos:</strong> Solo la empresa contratante usará tus documentos para tramitar tu permiso de trabajo legal.
              </p>
            </div>
          </div>

          <button
            onClick={handleNextStep2}
            className="w-full mt-6 py-3.5 px-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            Continuar al Paso 3
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 3: Selección de Vacante */}
      {step === 3 && (
        <div className="flex-1 flex flex-col animate-fadeIn">
          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
              3. Elige el Trabajo que Prefieras
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Toca la tarjeta del empleo en el que te gustaría trabajar este año.
            </p>
          </div>

          <div className="space-y-3 flex-1">
            {jobs.map((job) => {
              const isSelected = selectedJobId === job.id;

              return (
                <div
                  key={job.id}
                  onClick={() => setSelectedJobId(job.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-sky-50 border-2 border-sky-600 shadow-md ring-2 ring-sky-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                        {job.cropType}
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 mt-1">{job.title}</h4>
                      <p className="text-xs text-slate-500">{job.companyName} • {job.location}</p>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0" />
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
                      {job.payRate}
                    </span>
                    <span className="text-slate-600 font-medium">
                      {job.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNextStep3}
            className="w-full mt-6 py-3.5 px-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            Continuar al Paso 4
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 4: Firma Digital y Enviar */}
      {step === 4 && (
        <div className="flex-1 flex flex-col animate-fadeIn">
          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
              4. Firma tu Solicitud
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Dibuja tu firma con el dedo en la recuadro para confirmar tu postulación.
            </p>
          </div>

          <div className="space-y-4 flex-1">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-600" />
                Tu Firma Digital
              </label>

              <SignaturePad
                onSave={(dataUrl) => {
                  setSignatureData(dataUrl);
                  addToast('Firma Guardada', 'Tu firma se registró correctamente.', 'success');
                }}
              />
            </div>

            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ¡Todo listo para enviar!
              </p>
              <p className="text-[11px] leading-relaxed opacity-90">
                Al presionar el botón verde abajo, enviaremos tus datos al patrón para apartar tu vacante.
              </p>
            </div>
          </div>

          <button
            onClick={handleFinalSubmit}
            className="w-full mt-6 py-4 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-base rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all"
          >
            ¡Listo, Enviar mi Solicitud!
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
