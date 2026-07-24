import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaUser, FaCode, FaFolderOpen, FaTerminal } from 'react-icons/fa';
import styles from './MainHub.module.css';

export default function MainHub(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.hubContainer}>
      
      {/* 1. Laser Lines */}
      <svg className={styles.svgOverlay}>
        <line x1="50%" y1="45%" x2="20%" y2="25%" className={styles.laserLine} />
        <line x1="50%" y1="55%" x2="23%" y2="75%" className={styles.laserLine} />
        <line x1="50%" y1="45%" x2="80%" y2="25%" className={styles.laserLine} />
        <line x1="50%" y1="55%" x2="77%" y2="75%" className={styles.laserLine} />
      </svg>

      {/* 2. HUD Nodes */}
      <a href="#about" className={`${styles.node} ${styles.nodeAbout}`}>
        <div className={styles.nodeRing} />
        <FaUser size={22} color="var(--hud-green)" />
        <span className={styles.nodeTitle}>{t.nodes.about}</span>
      </a>

      <a href="#stack" className={`${styles.node} ${styles.nodeStack}`}>
        <div className={styles.nodeRing} />
        <FaCode size={22} color="var(--hud-green)" />
        <span className={styles.nodeTitle}>{t.nodes.stack}</span>
      </a>

      <a href="#projects" className={`${styles.node} ${styles.nodeProjects}`}>
        <div className={styles.nodeRing} />
        <FaFolderOpen size={22} color="var(--hud-green)" />
        <span className={styles.nodeTitle}>{t.nodes.projects}</span>
      </a>

      <a href="#contact" className={`${styles.node} ${styles.nodeContact}`}>
        <div className={styles.nodeRing} />
        <FaTerminal size={22} color="var(--hud-green)" />
        <span className={styles.nodeTitle}>{t.nodes.contact}</span>
      </a>

      {/* 3. Center Cyber Avatar */}
      <div className={styles.centerAvatar}>
        <img 
          src="/avatar2.png" 
          alt="Kiril Chobansky Avatar" 
          className={styles.avatarImage} 
        />
      </div>

    </div>
  );
}