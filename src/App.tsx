/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownSection } from './components/CountdownSection';
import { CeiaMenuSection } from './components/CeiaMenuSection';
import { PricingSection } from './components/PricingSection';
import { HeartfeltSection } from './components/HeartfeltSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

interface AppProps {
  pricingMode?: 'standard' | 'single';
}

export default function App({ pricingMode = 'standard' }: AppProps) {
  return (
    <div className="min-h-screen bg-marble text-stone-900 selection:bg-red-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CountdownSection />
        <CeiaMenuSection />
        <PricingSection variant={pricingMode} />
        <HeartfeltSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
