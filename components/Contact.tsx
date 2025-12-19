import React, { useState } from 'react';
import { Phone, Mail, Globe, Instagram, Facebook, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Social Media Marketing',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xnjaqkva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        
        // Reset form after a delay to allow user to send another if needed
        setTimeout(() => {
          setStatus('idle');
          setFormData({
            name: '',
            email: '',
            service: 'Social Media Marketing',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('idle');
      alert("There was a problem sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={1.0}>
          <div className="glass-panel rounded-3xl overflow-hidden p-8 md:p-14 relative group">
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              
              {/* Left Column: Context & Socials */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-violet-400 tracking-[0.3em] uppercase">Contact Us</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to scale your business?</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Submit your details and our team will prepare a custom growth strategy for your brand. Direct, digital, and data-driven.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group/item">
                    <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Phone size={24} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Direct Line</div>
                      <a href="tel:+916235448211" className="text-xl text-white font-medium hover:text-violet-400 transition-colors">+91 6235448211</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group/item">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Mail size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Official Email</div>
                      <a href="mailto:contact@zeldic.com" className="text-xl text-white font-medium hover:text-blue-400 transition-colors">contact@zeldic.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group/item">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <MessageCircle size={24} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">WhatsApp Business</div>
                      <a href="https://wa.me/916235448211" target="_blank" rel="noopener noreferrer" className="text-xl text-white font-medium hover:text-green-400 transition-colors">Chat Instantly</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-5 pt-4">
                   <a href="https://instagram.com/zeldic.ads" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent transition-all hover:-translate-y-2 group/social">
                     <Instagram size={24} className="text-white opacity-60 group-hover/social:opacity-100" />
                   </a>
                   <a href="https://www.facebook.com/profile.php?id=61585040540166" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 hover:border-blue-600 transition-all hover:-translate-y-2 group/social">
                     <Facebook size={24} className="text-white opacity-60 group-hover/social:opacity-100" />
                   </a>
                </div>
              </div>

              {/* Right Column: Submission Form */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                 {status === 'success' ? (
                   <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                     <div className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center border border-violet-500/30">
                       <CheckCircle2 size={40} className="text-violet-500" />
                     </div>
                     <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                     <p className="text-gray-400">We have received your inquiry. Our team will contact you shortly.</p>
                     <button 
                        onClick={() => setStatus('idle')}
                        className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-4"
                     >
                       Send another message
                     </button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 gap-6">
                       <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                         <input 
                           required
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full px-5 py-4 rounded-xl input-glass text-white placeholder-gray-600 focus:ring-2 focus:ring-violet-500/20" 
                           placeholder="Your Name" 
                         />
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                         <input 
                           required
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full px-5 py-4 rounded-xl input-glass text-white placeholder-gray-600 focus:ring-2 focus:ring-violet-500/20" 
                           placeholder="email@example.com" 
                         />
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Service Interest</label>
                       <select 
                         name="service"
                         value={formData.service}
                         onChange={handleChange}
                         className="w-full px-5 py-4 rounded-xl input-glass text-white bg-black/40 appearance-none cursor-pointer focus:ring-2 focus:ring-violet-500/20"
                       >
                         <option value="Social Media Marketing">Social Media Marketing</option>
                         <option value="Web Development">Web Development</option>
                         <option value="SEO / SEM">SEO / SEM</option>
                         <option value="Branding">Branding</option>
                       </select>
                     </div>

                     <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                       <textarea 
                         required
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         rows={4} 
                         className="w-full px-5 py-4 rounded-xl input-glass text-white placeholder-gray-600 resize-none focus:ring-2 focus:ring-violet-500/20" 
                         placeholder="How can we help?"
                       ></textarea>
                     </div>

                     <button 
                       type="submit" 
                       disabled={status === 'sending'}
                       className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                     >
                       {status === 'sending' ? 'Sending...' : 'Send Message'}
                       <Send size={18} />
                     </button>
                   </form>
                 )}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;