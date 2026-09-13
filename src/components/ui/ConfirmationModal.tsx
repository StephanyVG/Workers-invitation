import React from 'react';
import { AlertTriangle, Check, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'primary' | 'success' | 'warning';
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Sí, continuar',
  cancelText = 'Regresar',
  onConfirm,
  onCancel,
  type = 'primary'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 w-full max-w-xs shadow-2xl border border-slate-100 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-3">
          {type === 'warning' ? (
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          ) : (
            <Check className="w-6 h-6 text-sky-600" />
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1">{title}</h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">{message}</p>

        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={onConfirm}
            className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-semibold rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            {confirmText}
          </button>
          <button
            onClick={onCancel}
            className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-medium rounded-2xl transition-all text-sm flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" />
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};
