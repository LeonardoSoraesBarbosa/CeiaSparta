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
  targetPhone: string = '5538999912228'
): string {
  const cleanPhone = targetPhone.replace(/\D/g, '');
  const greeting = 'Oi, pessoal da Sparta! Tudo bem?';
  const nameLine = data.name
    ? `Aqui é ${data.name.trim()}${data.nickname?.trim() ? ` (${data.nickname.trim()})` : ''}.`
    : '';
  const roleLabel = data.role
    ? {
        'ex-morador': 'ex-morador',
        'morador-atual': 'morador atual',
        'amigo-sparta': 'amigo da Sparta',
        agregado: 'agregado da Sparta',
      }[data.role]
    : '';
  const roleLine = roleLabel
    ? `Sou ${roleLabel}${data.generationOrYear?.trim() ? ` — ${data.generationOrYear.trim()}` : ''}.`
    : '';
  const messageLine = data.customMessage?.trim() || '';
  const guestLine = data.bringingGuest === true
    ? data.guestNames?.trim()
      ? `Vou com ${data.guestNames.trim()}.`
      : data.guestsCount && data.guestsCount > 1
        ? `Vou levar ${data.guestsCount} pessoas comigo.`
        : 'Vou levar uma pessoa comigo.'
    : data.bringingGuest === false
      ? 'Vou sozinho.'
      : '';
  const motto = 'Aqui somos todos irmãos!';

  const fullText = [
    greeting,
    nameLine,
    roleLine,
    messageLine,
    guestLine,
    motto,
  ]
    .filter(Boolean)
    .join('\n\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(fullText)}`;
}
