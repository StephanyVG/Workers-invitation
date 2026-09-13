import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => {
        let bgClass = 'bg-slate-900 border-slate-700 text-white';
        let IconComponent = Info;
        let iconColor = 'text-sky-400';

        if (toast.type === 'success') {
          bgClass = 'bg-emerald-950 border-emerald-700 text-emerald-50';
          IconComponent = CheckCircle2;
          iconColor = 'text-emerald-400';
        } else if (toast.type === 'warning' || toast.type === 'error') {
          bgClass = 'bg-amber-950 border-amber-700 text-amber-50';
          IconComponent = AlertCircle;
          iconColor = 'text-amber-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl border shadow-lg transition-all transform animate-soft-pulse ${bgClass}`}
          >
            <IconComponent className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold leading-tight">{toast.title}</h4>
              {toast.description && (
                <p className="text-xs opacity-90 mt-1 leading-snug">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Cerrar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
