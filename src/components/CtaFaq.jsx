import React, { useState } from 'react';

export default function CtaFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Do I own the content?",
      a: "Yes, 100%. All assets we produce are yours to keep forever. We provide the source files and all distribution rights upon delivery."
    },
    {
      q: "Can I pause?",
      a: "Certainly. You can pause or cancel your service at any time. We work on a month-to-month basis with zero long-term lock-in."
    },
    {
      q: "How do you handle distribution?",
      a: "We use our proprietary engine to cut, format, and schedule your content across LinkedIn, Twitter, Instagram, and TikTok automatically."
    },
    {
      q: "Do you work across all four services together?",
      a: "Yes, our most successful clients use the full 'Zero to Undeniable' stack for maximum impact, but we can also tailor plans to your specific needs."
    },
    {
      q: "How do I get started?",
      a: "Simply book a free 30-minute discovery call using the button on the left. We'll audit your current presence and show you exactly how we can help you grow."
    }
  ];

  return (
    <section className="cta-faq-section" id="contact">
      <div className="cta-faq-inner">
        <div className="cf-left">
          <h2 className="cf-title">YOUR MARKET<br/>IS MOVING.</h2>
          <p className="cf-sub">
            Every week without consistent content is ground you're giving away.<br/>
            One call. Thirty minutes. We'll show you exactly what's missing and how we fix it.
          </p>
          <div className="cf-cta-group">
            <a href="#" className="gu-btn-hero">BOOK YOUR FREE CALL</a>
            <p className="cf-guarantee">No commitment. Just clarity.</p>
          </div>
        </div>
        <div className="cf-right">
          <h3 className="cf-faq-header">COMMON QUESTIONS</h3>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div 
                className={`faq-item ${openIdx === i ? 'open' : ''}`} 
                key={i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className="faq-q-row">
                  <span>{item.q}</span>
                  <span className="faq-plus">{openIdx === i ? '−' : '+'}</span>
                </div>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
