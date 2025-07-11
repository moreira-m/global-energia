import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="header-container">
        <img src="" alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <button
            className="hamburger-button"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          />
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li className="nav-item">
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}