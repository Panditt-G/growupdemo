import React from 'react';

export default function Hero() {
  return (
    <section className="gu-hero" id="hero">
      <div className="gu-hero-bg" data-parallax="0.3">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="gu-hero-top-shade">
          <defs>
            <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
            </filter>
            <radialGradient id="topGlow" cx="50%" cy="0%" r="70%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="rgba(178, 227, 85, 0.12)" />
              <stop offset="100%" stopColor="rgba(178, 227, 85, 0)" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#topGlow)" />
          <ellipse filter="url(#softBlur)" cx="720" cy="0" rx="600" ry="300" fill="rgba(178, 227, 85, 0.06)" />
        </svg>
      </div>

      <div className="gu-hero-inner">
        <p className="gu-hero-kicker">Full-Service Content & Marketing</p>

        <h1 className="gu-hero-title" data-parallax="0.1">
          YOU FINALLY HAVE A<br />MARKETING TEAM.
        </h1>

        <div className="gu-hero-bottom">
          <div className="gu-hero-text-wrapper">
            <p className="gu-hero-sub" data-parallax="0.05">
              It took you 5 minutes to book a call.<br />
              We script it. We shoot it. We design it.<br />
              We build it. We post it. Every single month<br />
              — while you run your company.
            </p>
            <div className="gu-hero-cta-group" data-parallax="0.03">
              <a href="#contact" className="gu-btn-hero">BOOK A FREE CALL</a>
              <p className="gu-hero-guarantee">No contracts. No retainers. Just results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
