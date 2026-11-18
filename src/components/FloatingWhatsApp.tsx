import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const FloatingWhatsApp: React.FC = () => {
  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Quero confirmar minha presença na Ceia deste ano.',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Confirmar presença pelo WhatsApp"
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
