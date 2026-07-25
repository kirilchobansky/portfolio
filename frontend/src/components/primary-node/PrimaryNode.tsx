import React from 'react';
import styles from './PrimaryNode.module.css';

interface PrimaryNodeProps {
  onClick: () => void;
  title: string;
  icon: React.ReactNode;
  positionClass: string; // Passed from layout orchestrator
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function PrimaryNode({ onClick, title, icon, positionClass, onMouseEnter, onMouseLeave }: PrimaryNodeProps) {
  return (
    <a 
      onClick={onClick} 
      className={`${styles.node} ${positionClass}`} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring3}`} />
      <div className={styles.nodeIcon}>{icon}</div>
      <span className={styles.nodeTitle}>{title}</span>
    </a>
  );
}