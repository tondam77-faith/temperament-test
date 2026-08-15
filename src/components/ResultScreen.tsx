// src/components/ResultScreen.tsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { RotateCcw, CheckCircle2, Lightbulb } from 'lucide-react';
import type { TemperamentPercentage } from '../types';
import { temperamentDetails } from '../data/temperaments';

interface ResultScreenProps {
  results: TemperamentPercentage;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ results, onRestart }) => {
  const primaryInfo = temperamentDetails[results.primary];
  const secondaryInfo = temperamentDetails[results.secondary];

  // Data pro koláčový graf
  const chartData = [
    { name: 'Cholerik', value: results.cholerik, color: temperamentDetails.cholerik.color },
    { name: 'Sangvinik', value: results.sangvinik, color: temperamentDetails.sangvinik.color },
    { name: 'Flegmatik', value: results.flegmatik, color: temperamentDetails.flegmatik.color },
    { name: 'Melancholik', value: results.melancholik, color: temperamentDetails.melancholik.color },
  ].filter(item => item.value > 0);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Hlavní hlavička výsledku */}
      <div className="text-center mb-8">
        <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-sm mb-3 ${primaryInfo.badgeBg} ${primaryInfo.badgeText}`}>
          Tvůj primární typ: {primaryInfo.title}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          Tvoje temperamentová směs
        </h1>
      </div>

      {/* Mřížka s grafem a kartou hlavního typu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Karta grafu */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wider">Procentuální rozložení</h3>
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value} %`, 'Zastoupení']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legenda pod grafem */}
          <div className="grid grid-cols-2 gap-2 w-full mt-2 text-xs">
            {chartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600 font-medium">{item.name}: <strong>{item.value}%</strong></span>
              </div>
            ))}
          </div>
        </div>

        {/* Karta charakteristiky */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {primaryInfo.title} <span className="text-sm font-normal text-slate-500">({results[results.primary]} %)</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {primaryInfo.description}
            </p>
            {results[results.secondary] > 0 && (
              <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-4">
                💡 Výrazně tě doplňuje také <strong>{secondaryInfo.title}</strong> ({results[results.secondary]} %).
              </p>
            )}
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> Silné stránky
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {primaryInfo.strengths.map((s, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tipy a doporučení */}
      <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl mb-8 flex items-start gap-4">
        <Lightbulb className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-blue-900 text-sm mb-1">Tip pro tebe do třídy</h4>
          <p className="text-blue-800 text-sm leading-relaxed">{primaryInfo.tips}</p>
        </div>
      </div>

      {/* Tlačítko opakovat */}
      <div className="text-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl shadow transition-colors cursor-pointer text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Spustit test znova</span>
        </button>
      </div>
    </div>
  );
};