// Texto de exibição das fases — na língua do COMPRADOR (en).
// Dado, não lógica: gerado a partir da tabela i18n do reposicionamento.
// Ver jornada.ts para a estrutura universal (slot → fase).
import type { FaseId } from './jornada';

export const FASE_LABEL: Record<FaseId, { emoji: string; nome: string; descricao: string }> = {
  chegada: { emoji: '🛬', nome: "Arrival", descricao: "Your first 24 hours — off the plane and settled in." },
  diaadia: { emoji: '☀️', nome: "Everyday", descricao: "Eating, shopping, getting around, and sorting things out — like someone who's done this before." },
  integrando: { emoji: '🌙', nome: "Blending In", descricao: "Not a lost tourist — someone who came to stay a while." }
};

export const FASE_COR: Record<FaseId, string> = {
  chegada: 'terracota',
  diaadia: 'salvia',
  integrando: 'oceano'
};

export const PROMESSA = {
  headline: "The language of your trip, in the order you'll actually need it.",
  subhead: "From the airport counter to the last toast of the night.",
  provaLabel: "A fact this course actually teaches:"
};
