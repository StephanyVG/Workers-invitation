import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { 
  MessageSquare, 
  RotateCcw, 
  Globe, 
  Check, 
  Edit2,
  FileCheck
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { worker, updateWorker, resetDemoData, addToast } = useApp();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>(worker.fullName);
  const [phone, setPhone] = useState<string>(worker.phone);
  const [location, setLocation] = useState<string>(worker.location);

  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  const handleSaveProfile = () => {
    updateWorker({ fullName, phone, location });
    setIsEditing(false);
    addToast('Perfil Actualizado', 'Tus datos de contacto se guardaron correctamente.', 'success');
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
          Mi Cuenta y Perfil
        </h2>
        <p className="text-xs text-slate-600 mt-1">
          Tus datos de contacto y opciones de asistencia telefónica.
        </p>
      </div>

      {/* User Card */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          {worker.photoUrl ? (
            <img
              src={worker.photoUrl}
              alt={worker.fullName}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-400 shadow-sm"
            />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-sky-600 font-bold text-xl text-white flex items-center justify-center shadow-sm">
              {worker.fullName.charAt(0)}
            </div>
          )}

          <div>
            <h3 className="text-base font-extrabold text-slate-900">{worker.fullName}</h3>
            <p className="text-xs text-slate-500 font-medium">{worker.phone}</p>
            <span className="text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md mt-1 inline-block">
              {worker.location}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl transition-all"
        >
          <Edit2 className="w-4 h-4" />
        </button>
      </div>

      {/* Edit Profile Form if Editing */}
      {isEditing && (
        <div className="bg-white p-4 rounded-3xl border border-sky-300 shadow-md space-y-3 animate-fadeIn">
          <h4 className="text-xs font-extrabold text-sky-800">Modificar Datos de Contacto</h4>
          
          <div>
            <label className="text-[11px] font-bold text-slate-700 block mb-1">Nombre Completo</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2.5 text-xs bg-slate-50 border rounded-xl"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 block mb-1">Teléfono</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2.5 text-xs bg-slate-50 border rounded-xl"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-700 block mb-1">Lugar de Residencia</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2.5 text-xs bg-slate-50 border rounded-xl"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 py-2 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveProfile}
              className="flex-1 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl shadow-sm"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      )}

      {/* Contract Signature Card */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-800 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-sky-600" />
            Estado de tu Firma Digital
          </span>
          {worker.hasSignedContract ? (
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              Firmado
            </span>
          ) : (
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
              Pendiente
            </span>
          )}
        </div>

        {worker.signatureUrl ? (
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex items-center justify-between">
            <img src={worker.signatureUrl} alt="Firma registrada" className="h-10 object-contain" />
            <span className="text-[11px] text-slate-400">Registrada en sistema</span>
          </div>
        ) : (
          <p className="text-xs text-slate-500">
            Aún no has firmado tu contrato para la temporada. Completa el flujo en la pestaña de inicio.
          </p>
        )}
      </div>

      {/* Support & WhatsApp Actions */}
      <div className="space-y-2">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            addToast('WhatsApp Abierto', 'Conectando con el coordinador de atención en español.', 'info');
          }}
          className="w-full p-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-2xl shadow-md flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5" />
            <span>Ayuda por WhatsApp en Español</span>
          </div>
          <Check className="w-4 h-4 opacity-80" />
        </a>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between text-xs text-slate-700 font-medium">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-sky-600" />
            Idioma de la Aplicación:
          </span>
          <span className="font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
            Español 🇲🇽
          </span>
        </div>
      </div>

      {/* Demo Reset Button */}
      <button
        onClick={() => setIsResetModalOpen(true)}
        className="w-full py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-2xl flex items-center justify-center gap-2 transition-all mt-4"
      >
        <RotateCcw className="w-4 h-4 text-amber-600" />
        Reiniciar Datos de la Demostración
      </button>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isResetModalOpen}
        title="¿Reiniciar la Demostración?"
        message="Esta acción restaurará los datos del prototipo a su estado inicial para una nueva presentación del CEO."
        confirmText="Sí, reiniciar ahora"
        cancelText="Cancelar"
        type="warning"
        onConfirm={() => {
          resetDemoData();
          setIsResetModalOpen(false);
        }}
        onCancel={() => setIsResetModalOpen(false)}
      />
    </div>
  );
};
