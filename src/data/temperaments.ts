// src/data/temperaments.ts
import type { TemperamentType } from '../types';

export interface TemperamentInfo {
  title: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  strengths: string[];
  tips: string;
}

export const temperamentDetails: Record<TemperamentType, TemperamentInfo> = {
  cholerik: {
    title: 'Cholerik',
    color: '#ef4444', // Červená
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    description: 'Jsi akční, rozhodný/á a plný/á energie. Když si něco zamaneš, jdeš si za tím a dokážeš strhnout ostatní.',
    strengths: ['Rychlé rozhodování', 'Přirozené vůdcovství', 'Tah na branku', 'Odvaha čelit výzvám'],
    tips: 'Když s tebou někdo nesouhlasí, zkus nejprve napočítat do tří, než odpovíš. Trpělivost ti otevře spoustu dveří.'
  },
  sangvinik: {
    title: 'Sangvinik',
    color: '#eab308', // Žlutá
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    description: 'Jsi společenský/á, optimistický/á a plný/á nápadů. Ve třídě šíříš dobrou náladu a snadno navazuješ přátelství.',
    strengths: ['Skvělá komunikace', 'Optimismus a smysl pro humor', 'Tvořivost', 'Přizpůsobivost'],
    tips: 'Máš spoustu skvělých nápadů — zkus se soustředit na to, abys dokončil/a to, co začneš, než se pustíš do něčeho nového.'
  },
  flegmatik: {
    title: 'Flegmatik',
    color: '#06b6d4', // Tyrkysová
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-800',
    description: 'Jsi klidný/á, vyrovnaný/á a spolehlivý/á. Nenecháš se jen tak něčím rozházet a jsi skvělý/á posluchač/ka.',
    strengths: ['Mírnost a nekonfliktnost', 'Trpělivost', 'Zvládání stresu s chladnou hlavou', 'Spolehlivost'],
    tips: 'Neboj se dát najevo svůj názor a říct si o to, co chceš! Tvůj pohled na věc bývá velmi rozumný.'
  },
  melancholik: {
    title: 'Melancholik',
    color: '#8b5cf6', // Fialová
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    description: 'Jsi přemýšlivý/á, pečlivý/á a vnímavý/á k detailům. Na věcech ti záleží a děláš je poctivě a dopodrobna.',
    strengths: ['Smysl pro detail a přesnost', 'Hluboké empatické vnímání', 'Analytické myšlení', 'Spolehlivost a poctivost'],
    tips: 'Nebuď na sebe moc přísný/á. Chyba není tragédie, ale přirozená součást toho, jak se učíme nové věci.'
  }
};