import React, { useState, useEffect } from 'react';
import styles from './SubpageSystem.module.css';
import { useLanguage } from '../../context/LanguageContext';

type EntryDirection = 'top' | 'left' | 'right' | 'bottom';

interface SubpageSystemProps {
  isOpen: boolean;
  activeId: string | null;
  direction: EntryDirection;
  onClose: () => void;
}

export default function SubpageSystem({ isOpen, activeId, direction, onClose }: SubpageSystemProps): React.JSX.Element | null {
  const { t } = useLanguage();
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

  if (!isOpen && !isExiting) return null;

  return (
    <div className={styles.modalBackdrop} onClick={handleClose}>
      <div
        className={`${styles.modalContainer} ${styles[direction]} ${isExiting ? styles.exiting : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.panelFrame}>
          <div className={styles.brokenWires}>
            <div className={`${styles.wire} ${styles.wire1}`} />
            <div className={`${styles.wire} ${styles.wire2}`} />
            <div className={`${styles.wire} ${styles.wire3}`}>
              <span className={styles.spark} />
            </div>
          </div>

          <button className={styles.closeButton} onClick={handleClose}>
            <span className={styles.closeGlitch}>[ CLOSE ]</span>
          </button>

          <div className={styles.content}>
            <h1 className={styles.title}>
              TERMINAL: // {activeId?.toUpperCase()}
            </h1>
            <div className={styles.bodyText}>
              {activeId === 'about' && <p>{t.aboutSection.bio}</p>}
              {activeId === 'projects' && <p>Loading project list...</p>}
              {activeId === 'stack' && <p>Fetching tech array...</p>}
              {activeId === 'contact' && <p>Initializing comms channel...</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}