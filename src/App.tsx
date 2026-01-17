import { Layout } from 'antd';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="app-layout">
      <Header />

      <Content className="app-content">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </Content>
    </Layout>
  );
};

export default App;
