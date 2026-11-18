import React from 'react';
import spartaLogo from '../assets/images/sparta_logo.jpeg';

interface SpartaLogoProps {
  className?: string;
}

export const SpartaLogo: React.FC<SpartaLogoProps> = ({ className = 'w-8 h-8' }) => (
  <img
    src={spartaLogo}
    alt=""
    aria-hidden="true"
    className={`shrink-0 rounded-full object-contain ${className}`}
  />
);
