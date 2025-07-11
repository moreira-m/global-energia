import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div>
        <img src="" alt="Logo" />
        <nav>
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          />
          <ul>
              <li>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}