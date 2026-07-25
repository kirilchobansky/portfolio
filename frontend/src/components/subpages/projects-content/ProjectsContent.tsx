import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './ProjectsContent.module.css';

export default function ProjectsContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.projectsContainer}>
      
      <div>
        <h3 className={styles.projectTitle}>{t.projectsSection.proj1_title}</h3>
        <p className={styles.projectDesc}>{t.projectsSection.proj1_desc}</p>
        <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.repoLink}>
          {t.projectsSection.repoText}
        </a>
      </div>

      <div>
        <h3 className={styles.projectTitle}>{t.projectsSection.proj2_title}</h3>
        <p className={styles.projectDesc}>{t.projectsSection.proj2_desc}</p>
        <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.repoLink}>
          {t.projectsSection.repoText}
        </a>
      </div>

      <div>
        <h3 className={styles.projectTitle}>{t.projectsSection.proj3_title}</h3>
        <p className={styles.projectDesc}>{t.projectsSection.proj3_desc}</p>
        <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.repoLink}>
          {t.projectsSection.repoText}
        </a>
      </div>

    </div>
  );
}