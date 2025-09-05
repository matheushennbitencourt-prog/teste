import React from 'react';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[min(560px,92vw)] text-center">
        <div className="mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white">
          <Rocket size={20} />
        </div>
        <h1 className="text-2xl font-semibold mb-2">JudgeApp</h1>
        <p className="text-slate-600 leading-relaxed">
          Deploy via <strong>GitHub Actions</strong> + <strong>Pages</strong> funcionando. 🚀
        </p>
      </div>
    </main>
  );
}
