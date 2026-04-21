import React from 'react';
import { Link } from 'react-router-dom';

const metrics = [
  { value: '5,000+', label: 'YouTube subscribers in 6 months' },
  { value: '40%', label: 'Increase in website traffic' },
  { value: '3.2x', label: 'More qualified inbound leads' },
];

const phases = [
  {
    title: 'Position the brand',
    text: 'We tightened the messaging, defined the content pillars, and built a sharper visual direction so every asset felt recognisable.',
  },
  {
    title: 'Publish with rhythm',
    text: 'Short-form clips, founder-led thought pieces, and conversion-aware long-form videos gave the audience a clear reason to keep returning.',
  },
  {
    title: 'Turn reach into demand',
    text: 'Every content stream pointed back to landing pages, demo CTAs, and proof-driven nurture assets that helped sales close faster.',
  },
];

const deliverables = [
  'Content strategy and topic architecture',
  'Video editing system for short and long-form content',
  'Landing page messaging refresh',
  'Creative direction for performance content',
  'Weekly analytics reviews and iteration loops',
];

export default function CaseStudyPage() {
  return (
    <main className="case-study-page">
      <section className="case-study-hero">
        <div className="case-study-hero-inner">
          <div className="case-study-copy">
            <p className="case-study-kicker">Case Study / TechFlow SaaS</p>
            <h1 className="case-study-title">
              From zero online presence to a content engine that brought in real pipeline.
            </h1>
            <p className="case-study-summary">
              TechFlow needed more than pretty posts. They needed a system that made the brand
              easier to trust, easier to remember, and easier to buy from. We rebuilt the content
              direction around authority, consistency, and conversion.
            </p>
            <div className="case-study-actions">
              <Link to="/services" className="btn-primary-blue">Explore Services</Link>
              <Link to="/" className="case-study-text-link">Back to Home</Link>
            </div>
          </div>

          <div className="case-study-media">
            <video
              src="/video-4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="case-study-video"
            />
            <div className="case-study-floating-card">
              <span className="case-study-floating-label">Sprint Window</span>
              <strong>6 months</strong>
            </div>
          </div>
        </div>

        <div className="case-study-metrics">
          {metrics.map((metric) => (
            <div className="case-study-metric-card" key={metric.label}>
              <p className="case-study-metric-value">{metric.value}</p>
              <p className="case-study-metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-story">
        <div className="case-study-story-grid">
          <div>
            <p className="case-study-section-label">The challenge</p>
            <h2 className="case-study-section-title">
              Their team had expertise, but the market could not see it.
            </h2>
          </div>
          <div className="case-study-story-copy">
            <p>
              Before the engagement, TechFlow had inconsistent posting, no clear narrative, and
              very little content that supported demos or sales conversations. Traffic was weak,
              brand recall was lower than competitors, and outreach felt colder than it should.
            </p>
            <p>
              We focused on building one connected system: sharper positioning, repeatable creative
              formats, and clear calls to action across every piece of content.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-breakdown">
        <div className="case-study-breakdown-inner">
          <div className="case-study-breakdown-copy">
            <p className="case-study-section-label">What we changed</p>
            <h2 className="case-study-section-title">
              Strategy, production, and conversion were all treated as one funnel.
            </h2>
            <p className="case-study-summary case-study-summary-tight">
              Instead of chasing isolated views, we designed content to create familiarity first,
              trust second, and action third.
            </p>
          </div>

          <div className="case-study-phase-list">
            {phases.map((phase, index) => (
              <article className="case-study-phase-card" key={phase.title}>
                <span className="case-study-phase-number">0{index + 1}</span>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-results">
        <div className="case-study-results-inner">
          <div className="case-study-results-quote">
            <p className="case-study-section-label">Outcome</p>
            <blockquote>
              The content stopped feeling like marketing homework and started working like a sales
              asset.
            </blockquote>
            <p className="case-study-quote-credit">Head of Growth, TechFlow</p>
          </div>

          <div className="case-study-results-panel">
            <p className="case-study-section-label">Delivered</p>
            <ul className="case-study-deliverables">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="case-study-cta">
        <div className="case-study-cta-inner">
          <div>
            <p className="case-study-section-label">Next move</p>
            <h2 className="case-study-cta-title">
              Want this kind of clarity and consistency for your brand too?
            </h2>
          </div>
          <div className="case-study-cta-actions">
            <Link to="/services" className="btn-primary-blue">See How We Work</Link>
            <Link to="/" className="case-study-text-link">View Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
