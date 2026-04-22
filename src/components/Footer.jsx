import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="gu-footer">
      <div className="gu-footer-inner">
        <div className="gu-footer-left">
          <Link to="/" className="gu-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: '#fff', textDecoration: 'none' }}>
            <img src="/logo/g-logo.png" alt="Grow Up Logo" style={{ height: '72px', objectFit: 'contain' }} />
            <span>GROW UP</span>
          </Link>
          <p className="gu-footer-copy">hello@growup.studio</p>
          <p className="gu-footer-copy">© 2026 Grow Up. All content we make? Yours.</p>
        </div>
        <div className="gu-footer-right">
          <nav className="gu-footer-links">
            <Link to="/services">Services</Link>
            <Link to="/case-study">Work</Link>
            <Link to="/why-content">Why Content</Link>
            <a href="#contact">Book a Call</a>
          </nav>
          <div className="gu-footer-socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
            <a href="#" aria-label="TikTok">TikTok</a>
          </div>
        </div>
      </div>
      <div className="gu-footer-bottom">
        Built with intention. Designed to convert.
      </div>
    </footer>
  );
}
