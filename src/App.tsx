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
import { VideoGallery } from './components/VideoGallery';
import { HeartfeltSection } from './components/HeartfeltSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-marble text-stone-900 selection:bg-red-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CountdownSection />
        <CeiaMenuSection />
        <PricingSection />
        <VideoGallery />
        <HeartfeltSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
