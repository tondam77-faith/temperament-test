// src/components/QuestionCard.tsx
import React from 'react';
import type { Question, Answer } from '../types';

interface QuestionCardProps {
  question: Question;
  shuffledAnswers: Answer[];
  currentIndex: number;
  totalQuestions: number;
  onSelectAnswer: (answer: Answer) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  shuffledAnswers,
  currentIndex,
  totalQuestions,
  onSelectAnswer,
}) => {
  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6">
      {/* Ukazatel průběhu / Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm font-medium text-slate-500">
          <span>Otázka {currentIndex + 1} z {totalQuestions}</span>
          <span>{progressPercentage} %</span>
        </div>
        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Karta s otázkou */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
          {question.title}
        </h2>
      </div>

      {/* Možnosti odpovědí */}
      <div className="grid grid-cols-1 gap-3">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={answer.id}
            onClick={() => onSelectAnswer(answer)}
            className="w-full text-left p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-150 cursor-pointer shadow-sm group flex items-start gap-4"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-600 font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="text-slate-700 text-base sm:text-lg font-medium group-hover:text-blue-900 leading-relaxed">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};