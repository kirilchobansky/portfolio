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
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.repoBtn}
            >
              {project.repoText}
            </a>
          </div>

        </div>
      ))}
    </div>
  );
}