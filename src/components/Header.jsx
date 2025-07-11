import React, { useState } from 'react';
import Logo from './../assets/global-energia-header.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((o) => !o);

  return (
    <header className="bg-[#0B599B]">
      <div className="overflow-hidden h-[78px] flex flex-wrap items-center justify-between max-w-[1024px] mx-auto">
        <a href="/" className="h-12 flex items-center md:ml-10">
          <img src={Logo} alt="Logo" className="h-full w-auto" />
        </a>
        <nav className="flex items-center mr-4 relative">
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden p-2 z-50 outline-none"
          >
            <span
              className={`block w-[30px] h-[2px] bg-white transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-[30px] h-[2px] bg-white my-1 transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[30px] h-[2px] bg-white transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
          <ul
            className={`list-none p-0 m-0 ${
              isMenuOpen
                ? 'flex flex-col fixed inset-0 w-screen h-screen bg-[#0B599B] z-40 justify-center'
                : 'hidden'
            } md:flex md:static md:flex-row md:items-center md:gap-10 md:mr-10`}
          >
            {['Inicio', 'Sobre nós', 'Projetos'].map((label) => (
              <li
                key={label}
                className={`my-2 md:my-0 ${
                  isMenuOpen
                    ? 'flex justify-center items-center w-[60%] mx-auto border border-white rounded-full h-[50px] transition-colors hover:bg-white'
                    : ''
                }`}
              >
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full h-full text-center font-gotham text-white transition-all ${
                    isMenuOpen ? 'hover:text-black' : 'hover:underline'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
