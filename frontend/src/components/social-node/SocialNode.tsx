import React from 'react';
import styles from './SocialNode.module.css';

interface SocialNodeProps {
  href: string;
  icon: React.ReactNode;
  brandName: 'Insta' | 'Github' | 'Linkedin' | 'Gmail';
  positionClass: string;
}

export default function SocialNode({ href, icon, brandName, positionClass }: SocialNodeProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${styles.socialWrapper} ${positionClass}`}>
      <div className={styles.socialNode}>
        <div className={`${styles.sRing} ${styles.sRing1}`} />
        <div className={`${styles.sRing} ${styles.sRing2}`} />
        <div className={`${styles.sRing} ${styles.sRing3}`} />
        <div className={`${styles.socialIcon} ${styles[`brand${brandName}`]}`}>
          {icon}
        </div>
      </div>
    </a>
  );
}