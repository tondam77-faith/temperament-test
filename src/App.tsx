// src/App.tsx
import { useState } from 'react';
import type { Question, Answer, TemperamentType, TemperamentPercentage } from './types';
import { questions } from './data/questions';
import { calculateResults, shuffleArray } from './utils/calculator';
import { IntroScreen } from './components/IntroScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';

export default function App() {
  const [gameState, setGameState] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTemperaments, setSelectedTemperaments] = useState<TemperamentType[]>([]);
  const [currentShuffledAnswers, setCurrentShuffledAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<TemperamentPercentage | null>(null);

  const handleStart = () => {
    const randomizedQuestions = shuffleArray(questions);
    setShuffledQuestions(randomizedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedTemperaments([]);
    
    if (randomizedQuestions.length > 0) {
      setCurrentShuffledAnswers(shuffleArray(randomizedQuestions[0].answers));
    }
    
    setGameState('quiz');
  };

  const handleSelectAnswer = (answer: Answer) => {
    const updatedTemperaments = [...selectedTemperaments, answer.temperament];
    setSelectedTemperaments(updatedTemperaments);

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentShuffledAnswers(shuffleArray(shuffledQuestions[nextIndex].answers));
    } else {
      const finalResults = calculateResults(updatedTemperaments);
      setResults(finalResults);
      setGameState('result');
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <header className="w-full bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-blue-600 tracking-tight">MOJE<span className="text-slate-800">POVÁHA</span></span>
        </div>
        <span className="text-xs font-medium text-slate-400">Třídní projekt 8. ročník</span>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {gameState === 'intro' && <IntroScreen onStart={handleStart} />}
        
        {gameState === 'quiz' && shuffledQuestions.length > 0 && (
          <QuestionCard
            question={shuffledQuestions[currentQuestionIndex]}
            shuffledAnswers={currentShuffledAnswers}
            currentIndex={currentQuestionIndex}
            totalQuestions={shuffledQuestions.length}
            onSelectAnswer={handleSelectAnswer}
          />
        )}

        {gameState === 'result' && results && (
          <ResultScreen results={results} onRestart={handleRestart} />
        )}
      </main>

      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        Aplikace pro třídnické hodiny • anonymní a bez ukládání dat
      </footer>
    </div>
  );
}