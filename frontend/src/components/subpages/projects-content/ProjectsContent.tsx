import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './ProjectsContent.module.css';

export default function ProjectsContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.projectsContainer}>
      {t.projectsSection.list.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          
          <div className={styles.cardHeader}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <span className={styles.techStack}>{project.tech}</span>
          </div>

          <ul className={styles.bulletList}>
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className={styles.bulletItem}>
                {bullet}
              </li>
            ))}
          </ul>

          <div className={styles.cardFooter}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.repoBtn}
              >
                {t.projectsSection.actions.source}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.demoBtn}
              >
                {t.projectsSection.actions.demo}
              </a>
            )}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.downloadBtn}
              >
                {t.projectsSection.actions.download}
              </a>
            )}
          </div>

        </div>
      ))}
    </div>
  );
}