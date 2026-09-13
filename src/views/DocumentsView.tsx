import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DocumentInfo } from '../types';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  Camera, 
  Upload, 
  X, 
  ShieldCheck,
  Eye
} from 'lucide-react';

export const DocumentsView: React.FC = () => {
  const { documents, uploadDocument, addToast } = useApp();

  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [newDocTitle, setNewDocTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<DocumentInfo['category']>('identificacion');
  const [viewingDoc, setViewingDoc] = useState<DocumentInfo | null>(null);

  const handleSimulatedUpload = () => {
    if (!newDocTitle.trim()) {
      addToast('Nombre de Documento', 'Escribe de qué documento se trata (ej. Credencial de Elector).', 'warning');
      return;
    }
    uploadDocument(newDocTitle, selectedCategory);
    setNewDocTitle('');
    setIsUploadModalOpen(false);
  };

  const getStatusBadge = (status: DocumentInfo['status']) => {
    switch (status) {
      case 'valid':
        return (
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Al Día (Válido)
          </span>
        );
      case 'reviewing':
        return (
          <span className="text-[11px] font-bold text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            En Revisión
          </span>
        );
      case 'expiring':
        return (
          <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Revisión Pendiente
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
            Falta Subir
          </span>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
            Mis Papeles y Documentos
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Aquí están guardados de forma segura los papeles que necesitas para trabajar.
          </p>
        </div>

        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="p-3 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-xs rounded-2xl shadow-md flex items-center gap-1.5 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Subir Papel</span>
        </button>
      </div>

      {/* Security note */}
      <div className="bg-sky-50 p-3.5 rounded-2xl border border-sky-100 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
        <p className="text-xs text-sky-900 leading-tight">
          Tus archivos están <strong>encriptados y seguros</strong>. Nadie más los puede ver sin tu permiso.
        </p>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((doc: DocumentInfo) => (
          <div
            key={doc.id}
            className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex items-start justify-between gap-3 hover:border-sky-300 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                <FileText className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-slate-900">{doc.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{doc.subtitle}</p>
                <span className="text-[10px] text-slate-400 mt-1 block">Actualizado: {doc.updatedAt}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              {getStatusBadge(doc.status)}
              <button
                onClick={() => setViewingDoc(doc)}
                className="text-xs text-sky-600 font-bold hover:underline flex items-center gap-1 mt-1"
              >
                <Eye className="w-3.5 h-3.5" />
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Document Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl border border-slate-100 flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900">Agregar un Nuevo Papel</h3>
              <button onClick={() => setIsUploadModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">Nombre del Documento</label>
                <input
                  type="text"
                  value={newDocTitle}
                  onChange={(e) => setNewDocTitle(e.target.value)}
                  placeholder="Ej: Acta de Nacimiento / INE"
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1">Tipo de Documento</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-sky-500 font-medium"
                >
                  <option value="identificacion">Identificación Oficial</option>
                  <option value="passport">Pasaporte</option>
                  <option value="visa">Visa o Solicitud</option>
                  <option value="contrato">Contrato Firmado</option>
                </select>
              </div>

              <div className="p-4 bg-sky-50 border-2 border-dashed border-sky-300 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sky-100/50 transition-all">
                <Camera className="w-8 h-8 text-sky-600 mb-1" />
                <span className="text-xs font-bold text-sky-900">Tomar foto con la cámara</span>
                <span className="text-[11px] text-sky-700 mt-0.5">o seleccionar archivo del teléfono</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Cancelar
              </button>
              <button
                onClick={handleSimulatedUpload}
                className="flex-1 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                Guardar Papel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Document Modal */}
      {viewingDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-slate-900">{viewingDoc.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{viewingDoc.subtitle}</p>
            </div>

            <div className="w-full h-32 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium">
              [Vista previa del documento en alta resolución]
            </div>

            <button
              onClick={() => setViewingDoc(null)}
              className="w-full py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800"
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
