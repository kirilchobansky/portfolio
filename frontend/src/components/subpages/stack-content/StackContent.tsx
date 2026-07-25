import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './StackContent.module.css';

export default function StackContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.stackContainer}>
      {t.stackSection.categories.map((category, index) => (
        <div key={index} className={styles.categoryCard}>
          
          <div className={styles.header}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <p className={styles.categoryDesc}>{category.desc}</p>
          </div>

          <div className={styles.chipGrid}>
            {category.skills.map((skill, idx) => (
              <span key={idx} className={styles.chip}>
                {skill}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}