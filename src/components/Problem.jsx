import React from 'react';

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-top-glow" data-parallax="0.25" data-parallax-dir="-1"></div>
      <div className="problem-inner">
        <div className="problem-content">
          <h2 className="problem-title" data-parallax="0.06">
            YOUR PRODUCT IS NOT YOUR
            <br />
            BIGGEST PROBLEM.
            <br />
            <span className="problem-title-muted"><i>INVISIBILITY IS.</i></span>
          </h2>
          <div className="problem-actions">
            <a href="#contact" className="btn-primary-blue">Check plans now</a>
            <a href="#services" className="problem-btn-secondary">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
