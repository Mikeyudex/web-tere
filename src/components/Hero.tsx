'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Dribbble } from 'lucide-react';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            className="relative h-screen max-h-screen w-full max-w-full overflow-hidden flex flex-col justify-end"
            id="home"
        >
            {/* Background Image: Responsive source and positioning */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Image container: responsive positioning */}
                <div className={`absolute ${isMobile ? 'inset-0' : '-top-40 -right-150 w-full h-full'}`}>
                    <img
                        src={isMobile ? "/images/tere-img-hero-mobile.jpg" : "/images/IMG_1290.webp"}
                        alt="Teresa background"
                        className="w-full h-full object-cover object-center md:object-left scale-100 md:scale-125 origin-right"
                        style={isMobile ? {
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
                        } : {
                            maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in',
                        }}
                    />
                </div>
                {/* Dark overlay for desktop legibility */}
                {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/80 via-[#0e0e0e]/40 to-transparent w-[60%]" />
                )}
            </div>

            {/* Content: 1 column, 3 rows, center-aligned on mobile, left-aligned on desktop */}
            <div className={`relative z-10 flex flex-col ${isMobile ? 'items-center text-center pt-[150px] justify-start px-6' : 'items-start text-left justify-center pt-32 px-8 md:px-16 lg:px-24'} w-full max-w-full gap-0 h-full overflow-x-hidden`}>

                {/* Row 1: Title */}
                <div className="mb-4">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 1, 0.36, 1] }}
                        className="font-satoshi text-[2.2rem] xs:text-[2.6rem] md:text-[5rem] lg:text-[6rem] font-medium tracking-tight text-[#DAC5A7] leading-[1.1] mb-1"
                    >
                        Capturo momentos
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 1, 0.36, 1] }}
                        className="font-gambetta italic font-medium text-[2.2rem] xs:text-[2.6rem] md:text-[5rem] lg:text-[6rem] text-[#DAC5A7] leading-[1.1]"
                    >
                        Diseño historias
                    </motion.p>
                </div>

                {/* Row 2: Description (Hidden on mobile as per reference) */}
                {!isMobile && (
                    <div className="mb-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 1, 0.36, 1] }}
                            className="max-w-md text-[#dac5a7]/90 text-sm tracking-tight leading-relaxed font-chillax font-medium"
                        >
                            Fotografía, diseño de marca y piezas visuales creadas<br />
                            con una mirada minimalista, auténtica y llena de<br />
                            intención.
                        </motion.p>
                    </div>
                )}

                {/* Row 3: Social Links - Icons only on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: isMobile ? 0.7 : 0.9, ease: [0.21, 1, 0.36, 1] }}
                    className="flex items-center gap-5  md:mt-0"
                >
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#dac5a7] transition-colors">
                            <Instagram size={15} className="text-[#dac5a7] transition-colors" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] hidden md:inline">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#dac5a7] transition-colors">
                            <Twitter size={15} className="text-[#dac5a7] transition-colors" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] hidden sm:inline">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#dac5a7] transition-colors">
                            <Dribbble size={15} className="text-[#dac5a7] transition-colors" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] hidden sm:inline">Dribbble</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
