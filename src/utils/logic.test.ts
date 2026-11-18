import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimeRemaining } from './countdown';
import { validateRSVPForm, calculateTotalAttendees, generateWhatsAppLink } from './rsvp';

test('countdown calculates accurate days, hours, minutes, seconds', () => {
  const current = new Date('2026-11-09T12:00:00Z');
  const target = new Date('2026-12-05T18:00:00Z');
  const res = calculateTimeRemaining(target, current);

  assert.equal(res.isExpired, false);
  assert.equal(res.days, 26);
  assert.equal(res.hours, 6);
  assert.equal(res.minutes, 0);
  assert.equal(res.seconds, 0);
});

test('countdown handles expired target date gracefully', () => {
  const current = new Date('2026-12-10T12:00:00Z');
  const target = new Date('2026-12-05T18:00:00Z');
  const res = calculateTimeRemaining(target, current);

  assert.equal(res.isExpired, true);
  assert.equal(res.days, 0);
  assert.equal(res.hours, 0);
});

test('RSVP validation detects missing name and invalid phone', () => {
  const result = validateRSVPForm({
    name: 'Al',
    nickname: '',
    role: 'ex-morador',
    generationOrYear: '',
    phone: '123',
    bringingGuest: false,
    guestsCount: 0,
    guestNames: '',
    favoriteDrink: '',
    customMessage: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
});

test('RSVP validation passes for complete valid submission', () => {
  const result = validateRSVPForm({
    name: 'Leonardo Barbosa',
    nickname: 'Capitão',
    role: 'ex-morador',
    generationOrYear: 'Turma 2017',
    phone: '(11) 99876-5432',
    bringingGuest: true,
    guestsCount: 1,
    guestNames: 'Mariana Silva',
    favoriteDrink: 'Chopp gelado',
    customMessage: 'Contem comigo, saudades demais!',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateTotalAttendees aggregates ex-moradores and guests correctly', () => {
  const stats = calculateTotalAttendees([
    {
      id: '1',
      name: 'Spartano 1',
      role: 'ex-morador',
      phone: '11999999999',
      guestsCount: 1,
      confirmedAt: '2026-11-01',
    },
    {
      id: '2',
      name: 'Spartano 2',
      role: 'morador-atual',
      phone: '11999999998',
      guestsCount: 0,
      confirmedAt: '2026-11-02',
    },
    {
      id: '3',
      name: 'Amigo 1',
      role: 'amigo-sparta',
      phone: '11999999997',
      guestsCount: 2,
      confirmedAt: '2026-11-03',
    },
  ]);

  assert.equal(stats.exMoradores, 1);
  assert.equal(stats.moradoresAtuais, 1);
  assert.equal(stats.amigos, 1);
  assert.equal(stats.totalGuests, 3);
  assert.equal(stats.totalConfirmed, 6); // 3 attendees + 3 guests
});

test('generateWhatsAppLink creates a natural confirmation message', () => {
  const url = generateWhatsAppLink({
    name: 'Thiago Martins',
    nickname: 'Biro',
    role: 'ex-morador',
    generationOrYear: 'Bicho 2016',
    customMessage: 'Bora quebrar tudo!',
  });

  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Oi, pessoal da Sparta! Tudo bem?'));
  assert.ok(decoded.includes('Aqui é Thiago Martins (Biro).'));
  assert.ok(decoded.includes('Sou ex-morador — Bicho 2016.'));
  assert.ok(decoded.includes('Bora quebrar tudo!'));
  assert.ok(decoded.includes('Aqui somos todos irmãos!'));
  assert.ok(!decoded.includes('Status:'));
  assert.ok(!decoded.includes('Vim pela landing page'));
  assert.ok(!decoded.includes('Vou sozinho'));
});
