import React from 'react';
import type { Project } from '../../utils/projectData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={project.imageUrl} alt={project.title} />
        <div className={styles.overlay}>
          <span className={styles.viewMore}>View Details</span>
        </div>
      </div>
      <div className={styles.content}>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.shortDescription}>{project.shortDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;