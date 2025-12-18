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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Constructing the mailto link
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Interest: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:contact@zeldic.com?subject=${subject}&body=${body}`;
    
    // Simulate a brief loading state for better UX feel
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      
      // Reset form after a delay
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          service: 'Social Media Marketing',
          message: ''
        });
      }, 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={1.0}>
          <div className="glass-panel rounded-3xl overflow-hidden p-8 md:p-12 relative">
            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                <CheckCircle2 size={64} className="text-violet-500 mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Prepared!</h4>
                <p className="text-gray-400 max-w-sm">Your email client has been opened with your inquiry. Just hit send in your mail app!</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Info (Left) */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold text-violet-400 tracking-widest uppercase mb-3">Get in Touch</h2>
                  <h3 className="text-4xl font-bold text-white mb-6">Let's start a project together</h3>
                  <p className="text-gray-400">Reach out to us for a consultation or just to say hello. We are always open to discussing new projects and creative ideas.</p>
                </div>

                <div className="space-y-6">
                  <a href="tel:+916235448211" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all">
                      <Phone size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">+91 6235448211</span>
                  </a>
                  
                  <a href="https://wa.me/916235448211" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-all">
                      <MessageCircle size={20} className="text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">WhatsApp</span>
                  </a>

                  <a href="mailto:contact@zeldic.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                      <Mail size={20} className="text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">contact@zeldic.com</span>
                  </a>

                   <a href="https://www.zeldic.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 transition-all">
                      <Globe size={20} className="text-fuchsia-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg">www.zeldic.com</span>
                  </a>
                </div>
                
                <div className="pt-8 flex gap-4">
                   <a href="https://instagram.com/zeldic.ads" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-full hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent transition-all group">
                     <Instagram size={24} className="text-pink-400 group-hover:text-white transition-colors" />
                   </a>
                   <a href="https://www.facebook.com/profile.php?id=61585040540166" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600/10 border border-blue-600/20 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all group">
                     <Facebook size={24} className="text-blue-500 group-hover:text-white transition-colors" />
                   </a>
                </div>
              </div>

              {/* Functional Form (Right) */}
              <div className="flex flex-col justify-center">
                 <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-sm text-gray-400 ml-1">Name</label>
                       <input 
                         required
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all" 
                         placeholder="John Doe" 
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm text-gray-400 ml-1">Email</label>
                       <input 
                         required
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all" 
                         placeholder="john@example.com" 
                       />
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-sm text-gray-400 ml-1">Service Interest</label>
                     <select 
                       name="service"
                       value={formData.service}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl input-glass text-white bg-[#0a0a0a] transition-all appearance-none cursor-pointer"
                     >
                       <option value="Social Media Marketing">Social Media Marketing</option>
                       <option value="Web Development">Web Development</option>
                       <option value="SEO / SEM">SEO / SEM</option>
                       <option value="Branding">Branding</option>
                       <option value="Other">Other</option>
                     </select>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm text-gray-400 ml-1">Message</label>
                     <textarea 
                       required
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       rows={4} 
                       className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all resize-none" 
                       placeholder="Tell us about your project..."
                     ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={status === 'sending'}
                     className={`w-full py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4 ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
                   >
                     <span>{status === 'sending' ? 'Preparing Email...' : 'Send Message'}</span>
                     <Send size={18} className={status === 'sending' ? 'animate-pulse' : ''} />
                   </button>
                 </form>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;