import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './ContactContent.module.css';

export default function ContactContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.contactContainer}>
      <p>{t.contactSection.location}</p>
      <p className={styles.emailText}>{t.contactSection.emailLabel}</p>
    </div>
  );
}