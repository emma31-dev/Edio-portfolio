import React from 'react';
import type { Project } from '../../utils/projectData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => (
  <article
    className={styles.card}
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick();
      }
    }}
    aria-label={`View ${project.title} project details`}
  >
    <div className={styles.imageContainer}>
      <img src={project.imageUrl} alt={project.title} loading="lazy" />
      <span className={styles.viewMore}>View project <span aria-hidden="true">↗</span></span>
    </div>
    <div className={styles.content}>
      <div className={styles.projectMeta}>
        <span>{project.category}</span>
        {index !== undefined && <span>{String(index).padStart(2, '0')}</span>}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.shortDescription}>{project.shortDescription}</p>
    </div>
  </article>
);

export default ProjectCard;
