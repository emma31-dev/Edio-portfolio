import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>A little about me</p>
        <h2 className={styles.title}>Good design makes<br /><span>the message matter.</span></h2>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          I’m <span className={styles.goldText}>Ediodiong Emmanuel</span>, a graphic designer who believes the best visuals do more than look good — they make ideas clear, memorable, and easy to connect with.
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
