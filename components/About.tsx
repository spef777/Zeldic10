import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={1.0}>
          <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
            
            {/* Decorative element inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <ScrollReveal direction="left" delay={0.2} duration={1.0}>
                <div>
                  <h2 className="text-sm font-bold text-violet-400 tracking-widest uppercase mb-3">About Us</h2>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Crafting Digital Success Stories for Modern Brands.
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      At <span className="text-white font-semibold">Zeldic</span>, we believe that every brand has a unique voice waiting to be heard. We are a premier digital marketing agency dedicated to bridging the gap between businesses and their ideal audience.
                    </p>
                    <p>
                      Founded on the principles of innovation and data-driven strategy, our team of creatives, analysts, and strategists work tirelessly to transform your digital presence. We don't just run ads; we build ecosystems that nurture leads, foster engagement, and drive sustainable revenue growth.
                    </p>
                    <p>
                      Whether you are a startup looking for your first breakthrough or an established enterprise aiming to scale, Zeldic provides the tactical edge you need in today's crowded digital landscape.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.4} duration={1.0}>
                <div className="relative">
                  {/* Abstract visual representation instead of a stock photo for cleaner code */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 border border-white/10 p-2 flex items-center justify-center">
                      <div className="w-full h-full rounded-xl overflow-hidden relative group">
                        <img 
                          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Agency Workflow" 
                          className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                          <div className="text-white">
                            <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-1">Trusted</div>
                            <div className="text-sm uppercase tracking-wide">Growth Partner</div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;