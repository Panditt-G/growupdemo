import React, { useState, useEffect } from 'react';

export default function SelectedWorks() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const videos = [
    '/video-1.mp4',
    '/video-2.mp4',
    '/video-3.mp4',
    '/video-4.mp4'
  ];

  const logos = [
    '/logo/24.png',
    '/logo/26.png',
    '/logo/28.png',
    '/logo/37.png',
    '/logo/43.png',
    '/logo/Aura Bling.png',
    '/logo/Banjos Logo.png',
    '/logo/Cela Logo.png',
    '/logo/Eunora Logo by nisha Garani .png',
    '/logo/Manifestation.png',
    '/logo/Sanmaan.png',
    '/logo/Shubhaarambh events Logo.png',
    '/logo/Usha Infotech (1).png',
    '/logo/finshell logo 01.jpg',
    '/logo/niya\'s logo.jpg',
    '/logo/tcs logo.jpeg',
    '/logo/timus-logo-black.avif',
    '/logo/usha infra.png'
  ];

  return (
    <section className="selected-works">
      <div className="sw-video-marquee-container">
        <div className="sw-video-marquee-track">
          {[...videos, ...videos].map((vid, idx) => (
            <div className="sw-card" key={idx}>
              <video src={vid} autoPlay loop muted playsInline className="sw-video" />
            </div>
          ))}
        </div>
      </div>
      <div className="sw-video-marquee-container" style={{marginTop: '1.5rem'}}>
        <div className="sw-video-marquee-track reverse">
          {[...videos, ...videos].map((vid, idx) => (
            <div className="sw-card" key={idx}>
              <video src={vid} autoPlay loop muted playsInline className="sw-video" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
