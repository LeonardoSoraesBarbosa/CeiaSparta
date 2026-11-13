import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Download, MessageCircle } from 'lucide-react';
import { calculateTimeRemaining, SPARTA_EVENT_DATE, TimeRemaining } from '../utils/countdown';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const CountdownSection: React.FC = () => {
  const [time, setTime] = useState<TimeRemaining>(() => calculateTimeRemaining(SPARTA_EVENT_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(SPARTA_EVENT_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Ceia da Sparta 2026'
  )}&dates=20261205T210000Z/20261206T090000Z&details=${encodeURIComponent(
    'Ceia da Sparta 2026! Confraternização, open bar e irmãos reunidos. Au-Au-Au!'
  )}&location=${encodeURIComponent(EVENT_DETAILS.location)}`;

  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sparta//Ceia Sparta 2026//PT',
      'BEGIN:VEVENT',
      'SUMMARY:Ceia da Sparta 2026',
      'DESCRIPTION:Confraternização oficial da República Sparta. Au-Au-Au!',
      'LOCATION:Sede da República Sparta',
      'DTSTART:20261205T210000Z',
      'DTEND:20261206T090000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'ceia-sparta-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Fala rapaziada! Tô acompanhando a contagem regressiva da Ceia! Au-Au-Au!',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <section id="contagem" className="py-12 md:py-16 bg-[#F4F3EE] border-b border-stone-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-widest">
            <Clock className="w-4 h-4 text-red-700" />
            <span>FALTA POUCO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900">
            CONTAGEM REGRESSIVA
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto text-sm sm:text-base">
            Cada segundo conta para o reencontro na sede.
          </p>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {/* Days */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E]" />
            <div className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900 tabular-nums">
              {String(time.days).padStart(2, '0')}
            </div>
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">
              Dias
            </div>
          </div>

          {/* Hours */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-stone-800" />
            <div className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900 tabular-nums">
              {String(time.hours).padStart(2, '0')}
            </div>
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">
              Horas
            </div>
          </div>

          {/* Minutes */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-stone-800" />
            <div className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900 tabular-nums">
              {String(time.minutes).padStart(2, '0')}
            </div>
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">
              Minutos
            </div>
          </div>

          {/* Seconds */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E]" />
            <div className="text-3xl sm:text-4xl font-black font-cinzel text-[#C8102E] tabular-nums">
              {String(time.seconds).padStart(2, '0')}
            </div>
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mt-1">
              Segundos
            </div>
          </div>
        </div>

        {/* Anthem Quote */}
        <div className="text-stone-700 text-sm italic font-handwriting text-lg sm:text-xl">
          &ldquo;O reencontro sagrado dos espartanos. Au-Au-Au!&rdquo;
        </div>

        {/* Engagement Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold border border-stone-300 shadow-xs transition-colors"
          >
            <Calendar className="w-4 h-4 text-red-700" />
            <span>Salvar no Google Agenda</span>
          </a>

          <button
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold border border-stone-300 shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-stone-600" />
            <span>Baixar .ICS</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirmar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
