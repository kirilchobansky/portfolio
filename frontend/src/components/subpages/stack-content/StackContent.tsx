import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './StackContent.module.css';

export default function StackContent(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.stackContainer}>
      <p><strong>{t.stackSection.core}</strong></p>
      <p><strong>{t.stackSection.web}</strong></p>
      <p><strong>{t.stackSection.backend}</strong></p>
    </div>
  );
}