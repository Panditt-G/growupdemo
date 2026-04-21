import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WhyContentPage from './pages/WhyContentPage';
import CaseStudyPage from './pages/CaseStudyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-content" element={<WhyContentPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
