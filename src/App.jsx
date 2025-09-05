import React, { useState } from 'react';
import { Camera, Rocket } from 'lucide-react';
import CameraPose from './components/CameraPose';

export default function App() {
  const [open, setOpen] = useState(true); // já abre a câmera
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white text-slate-900 rounded-2xl shadow-xl p-6 space-y-6">
        <header className="text-center space-y-2">
          <div className="mx-auto w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <h1 className="text-2xl font-semibold">JudgeApp</h1>
          <p className="text-slate-500">Detector de Pose (MoveNet) + Snapshot + Contador</p>
        </header>

        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setOpen(o => !o)}
            className="rounded-xl bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 transition"
          >
            {open ? 'Fechar câmera' : 'Abrir câmera'}
          </button>
          <span className="text-sm text-slate-500 flex items-center gap-2"><Camera size={16}/> HTTPS habilita a câmera (ok no GitHub Pages).</span>
        </div>

        {open && <CameraPose />}

        <footer className="text-center text-sm text-slate-400">
          Publicado via GitHub Actions + Pages
        </footer>
      </div>
    </main>
  );
}
