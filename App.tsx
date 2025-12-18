import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Abstract Background */}
      <Background />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;