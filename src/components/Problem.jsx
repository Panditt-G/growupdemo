import React from 'react';

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-top-glow" data-parallax="0.25" data-parallax-dir="-1"></div>
      <div className="problem-inner">
        <div className="problem-left">
          <p className="problem-eyebrow">THE TRUTH ABOUT CONTENT</p>
          <h2 className="problem-title" data-parallax="0.08">YOUR PRODUCT<br/>IS NOT YOUR<br/>BIGGEST PROBLEM.<br/><span style={{color: '#888'}}>INVISIBILITY IS.</span></h2>
        </div>
        <div className="problem-right">
          <div className="problem-visual">
            <div className="visual-flow">
              <div className="q-circles">
                <div className="q-circle small">?</div>
                <div className="q-circle small">?</div>
                <div className="q-circle main">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
                <div className="q-circle small">?</div>
                <div className="q-circle small">?</div>
              </div>
              
              <div className="flow-line"></div>
              
              <div className="user-node">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="User" />
              </div>
            </div>
            <a href="#" className="gu-btn-nav" style={{marginTop: '3rem'}}>GET STARTED →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
