import React from 'react';
import { MessageCircle, Calendar, MapPin, Instagram } from 'lucide-react';
import { EVENT_DETAILS, POSTER_IMAGE_URL } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';
import { SpartaLogo } from './SpartaLogo';

export const Hero: React.FC = () => {
  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Quero confirmar minha presença na Ceia deste ano.',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <section id="save-the-date" className="relative overflow-hidden py-12 md:py-16 bg-marble border-b border-stone-200">
      
      <div className="absolute top-0 left-0 right-0 h-px bg-stone-200" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct, punchy copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top editorial kicker */}
            <div className="flex items-center gap-3.5">
              <SpartaLogo className="w-[72px] h-[72px]" />
              <div>
                <p className="text-sm uppercase tracking-[0.18em] font-bold text-red-700">
                  República Sparta
                </p>
                <p className="text-xs text-stone-500 mt-1">Desde 2010</p>
              </div>
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
              Nossa história continua viva. Aqui somos todos irmãos!
            </p>

            <p className="text-base text-stone-600 leading-relaxed font-sans max-w-2xl">
              Uma noite para reunir os irmãos, relembrar as histórias da casa e celebrar a tradição da Sparta com ceia completa e open bar.
            </p>

            {/* Official Bio Motto & Foundation */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600">
              <span className="font-semibold text-red-800 font-cinzel">
                &ldquo;Aqui somos todos irmãos&rdquo;
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-xs sm:text-sm text-stone-600 pt-3 border-t border-stone-200">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                <Calendar className="w-4 h-4 text-[#C8102E]" />
                <span>Sábado a partir das 18h</span>
              </div>
              <a
                href={EVENT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 text-stone-700 hover:text-red-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-stone-900">República Sparta</strong>
                  <span className="block text-xs mt-0.5">{EVENT_DETAILS.address}</span>
                </span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
                Ceia
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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

          </div>

          {/* Right Column: Clean Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <figure className="relative rounded-2xl overflow-hidden border border-stone-300 bg-white shadow-lg">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                  <img
                    src={POSTER_IMAGE_URL}
                    alt="Arte Oficial da Ceia Sparta 2026 - Save the Date 05/12"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <figcaption className="px-4 py-3.5 bg-white border-t border-stone-200 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-stone-900 font-cinzel">CEIA SPARTA 2026</p>
                    <p className="text-[11px] text-stone-500">República Sparta</p>
                  </div>
                  <p className="text-xs font-bold text-red-700 whitespace-nowrap">05 DE DEZEMBRO</p>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
