import React, { useState } from 'react';
import { Wine, MessageCircle } from 'lucide-react';
import { CEIA_CARDAPIO, CeiaMenuItem, CeiaCategory, EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const CeiaMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? CEIA_CARDAPIO
    : CEIA_CARDAPIO.filter((cat: CeiaCategory) => cat.id === activeCategory);

  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Fala rapaziada da Sparta! Quero confirmar minha presença na Ceia! Au-Au-Au!',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <section id="cardapio" className="py-14 md:py-20 bg-marble border-b border-stone-200 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-px bg-stone-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel text-stone-900 tracking-tight">
            CEIA <span className="text-[#C8102E]">SPARTA</span>
          </h2>
          <div className="w-16 h-1 bg-[#C8102E] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            Pernil suíno assado, lasanha artesanal, acompanhamentos da casa, petiscos e pavê de chocolate.
          </p>
        </div>

        {/* Featured Showcase Banner */}
        <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Visual Photo */}
            <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden bg-stone-100">
              <img
                src="/src/assets/images/sparta_ceia_banquete_1794405044534.jpg"
                alt="Ceia de Natal República Sparta com Pernil, Lasanha, Pavê e Petiscos"
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Highlights Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 text-left bg-white">
              <div className="space-y-1">
                <h3 className="text-2xl font-black font-cinzel text-stone-900">
                  Fartura & Chopp Gelado
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  Tradição espartana desde 2010
                </p>
              </div>

              {/* Four Course Highlight Modules */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block font-cinzel">Pratos Principais</span>
                  <span className="text-stone-600 text-xs mt-0.5 block">Pernil assado e Lasanha artesanal</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block font-cinzel">Sobremesa</span>
                  <span className="text-stone-600 text-xs mt-0.5 block">Pavê de chocolate</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block font-cinzel">Petiscos</span>
                  <span className="text-stone-600 text-xs mt-0.5 block">Banana, Mandioca, Pastel e Calabresa</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block font-cinzel">Para Beliscar</span>
                  <span className="text-stone-600 text-xs mt-0.5 block">Ovos de codorna temperados</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="#valores"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C8102E] hover:bg-red-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-all"
                >
                  <span>Ver Valores & Rateio</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            Todos
          </button>
          {CEIA_CARDAPIO.map((cat: CeiaCategory) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Menu Grids */}
        <div className="space-y-8">
          {filteredCategories.map((cat: CeiaCategory) => (
            <div key={cat.id} className="space-y-4 text-left">
              
              {/* Category Subheader */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h3 className="text-lg sm:text-xl font-bold font-cinzel text-stone-900">
                  {cat.title}
                </h3>
                <span className="text-xs text-stone-500">
                  {cat.subtitle}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {cat.items.map((item: CeiaMenuItem) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-stone-200 bg-white shadow-xs text-left space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-base text-stone-900 font-cinzel">
                        {item.name}
                      </h4>
                      {item.badge && (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Bar: Open Bar note & WhatsApp */}
        <div className="rounded-xl bg-white border border-stone-200 p-5 sm:p-6 text-left shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Wine className="w-5 h-5 text-red-700 shrink-0" />
            <p className="text-xs sm:text-sm text-stone-700 font-medium">
              Open Bar com Chopp gelado a noite toda para todos os participantes.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirmar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
