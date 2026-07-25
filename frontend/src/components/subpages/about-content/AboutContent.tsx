import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './AboutContent.module.css';

export default function AboutContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div>
      <p className={styles.bioText}>{t.aboutSection.bio}</p>
      <ul className={styles.eduList}>
        <li className={styles.eduItem}>{t.aboutSection.edu1}</li>
        <li>{t.aboutSection.edu2}</li>
      </ul>
    </div>
  );
}