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
                    <p className="text-sm uppercase text-[#dac5a7] mb-4 font-satoshi font-light" style={{ letterSpacing: '1.5px' }}>¿PROYECTO EN MENTE?</p>
                    <h2 className="font-satoshi text-6xl md:text-8xl lg:text-11xl font-light text-[#dac5a7]">
                        Hagamos que
                    </h2>

                    <h2 className="text-[#dac5a7] italic font-light font-gambetta text-6xl md:text-8xl lg:text-10xl">suceda</h2>

                    <div className='max-w-md mx-auto mt-6'>
                        <p className="font-chillax text-[#a3947d] text-lg max-w-xl mx-auto mb-10 leading-relaxed text-center w-full block">
                            Si tienes una idea, una historia, me encantaría ayudarte a darle forma visual.
                        </p>
                    </div>

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
                                <label htmlFor="name" className="font-satoshi text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="font-chillax bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm placeholder:font-chillax"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-satoshi text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Correo</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="font-chillax bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm placeholder:font-chillax"
                                    placeholder="alguien@ideas.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="font-satoshi text-[10px] md:text-xs uppercase tracking-widest text-[#dac5a7]">Mensaje</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="font-chillax bg-[#0e0e0e] border border-white/10 text-[#dac5a7] rounded-sm px-4 py-4 md:py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none text-sm placeholder:font-chillax"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>
                            <Button type="submit" disabled={status === 'loading'} className="group relative overflow-hidden w-full mt-4 h-16 md:h-14 bg-gradient-to-r from-gold to-gold-dark text-black border-none transition-all disabled:opacity-50 cursor-pointer">
                                {status === 'loading' ? (
                                    <span className="absolute inset-0 flex items-center justify-center">ENVIANDO...</span>
                                ) : (
                                    <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-full">
                                        <span className="absolute inset-0 flex items-center justify-center">ENVIAR ↗</span>
                                        <span className="absolute inset-0 flex items-center justify-center -translate-y-full">ENVIAR ↗</span>
                                    </div>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
