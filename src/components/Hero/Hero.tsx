import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridBackground}></div>

      {/* Floating Design Icons */}
      <div className={styles.floatingIcons}>
        {/* Figma Icon */}
        <div className={`${styles.icon} ${styles.icon1}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.025c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.465 4.49zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
          </svg>
        </div>

        {/* Adobe Illustrator Icon */}
        <div className={`${styles.icon} ${styles.icon2}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.53 10.73l2.45 6.5h-1.35l-.6-1.64H8.36l-.6 1.64H6.41l2.45-6.5h1.67zm-.67 1.19l-.86 2.34h1.72l-.86-2.34zM14.47 8.8c.53 0 .95.42.95.95s-.42.95-.95.95-.95-.42-.95-.95.42-.95.95-.95zm-.47 2.42h.95v5.91h-.95V11.22z" />
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Adobe Photoshop Icon */}
        <div className={`${styles.icon} ${styles.icon3}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8 8.2h1.61c1.04 0 1.84.25 2.4.76.56.51.84 1.24.84 2.19 0 .95-.28 1.68-.84 2.19-.56.51-1.36.76-2.4.76H8.75v2.68H7.8V8.2zm.95 4.32h.61c.67 0 1.17-.15 1.5-.44.33-.29.5-.72.5-1.29s-.17-1-.5-1.29c-.33-.29-.83-.44-1.5-.44h-.61v3.46zM14.47 12.38c.53 0 .95.42.95.95s-.42.95-.95.95-.95-.42-.95-.95.42-.95.95-.95zm-.47 2.42h.95v2.33h-.95V14.8z" />
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Sketch Icon */}
        <div className={`${styles.icon} ${styles.icon4}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.5 2L12 8l5.5-6h-11zM2 8l4.5-6L12 8 2 8zM22 8l-4.5-6L12 8l10 0zM12 8l-10 0 10 14L12 8zM12 8l10 0-10 14L12 8z" />
          </svg>
        </div>

        {/* Adobe XD Icon */}
        <div className={`${styles.icon} ${styles.icon5}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.5 8.2l1.5 2.4 1.5-2.4h1.1l-2.1 3.2 2.2 3.4h-1.1l-1.6-2.5-1.6 2.5H6.3l2.2-3.4-2.1-3.2h1.1zM14.5 8.2c1.8 0 2.9 1.2 2.9 3.8s-1.1 3.8-2.9 3.8c-1.8 0-2.9-1.2-2.9-3.8s1.1-3.8 2.9-3.8zm0 6.8c1.2 0 1.9-.8 1.9-3s-.7-3-1.9-3-1.9.8-1.9 3 .7 3 1.9 3z" />
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* InDesign Icon */}
        <div className={`${styles.icon} ${styles.icon6}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.8 8.2h.95v7.6H7.8V8.2zM11.5 8.2c1.8 0 2.9 1.2 2.9 3.8s-1.1 3.8-2.9 3.8c-1.8 0-2.9-1.2-2.9-3.8s1.1-3.8 2.9-3.8zm0 6.8c1.2 0 1.9-.8 1.9-3s-.7-3-1.9-3-1.9.8-1.9 3 .7 3 1.9 3z" />
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Pen Tool Icon */}
        <div className={`${styles.icon} ${styles.icon7}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.5 20.5L20.5 3.5c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L4.91 21.91c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41zM7 17l10-10 1 1-10 10-1-1zM17 7l-1-1 1-1 1 1-1 1z" />
          </svg>
        </div>

        {/* Color Palette Icon */}
        <div className={`${styles.icon} ${styles.icon8}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.15-.59-1.56-.36-.41-.59-.95-.59-1.56 0-1.38 1.12-2.5 2.5-2.5h1.77C19.99 14.99 22 12.92 22 10.5 22 5.8 17.2 2 12 2zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9s1.5.67 1.5 1.5S7.33 12 6.5 12zM9.5 8C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zM14.5 8c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zM17.5 12c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </div>

        {/* Vector Icon */}
        <div className={`${styles.icon} ${styles.icon9}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 12l3-3v2h14v-2l3 3-3 3v-2H5v2l-3-3zM12 2l3 3h-2v14h2l-3 3-3-3h2V5h-2l3-3z" />
          </svg>
        </div>

        {/* Typography Icon */}
        <div className={`${styles.icon} ${styles.icon10}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 4v3h5v12h3V7h5V4H9zM3 7v2h3v9h2V9h3V7H3z" />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.goldText}>CREATIVE PRECISION</span>
        </h1>
        <p className={styles.introduction}>
          Welcome to my portfolio. I blend artistic vision with strategic design to build brands that don't just stand out—they resonate.
          Every pixel is placed with purpose, ensuring a perfect balance of form and function.
        </p>
      </div>
    </section>
  );
};

export default Hero;