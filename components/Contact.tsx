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

    // Constructing the mailto link for contact@zeldic.com
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Customer Details:\n` +
      `------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Interested in: ${formData.service}\n\n` +
      `Message Details:\n` +
      `------------------\n` +
      `${formData.message}\n\n` +
      `-- Sent via Zeldic Website Contact Form`
    );
    
    const mailtoLink = `mailto:contact@zeldic.com?subject=${subject}&body=${body}`;
    
    // Slight delay for smooth UX transition
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      
      // Reset form status after showing success message
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          service: 'Social Media Marketing',
          message: ''
        });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" duration={1.0}>
          <div className="glass-panel rounded-3xl overflow-hidden p-8 md:p-12 relative">
            
            {/* Form Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 transition-all animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-violet-500 animate-pulse" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">Email Drafted!</h4>
                <p className="text-gray-400 max-w-sm mb-8">Your email app has been opened with your inquiry for <strong>contact@zeldic.com</strong>. Please review and hit send to reach our team!</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send Another
                </button>
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

              {/* Contact Form (Right) */}
              <div className="flex flex-col justify-center">
                 <form onSubmit={handleSubmit} className="space-y-5">
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
                     <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl input-glass text-white bg-[#0a0a0a] transition-all appearance-none cursor-pointer pr-10"
                        >
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Web Development">Web Development</option>
                          <option value="SEO / SEM">SEO / SEM</option>
                          <option value="Branding">Branding</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-sm text-gray-400 ml-1">Message</label>
                     <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full px-4 py-3 rounded-xl input-glass text-white placeholder-gray-500 transition-all resize-none" 
                      placeholder="Tell us about your project or business goals..."
                     ></textarea>
                   </div>

                   <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`w-full py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-lg active:scale-[0.98] ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
                   >
                     <span>{status === 'sending' ? 'Opening Email...' : 'Send Message'}</span>
                     <Send size={18} className={status === 'sending' ? 'animate-bounce' : ''} />
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