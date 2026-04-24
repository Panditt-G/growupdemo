import React from 'react';
import { Link } from 'react-router-dom';

export default function Creative() {
  return (
    <section className="creative-section">
      <div className="creative-inner">
        <p className="section-eyebrow reveal">Our Edge</p>
        <h2 className="creative-title reveal">Creative Excellence</h2>
        <p className="creative-sub reveal">Fazinflo Combines creativity with systems to deliver<br />top-tier content at scale with any overheads.</p>
        <a href="tel:+917821092963" className="btn-primary-blue reveal" id="creative-cta">GET STARTED TODAY</a>
      </div>
    </section>
  );
}
