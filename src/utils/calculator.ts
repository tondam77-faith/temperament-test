// src/utils/calculator.ts
import type { TemperamentScore, TemperamentPercentage, TemperamentType } from '../types';

export function calculateResults(selectedTemperaments: TemperamentType[]): TemperamentPercentage {
  const counts: TemperamentScore = {
    cholerik: 0,
    sangvinik: 0,
    flegmatik: 0,
    melancholik: 0,
  };

  selectedTemperaments.forEach((type) => {
    if (counts[type] !== undefined) {
      counts[type]++;
    }
  });

  const total = selectedTemperaments.length || 1;

  const percentages = {
    cholerik: Math.round((counts.cholerik / total) * 100),
    sangvinik: Math.round((counts.sangvinik / total) * 100),
    flegmatik: Math.round((counts.flegmatik / total) * 100),
    melancholik: Math.round((counts.melancholik / total) * 100),
  };

  const sorted = (Object.keys(counts) as TemperamentType[]).sort(
    (a, b) => counts[b] - counts[a]
  );

  return {
    ...percentages,
    primary: sorted[0],
    secondary: sorted[1],
  };
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}