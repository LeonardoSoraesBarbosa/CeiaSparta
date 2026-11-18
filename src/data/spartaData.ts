import { Attendee } from '../utils/rsvp';
import spartaBrindeImage from '../assets/images/sparta_brinde_confraternizacao_1794265178467.jpg';
import spartaChurrascoImage from '../assets/images/sparta_churrasco_antigo_1794265176605.jpg';
import spartaInfinityImage from '../assets/images/sparta_infinity_openbar_1794270045673.jpg';
import spartaInterrepsImage from '../assets/images/sparta_interreps_1794270031218.jpg';
import spartaJogosImage from '../assets/images/sparta_jogos_universitarios_1794265177936.jpg';
import spartaReuniaoImage from '../assets/images/sparta_reuniao_hierarquia_1794270058540.jpg';
import spartaResenhaImage from '../assets/images/sparta_resenha_sala_1794265177369.jpg';

export const POSTER_IMAGE_URL = `${import.meta.env.BASE_URL}assets/aistudio/IMG-20261005-WA0199_2__c5426b5a.jpg`;

export interface PhotoMemory {
  id: string;
  title: string;
  year: string;
  category: 'churrasco' | 'jogos' | 'sala' | 'confraternizacao';
  imageUrl: string;
  caption: string;
  photographerOrSubmittedBy?: string;
}

export interface VideoMemory {
  id: string;
  title: string;
  year: string;
  duration: string;
  category: string;
  thumbnail: string;
  description: string;
  chantLyrics?: string;
}

export interface GuestbookMessage {
  id: string;
  author: string;
  nickname?: string;
  generation: string;
  message: string;
  date: string;
  likes: number;
}

export const INITIAL_ATTENDEES: Attendee[] = [
  {
    id: 'att-1',
    name: 'Leonardo Soares Barbosa',
    nickname: 'Leo / Capitão',
    role: 'ex-morador',
    generationOrYear: 'Morador 2016-2020',
    phone: '(11) 99876-5432',
    guestsCount: 1,
    guestNames: 'Mariana',
    favoriteDrinkOrFood: 'Chopp trincando e picanha',
    confirmedAt: '05/11/2026',
    customMessage: 'Contem comigo, irmãos! Saudades demais dessa família!',
  },
  {
    id: 'att-2',
    name: 'Lucas Mendonça',
    nickname: 'Careca',
    role: 'ex-morador',
    generationOrYear: 'Morador 2014-2018',
    phone: '(11) 98765-4321',
    guestsCount: 0,
    favoriteDrinkOrFood: 'Costela de chão',
    confirmedAt: '06/11/2026',
    customMessage: 'Aqui somos todos irmãos! Já separei a beca spartana!',
  },
  {
    id: 'att-3',
    name: 'Guilherme Sampaio',
    nickname: 'Bicho Solto',
    role: 'morador-atual',
    generationOrYear: 'Morador Atual (Bicho 2023)',
    phone: '(11) 97654-3210',
    guestsCount: 0,
    favoriteDrinkOrFood: 'Cerveja gelada',
    confirmedAt: '07/11/2026',
    customMessage: 'A casa tá pronta pra receber todos os veteranos!',
  },
  {
    id: 'att-4',
    name: 'Thiago Martins',
    nickname: 'Biro-Biro',
    role: 'ex-morador',
    generationOrYear: 'Morador 2015-2019',
    phone: '(19) 99123-4567',
    guestsCount: 1,
    guestNames: 'Beatriz',
    favoriteDrinkOrFood: 'Pernil de Natal e caipirinha',
    confirmedAt: '07/11/2026',
    customMessage: 'Subindo a serra especialmente pro dia 05/12!',
  },
  {
    id: 'att-5',
    name: 'Pedro Henrique Alencar',
    nickname: 'Pedrão',
    role: 'ex-morador',
    generationOrYear: 'Morador 2017-2021',
    phone: '(16) 99234-5678',
    guestsCount: 0,
    favoriteDrinkOrFood: 'Farofa crocante e chopp IPA',
    confirmedAt: '08/11/2026',
    customMessage: 'Nossa história continua viva! Não perco por nada no mundo.',
  },
  {
    id: 'att-6',
    name: 'Rafael Silveira',
    nickname: 'Faustão',
    role: 'ex-morador',
    generationOrYear: 'Morador 2013-2017',
    phone: '(11) 99345-6789',
    guestsCount: 1,
    guestNames: 'Camila',
    favoriteDrinkOrFood: 'Churrasco completo',
    confirmedAt: '08/11/2026',
    customMessage: 'Mais de 10 anos de irmandade. Estaremos lá!',
  },
  {
    id: 'att-7',
    name: 'Gabriel Nogueira',
    nickname: 'Batoré',
    role: 'morador-atual',
    generationOrYear: 'Morador Atual (Diretoria)',
    phone: '(11) 98456-7890',
    guestsCount: 0,
    favoriteDrinkOrFood: 'Open bar geral',
    confirmedAt: '09/11/2026',
    customMessage: 'O chopp já tá encomendado e o som tá garantido!',
  },
  {
    id: 'att-8',
    name: 'Matheus Costa',
    nickname: 'Amigo da República',
    role: 'amigo-sparta',
    generationOrYear: 'Agregado de Honra',
    phone: '(11) 97567-8901',
    guestsCount: 1,
    guestNames: 'Fernanda',
    favoriteDrinkOrFood: 'Tender natalino',
    confirmedAt: '09/11/2026',
    customMessage: 'Amigo que viveu todas as festas com vocês. Presença confirmadíssima!',
  },
];

export interface HierarchyTier {
  id: string;
  rank: number;
  title: string;
  subtitle: string;
  iconType: 'crown' | 'shield' | 'swords' | 'zap' | 'award';
  colorTheme: string;
  badge: string;
  roleDescription: string;
  ceiaResponsibilities: string[];
  membersExample: string[];
  traditionQuote: string;
}

export const PHOTO_MEMORIES: PhotoMemory[] = [
  {
    id: 'photo-1',
    title: 'Ceia Oficial & Reunião dos Spartanos',
    year: 'Save The Date 05/12',
    category: 'confraternizacao',
    imageUrl: POSTER_IMAGE_URL,
    caption: 'Arte e foto oficial de convocação da Ceia da Sparta com o manto spartano!',
    photographerOrSubmittedBy: 'Comissão Ceia Sparta',
  },
  {
    id: 'photo-interreps',
    title: 'Bicampeão do Interreps (UFOP & UEMG)',
    year: 'Orgulho Spartano',
    category: 'jogos',
    imageUrl: spartaInterrepsImage,
    caption: 'Comemoração histórica do bicampeonato no Interreps! Manto grená e dourado no topo do pódio.',
    photographerOrSubmittedBy: '@spartarep Arquivo Oficial',
  },
  {
    id: 'photo-infinity',
    title: 'Sparta Infinity (@sparta.infinity)',
    year: 'Edição Histórica',
    category: 'confraternizacao',
    imageUrl: spartaInfinityImage,
    caption: 'O maior festival universitário open bar de João Monlevade, produzido e comandado pelos spartanos.',
    photographerOrSubmittedBy: 'Equipe Sparta Infinity',
  },
  {
    id: 'photo-reuniao',
    title: 'Reunião de República & Lousa da Hierarquia',
    year: 'Tradição Viva',
    category: 'sala',
    imageUrl: spartaReuniaoImage,
    caption: 'A tradicional varanda da casa em Minas: Decano, veteranos e bixos reunidos em torno do estatuto.',
    photographerOrSubmittedBy: 'Mural da República Sparta',
  },
  {
    id: 'photo-2',
    title: 'O Clássico Churrasco de Domingo na Casa',
    year: 'Turmas 2016-2020',
    category: 'churrasco',
    imageUrl: spartaChurrascoImage,
    caption: 'Churrasqueira de tijolinho a todo vapor, cerveja gelada na mão e histórias que nunca envelhecem.',
    photographerOrSubmittedBy: 'Careca (Morador 2015)',
  },
  {
    id: 'photo-3',
    title: 'Resenha na Sala & Roda de Viola',
    year: 'Novembro 2018',
    category: 'sala',
    imageUrl: spartaResenhaImage,
    caption: 'Aquela resenha pós-aula no sofá surrado, flâmulas na parede e risadas até 4 da manhã.',
    photographerOrSubmittedBy: 'Leo (Morador 2017)',
  },
  {
    id: 'photo-4',
    title: 'Torcida Spartana nos Jogos Universitários',
    year: 'Edição Histórica',
    category: 'jogos',
    imageUrl: spartaJogosImage,
    caption: 'Arquibancada grená e amarela em peso! A bateria não parava e a garganta ficava rouca.',
    photographerOrSubmittedBy: 'Biro (Morador 2016)',
  },
  {
    id: 'photo-5',
    title: 'O Brinde das Velhas Guardas',
    year: 'Ceia Passada',
    category: 'confraternizacao',
    imageUrl: spartaBrindeImage,
    caption: 'Mesão de madeira, luzes quentes e o brinde solene: "Aqui somos todos irmãos!"',
    photographerOrSubmittedBy: 'Comissão 2024',
  },
];

export interface SpartaMember {
  id: string;
  name: string;
  nickname: string;
  role: 'decano' | 'morador' | 'bixo' | 'ex-morador';
  generation: string;
  course: string;
  tag: string;
  cityOrOrigin?: string;
  photoUrl?: string;
}

export const SPARTA_ROSTER: SpartaMember[] = [
  // Decano da Casa
  {
    id: 'm-decano',
    name: 'Gabriel Costa',
    nickname: 'Batoré',
    role: 'decano',
    generation: 'Morador 2021-Atual',
    course: 'Engenharia de Produção · UFOP',
    tag: 'Decano da Casa',
    cityOrOrigin: 'João Monlevade - MG',
  },
  // Moradores Atuais / Diretoria
  {
    id: 'm-1',
    name: 'Guilherme Sampaio',
    nickname: 'Bicho Solto',
    role: 'morador',
    generation: 'Morador 2023-Atual',
    course: 'Engenharia Elétrica · UFOP',
    tag: 'Presidente da República',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'm-2',
    name: 'Matheus Rezende',
    nickname: 'Gaguinho',
    role: 'morador',
    generation: 'Morador 2022-Atual',
    course: 'Administração · UEMG',
    tag: 'Tesoureiro Geral',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'm-3',
    name: 'Felipe Fonseca',
    nickname: 'Zangado',
    role: 'morador',
    generation: 'Morador 2023-Atual',
    course: 'Sistemas de Informação · UFOP',
    tag: 'Diretor Sparta Infinity',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'm-4',
    name: 'João Pedro Carvalho',
    nickname: 'Canela',
    role: 'morador',
    generation: 'Morador 2024-Atual',
    course: 'Engenharia Civil · UEMG',
    tag: 'Patrimônio & Chopeira',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'm-5',
    name: 'Lucas Ramos',
    nickname: 'Tatu',
    role: 'morador',
    generation: 'Morador 2024-Atual',
    course: 'Engenharia · UFOP',
    tag: 'Atleta do Interreps',
    cityOrOrigin: 'João Monlevade - MG',
  },
  // Bixos da Casa (Calouros)
  {
    id: 'b-1',
    name: 'Arthur Mendonça',
    nickname: 'Fumaça (Bixo)',
    role: 'bixo',
    generation: 'Bixo 2026/1',
    course: 'Engenharia de Produção · UFOP',
    tag: 'Bixo 01',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'b-2',
    name: 'Caio Alvarenga',
    nickname: 'Pipoca (Bixo)',
    role: 'bixo',
    generation: 'Bixo 2026/2',
    course: 'Sistemas de Informação · UFOP',
    tag: 'Bixo 02',
    cityOrOrigin: 'João Monlevade - MG',
  },
  // Ex-Moradores (A Velha Guarda / Formados nos Destaques)
  {
    id: 'ex-1',
    name: 'Leonardo Soares Barbosa',
    nickname: 'Leo / Capitão',
    role: 'ex-morador',
    generation: 'Morador 2016-2020',
    course: 'Engenharia de Produção · UFOP',
    tag: 'Veterano de Honra',
    cityOrOrigin: 'Belo Horizonte - MG',
  },
  {
    id: 'ex-2',
    name: 'Lucas Mendonça',
    nickname: 'Careca',
    role: 'ex-morador',
    generation: 'Morador 2014-2018',
    course: 'Engenharia · UFOP',
    tag: 'Ex-Decano',
    cityOrOrigin: 'São Paulo - SP',
  },
  {
    id: 'ex-3',
    name: 'Thiago Martins',
    nickname: 'Biro-Biro',
    role: 'ex-morador',
    generation: 'Morador 2015-2019',
    course: 'Engenharia · UFOP',
    tag: 'Bicampeão Interreps',
    cityOrOrigin: 'Campinas - SP',
  },
  {
    id: 'ex-4',
    name: 'Renato Silva',
    nickname: 'Perninha',
    role: 'ex-morador',
    generation: 'Morador 2013-2016',
    course: 'Engenharia Metalúrgica · UFOP',
    tag: 'Veterano',
    cityOrOrigin: 'Ipatinga - MG',
  },
  {
    id: 'ex-5',
    name: 'Pedro Henrique Alencar',
    nickname: 'Pedrão',
    role: 'ex-morador',
    generation: 'Morador 2017-2021',
    course: 'Sistemas de Informação · UFOP',
    tag: 'Veterano',
    cityOrOrigin: 'Ribeirão Preto - SP',
  },
  {
    id: 'ex-6',
    name: 'Rafael Silveira',
    nickname: 'Faustão',
    role: 'ex-morador',
    generation: 'Morador 2013-2017',
    course: 'Engenharia · UFOP',
    tag: 'Veterano',
    cityOrOrigin: 'Vitória - ES',
  },
  {
    id: 'ex-7',
    name: 'Bruno César',
    nickname: 'Soneca',
    role: 'ex-morador',
    generation: 'Morador 2018-2022',
    course: 'Administração · UEMG',
    tag: 'Veterano',
    cityOrOrigin: 'Juiz de Fora - MG',
  },
  {
    id: 'ex-8',
    name: 'Felipe Andrade',
    nickname: 'Cabelo',
    role: 'ex-morador',
    generation: 'Morador 2017-2021',
    course: 'Engenharia Civil · UEMG',
    tag: 'Veterano',
    cityOrOrigin: 'Governador Valadares - MG',
  },
  {
    id: 'ex-9',
    name: 'Rodrigo Vasconcelos',
    nickname: 'Alemão (Fundador)',
    role: 'ex-morador',
    generation: 'Turma de Fundação 2010',
    course: 'Engenharia · UFOP',
    tag: 'Fundador 02/05/2010',
    cityOrOrigin: 'Belo Horizonte - MG',
  },
  {
    id: 'ex-10',
    name: 'Marcos Vinícius',
    nickname: 'Marcão (Fundador)',
    role: 'ex-morador',
    generation: 'Turma de Fundação 2010',
    course: 'Engenharia · UFOP',
    tag: 'Fundador 02/05/2010',
    cityOrOrigin: 'João Monlevade - MG',
  },
  {
    id: 'ex-11',
    name: 'André Guimarães',
    nickname: 'Dedé',
    role: 'ex-morador',
    generation: 'Morador 2012-2016',
    course: 'Engenharia · UFOP',
    tag: 'Ex-Decano',
    cityOrOrigin: 'Itabira - MG',
  },
  {
    id: 'ex-12',
    name: 'Vinícius Rocha',
    nickname: 'Cachorrão',
    role: 'ex-morador',
    generation: 'Morador 2015-2019',
    course: 'Sistemas de Informação · UFOP',
    tag: 'Veterano',
    cityOrOrigin: 'Belo Horizonte - MG',
  },
];

export const VIDEO_MEMORIES: VideoMemory[] = [
  {
    id: 'vid-1',
    title: 'Aftermovie Oficial: A Inesquecível Ceia de 2023',
    year: '2023',
    duration: '03:42',
    category: 'Aftermovie',
    thumbnail: spartaBrindeImage,
    description: 'Os melhores momentos do reencontro que parou a cidade. Abraços, churrasco de primeira e reencontro de 4 gerações.',
    chantLyrics: 'É a Sparta! Aqui somos todos irmãos! Tradição que ninguém cala!',
  },
  {
    id: 'vid-2',
    title: 'O Tradicional Grito de Guerra da República Sparta',
    year: '2019',
    duration: '01:15',
    category: 'Grito de Guerra',
    thumbnail: spartaJogosImage,
    description: 'Mais de 50 spartanos cantando a plenos pulmões. Arrepia só de ouvir!',
    chantLyrics: 'Uh! Ha! Uh! Ha! Aqui é Sparta, meu irmão! Ninguém segura o nosso pelotão!',
  },
  {
    id: 'vid-3',
    title: 'Retrospectiva: 10 Anos de Histórias, Resenhas e Irmandade',
    year: '2014-2024',
    duration: '05:10',
    category: 'Documentário',
    thumbnail: spartaChurrascoImage,
    description: 'Depoimentos dos fundadores aos bichos de hoje. Como a Sparta moldou a vida de dezenas de amigos.',
    chantLyrics: 'Nossa história continua viva ontem, hoje e para sempre!',
  },
  {
    id: 'vid-4',
    title: 'Roda Acústica & Causos da República na Varanda',
    year: '2021',
    duration: '02:30',
    category: 'Acústico & Resenha',
    thumbnail: spartaResenhaImage,
    description: 'As modas de viola e os causos mais engraçados contados pelos veteranos que ninguém esquece.',
    chantLyrics: 'Vale a pena lembrar cada segundo dessa vivência.',
  },
];

export const GUESTBOOK_MESSAGES: GuestbookMessage[] = [
  {
    id: 'msg-1',
    author: 'Renato "Perninha"',
    generation: 'Morador 2013-2016',
    message: 'Irmãos, 8 anos de formado e a saudade dessa casa nunca diminui. Passar por aquele portão dia 05/12 vai ser emocionante. Contem com a minha presença e com meu abraço em cada um de vocês! Aqui somos todos irmãos!',
    date: 'Ontem às 21:15',
    likes: 19,
  },
  {
    id: 'msg-2',
    author: 'Felipe "Cabelo"',
    generation: 'Morador 2017-2021',
    message: 'Nossa história continua viva demais! Quem viveu a Sparta sabe o que significa essa palavra: família que a gente escolhe. Já confirmei presença no WhatsApp!',
    date: 'Hoje às 10:40',
    likes: 14,
  },
  {
    id: 'msg-3',
    author: 'Bruno "Soneca"',
    generation: 'Morador 2018-2022',
    message: 'Guardando toda a energia pro dia 05/12. Não quero ver desculpa de ninguém, bora lotar a casa como nos velhos tempos!',
    date: 'Hoje às 13:20',
    likes: 22,
  },
  {
    id: 'msg-4',
    author: 'Dani & Gustavo',
    generation: 'Amigos da República',
    message: 'A Sparta marcou a nossa faculdade inteira! Estaremos firmes na Ceia pra comemorar esse reencontro histórico!',
    date: 'Hoje às 15:00',
    likes: 11,
  },
];

export interface CeiaMenuItem {
  id: string;
  name: string;
  category: 'principal' | 'acompanhamento' | 'sobremesa' | 'petisco-economico' | 'petisco-beliscar';
}

export interface CeiaCategory {
  id: string;
  title: string;
  items: CeiaMenuItem[];
}

export const CEIA_CARDAPIO: CeiaCategory[] = [
  {
    id: 'principais',
    title: 'Pratos Principais',
    items: [
      {
        id: 'pernil',
        name: 'Pernil',
        category: 'principal',
      },
      {
        id: 'lasanha',
        name: 'Lasanha',
        category: 'principal',
      },
    ],
  },
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos Tradicionais',
    items: [
      {
        id: 'salpicao',
        name: 'Salpicão',
        category: 'acompanhamento',
      },
      {
        id: 'farofa',
        name: 'Farofa',
        category: 'acompanhamento',
      },
      {
        id: 'arroz',
        name: 'Arroz',
        category: 'acompanhamento',
      },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesa',
    items: [
      {
        id: 'bombom-aberto',
        name: 'Bombom aberto',
        category: 'sobremesa',
      },
    ],
  },
];

export const PRICING_TIERS = [
  {
    id: 'tier-ex-morador',
    name: 'Ex-Moradores',
    badge: 'Veteranos',
    price: 160,
    installments: 'Pagamento à vista',
    description: 'Contribuição para ex-moradores da república. Acesso integral a todas as dependências e open bar completo.',
    popular: true,
    features: [
      'Ceia: Pernil, Lasanha, Salpicão, Farofa e Arroz',
      'Sobremesa: Bombom aberto',
      'Open bar com chopp gelado',
    ],
  },
  {
    id: 'tier-acompanhante',
    name: 'Acompanhantes',
    badge: 'Acompanhantes',
    price: 80,
    installments: 'Pagamento à vista',
    description: 'Valor para acompanhantes que vêm celebrar esta história com a República Sparta.',
    popular: false,
    features: [
      'Ceia: Pernil, Lasanha, Salpicão, Farofa e Arroz',
      'Sobremesa: Bombom aberto',
      'Open bar com chopp gelado',
    ],
  },
];

export const SINGLE_PRICE_TIER = {
  id: 'tier-valor-unico',
  name: 'Convidado',
  badge: 'Valor único',
  price: 80,
  installments: 'Pagamento à vista',
  description: 'Valor único por pessoa para participar da Ceia da Sparta.',
  popular: true,
  features: [
    'Ceia: Pernil, Lasanha, Salpicão, Farofa e Arroz',
    'Sobremesa: Bombom aberto',
    'Open bar com chopp gelado',
  ],
};

export const EVENT_DETAILS = {
  name: 'Ceia da Sparta 2026',
  edition: 'Ceia de Ex-Moradores e Amigos',
  dateFormatted: '05 de Dezembro de 2026',
  dayOfWeek: 'Sábado',
  time: 'A partir das 18:00',
  location: 'República Sparta',
  address: 'R. Poços de Caldas, 342 - Alvorada, João Monlevade - MG, 35930-048',
  mapsUrl: 'https://share.google/sZDMkAae7h7h4AOSf',
  city: 'João Monlevade - MG',
  instagram: '@spartarep',
  instagramUrl: 'https://www.instagram.com/spartarep/',
  motto: 'Aqui somos todos irmãos',
  foundedDate: 'Fundada em 02/05/2010',
  infinityEvent: '@sparta.infinity',
  whatsappNumber: '5538999912228',
  pixKey: '10665086660',
  pixHolder: 'Guilherme Ferreira dos Reis',
  pixBank: 'Banco Inter',
  instagramStats: {
    handle: '@spartarep',
    followers: '2.903',
    following: '2.207',
    postsCount: '91',
    bioLineMotto: '"Aqui somos todos irmãos"',
    bioLineEvent: '@sparta.infinity · República Masculina',
    bioLineFounded: 'Fundada em 02/05/2010 · 16 anos de história',
    bioLineUnis: 'UFOP e UEMG · João Monlevade - MG',
    bioLineTitles: 'Bicampeão do Interreps Universitário',
    city: 'João Monlevade - MG',
    avatarUrl: `${import.meta.env.BASE_URL}assets/sparta_avatar.jpg`,
  },
};
