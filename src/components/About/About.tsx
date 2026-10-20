import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <svg className={styles.penTool} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M27 6 40 19 24 38 8 42l4-16L27 6Z" />
      <path d="m12 26 12 12M27 6l-3 12 9 1" />
      <circle cx="12" cy="26" r="2" />
      <circle cx="24" cy="18" r="2" />
      <circle cx="33" cy="19" r="2" />
    </svg>
    <svg className={styles.shapeTool} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="15" cy="14" r="8" />
      <rect x="23" y="22" width="17" height="17" rx="2" />
      <path d="M8 40 17 25l9 15H8Z" />
    </svg>
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>A little about me</p>
        <h2 className={styles.title}>Good design makes<br /><span>the message matter.</span></h2>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          I’m <span className={styles.goldText}>Ediodiong Emmanuel</span>, a graphic designer who believes the best visuals do more than look good. I make ideas clear, memorable, and easy to connect with.
        </p>
        <p className={styles.description}>
          From logo design and brand identity to flyers, social media, and promotional materials, I build thoughtful visual systems with strong hierarchy, purposeful typography, and a clear point of view.
        </p>
        <a className={styles.workLink} href="#portfolio">See selected work <span aria-hidden="true">↗</span></a>
      </div>
      <div className={styles.services} aria-label="Design services">
        <span>01 / Brand identity</span>
        <span>02 / Print &amp; campaigns</span>
        <span>03 / Digital design</span>
      </div>
    </div>
  </section>
);

export default About;
