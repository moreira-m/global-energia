import React, { useState } from 'react';
import Logo from './../assets/global-energia-header.png';
import { Link } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((o) => !o);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre nós', href: '/aboutUs' },
    { label: 'Projetos', href: '/projetos' },
  ];

  return (
    <header className="bg-[#0B599B]">
      <div className="overflow-hidden h-[78px] flex flex-wrap items-center justify-between max-w-[1024px] mx-4 md:mx-auto">
        <a href="/" className="h-12 flex items-center md:ml-10">
          <img src={Logo} alt="Logo" className="h-full w-auto" />
        </a>
        <nav className="flex items-center mr-4 relative">
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden p-2 z-50 outline-none fixed right-4"
          >
            <span
              className={`block w-[30px] h-[2px] bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
            />
            <span
              className={`block w-[30px] h-[2px] bg-white my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-[30px] h-[2px] bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                }`}
            />
          </button>
          <ul
            className={`list-none p-0 m-0 ${isMenuOpen
              ? 'flex flex-col fixed inset-0 w-screen h-screen bg-[#0B599B] z-40 justify-center'
              : 'hidden'
              } md:flex md:static md:flex-row md:items-center md:gap-10 md:mr-10`}
          >
            {navLinks.map(({ label, href }) => (<li
              key={label}
              to={href}
              className={`my-2 md:my-0 ${isMenuOpen
                ? 'flex justify-center items-center w-[60%] mx-auto border border-white rounded-full h-[50px] transition-colors hover:bg-white'
                : ''
                }`}
            >
              <Link
                to={href}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full h-full text-center font-gotham text-white transition-all items-center flex justify-center ${isMenuOpen ? 'hover:text-black' : 'hover:underline'
                  }`}
              >
                {label}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
