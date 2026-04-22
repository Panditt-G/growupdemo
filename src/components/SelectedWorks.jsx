import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SelectedWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const takeoverY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.72, 1],
    ['8vh', '2vh', '-4vh', '-10vh']
  );

  const videos = [
    '/v/1.mp4',
    '/v/2.mp4',
    '/v/3.mp4',
    '/v/4.mp4',
    '/v/5.mp4',
    '/v/6.mp4',
    '/v/7.mp4',
    '/v/8.mp4',
    '/v/10.mp4',
    '/v/11.mp4',
    '/v/12.mp4',
    '/v/13.mp4',
    '/v/14.mp4',
    '/v/15.mp4',
    '/v/16.mp4',
    '/v/17.mp4',
  ];
  const logos = [
    { src: '/logo/37.png', alt: '37' },
    { src: '/logo/kaari.png', alt: 'Kaari' },
    { src: '/logo/kaira.png', alt: 'Kaira' },
    { src: '/logo/g-logo.png', alt: 'G Logo' },
    { src: '/logo/Manifestation.png', alt: 'Manifestation' },
    { src: '/logo/Sanmaan.png', alt: 'Sanmaan' },
    { src: '/logo/timus-logo-black.avif', alt: 'Timus' },
    { src: '/logo/tcs logo.jpeg', alt: 'TCS' },
  ];

  return (
    <section className="selected-works" ref={sectionRef}>
      <motion.div
        className="sw-video-marquee-container video-section"
        data-parallax="0.08"
        data-parallax-mode="css-var"
        style={{ '--takeover-y': takeoverY }}
        transformTemplate={() =>
          'translateY(calc(var(--parallax-y, 0px) + var(--takeover-y, 0px)))'
        }
      >
        {/* Horizontal infinite logo marquee */}
        <div className="sw-logo-marquee" aria-label="Client logos">
          <div className="sw-logo-track">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={encodeURI(logo.src)}
                alt={logo.alt}
                className="sw-logo-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="sw-video-marquee-track">
          {[...videos, ...videos, ...videos, ...videos].map((vid, idx) => (
            <div className="sw-card" key={idx}>
              <video src={vid} autoPlay loop muted playsInline className="sw-video" />
              <div className="sw-video-gradient" aria-hidden="true" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
