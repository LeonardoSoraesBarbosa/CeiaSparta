import React from 'react';
import { Shield } from 'lucide-react';
import { EVENT_DETAILS } from '../data/spartaData';

export const HeartfeltSection: React.FC = () => {
  return (
    <section className="py-14 md:py-18 bg-marble border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Heartfelt Open Letter on Clean White Card */}
        <div className="rounded-2xl bg-white border border-stone-200 p-6 sm:p-10 shadow-sm relative">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            
            <h2 className="text-2xl sm:text-3xl font-black font-cinzel text-stone-900 leading-tight">
              NOSSA HISTÓRIA CONTINUA VIVA
            </h2>

            <div className="w-12 h-1 bg-[#C8102E] mx-auto rounded-full" />

            <div className="text-stone-700 space-y-2.5 text-sm sm:text-base leading-relaxed text-left font-sans">
              <p>
                A Sparta nunca foi só um endereço. É o lugar onde dividimos as maiores risadas da juventude e forjamos uma irmandade que resiste ao tempo.
              </p>
              <p className="font-semibold text-stone-900">
                Cada reencontro pulsa como se estivéssemos juntos ontem. Contamos com a sua presença nesse brinde.
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-left">
              <div>
                <p className="text-2xl font-bold font-handwriting text-red-700">
                  Au-Au-Au!
                </p>
                <p className="text-xs text-stone-500">
                  República Sparta
                </p>
              </div>

              <span className="text-xs text-stone-400 font-mono">
                Desde 2010
              </span>
            </div>
          </div>
        </div>

        {/* Official Instagram Profile Integration Card */}
        <div className="rounded-2xl bg-white border border-stone-200 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl ring-1 ring-stone-300 p-1 shrink-0 bg-stone-50">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center border border-stone-200">
                  <Shield className="w-6 h-6 text-red-700 fill-red-700/10" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-stone-900 font-cinzel">
                    República Sparta
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                    Oficial
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  &ldquo;Aqui somos todos irmãos&rdquo; · João Monlevade - MG
                </p>
              </div>
            </div>

            <a
              href={EVENT_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs w-full sm:w-auto"
            >
              <span>Instagram @spartarep</span>
              <span className="text-stone-400">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
