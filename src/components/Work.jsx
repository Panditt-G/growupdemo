import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ c }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false; // Audio on!
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Link to={c.href} className="work-card work-card-link">
      <div className="work-img-placeholder" style={{ position: 'relative' }}>
        <video 
          ref={videoRef}
          src={c.video} 
          loop 
          playsInline 
          className="work-video" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        {/* Play/Pause Overlay */}
        <div 
          onClick={togglePlay}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isPlaying ? 'transparent' : 'rgba(0,0,0,0.3)',
            transition: 'background 0.3s ease',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          {!isPlaying && (
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}>
              {/* Play icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '4px' }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <p className="work-client">{c.name}</p>
      <p className="work-metric">{c.metric}</p>
      <span className="work-card-cta">View case study</span>
    </Link>
  );
}

export default function Work() {
  const cases = [
    {
      name: 'TechFlow - SaaS',
      metric: '5,000 YOUTUBE SUBS',
      desc: 'Zero online presence to 5,000 YouTube subscribers in 6 months. 40% increase in website traffic. Pipeline started coming in from content alone.',
      video: '/video-4.mp4',
      href: '/case-study',
    },
    {
      name: 'FashionFwd - E-commerce',
      metric: '3X ENGAGEMENT',
      desc: 'Dead Instagram to 3x engagement and 2x conversion rate in 90 days. Same product. Better content.',
      video: '/video-2.mp4',
      href: '/case-study',
    },
    {
      name: 'DataDash - SaaS',
      metric: '60% MORE DEMOS',
      desc: 'Visual rebrand, new landing pages, new brand identity. 60% more demo bookings. Their sales team stopped apologising for the website.',
      video: '/video-3.mp4',
      href: '/case-study',
    },
    {
      name: 'GrowthOps - B2B',
      metric: '$1.2M PIPELINE',
      desc: 'End-to-end content distribution system. Repurposed 10 core webinars into 150+ micro-assets. Generated $1.2M in qualified pipeline in Q3.',
      video: '/video-1.mp4',
      href: '/case-study',
    },
  ];

  return (
    <section className="work-section">
      <div className="work-inner">
        <div className="work-header">
          <h2 className="work-title" data-parallax="0.07">THE WORK</h2>
          <Link to="/case-study" className="work-eyebrow work-eyebrow-link">
            OUR RECENT CASE STUDIES
            <span className="eyebrow-arrow">-&gt;</span>
          </Link>
        </div>
        <div className="work-grid">
          {cases.map((c, i) => (
            <Link to={c.href} className="work-card work-card-link" key={i}>
              <div className="work-img-placeholder">
                <video src={c.video} autoPlay loop muted playsInline className="work-video" />
              </div>
              <p className="work-client">{c.name}</p>
              <p className="work-metric">{c.metric}</p>
              <p className="work-desc">{c.desc}</p>
              <span className="work-card-cta">View case study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
