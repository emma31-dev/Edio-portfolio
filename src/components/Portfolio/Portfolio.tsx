import React, { useState } from 'react';
import type { Project } from '../../utils/projectData';
import { getAllProjects } from '../../utils/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = getAllProjects();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Selected projects</p>
            <h2 className={styles.title}>A few things I’ve made.</h2>
          </div>
          <p className={styles.subtitle}>Identity, print, and digital design — made to communicate clearly and leave a lasting impression.</p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
