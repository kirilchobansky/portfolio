import React, { useState, useEffect } from 'react';
import styles from './SubpageSystem.module.css';

import AboutContent from '../subpages/about-content/AboutContent';
import StackContent from '../subpages/stack-content/StackContent';
import ContactContent from '../subpages/contact-content/ContactContent';
import ProjectsContent from '../subpages/projects-content/ProjectsContent';

type EntryDirection = 'top' | 'left' | 'right' | 'bottom';

interface SubpageSystemProps {
  isOpen: boolean;
  activeId: string | null;
  direction: EntryDirection;
  onClose: () => void;
}

export default function SubpageSystem({ isOpen, activeId, direction, onClose }: SubpageSystemProps): React.JSX.Element | null {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) setIsExiting(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 350); 
  };

  const renderContent = () => {
    switch (activeId) {
      case 'about': return <AboutContent />;
      case 'stack': return <StackContent />;
      case 'projects': return <ProjectsContent />;
      case 'contact': return <ContactContent />;
      default: return null;
    }
  };

  if (!isOpen && !isExiting) return null;

  return (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div
        className={`${styles.modalContainer} ${styles[direction]} ${isExiting ? styles.exiting : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.panelFrame}>
          <button className={styles.closeButton} onClick={handleClose}>
            <span className={styles.closeGlitch}>[ CLOSE ]</span>
          </button>

          <div className={styles.content}>
            <h1 className={styles.title}>
              TERMINAL: // {activeId?.toUpperCase()}
            </h1>
            
            <div className={styles.bodyText}>
              {renderContent()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}