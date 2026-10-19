import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <a className={styles.logo} href="#hero">Edio<span>.</span></a>
      <p className={styles.credit}>© {new Date().getFullYear()} Ediodiong Emmanuel. Designed with intention.</p>
      <a className={styles.backToTop} href="#hero">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
