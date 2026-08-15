// src/components/IntroScreen.tsx
import React from 'react';
import { Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 max-w-2xl mx-auto">
      {/* Odznak / Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
        <Sparkles className="w-4 h-4" />
        <span>Test pro 8. ročník</span>
      </div>

      {/* Hlavní nadpis */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
        Poznej svůj <span className="text-blue-600">temperament</span>
      </h1>

      {/* Podnadpis */}
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Zjisti, jak reaguješ v různých školních i běžných situacích. Jsi spíše akční cholerik, společenský sangvinik, klidný flegmatik nebo přemýšlivý melancholik?
      </p>

      {/* Informační kartičky */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 text-left">
        <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
          <Compass className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Žádné špatné odpovědi</h3>
            <p className="text-xs text-slate-500">Každý temperament má své silné stránky a výhody.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">100% Soukromé</h3>
            <p className="text-xs text-slate-500">Aplikace neukládá žádné osobní údaje ani jména.</p>
          </div>
        </div>
      </div>

      {/* Tlačítko pro spuštění */}
      <button
        onClick={onStart}
        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-lg"
      >
        <span>Spustit test</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};