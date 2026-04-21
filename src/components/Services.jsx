import React from 'react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'SOCIAL MEDIA MARKETING',
      desc: 'Your audience is on Instagram, LinkedIn, YouTube and TikTok right now. They\'re watching someone. It should be you. We build your presence, manage your channels, plan your content calendar and make sure every post has a reason to exist — not just to fill a grid.',
      benefit: 'Brand recall. Inbound leads. Compounding trust.',
      video: '/video-1.mp4'
    },
    {
      num: '02',
      title: 'VIDEO PRODUCTION',
      desc: 'Script to screen. Concept to final cut. We handle the entire production pipeline — ideation, scripting, shooting, editing, sound, and delivery. Long form. Short form. Product demos. Founder stories. Testimonials.',
      benefit: 'People watch. People trust. People buy.',
      video: '/video-2.mp4'
    },
    {
      num: '03',
      title: 'DESIGN',
      desc: 'First impressions happen in 50 milliseconds. Visual content is 43% more persuasive than text alone. Your thumbnails, social graphics, pitch decks, brand assets and landing pages need to look like they were made with intention.',
      benefit: 'A brand people remember and take seriously.',
      video: '/video-3.mp4'
    },
    {
      num: '04',
      title: 'WEBSITE',
      desc: '75% of consumers judge a company\'s credibility based on its website design. Your website is working 24 hours a day selling — or it\'s silently losing you business.',
      benefit: 'Your website becomes your best salesperson.',
      video: '/video-4.mp4'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header-wrapper">
          <h2 className="services-header">WHAT WE DO.</h2>
          <p className="services-sub">Four things. One team. Zero excuses.</p>
        </div>
        <div className="services-list">
          {services.map((svc, idx) => (
            <div className="svc-item" key={idx}>
              <div className="svc-main-row">
                <div className="svc-left">
                  <div className="svc-num">{svc.num}</div>
                  <h3 className="svc-title">{svc.title}</h3>
                </div>
                <div className="svc-visual">
                  <video src={svc.video} autoPlay loop muted playsInline className="svc-video" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
