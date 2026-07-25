import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './ContactContent.module.css';

export default function ContactContent(): React.JSX.Element {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default browser redirect
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset(); // Clears the inputs
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.contactContainer}>
      
      <div className={styles.leftCol}>
        <h3 className={styles.sectionTitle}>{t.contactSection.formTitle}</h3>
        
        {/* We removed the action attribute and added onSubmit */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input 
            type="text" name="name" 
            placeholder={t.contactSection.namePlaceholder} 
            className={styles.inputField} required 
          />
          <input 
            type="email" name="email" 
            placeholder={t.contactSection.emailPlaceholder} 
            className={styles.inputField} required 
          />
          <textarea 
            name="message" 
            placeholder={t.contactSection.msgPlaceholder} 
            className={styles.textArea} required 
          />
          
          {/* Conditional Messaging */}
          {status === 'success' && <p className={styles.successMsg}>{t.contactSection.successMessage}</p>}
          {status === 'error' && <p className={styles.errorMsg}>{t.contactSection.errorMessage}</p>}
          
          <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
            {status === 'submitting' ? t.contactSection.submittingText : t.contactSection.sendBtn}
          </button>
        </form>

        <div className={styles.socialRow}>
          <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" className={styles.socialIcon}><FaGithub size={24} /></a>
          <a href="https://linkedin.com/in/kiril-chobansky-57738a306" target="_blank" rel="noreferrer" className={styles.socialIcon}><FaLinkedin size={24} /></a>
          <a href="https://instagram.com/kirochobansky" target="_blank" rel="noreferrer" className={styles.socialIcon}><FaInstagram size={24} /></a>
          <a href="mailto:kirilchobansky@gmail.com" className={styles.socialIcon}><FaEnvelope size={24} /></a>
        </div>
      </div>

      <div className={styles.rightCol}>
        <h3 className={styles.sectionTitle}>{t.contactSection.locationLabel}</h3>
        <p className={styles.locationText}>{t.contactSection.locationText}</p>
        
        <div className={styles.imageWrapper}>
          <img 
            src="https://media.istockphoto.com/id/1399200418/photo/wide-aerial-drone-shot-of-downtown-district-sofia-city-bulgaria.jpg?s=612x612&w=0&k=20&c=e52oJoZzVKl2sT74jbDQDJhiidhtXhkW2jHOqTNxnW0=" 
            alt="Sofia Cityscape" 
            className={styles.locationImage} 
          />
          <div className={styles.imageOverlay} />
        </div>
      </div>

    </div>
  );
}