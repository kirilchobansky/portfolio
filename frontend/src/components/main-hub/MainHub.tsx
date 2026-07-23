import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaUser, FaCode, FaFolderOpen, FaTerminal } from 'react-icons/fa';
import styles from './MainHub.module.css';

export default function MainHub(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <div className={styles.hubContainer}>
      
      {/* 1. Cyberpunk Vector Laser Lines overlaying the screen */}
      <svg className={styles.svgOverlay}>
        {/* Top-Left: Center to About */}
        <line x1="50%" y1="50%" x2="20%" y2="25%" className={styles.laserLine} />
        {/* Bottom-Left: Center to Tech Stack */}
        <line x1="50%" y1="60%" x2="23%" y2="75%" className={styles.laserLine} />
        {/* Top-Right: Center to Projects */}
        <line x1="50%" y1="50%" x2="80%" y2="25%" className={styles.laserLine} />
        {/* Bottom-Right: Center to Contacts */}
        <line x1="50%" y1="60%" x2="77%" y2="75%" className={styles.laserLine} />
      </svg>

      {/* 2. Main 4 Cyberpunk Nodes */}
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

      {/* 3. Center Character Silhouette Container */}
      <div className={styles.centerAvatar}>
        {/* You can replace this placeholder with <img src="/my-art.png" className={styles.avatarImage} alt="Avatar" /> anytime */}
        <div className={styles.avatarPlaceholder}>
          <FaTerminal size={32} style={{ marginBottom: '1rem' }} />
          <span>[ AVATAR_NODE ]</span>
          <span style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '0.5rem' }}>80% HEIGHT TARGET</span>
        </div>
      </div>

    </div>
  );
}