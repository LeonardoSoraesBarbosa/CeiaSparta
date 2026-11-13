import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Fala rapaziada da Sparta! Quero confirmar minha presença na Ceia! Nossa história continua viva! Au-Au-Au!',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="relative max-w-xs p-3 rounded-xl bg-white border border-stone-200 shadow-lg text-left hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-stone-400 hover:text-stone-700 rounded cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Comissão Online
            </span>
          </div>
          <p className="text-xs text-stone-700 leading-snug">
            Bora fechar o pelotão? Confirme agora no WhatsApp! <strong className="text-red-700">Au-Au-Au!</strong>
          </p>
        </div>
      )}

      {/* Floating Green Button */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Confirmar presença no WhatsApp da República Sparta"
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-transform hover:scale-103 active:scale-97 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-bold tracking-wide whitespace-nowrap">
          Confirmar no WhatsApp
        </span>
      </a>
    </div>
  );
};
