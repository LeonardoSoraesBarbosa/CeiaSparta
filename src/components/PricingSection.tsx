import React, { useState } from 'react';
import { Check, Copy, CheckCheck, CreditCard, MessageCircle, Info } from 'lucide-react';
import { PRICING_TIERS, SINGLE_PRICE_TIER, EVENT_DETAILS } from '../data/spartaData';
import { generateWhatsAppLink } from '../utils/rsvp';
import { SpartaLogo } from './SpartaLogo';
import pixQrCode from '../assets/images/pix_qrcode.jpeg';

interface PricingSectionProps {
  variant?: 'standard' | 'single';
}

export const PricingSection: React.FC<PricingSectionProps> = ({ variant = 'standard' }) => {
  const [copiedPix, setCopiedPix] = useState(false);
  const isSinglePrice = variant === 'single';
  const pricingTiers = isSinglePrice ? [SINGLE_PRICE_TIER] : PRICING_TIERS;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const getTierWhatsAppUrl = (tierName: string) => {
    return generateWhatsAppLink({
      customMessage: isSinglePrice
        ? 'Quero confirmar minha presença na Ceia deste ano.'
        : `Quero confirmar minha presença na Ceia na categoria de ${tierName.toLowerCase()}.`,
    }, EVENT_DETAILS.whatsappNumber);
  };

  const creditWhatsAppUrl = generateWhatsAppLink({
    customMessage: 'Oi, Voldemort! Quero pagar minha participação na Ceia da Sparta no cartão de crédito. Pode me passar as opções?',
  }, EVENT_DETAILS.whatsappNumber);

  const INCLUDED_FOR_ALL = [
    'Pratos principais: Pernil e Lasanha',
    'Acompanhamentos: Salpicão, Farofa e Arroz',
    'Sobremesa: Bombom aberto',
    'Open Bar: Chopp gelado durante todo o evento',
    'Lembrança oficial da República Sparta',
    'Livre acesso à República',
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
        </div>

        {/* O que está incluso para todos - Bullet Points Claros */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-stone-200 p-6 sm:p-8 text-left space-y-4">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <SpartaLogo className="w-6 h-6" />
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
        <div className={`grid grid-cols-1 gap-6 items-stretch mx-auto ${
          isSinglePrice ? 'max-w-md' : 'md:grid-cols-2 max-w-4xl'
        }`}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-6 flex flex-col justify-between bg-white text-left ${
                tier.popular
                  ? 'border border-[#C8102E] shadow-sm'
                  : 'border border-stone-300'
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
                  <span>Confirmar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PIX Payment Box */}
        <div className="max-w-4xl mx-auto rounded-xl bg-white border border-stone-300 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[240px] aspect-square overflow-hidden bg-white">
                <img
                  src={pixQrCode}
                  alt={`QR Code do PIX da Ceia Sparta — chave ${EVENT_DETAILS.pixKey}`}
                  className="absolute w-[168%] max-w-none h-auto left-[-34%] top-[-75%]"
                />
              </div>
              <p className="mt-3 text-xs text-stone-500 text-center">
                Escaneie o QR Code pelo aplicativo do seu banco.
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700 mb-2">
                  Pagamento
                </p>
                <h4 className="text-xl font-bold font-cinzel text-stone-900">
                  PIX da Ceia
                </h4>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Favorecido: {EVENT_DETAILS.pixHolder} ({EVENT_DETAILS.pixBank})
                </p>
              </div>

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

              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-stone-900">
                      Pagamento no cartão de crédito
                    </h5>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Para pagar no crédito, entre em contato com o Voldemort pelo WhatsApp.
                    </p>
                  </div>
                </div>

                <a
                  href={creditWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
