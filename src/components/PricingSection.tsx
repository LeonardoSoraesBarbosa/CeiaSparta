import React, { useState } from 'react';
import { Check, Copy, CheckCheck, MessageCircle, QrCode, Info, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS, EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';

export const PricingSection: React.FC = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const getTierWhatsAppUrl = (tierName: string) => {
    return generateWhatsAppLink({
      customMessage: `Fala rapaziada! Quero garantir minha vaga na Ceia no lote *${tierName}*! Au-Au-Au!`,
    }, EVENT_DETAILS.whatsappNumber);
  };

  const INCLUDED_FOR_ALL = [
    'Ceia completa: Pernil suíno assado e Lasanha de queijo artesanal',
    'Acompanhamentos: Arroz branco, Farofa crocante, Salpicão de frango e Salada',
    'Sobremesa: Pavê de chocolate da casa',
    'Petiscos: Banana da terra, Mandioca frita, Pastel, Calabresa e Ovos de codorna',
    'Open Bar: Chopp gelado durante todo o evento',
    'Lembrança oficial da República Sparta',
    'Livre acesso à sede e piscina',
  ];

  return (
    <section id="valores" className="py-14 md:py-20 bg-marble border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black font-cinzel text-stone-900">
            VALORES DA CONFRATERNIZAÇÃO
          </h2>
          <div className="w-16 h-1 bg-[#C8102E] mx-auto rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base">
            Rateio de custos sem fins lucrativos. O valor arrecadado é 100% revertido na ceia, chopp e infraestrutura.
          </p>
        </div>

        {/* O que está incluso para todos - Bullet Points Claros */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs text-left space-y-4">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <ShieldCheck className="w-5 h-5 text-red-700" />
            <h3 className="text-lg sm:text-xl font-bold font-cinzel text-stone-900">
              Incluso para Todos os Participantes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-700">
            {INCLUDED_FOR_ALL.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all bg-white text-left ${
                tier.popular
                  ? 'border-2 border-[#C8102E] shadow-md ring-1 ring-red-100'
                  : 'border border-stone-200 hover:border-stone-300 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-red-700 uppercase tracking-wider">
                    {tier.badge}
                  </span>
                  <h3 className="text-xl font-bold font-cinzel text-stone-900 mt-1">
                    {tier.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="border-y border-stone-100 py-3">
                  <div className="flex items-baseline gap-1 text-stone-900">
                    <span className="text-base font-bold text-red-700">R$</span>
                    <span className="text-4xl font-black font-cinzel tabular-nums">
                      {tier.price}
                    </span>
                    <span className="text-xs text-stone-400">/ pessoa</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5 font-mono">
                    {tier.installments} no PIX
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-6">
                <a
                  href={getTierWhatsAppUrl(tier.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
                    tier.popular
                      ? 'bg-[#C8102E] hover:bg-red-800 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Garantir Vaga no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PIX Payment Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-stone-50 rounded-xl border border-stone-200">
              <QrCode className="w-28 h-28 text-stone-800" />
              <span className="text-[11px] font-mono text-stone-500 mt-2 font-bold">
                CHAVE PIX
              </span>
            </div>

            <div className="md:col-span-8 space-y-3 text-left">
              <div>
                <h4 className="text-lg font-bold font-cinzel text-stone-900">
                  Chave PIX da Comissão
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Favorecido: {EVENT_DETAILS.pixHolder} ({EVENT_DETAILS.pixBank})
                </p>
              </div>

              {/* Copy Key */}
              <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-300">
                <input
                  type="text"
                  readOnly
                  value={EVENT_DETAILS.pixKey}
                  className="bg-transparent text-sm font-mono text-stone-900 font-bold w-full focus:outline-none px-2"
                />
                <button
                  onClick={handleCopyPix}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    copiedPix
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {copiedPix ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed flex items-center gap-1.5">
                <Info className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Após fazer o PIX, envie o comprovante no WhatsApp com seu nome e apelido.</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
