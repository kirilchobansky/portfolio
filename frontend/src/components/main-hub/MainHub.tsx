import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaUser, FaCode, FaFolderOpen, FaTerminal, 
  FaInstagram, FaGithub, FaLinkedin, FaEnvelope 
} from 'react-icons/fa';
import styles from './MainHub.module.css';

export default function MainHub(): React.JSX.Element {
  const { t } = useLanguage();
  
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const getDur = (nodeId: number) => (hoveredNode === nodeId ? "1s" : "4s");

  return (
    <div className={styles.hubContainer}>
      
      {/* SVG Vector Network */}
      <svg className={styles.svgOverlay} preserveAspectRatio="none">
        <defs>
          <mask id="circleMask">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="20%" cy="25%" r="118" fill="black" />
            <circle cx="25%" cy="75%" r="118" fill="black" />
            <circle cx="80%" cy="30%" r="118" fill="black" />
            <circle cx="75%" cy="70%" r="118" fill="black" />
          </mask>

          <linearGradient id="wave1" x1="0%" y1="0%" x2="20%" y2="25%" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(1)} repeatCount="indefinite" /></stop>
            <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(1)} repeatCount="indefinite" /></stop>
            <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(1)} repeatCount="indefinite" /></stop>
          </linearGradient>

          <linearGradient id="wave2" x1="0%" y1="100%" x2="25%" y2="75%" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(2)} repeatCount="indefinite" /></stop>
            <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(2)} repeatCount="indefinite" /></stop>
            <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(2)} repeatCount="indefinite" /></stop>
          </linearGradient>

          <linearGradient id="wave3" x1="100%" y1="0%" x2="80%" y2="30%" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(3)} repeatCount="indefinite" /></stop>
            <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(3)} repeatCount="indefinite" /></stop>
            <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(3)} repeatCount="indefinite" /></stop>
          </linearGradient>

          <linearGradient id="wave4" x1="100%" y1="100%" x2="75%" y2="70%" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent"><animate attributeName="offset" values="-1; 1" dur={getDur(4)} repeatCount="indefinite" /></stop>
            <stop stopColor="var(--neon-green)"><animate attributeName="offset" values="-0.5; 1.5" dur={getDur(4)} repeatCount="indefinite" /></stop>
            <stop stopColor="transparent"><animate attributeName="offset" values="0; 2" dur={getDur(4)} repeatCount="indefinite" /></stop>
          </linearGradient>
        </defs>

        <g mask="url(#circleMask)">
          <line x1="0%" y1="0%" x2="20%" y2="25%" className={styles.baseTrack} />
          <line x1="0%" y1="0%" x2="20%" y2="25%" stroke="url(#wave1)" className={`${styles.pulseLine} ${hoveredNode === 1 ? styles.activeLine : ''}`} />

          <line x1="0%" y1="100%" x2="25%" y2="75%" className={styles.baseTrack} />
          <line x1="0%" y1="100%" x2="25%" y2="75%" stroke="url(#wave2)" className={`${styles.pulseLine} ${hoveredNode === 2 ? styles.activeLine : ''}`} />

          <line x1="100%" y1="0%" x2="80%" y2="30%" className={styles.baseTrack} />
          <line x1="100%" y1="0%" x2="80%" y2="30%" stroke="url(#wave3)" className={`${styles.pulseLine} ${hoveredNode === 3 ? styles.activeLine : ''}`} />

          <line x1="100%" y1="100%" x2="75%" y2="70%" className={styles.baseTrack} />
          <line x1="100%" y1="100%" x2="75%" y2="70%" stroke="url(#wave4)" className={`${styles.pulseLine} ${hoveredNode === 4 ? styles.activeLine : ''}`} />
        </g>
      </svg>

      {/* Central Avatar pushed to background lightly on mobile, regular on desktop */}
      <div className={styles.centerAvatar}>
        <img src="/avatar.png" alt="Avatar" className={styles.avatarImage} />
      </div>

      {/* PRIMARY HUD NODES */}
      <a href="#about" className={`${styles.node} ${styles.nodeAbout}`} onMouseEnter={() => setHoveredNode(1)} onMouseLeave={() => setHoveredNode(null)}>
        <div className={`${styles.ring} ${styles.ring1}`} /><div className={`${styles.ring} ${styles.ring2}`} /><div className={`${styles.ring} ${styles.ring3}`} />
        <FaUser size={26} className={styles.nodeIcon} />
        <span className={styles.nodeTitle}>{t.nodes.about}</span>
      </a>

      <a href="#stack" className={`${styles.node} ${styles.nodeStack}`} onMouseEnter={() => setHoveredNode(2)} onMouseLeave={() => setHoveredNode(null)}>
        <div className={`${styles.ring} ${styles.ring1}`} /><div className={`${styles.ring} ${styles.ring2}`} /><div className={`${styles.ring} ${styles.ring3}`} />
        <FaCode size={26} className={styles.nodeIcon} />
        <span className={styles.nodeTitle}>{t.nodes.stack}</span>
      </a>

      <a href="#projects" className={`${styles.node} ${styles.nodeProjects}`} onMouseEnter={() => setHoveredNode(3)} onMouseLeave={() => setHoveredNode(null)}>
        <div className={`${styles.ring} ${styles.ring1}`} /><div className={`${styles.ring} ${styles.ring2}`} /><div className={`${styles.ring} ${styles.ring3}`} />
        <FaFolderOpen size={26} className={styles.nodeIcon} />
        <span className={styles.nodeTitle}>{t.nodes.projects}</span>
      </a>

      <a href="#contact" className={`${styles.node} ${styles.nodeContact}`} onMouseEnter={() => setHoveredNode(4)} onMouseLeave={() => setHoveredNode(null)}>
        <div className={`${styles.ring} ${styles.ring1}`} /><div className={`${styles.ring} ${styles.ring2}`} /><div className={`${styles.ring} ${styles.ring3}`} />
        <FaTerminal size={26} className={styles.nodeIcon} />
        <span className={styles.nodeTitle}>{t.nodes.contact}</span>
      </a>

      {/* SECONDARY FLOATING SOCIAL NODES */}
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`${styles.socialWrapper} ${styles.socialInsta}`}>
        <div className={styles.socialNode}>
          <div className={`${styles.sRing} ${styles.sRing1}`} /><div className={`${styles.sRing} ${styles.sRing2}`} /><div className={`${styles.sRing} ${styles.sRing3}`} />
          <FaInstagram size={22} className={`${styles.socialIcon} ${styles.brandInsta}`} />
        </div>
      </a>

      <a href="https://github.com" target="_blank" rel="noreferrer" className={`${styles.socialWrapper} ${styles.socialGithub}`}>
        <div className={styles.socialNode}>
          <div className={`${styles.sRing} ${styles.sRing1}`} /><div className={`${styles.sRing} ${styles.sRing2}`} /><div className={`${styles.sRing} ${styles.sRing3}`} />
          <FaGithub size={22} className={`${styles.socialIcon} ${styles.brandGithub}`} />
        </div>
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`${styles.socialWrapper} ${styles.socialLinkedin}`}>
        <div className={styles.socialNode}>
          <div className={`${styles.sRing} ${styles.sRing1}`} /><div className={`${styles.sRing} ${styles.sRing2}`} /><div className={`${styles.sRing} ${styles.sRing3}`} />
          <FaLinkedin size={22} className={`${styles.socialIcon} ${styles.brandLinkedin}`} />
        </div>
      </a>

      <a href="mailto:example@gmail.com" className={`${styles.socialWrapper} ${styles.socialGmail}`}>
        <div className={styles.socialNode}>
          <div className={`${styles.sRing} ${styles.sRing1}`} /><div className={`${styles.sRing} ${styles.sRing2}`} /><div className={`${styles.sRing} ${styles.sRing3}`} />
          <FaEnvelope size={22} className={`${styles.socialIcon} ${styles.brandGmail}`} />
        </div>
      </a>

    </div>
  );
}