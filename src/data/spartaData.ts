import { Attendee } from '../utils/rsvp';

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
    customMessage: 'Au-Au-Au! Já separei a beca espartana!',
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
    title: 'Ceia Oficial & Reunião dos Espartanos',
    year: 'Save The Date 05/12',
    category: 'confraternizacao',
    imageUrl: '/assets/aistudio/IMG-20261005-WA0199_2__c5426b5a.jpg',
    caption: 'Arte e foto oficial de convocação da Ceia da Sparta. Beira da piscina com o manto espartano!',
    photographerOrSubmittedBy: 'Comissão Ceia Sparta',
  },
  {
    id: 'photo-interreps',
    title: 'Bicampeão do Interreps (UFOP & UEMG)',
    year: 'Orgulho Espartano',
    category: 'jogos',
    imageUrl: '/src/assets/images/sparta_interreps_1794270031218.jpg',
    caption: 'Comemoração histórica do bicampeonato no Interreps! Manto grená e dourado no topo do pódio.',
    photographerOrSubmittedBy: '@spartarep Arquivo Oficial',
  },
  {
    id: 'photo-infinity',
    title: 'Sparta Infinity (@sparta.infinity)',
    year: 'Edição Histórica',
    category: 'confraternizacao',
    imageUrl: '/src/assets/images/sparta_infinity_openbar_1794270045673.jpg',
    caption: 'O maior festival universitário open bar de João Monlevade, produzido e comandado pelos espartanos.',
    photographerOrSubmittedBy: 'Equipe Sparta Infinity',
  },
  {
    id: 'photo-reuniao',
    title: 'Reunião de República & Lousa da Hierarquia',
    year: 'Tradição Viva',
    category: 'sala',
    imageUrl: '/src/assets/images/sparta_reuniao_hierarquia_1794270058540.jpg',
    caption: 'A tradicional varanda da casa em Minas: Decano, veteranos e bixos reunidos em torno do estatuto.',
    photographerOrSubmittedBy: 'Mural da República Sparta',
  },
  {
    id: 'photo-2',
    title: 'O Clássico Churrasco de Domingo na Casa',
    year: 'Turmas 2016-2020',
    category: 'churrasco',
    imageUrl: '/src/assets/images/sparta_churrasco_antigo_1794265176605.jpg',
    caption: 'Churrasqueira de tijolinho a todo vapor, cerveja gelada na mão e histórias que nunca envelhecem.',
    photographerOrSubmittedBy: 'Careca (Morador 2015)',
  },
  {
    id: 'photo-3',
    title: 'Resenha na Sala & Roda de Viola',
    year: 'Novembro 2018',
    category: 'sala',
    imageUrl: '/src/assets/images/sparta_resenha_sala_1794265177369.jpg',
    caption: 'Aquela resenha pós-aula no sofá surrado, flâmulas na parede e risadas até 4 da manhã.',
    photographerOrSubmittedBy: 'Leo (Morador 2017)',
  },
  {
    id: 'photo-4',
    title: 'Torcida Espartana nos Jogos Universitários',
    year: 'Edição Histórica',
    category: 'jogos',
    imageUrl: '/src/assets/images/sparta_jogos_universitarios_1794265177936.jpg',
    caption: 'Arquibancada grená e amarela em peso! A bateria não parava e a garganta ficava rouca.',
    photographerOrSubmittedBy: 'Biro (Morador 2016)',
  },
  {
    id: 'photo-5',
    title: 'O Brinde das Velhas Guardas',
    year: 'Ceia Passada',
    category: 'confraternizacao',
    imageUrl: '/src/assets/images/sparta_brinde_confraternizacao_1794265178467.jpg',
    caption: 'Mesão de madeira, luzes quentes e o brinde solene: "Au-Au-Au!"',
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
    thumbnail: '/src/assets/images/sparta_brinde_confraternizacao_1794265178467.jpg',
    description: 'Os melhores momentos do reencontro que parou a cidade. Abraços, churrasco de primeira e reencontro de 4 gerações.',
    chantLyrics: 'É a Sparta! Au-Au-Au! Tradição que ninguém cala!',
  },
  {
    id: 'vid-2',
    title: 'O Tradicional Grito de Guerra da República Sparta',
    year: '2019',
    duration: '01:15',
    category: 'Grito de Guerra',
    thumbnail: '/src/assets/images/sparta_jogos_universitarios_1794265177936.jpg',
    description: 'Mais de 50 espartanos cantando a plenos pulmões. Arrepia só de ouvir!',
    chantLyrics: 'Uh! Ha! Uh! Ha! Aqui é Sparta, meu irmão! Ninguém segura o nosso pelotão!',
  },
  {
    id: 'vid-3',
    title: 'Retrospectiva: 10 Anos de Histórias, Resenhas e Irmandade',
    year: '2014-2024',
    duration: '05:10',
    category: 'Documentário',
    thumbnail: '/src/assets/images/sparta_churrasco_antigo_1794265176605.jpg',
    description: 'Depoimentos dos fundadores aos bichos de hoje. Como a Sparta moldou a vida de dezenas de amigos.',
    chantLyrics: 'Nossa história continua viva ontem, hoje e para sempre!',
  },
  {
    id: 'vid-4',
    title: 'Roda Acústica & Causos da República na Varanda',
    year: '2021',
    duration: '02:30',
    category: 'Acústico & Resenha',
    thumbnail: '/src/assets/images/sparta_resenha_sala_1794265177369.jpg',
    description: 'As modas de viola e os causos mais engraçados contados pelos veteranos que ninguém esquece.',
    chantLyrics: 'Vale a pena lembrar cada segundo dessa vivência.',
  },
];

export const GUESTBOOK_MESSAGES: GuestbookMessage[] = [
  {
    id: 'msg-1',
    author: 'Renato "Perninha"',
    generation: 'Morador 2013-2016',
    message: 'Irmãos, 8 anos de formado e a saudade dessa casa nunca diminui. Passar por aquele portão dia 05/12 vai ser emocionante. Contem com a minha presença e com meu abraço em cada um de vocês! Au-Au-Au!',
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
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface CeiaCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  items: CeiaMenuItem[];
}

export const CEIA_CARDAPIO: CeiaCategory[] = [
  {
    id: 'principais',
    title: 'Pratos Principais',
    subtitle: 'Cortes nobres e preparo artesanal para a noite',
    icon: '',
    badge: 'Prato Principal',
    items: [
      {
        id: 'pernil',
        name: 'Pernil suíno assado',
        category: 'principal',
        description: 'Assado lentamente no forno em baixa temperatura até a pururuca dourar, marinado em ervas frescas, vinho branco e alho confitado.',
        badge: 'Assado Especial',
        highlight: true,
      },
      {
        id: 'lasanha',
        name: 'Lasanha de queijo e molho branco',
        category: 'principal',
        description: 'Massa fresca artesanal gratinada com queijo da Canastra selecionado e bechamel cremoso aromatizado com noz-moscada.',
        badge: 'Receita da Casa',
        highlight: true,
      },
    ],
  },
  {
    id: 'acompanhamentos',
    title: 'Acompanhamentos Tradicionais',
    subtitle: 'Guarnições clássicas da ceia de fim de ano',
    icon: '',
    badge: 'Acompanhamentos',
    items: [
      {
        id: 'arroz',
        name: 'Arroz branco',
        category: 'acompanhamento',
        description: 'Arroz soltinho preparado com azeite extravirgem e alho tostado na hora.',
      },
      {
        id: 'farofa',
        name: 'Farofa crocante',
        category: 'acompanhamento',
        description: 'Farinha de mandioca artesanal tostada na manteiga de garrafa com cubos de bacon defumado e ervas.',
        badge: 'Crocante',
      },
      {
        id: 'salpicao',
        name: 'Salpicão de frango',
        category: 'acompanhamento',
        description: 'Frango defumado desfiado, maçã verde, cenoura em lâminas finas, creme leve da casa e batata palha artesanal.',
        badge: 'Clássico',
        highlight: true,
      },
      {
        id: 'salada',
        name: 'Salada verde sazonal',
        category: 'acompanhamento',
        description: 'Folhas nobres frescas, tomates cereja doces, lâminas de palmito e vinagrete suave de mostarda e mel.',
      },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesa',
    subtitle: 'Encerramento especial do banquete',
    icon: '',
    badge: 'Sobremesa',
    items: [
      {
        id: 'pave',
        name: 'Pavê de chocolate',
        category: 'sobremesa',
        description: 'Receita consagrada da casa: camadas intercaladas de creme diplomata de baunilha, biscoito champagne umedecido e ganache de chocolate meio amargo com raspas.',
        badge: 'Especial da Noite',
        highlight: true,
      },
    ],
  },
  {
    id: 'petiscos-economicos',
    title: 'Petiscos',
    subtitle: 'Porções fritas na hora para acompanhar o chopp na varanda',
    icon: '',
    badge: 'Petiscos',
    items: [
      {
        id: 'banana-frita',
        name: 'Banana da terra frita',
        category: 'petisco-economico',
        description: 'Dourada na chapa e finalizada crocante por fora e macia por dentro.',
        badge: 'Tradicional',
      },
      {
        id: 'mandioca-frita',
        name: 'Mandioca frita na manteiga',
        category: 'petisco-economico',
        description: 'Cozida previamente e frita até atingir crocância perfeita, cremosa por dentro.',
      },
      {
        id: 'pastel',
        name: 'Pastel artesanal frito na hora',
        category: 'petisco-economico',
        description: 'Massa fina, sequinha e crocante, servida quentinha durante toda a resenha.',
        badge: 'Frito na Hora',
      },
      {
        id: 'calabresa',
        name: 'Calabresa acebolada na chapa',
        category: 'petisco-economico',
        description: 'Fatias de calabresa defumada douradas com cebolas caramelizadas e cheiro-verde.',
      },
    ],
  },
  {
    id: 'petiscos-beliscar',
    title: 'Para Beliscar',
    subtitle: 'Mesa de frios e tira-gosto durante a recepção',
    icon: '',
    badge: 'Tira-Gosto',
    items: [
      {
        id: 'ovos-codorna',
        name: 'Ovos de codorna temperados',
        category: 'petisco-beliscar',
        description: 'Clássico tira-gosto de confraternização universitária, marinados em azeite extravirgem, orégano chileno e flor de sal.',
        badge: 'Clássico',
        highlight: true,
      },
    ],
  },
];

export const PRICING_TIERS = [
  {
    id: 'tier-ex-morador',
    name: 'Ex-Morador Espartano',
    badge: 'Veteranos',
    price: 150,
    installments: 'ou 2x de R$ 80',
    description: 'Contribuição para ex-moradores da república. Acesso integral a todas as dependências e open bar completo.',
    popular: true,
    features: [
      'Ceia Completa: Pernil suíno assado e Lasanha de queijo com bechamel',
      'Acompanhamentos: Salpicão de frango, Farofa crocante, Arroz branco e Salada verde',
      'Sobremesa: Pavê artesanal de chocolate da casa',
      'Mesa de Petiscos: Mandioca, Banana frita, Pastel, Calabresa e Ovos de codorna',
      'Open Bar Premium: Chopp artesanal, cervejas selecionadas e caipirinhas',
      'Caneca e tirante comemorativo oficial Ceia 2026',
      'Livre acesso à piscina e dependências da sede',
    ],
  },
  {
    id: 'tier-acompanhante',
    name: 'Acompanhante',
    badge: 'Convidado Especial',
    price: 120,
    installments: 'ou 2x de R$ 65',
    description: 'Para companheiras, companheiros e familiares que vêm celebrar esta história com a república.',
    popular: false,
    features: [
      'Ceia natalina completa com pratos principais e guarnições',
      'Todos os acompanhamentos e sobremesa de chocolate artesanal',
      'Mesa livre de petiscos durante a tarde e a noite',
      'Open Bar ilimitado durante todo o evento',
      'Copo colecionável da edição 2026',
      'Infraestrutura completa com segurança e recreação',
    ],
  },
  {
    id: 'tier-amigo',
    name: 'Amigo da República',
    badge: 'Convidado de Honra',
    price: 140,
    installments: 'ou 2x de R$ 75',
    description: 'Para os amigos fiéis e repúblicas parceiras que dividiram grandes momentos conosco.',
    popular: false,
    features: [
      'Banquete completo da Ceia de Natal e sobremesa',
      'Acesso integral à mesa de petiscos',
      'Open Bar completo com Chopp artesanal e drinks',
      'Caneca oficial de confraternização 2026',
      'Reencontro com as turmas e atrações ao vivo',
    ],
  },
];

export const EVENT_DETAILS = {
  name: 'Ceia da Sparta 2026',
  edition: 'Encontro Anual de Ex-Moradores e Amigos',
  dateFormatted: '05 de Dezembro de 2026',
  dayOfWeek: 'Sábado',
  time: 'A partir das 18:00',
  location: 'Sede da República Sparta',
  city: 'João Monlevade - MG',
  instagram: '@spartarep',
  instagramUrl: 'https://www.instagram.com/spartarep/',
  motto: 'Aqui somos todos irmãos',
  foundedDate: 'Fundada em 02/05/2010',
  infinityEvent: '@sparta.infinity',
  whatsappNumber: '5511999998888',
  pixKey: 'ceia.sparta@gmail.com',
  pixHolder: 'Comissão de Formados & Moradores Sparta',
  pixBank: 'Banco Inter / NuBank',
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
    avatarUrl: '/assets/sparta_avatar.jpg',
  },
};
