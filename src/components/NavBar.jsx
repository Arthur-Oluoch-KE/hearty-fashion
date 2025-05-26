import { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-title">Harriet's Artistry</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? 'nav-list--open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#products" className="nav-link" onClick={toggleMenu}>Products</a></li>
          <li><a href="#blog" className="nav-link" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;