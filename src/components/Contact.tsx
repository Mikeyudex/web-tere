"use client";
import { useState } from 'react';
import { Button } from './ui/Button';

export default function Contact() {
 const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setStatus('loading');
 
 // Simulate API call
 setTimeout(() => {
 setStatus('success');
 (e.target as HTMLFormElement).reset();
 }, 1500);
 };

 return (
 <section className="py-32 border-t border-white/5 bg-[#0e0e0e]" id="contact">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">PROJECT IN MIND?</p>
 <h2 className=" text-6xl md:text-8xl font-medium mb-8 text-[#dac5a7] tracking-wide">
 Let's make your<br/>
 <span className="text-[#dac5a7] italic font-light">Website shine</span>
 </h2>
 <p className="text-[#dac5a7] text-sm max-w-xl mx-auto mb-10 leading-relaxed text-center w-full block">
 Premium web design, development, and SEO<br className="hidden sm:block"/> services to help your business stand out.
 </p>
 </div>

 <div className="max-w-2xl mx-auto bg-[#0e0e0e] border border-white/10 rounded-sm p-8 md:p-12">
 {status === 'success' ? (
 <div className="text-center py-12">
 <h3 className="text-3xl text-[#dac5a7] mb-4">Thank You!</h3>
 <p className="text-[#dac5a7]">Your message has been received. I'll get back to you shortly.</p>
 <Button className="mt-8 hover:bg-gold-light border-none text-black" onClick={() => setStatus('')}>Send Another Message</Button>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
 <div className="flex flex-col gap-2">
 <label htmlFor="name" className="text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Name</label>
 <input 
 type="text" 
 id="name" 
 required 
 className="bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
 placeholder="John Doe"
 />
 </div>
 <div className="flex flex-col gap-2">
 <label htmlFor="email" className="text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Email</label>
 <input 
 type="email" 
 id="email" 
 required 
 className="bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
 placeholder="john@example.com"
 />
 </div>
 <div className="flex flex-col gap-2">
 <label htmlFor="message" className="text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Message</label>
 <textarea 
 id="message" 
 required 
 rows={4}
 className="bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none text-sm"
 placeholder="Tell me about your project..."
 />
 </div>
 <Button type="submit" disabled={status === 'loading'} className="w-full mt-4 h-16 md:h-14 bg-gradient-to-r from-gold to-gold-dark text-black border-none hover:opacity-90 transition-opacity disabled:opacity-50">
 {status === 'loading' ? 'SENDING...' : 'GET IN TOUCH ↗'}
 </Button>
 </form>
 )}
 </div>
 </div>
 </section>
 );
}
