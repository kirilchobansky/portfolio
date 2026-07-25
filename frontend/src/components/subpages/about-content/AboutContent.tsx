import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './AboutContent.module.css';

export default function AboutContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.aboutContainer}>
      <p className={styles.intro}>{t.aboutSection.intro}</p>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t.aboutSection.eduLabel}</h3>
          <p className={styles.cardText}>{t.aboutSection.eduText}</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t.aboutSection.passionLabel}</h3>
          <p className={styles.cardText}>{t.aboutSection.passionText}</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t.aboutSection.hobbiesLabel}</h3>
          <p className={styles.cardText}>{t.aboutSection.hobbiesText}</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t.aboutSection.extraLabel}</h3>
          <p className={styles.cardText}>{t.aboutSection.extraText}</p>
        </div>
      </div>
    </div>
  );
}