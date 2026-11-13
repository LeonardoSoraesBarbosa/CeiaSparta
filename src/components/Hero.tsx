import React, { useState } from 'react';
import { MessageCircle, Calendar, MapPin, Maximize2, Instagram, X } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const Hero: React.FC = () => {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Fala rapaziada da Sparta! Quero confirmar minha vaga na Ceia! Au-Au-Au!',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <section id="save-the-date" className="relative overflow-hidden py-12 md:py-16 bg-marble border-b border-stone-200">
      
      <div className="absolute top-0 left-0 right-0 h-px bg-stone-200" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct, punchy copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top editorial kicker */}
            <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 flex items-center gap-2">
              <span className="text-red-700 font-bold">República Sparta</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Encontro Anual</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-cinzel text-stone-900 leading-tight">
                CEIA SPARTA <span className="text-[#C8102E]">2026</span>
              </h1>
              <div className="text-xl sm:text-2xl font-black font-cinzel text-[#C8102E] tracking-tight">
                SAVE THE DATE · 05 DE DEZEMBRO
              </div>
            </div>

            {/* Hook */}
            <p className="text-lg sm:text-xl font-bold text-stone-800 tracking-wide font-cinzel">
              Nossa história continua viva. Au-Au-Au!
            </p>

            <p className="text-base text-stone-600 leading-relaxed font-sans max-w-2xl">
              O reencontro mais esperado do ano. Reúna os irmãos, reviva as histórias da casa e celebre o nosso legado com ceia completa e open bar a noite toda.
            </p>

            {/* Official Bio Motto & Foundation */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600">
              <span className="font-semibold text-red-800 font-cinzel">
                &ldquo;Aqui somos todos irmãos&rdquo;
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-500 font-medium">
                Desde 2010
              </span>
              <span className="text-stone-300">·</span>
              <a
                href={EVENT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-stone-700 hover:text-red-700 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-stone-500" />
                <span>@spartarep</span>
              </a>
            </div>

            {/* Quick Event Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                <Calendar className="w-4 h-4 text-[#C8102E]" />
                <span>Sábado a partir das 18h</span>
              </div>
              <span className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>Sede da República Sparta · João Monlevade</span>
              </div>
              <span className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5 font-medium text-stone-700">
                <span>Ceia & Open Bar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-600 active:scale-98 rounded-xl shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirmar no WhatsApp</span>
              </a>

              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-all shadow-xs text-center"
              >
                <span>Ver Ceia</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-300 bg-white shadow-xl transition-transform duration-300 group-hover:scale-[1.01]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                  <img
                    src="/assets/aistudio/IMG-20261005-WA0199_2__c5426b5a.jpg"
                    alt="Arte Oficial da Ceia Sparta 2026 - Save the Date 05/12"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  <button
                    onClick={() => setIsPosterModalOpen(true)}
                    className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                    aria-label="Ver cartaz em tamanho real"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-stone-900 text-xs font-bold border border-stone-300 shadow-md">
                      <Maximize2 className="w-4 h-4 text-red-700" />
                      Ampliar Cartaz Oficial
                    </span>
                  </button>
                </div>

                <div className="p-3.5 bg-white border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-stone-900 font-cinzel">CARTAZ OFICIAL</p>
                    <p className="text-[11px] text-stone-500">Save The Date</p>
                  </div>
                  <button
                    onClick={() => setIsPosterModalOpen(true)}
                    className="text-xs text-red-700 hover:text-red-900 font-bold underline underline-offset-2 cursor-pointer"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Poster Lightbox Modal */}
      {isPosterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-stone-300 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPosterModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-white hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src="/assets/aistudio/IMG-20261005-WA0199_2__c5426b5a.jpg"
              alt="Cartaz Oficial Ceia da Sparta 05/12"
              className="max-h-[82vh] w-auto mx-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
