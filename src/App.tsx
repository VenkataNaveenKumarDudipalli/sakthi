import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TopInfoBar from './components/TopInfoBar/TopInfoBar';
import WhatsAppFloat from './components/WhatsappFloat/WhatsappFloat';

import PrivacyPolicy from './components/Terms/PrivacyPolicy/PrivacyAndPolicy';
import TermsAndConditions from './components/Terms/TermsCondition/TermsAndCondition';
import LearnMore from './components/Terms/LearnMore/LearnMore';
import ScrollToTop from './components/Scroll/Scroll';
import ScrollToHash from './components/Scroll/ScrollToHash';
import { useEffect,useState } from 'react';

const { Content } = Layout;

const App = () => {
  const el= document.getElementById('root')?.offsetWidth;
  const [width, setWidth] = useState<number>(el || window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        const el= document.getElementById('root')?.offsetWidth;
        if(el){
            setWidth(el);
        }  
    };
handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    // ✅ cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Layout className="app-layout">
      <ScrollToTop />
      <ScrollToHash />
      {/* Fixed Header Area */}
      <div className="fixed-header" style={{
        width: `${width}px`
      }}>
        <TopInfoBar />
        <Header />
      </div>

      {/* Routed Content */}
      <Content className="app-content">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </Content>

      <Footer />
      <WhatsAppFloat />
    </Layout>
  );
};

export default App;
