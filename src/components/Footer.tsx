import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';
import { SpartaLogo } from './SpartaLogo';

export const Footer: React.FC = () => {
  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Queria tirar uma dúvida sobre a Ceia.',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <footer className="bg-white border-t border-stone-200 text-stone-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Motto */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <SpartaLogo className="w-12 h-12" />
            <div>
              <span className="text-lg font-bold font-cinzel text-stone-900 block">
                REPÚBLICA SPARTA
              </span>
              <span className="text-xs text-red-700 font-handwriting text-base font-bold">
                Nossa história continua viva ontem, hoje e para sempre.
              </span>
            </div>
          </div>

          {/* Quick links & Contact */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm">
            <a href="#save-the-date" className="hover:text-red-700 transition-colors">
              Save The Date
            </a>
            <a href="#cardapio" className="hover:text-red-700 font-bold text-red-700 transition-colors">
              Ceia
            </a>
            <a href="#contagem" className="hover:text-red-700 transition-colors">
              Contagem
            </a>
            <a href="#valores" className="hover:text-red-700 transition-colors">
              Valores
            </a>
            <a
              href={EVENT_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-red-700 font-bold transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>@spartarep</span>
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
              <span>Confirmar no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 text-center sm:text-left">
          <p>
            © 2026 República Sparta · João Monlevade - MG
          </p>
          <p className="font-handwriting text-base text-stone-700 font-bold">
            Aqui somos todos irmãos!
          </p>
        </div>
      </div>
    </footer>
  );
};
