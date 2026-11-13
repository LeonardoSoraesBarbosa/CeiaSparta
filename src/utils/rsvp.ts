export type ResidentRole = 'ex-morador' | 'morador-atual' | 'amigo-sparta' | 'agregado';

export interface Attendee {
  id: string;
  name: string;
  nickname?: string;
  role: ResidentRole;
  generationOrYear?: string; // ex: "Turma 2017", "Bicho 2015"
  phone: string;
  guestsCount: number; // 0 or more
  guestNames?: string;
  favoriteDrinkOrFood?: string;
  confirmedAt: string;
  customMessage?: string;
}

export interface RSVPFormData {
  name: string;
  nickname: string;
  role: ResidentRole;
  generationOrYear: string;
  phone: string;
  bringingGuest: boolean;
  guestsCount: number;
  guestNames: string;
  favoriteDrink: string;
  customMessage: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof RSVPFormData, string>>;
}

export function validateRSVPForm(data: RSVPFormData): ValidationResult {
  const errors: Partial<Record<keyof RSVPFormData, string>> = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Por favor, informe seu nome completo (mínimo 3 caracteres).';
  }

  if (!data.phone || data.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Informe um número de WhatsApp válido com DDD.';
  }

  if (data.bringingGuest && data.guestsCount < 1) {
    errors.guestsCount = 'Informe a quantidade de acompanhantes.';
  }

  if (data.bringingGuest && (!data.guestNames || data.guestNames.trim().length < 2)) {
    errors.guestNames = 'Informe o nome do(a) acompanhante.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateTotalAttendees(attendees: Attendee[]): {
  totalConfirmed: number;
  exMoradores: number;
  moradoresAtuais: number;
  amigos: number;
  totalGuests: number;
} {
  let exMoradores = 0;
  let moradoresAtuais = 0;
  let amigos = 0;
  let totalGuests = 0;

  for (const a of attendees) {
    if (a.role === 'ex-morador') exMoradores++;
    else if (a.role === 'morador-atual') moradoresAtuais++;
    else amigos++;

    totalGuests += a.guestsCount || 0;
  }

  return {
    totalConfirmed: attendees.length + totalGuests,
    exMoradores,
    moradoresAtuais,
    amigos,
    totalGuests,
  };
}

export function generateWhatsAppLink(
  data: Partial<RSVPFormData>,
  targetPhone: string = '5511999998888'
): string {
  const cleanPhone = targetPhone.replace(/\D/g, '');
  const greeting = 'Fala rapaziada da Sparta!';
  const nameLine = data.name ? `Meu nome é *${data.name.trim()}*${data.nickname ? ` (vulgo *${data.nickname.trim()}*)` : ''}` : 'Vim pela landing page da Ceia!';
  const roleLine = data.role ? `Status: ${data.role === 'ex-morador' ? 'Ex-Morador' : data.role === 'morador-atual' ? 'Morador Atual' : 'Amigo da Sparta'}${data.generationOrYear ? ` (${data.generationOrYear})` : ''}` : '';
  const guestLine = data.bringingGuest ? `Vou levar acompanhante: ${data.guestNames || '1 pessoa'}` : 'Vou sozinho(a) pronto pro combate!';
  const messageLine = data.customMessage ? `Recado: "${data.customMessage.trim()}"` : '';
  const shout = 'Nossa história continua viva! Au-Au-Au!';

  const fullText = [
    greeting,
    nameLine,
    roleLine,
    guestLine,
    messageLine,
    shout,
  ]
    .filter(Boolean)
    .join('\n\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(fullText)}`;
}
