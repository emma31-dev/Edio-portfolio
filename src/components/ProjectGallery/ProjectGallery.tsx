import React, { useRef, useEffect, useState } from 'react';
import { useScrollSync } from '../../hooks/useScrollSync';
import { type Project } from '../../interfaces/Project';
import projectsData from '../../data/projects';
import styles from './ProjectGallery.module.css';

const FALLBACK_IMAGE_URL = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop';

interface ProjectGalleryProps {
  projects?: Project[];
}

const ProjectImage: React.FC<{ project: Project }> = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className={styles.imageContainer}>
      {imageLoading && (
        <div className={styles.imagePlaceholder}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <img 
        src={imageError ? FALLBACK_IMAGE_URL : project.imageUrl}
        alt={project.title}
        className={`${styles.image} ${imageLoading ? styles.imageHidden : ''}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <div className={styles.imageOverlay}>
        <h3 className={styles.imageTitle}>{project.title}</h3>
        <span className={styles.imageCategory}>{project.category}</span>
      </div>
    </div>
  );
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects: propProjects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { addElement } = useScrollSync({ enabled: true, throttleMs: 16 });
  const projects = propProjects || projectsData;

  // Split projects into 3 rows for horizontal scrolling
  const row1Projects = projects.filter((_, index) => index % 3 === 0);
  const row2Projects = projects.filter((_, index) => index % 3 === 1);
  const row3Projects = projects.filter((_, index) => index % 3 === 2);

  useEffect(() => {
    if (containerRef.current) {
      addElement(containerRef.current);
    }
  }, [addElement]);

  // Auto-scroll effect
  useEffect(() => {
    const rows = containerRef.current?.querySelectorAll(`.${styles.row}`);
    if (!rows) return;

    const scrollIntervals: number[] = [];

    rows.forEach((row, index) => {
      const scrollElement = row as HTMLElement;
      let scrollDirection = index % 2 === 0 ? 1 : -1; // Alternate directions
      
      const interval = window.setInterval(() => {
        const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
        const currentScroll = scrollElement.scrollLeft;
        
        if (scrollDirection === 1 && currentScroll >= maxScroll) {
          scrollDirection = -1;
        } else if (scrollDirection === -1 && currentScroll <= 0) {
          scrollDirection = 1;
        }
        
        scrollElement.scrollLeft += scrollDirection * 1;
      }, 50);
      
      scrollIntervals.push(interval);
    });

    return () => {
      scrollIntervals.forEach(interval => window.clearInterval(interval));
    };
  }, [projects]);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Work</h2>
        <div className={styles.gridContainer} ref={containerRef}>
          <div className={`${styles.row} ${styles.row1}`}>
            {row1Projects.map((project) => (
              <ProjectImage key={project.id} project={project} />
            ))}
          </div>
          
          <div className={`${styles.row} ${styles.row2}`}>
            {row2Projects.map((project) => (
              <ProjectImage key={project.id} project={project} />
            ))}
          </div>
          
          <div className={`${styles.row} ${styles.row3}`}>
            {row3Projects.map((project) => (
              <ProjectImage key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;