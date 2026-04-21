import React from 'react';

export default function Hero() {
  return (
    <section className="gu-hero" id="hero">
      <div className="gu-hero-bg" data-parallax="0.3">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="gu-hero-top-shade">
          <defs>
            <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
            <radialGradient id="topGlow" cx="50%" cy="0%" r="80%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="rgba(132, 204, 22, 0.12)" />
              <stop offset="100%" stopColor="rgba(132, 204, 22, 0)" />
            </radialGradient>
          </defs>
          <rect width="1440" height="600" fill="url(#topGlow)" />
          <path filter="url(#softBlur)" fill="rgba(132, 204, 22, 0.08)" d="M0,0 L1440,0 L1440,300 Q720,100 0,300 Z" />
        </svg>
      </div>
      <div className="gu-hero-inner">
        <h1 className="gu-hero-title" data-parallax="0.12">YOU FINALLY HAVE A<br/>MARKETING TEAM.</h1>
        <div className="gu-hero-bottom">
          <div className="gu-hero-text-wrapper">
            <p className="gu-hero-sub" data-parallax="0.06">
              It took you 5 minutes to book a call.<br/>
              We script it. We shoot it. We design it. We build it. We post it.<br/>
              Every single month — while you run your company.
            </p>
            <div className="gu-hero-cta-group" data-parallax="0.04">
              <a href="#contact" className="gu-btn-hero">BOOK A FREE CALL</a>
              <p className="gu-hero-guarantee">No contracts. No retainers. Just results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
