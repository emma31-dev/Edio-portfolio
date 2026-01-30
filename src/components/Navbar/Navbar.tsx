import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);

      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'portfolio', 'contact'];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
        offsetTop: document.getElementById(id)?.offsetTop || 0
      }));

      const currentSection = sectionElements
        .filter(section => section.element)
        .find((section, index, arr) => {
          const nextSection = arr[index + 1];
          const sectionTop = section.offsetTop - 150; // Offset for navbar height
          const sectionBottom = nextSection ? nextSection.offsetTop - 150 : document.body.scrollHeight;

          return scrollTop >= sectionTop && scrollTop < sectionBottom;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleDownloadCV = () => {
    // Create a mock CV download - in a real app, this would link to an actual CV file
    const link = document.createElement('a');
    link.href = '/cv/ediodiong-cv.pdf'; // This would be the actual CV file path
    link.download = 'Ediodiong-CV.pdf';
    link.click();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <img src="/logo.png" alt="BGH Logo" className={styles.logoImage} />
        </div>

        {/* Desktop Navigation */}
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className={`${styles.navLink} ${activeSection === 'hero' ? styles.active : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`${styles.navLink} ${activeSection === 'portfolio' ? styles.active : ''}`}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className={`${styles.downloadButton} ${isMobileMenuOpen ? styles.hideOnMobile : ''}`}
          aria-label="Download CV"
        >
          <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            <path d="M12,11L16,15H13V19H11V15H8L12,11Z" />
          </svg>
          <span className={styles.downloadText}>Download CV</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;