import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.content}>
      <p className={styles.introduction}><span aria-hidden="true">✳</span> Hello, I’m Ediodiong</p>
      <h1 className={styles.title}>
        <span className={styles.solidTitle}>Graphic designer</span>
        <span className={styles.outlineTitle}>&amp; Visual storyteller</span>
      </h1>

      <p className={styles.specialties}>Brand identity · Print · Digital</p>
      <div className={styles.actions}>
        <a className={styles.primaryAction} href="#portfolio">Explore my work <span aria-hidden="true">↗</span></a>
        <a className={styles.secondaryAction} href="#contact">Let’s work together</a>
      </div>
      <span className={styles.sideNote}>Independent designer<br />Available for select projects</span>
    </div>
    <a className={styles.scrollHint} href="#about" aria-label="Scroll to about section">Scroll to explore <span aria-hidden="true">↓</span></a>
  </section>
);

export default Hero;
