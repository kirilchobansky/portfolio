import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaUser, FaCode, FaFolderOpen, FaTerminal, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import styles from './MainHub.module.css';
import NetworkOverlay from '../network-overlay/NetworkOverlay';
import PrimaryNode from '../primary-node/PrimaryNode';
import SocialNode from '../social-node/SocialNode';
import SubpageSystem from '../subpage-system/SubpageSystem';

type EntryDirection = 'top' | 'left' | 'right' | 'bottom';

interface ModalState {
  isOpen: boolean;
  activeId: string | null;
  direction: EntryDirection;
}

export default function MainHub(): React.JSX.Element {
  const { t } = useLanguage();
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Modal State Management
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    activeId: null,
    direction: 'top',
  });

  const openModal = (id: string, direction: EntryDirection) => {
    setModal({ isOpen: true, activeId: id, direction });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className={styles.hubContainer}>
      
      <NetworkOverlay hoveredNode={hoveredNode} />

      <div className={styles.centerAvatar}>
        <img src="/avatar2.png" alt="Avatar" className={styles.avatarImage} />
      </div>

      {/* PRIMARY HUD NODES (Now triggering the cinematic modal) */}
      <PrimaryNode 
        onClick={() => openModal('about', 'top')} 
        title={t.nodes.about} icon={<FaUser size={26} />} 
        positionClass={styles.nodeAbout}
        onMouseEnter={() => setHoveredNode(1)} onMouseLeave={() => setHoveredNode(null)} 
      />
      <PrimaryNode 
        onClick={() => openModal('stack', 'left')} 
        title={t.nodes.stack} icon={<FaCode size={26} />} 
        positionClass={styles.nodeStack}
        onMouseEnter={() => setHoveredNode(2)} onMouseLeave={() => setHoveredNode(null)} 
      />
      <PrimaryNode 
        onClick={() => openModal('projects', 'right')} 
        title={t.nodes.projects} icon={<FaFolderOpen size={26} />} 
        positionClass={styles.nodeProjects}
        onMouseEnter={() => setHoveredNode(3)} onMouseLeave={() => setHoveredNode(null)} 
      />
      <PrimaryNode 
        onClick={() => openModal('contact', 'bottom')} 
        title={t.nodes.contact} icon={<FaTerminal size={26} />} 
        positionClass={styles.nodeContact}
        onMouseEnter={() => setHoveredNode(4)} onMouseLeave={() => setHoveredNode(null)} 
      />

      {/* SECONDARY FLOATING SOCIAL NODES */}
      <SocialNode
        href="https://instagram.com/kirochobansky" icon={<FaInstagram size={22} />} 
        brandName="Insta" positionClass={styles.socialInsta} 
      />
      <SocialNode 
        href="https://github.com/kirilchobansky" icon={<FaGithub size={22} />} 
        brandName="Github" positionClass={styles.socialGithub} 
      />
      <SocialNode 
        href="https://linkedin.com/in/kiril-chobansky-57738a306" icon={<FaLinkedin size={22} />} 
        brandName="Linkedin" positionClass={styles.socialLinkedin} 
      />
      <SocialNode 
        href="mailto:kirilchobansky@gmail.com"  icon={<FaEnvelope size={22} />} 
        brandName="Gmail" positionClass={styles.socialGmail} 
      />

      {/* CINEMATIC MODAL SYSTEM */}
      <SubpageSystem 
        isOpen={modal.isOpen} 
        activeId={modal.activeId} 
        direction={modal.direction} 
        onClose={closeModal} 
      />

    </div>
  );
}