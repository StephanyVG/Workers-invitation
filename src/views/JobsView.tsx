import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobOffer } from '../types';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Home, 
  Truck, 
  CheckCircle2, 
  ChevronRight,
  X,
  Sparkles
} from 'lucide-react';

export const JobsView: React.FC = () => {
  const { jobs, applyToJob, worker, selectedJobForDetail, setSelectedJobForDetail, language } = useApp();

  const [confirmModalJob, setConfirmModalJob] = useState<JobOffer | null>(null);

  const handleApplyClick = (job: JobOffer) => {
    setConfirmModalJob(job);
  };

  const confirmApply = () => {
    if (confirmModalJob) {
      applyToJob(confirmModalJob.id);
      setConfirmModalJob(null);
      setSelectedJobForDetail(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar p-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
          {language === 'es' ? 'Ofertas de Empleo Disponibles' : 'Available Job Offers'}
        </h2>
        <p className="text-xs text-slate-600 mt-1">
          {language === 'es'
            ? 'Vacantes legales de trabajo agrícola en EE. UU. con vivienda y transporte incluidos.'
            : 'Legal agricultural job openings in the US with housing and transportation included.'}
        </p>
      </div>

      {/* Jobs List */}
      <div className="space-y-3">
        {jobs.map((job: JobOffer) => {
          const isApplied = worker.appliedJobId === job.id;

          return (
            <div
              key={job.id}
              className={`bg-white p-4 rounded-3xl border transition-all ${
                isApplied ? 'border-emerald-400 bg-emerald-50/30' : 'border-slate-200 hover:border-sky-300'
              } shadow-sm space-y-3`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                    {job.cropType}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-1 leading-snug">{job.title}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location} • {job.companyName}
                  </p>
                </div>

                {isApplied && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Postulado' : 'Applied'}
                  </span>
                )}
              </div>

              {/* Perks Badges */}
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="font-extrabold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  {job.payRate}
                </span>
                {job.housingIncluded && (
                  <span className="text-slate-700 bg-slate-100 px-2 py-1 rounded-lg flex items-center gap-1 font-medium">
                    <Home className="w-3.5 h-3.5 text-slate-500" />
                    {language === 'es' ? 'Casa gratis' : 'Free housing'}
                  </span>
                )}
                {job.transportIncluded && (
                  <span className="text-slate-700 bg-slate-100 px-2 py-1 rounded-lg flex items-center gap-1 font-medium">
                    <Truck className="w-3.5 h-3.5 text-slate-500" />
                    {language === 'es' ? 'Transporte diario' : 'Daily transport'}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedJobForDetail(job)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all"
                >
                  {language === 'es' ? 'Ver Información' : 'View Details'}
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleApplyClick(job)}
                  disabled={isApplied}
                  className={`flex-1 py-2.5 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm ${
                    isApplied
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-sky-600 hover:bg-sky-700 active:scale-95 text-white'
                  }`}
                >
                  {isApplied
                    ? language === 'es' ? 'Postulado' : 'Applied'
                    : language === 'es' ? 'Postularme Ahora' : 'Apply Now'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal for Selected Job */}
      {selectedJobForDetail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl p-5 w-full max-w-sm max-h-[85vh] overflow-y-auto custom-scrollbar border border-slate-100 shadow-2xl flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                {language === 'es' ? 'Detalles del Empleo' : 'Job Details'}
              </span>
              <button
                onClick={() => setSelectedJobForDetail(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
              {selectedJobForDetail.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedJobForDetail.description}
            </p>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">
                  {language === 'es' ? 'Pago ofrecido:' : 'Offered Pay:'}
                </span>
                <span className="font-extrabold text-emerald-700">{selectedJobForDetail.payRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">
                  {language === 'es' ? 'Duración del trabajo:' : 'Job Duration:'}
                </span>
                <span className="font-bold text-slate-800">{selectedJobForDetail.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">
                  {language === 'es' ? 'Ubicación:' : 'Location:'}
                </span>
                <span className="font-bold text-slate-800">{selectedJobForDetail.location}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-2">
                {language === 'es' ? 'Lo que necesitas para aplicar:' : 'What you need to apply:'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedJobForDetail.requirements.map((req: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleApplyClick(selectedJobForDetail)}
              className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all mt-2"
            >
              {language === 'es' ? 'Postularme a este Empleo' : 'Apply for this Job'}
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={!!confirmModalJob}
        title={language === 'es' ? '¿Confirmas tu postulación?' : 'Confirm Application?'}
        message={
          confirmModalJob
            ? language === 'es'
              ? `Enviarás tus documentos para apartar tu lugar en "${confirmModalJob.title}".`
              : `You will submit your documents to reserve your slot for "${confirmModalJob.title}".`
            : ''
        }
        confirmText={language === 'es' ? 'Sí, quiero postularme' : 'Yes, apply now'}
        cancelText={language === 'es' ? 'Regresar' : 'Go back'}
        onConfirm={confirmApply}
        onCancel={() => setConfirmModalJob(null)}
      />
    </div>
  );
};
