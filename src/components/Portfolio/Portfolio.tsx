import React, { useState } from 'react';
import type { Project } from '../../utils/projectData';
import { getAllProjects } from '../../utils/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = getAllProjects();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Selected Works</h2>
          <p className={styles.subtitle}>
            A curated collection of branding, print, and digital design.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;