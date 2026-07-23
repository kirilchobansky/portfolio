import React from 'react';
import { Globe, Mail, FileText } from 'lucide-react';

export default function Hero(): React.JSX.Element {
  return (
    <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '1px' }}>
          HI THERE, I'M
        </span>
        <h1 style={{ fontSize: '3.5rem', margin: '0.5rem 0', fontWeight: '800' }}>
          Kiril Chobansky
        </h1>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '400' }}>
          Computer Science Student at Sofia University (FMI) & Full-Stack Developer
        </h2>
        <p style={{ maxWidth: '600px', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Building reliable, modern web and desktop applications with React, Angular, Node.js, and C++. Driven by strong mathematical fundamentals and practical code execution.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a 
            href="#projects" 
            style={{ 
              backgroundColor: 'var(--accent)', 
              color: '#fff', 
              padding: '0.8rem 1.6rem', 
              borderRadius: '8px', 
              fontWeight: '600',
              transition: '0.2s'
            }}
          >
            View My Projects
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            <a href="https://github.com/kirilchobansky" target="_blank" rel="noreferrer" title="GitHub">
              <Globe size={24} color="var(--text-muted)" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <FileText size={24} color="var(--text-muted)" />
            </a>
            <a href="mailto:your-email@gmail.com" title="Email">
              <Mail size={24} color="var(--text-muted)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}