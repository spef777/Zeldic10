import { useState } from 'react';
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
  const [autoFillData, setAutoFillData] = useState<{ service: string; message: string; timestamp: number } | null>(null);

  const handlePlanSelect = (name: string, price?: number, duration?: string) => {
    const message = (price !== undefined && duration !== undefined)
      ? `I'm interested in the ${name} (₹${price.toLocaleString()}/${duration}). Please get in touch.`
      : "I want a Custom Plan. Please get in touch.";
      
    // Defaulting to Social Media Marketing as it fits most plans, user can change if needed.
    const service = "Social Media Marketing";
    
    setAutoFillData({
      service,
      message,
      timestamp: Date.now()
    });
  };

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
        <Pricing onPlanSelect={handlePlanSelect} />
        <Contact autoFillData={autoFillData} />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;