import React from 'react';
import { Link } from 'react-router-dom';

export default function Value() {
  return (
    <section className="value-section" id="plans">
      <div className="value-inner">
        <p className="section-eyebrow reveal">The GrowwUp Difference</p>
        <h2 className="value-title reveal">Why limit content when you can<br />scale at volume with GrowwUp.</h2>
        <div className="value-actions reveal">
          <a href="tel:+917821092963" className="btn-primary-blue" id="plans-cta">SEE OUR PLANS</a>
          <Link to="/#services" className="btn-outline-white" id="plans-learn">Learn more</Link>
        </div>
        <div className="value-features">
          <div className="v-feat reveal">
            <h3>Scale with speed</h3>
            <p>Content built specifically for TikTok, Reels, YouTube &amp; LinkedIn.</p>
          </div>
          <div className="v-feat reveal" style={{ transitionDelay: '0.2s' }}>
            <h3>High Performance</h3>
            <p>Our edits are designed to stop the scroll and keep attention.</p>
          </div>
          <div className="v-feat reveal" style={{ transitionDelay: '0.4s' }}>
            <h3>Done For You</h3>
            <p>We handle everything from strategy to posting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
