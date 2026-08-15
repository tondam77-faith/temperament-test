// src/types/index.ts

export type TemperamentType = 'cholerik' | 'sangvinik' | 'flegmatik' | 'melancholik';

export interface Answer {
  id: string;
  text: string;
  temperament: TemperamentType;
}

export interface Question {
  id: number;
  title: string;
  answers: Answer[];
}

export interface TemperamentScore {
  cholerik: number;
  sangvinik: number;
  flegmatik: number;
  melancholik: number;
}

export interface TemperamentPercentage {
  cholerik: number;
  sangvinik: number;
  flegmatik: number;
  melancholik: number;
  primary: TemperamentType;
  secondary: TemperamentType;
}