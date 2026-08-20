import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The japao that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'One beat per kana, and keep it flat', pronta: true },
      { id: 'b02', titulo: 'The greeting first, everything else second', pronta: true },
      { id: 'b03', titulo: 'Sumimasen, and then the thing you need', pronta: true },
      { id: 'b04', titulo: 'Four things that expire before you fly', pronta: true },
      { id: 'b05', titulo: 'Mokuteki, nannichi, doko — three answers and you are through', pronta: true },
      { id: 'b06', titulo: 'Wa arimasu ka — and then whatever you need', pronta: true },
      { id: 'b07', titulo: 'Te mo ii desu ka — ask, and the yes is yours', pronta: true },
      { id: 'b08', titulo: 'Doko desu ka — the question whose answer fits in your head', pronta: true },
      { id: 'b09', titulo: 'The ticket, and whether this one needs a limited-express ticket too', pronta: true },
      { id: 'b10', titulo: 'The katakana that looks English — サービス, マンション, コンセント', pronta: true },
      { id: 'b11', titulo: 'Onegai shimasu — the ending that orders the first round', pronta: true },
      { id: 'b12', titulo: 'Nuki de — the two syllables that make the dish editable', pronta: true },
      { id: 'b13', titulo: 'Arerugii ga arimasu — the sentence you say before anything else', pronta: true },
      { id: 'b14', titulo: 'O-kaikei — the number you see is already the whole number', pronta: true },
      { id: 'b15', titulo: 'Ikura desu ka — know the price before you\'re in', pronta: true },
      { id: 'b16', titulo: 'Sagashite imasu — and the person at the front desk starts looking with you', pronta: true },
      { id: 'b17', titulo: 'Pharmacy, pain, and the numbers that work from any phone', pronta: true },
      { id: 'b18', titulo: 'The last day — settle up, park the bag, and say the sentence they remember', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Their clock, and the hour the kitchen actually closes', pronta: true },
      { id: 'i02', titulo: 'Sumimasen first, and the counter opens', pronta: true },
      { id: 'i03', titulo: 'The plate you were not going to order', pronta: true },
      { id: 'i04', titulo: 'One drink named, and the small dish you did not order', pronta: true },
      { id: 'i05', titulo: 'The five questions you will be asked all week', pronta: true },
      { id: 'i06', titulo: 'Yesterday, told out loud', pronta: true },
      { id: 'i07', titulo: 'The compliment that reaches the kitchen, and the flat sentence that gets it changed', pronta: true },
      { id: 'i08', titulo: 'Being invited to someone\'s table', pronta: true },
      { id: 'i09', titulo: 'The closing day, and the places that keep their own calendar', pronta: true },
      { id: 'i10', titulo: 'Money here: cash always works, the card is the one with conditions', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'How they talk when it is not to you', pronta: true },
      { id: 'a02', titulo: 'What they laugh at, and the one joke that is yours to make', pronta: true },
      { id: 'a03', titulo: 'Who they think they are', pronta: true },
      { id: 'a04', titulo: 'The old argument', pronta: true },
      { id: 'a05', titulo: 'The other language', pronta: true },
      { id: 'a06', titulo: 'Sixteen public holidays, and the days that actually empty the street', pronta: true },
      { id: 'a07', titulo: 'Douzo, keigo, chotto, sorosoro — the four signals that arrive before the sentence', pronta: true },
      { id: 'a08', titulo: 'The last minute with each of them, and the card in your pocket', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
