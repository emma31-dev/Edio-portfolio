import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Main navigation">
        <a className={styles.logo} href="#hero" onClick={closeMenu} aria-label="Ediodiong Emmanuel, home">
          <span>Edio</span><span className={styles.logoDot}>.</span>
        </a>
        <button
          className={styles.menuToggle}
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-menu"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
        </button>
        <ul id="main-menu" className={`${styles.navLinks} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
          <li><a href="#portfolio" onClick={closeMenu}>Design</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a className={styles.contactButton} href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
};

export default Navbar;
