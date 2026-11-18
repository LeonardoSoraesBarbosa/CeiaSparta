import React from 'react';
import { MessageCircle, Wine } from 'lucide-react';
import { CEIA_CARDAPIO, EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';
import ceiaGrupoImage from '../assets/images/sparta_ceia_grupo.jpeg';

export const CeiaMenuSection: React.FC = () => {
  const directWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Quero confirmar minha presença na Ceia deste ano.',
  }, EVENT_DETAILS.whatsappNumber);

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-marble border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700 mb-3">
            Cardápio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel text-stone-900 tracking-tight">
            CEIA <span className="text-[#C8102E]">SPARTA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Um cardápio direto, completo e preparado para reunir a casa em volta da mesa.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-stone-100 overflow-hidden">
              <img
                src={ceiaGrupoImage}
                alt="Integrantes e amigos da República Sparta reunidos"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col">
              <div className="flex-1 divide-y divide-stone-200">
                {CEIA_CARDAPIO.map((category) => (
                  <div key={category.id} className="py-5 first:pt-0 last:pb-0">
                    <div className="mb-3">
                      <h3 className="text-base font-bold font-cinzel text-stone-900">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {category.items.map((item) => (
                        <li key={item.id} className="flex items-center gap-2 text-sm text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" />
                          <span className="font-medium">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-stone-200 space-y-5">
                <div className="flex items-center gap-2.5 text-sm text-stone-700">
                  <Wine className="w-5 h-5 text-red-700 shrink-0" />
                  <span>Open bar com chopp gelado durante o evento.</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#valores"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold transition-colors"
                  >
                    Valores
                  </a>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-900 text-sm font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-700" />
                    <span>Confirmar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
