import React from 'react';
import Logo from './../assets/global-energia-header.png';
import IgLogo from './../assets/ig-icon.svg';
import LinkedinLogo from './../assets/linkedin-icon.svg';

export default function Footer() {
  return (
    <footer className="bg-[#2D2E31]">
      <div className="overflow-hidden h-[78px] max-w-[1024px] mx-auto
                      flex flex-col md:flex-row items-center justify-between
                      px-4">
        <a href="/" className="h-12 flex items-center mb-4 md:mb-0">
          <img src={Logo} alt="Footer logo" className="h-full w-auto" />
        </a>
        <p className="text-white text-center text-sm md:text-base mb-4 md:mb-0">
          Todos os direitos reservados Global Energia LTDA 2025
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook">
            <img src={IgLogo} alt="" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={LinkedinLogo} alt="" className="h-6 w-6" />
          </a>
          {/* <a href="#" aria-label="LinkedIn">
            <img src="/icon-linkedin.svg" alt="" className="h-6 w-6" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
