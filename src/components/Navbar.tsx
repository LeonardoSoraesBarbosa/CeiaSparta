import React, { useState } from 'react';
import { MessageCircle, Menu, X, Shield, Calendar, Film, DollarSign, Utensils } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Fala rapaziada da Sparta! Quero confirmar minha vaga na Ceia! Au-Au-Au!',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        
        {/* Brand Wordmark */}
        <a 
          href="#save-the-date" 
          onClick={(e) => { e.preventDefault(); scrollTo('save-the-date'); }}
          className="flex items-center gap-2.5 text-xl font-bold tracking-wider font-cinzel text-stone-900 hover:text-red-700 transition-colors whitespace-nowrap shrink-0"
        >
          <Shield className="w-6 h-6 text-red-700 fill-red-700/15" />
          <span>REPÚBLICA SPARTA</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-stone-700">
          <button 
            onClick={() => scrollTo('save-the-date')} 
            className="hover:text-red-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Save The Date
          </button>
          <button 
            onClick={() => scrollTo('cardapio')} 
            className="hover:text-red-700 font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer text-stone-900"
          >
            Ceia
          </button>
          <button 
            onClick={() => scrollTo('contagem')} 
            className="hover:text-red-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contagem
          </button>
          <button 
            onClick={() => scrollTo('valores')} 
            className="hover:text-red-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Valores
          </button>
          <button 
            onClick={() => scrollTo('videos')} 
            className="hover:text-red-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vídeos
          </button>
        </nav>

        {/* Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all hover:scale-102 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Confirmar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-red-700 rounded-lg focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#FAF9F6] border-b border-stone-200 space-y-2">
          <button
            onClick={() => scrollTo('save-the-date')}
            className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-stone-800 hover:bg-stone-100 rounded-md"
          >
            <Calendar className="w-4 h-4 text-red-700" />
            <span>Save The Date</span>
          </button>
          <button
            onClick={() => scrollTo('cardapio')}
            className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm font-semibold text-stone-900 hover:bg-stone-100 rounded-md"
          >
            <Utensils className="w-4 h-4 text-red-700" />
            <span>Cardápio da Ceia</span>
          </button>
          <button
            onClick={() => scrollTo('contagem')}
            className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-stone-800 hover:bg-stone-100 rounded-md"
          >
            <Calendar className="w-4 h-4 text-red-700" />
            <span>Contagem Regressiva</span>
          </button>
          <button
            onClick={() => scrollTo('valores')}
            className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-stone-800 hover:bg-stone-100 rounded-md"
          >
            <DollarSign className="w-4 h-4 text-red-700" />
            <span>Valores da Confraternização</span>
          </button>
          <button
            onClick={() => scrollTo('videos')}
            className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-stone-800 hover:bg-stone-100 rounded-md"
          >
            <Film className="w-4 h-4 text-red-700" />
            <span>Galeria de Vídeos</span>
          </button>
          <div className="pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirmar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
