'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Dribbble } from 'lucide-react';

export default function Hero() {
    return (
        <section
            className="relative h-screen max-h-screen w-full overflow-hidden flex flex-col justify-end"
            id="home"
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 sm:-top-20 sm:-right-40 md:-top-32 md:-right-64 lg:-top-40 lg:-right-[600px] w-full h-full">
                    <img
                        src="/images/IMG_1290.webp"
                        alt="Teresa background"
                        className="w-full h-full object-cover object-center sm:object-left lg:scale-125 lg:origin-right"
                        style={{
                            maskImage: [
                                'linear-gradient(to right, transparent 0%, black 30%, black 75%, transparent 100%)',
                                'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                            ].join(', '),
                            WebkitMaskImage: [
                                'linear-gradient(to right, transparent 0%, black 30%, black 75%, transparent 100%)',
                                'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                            ].join(', '),
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in',
                        }}
                    />
                </div>
                {/* Dark overlay — más amplio en móvil para garantizar legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/80 via-[#0e0e0e]/40 to-transparent w-full md:w-[70%] lg:w-[60%]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center pt-32 w-full pb-24 px-8 sm:px-12 md:px-16 lg:px-24 gap-0 h-full">

                {/* Row 1: Title */}
                <div className="mb-4">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 1, 0.36, 1] }}
                        className="font-satoshi text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight text-[#DAC5A7] leading-tight"
                    >
                        Capturo momentos
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 1, 0.36, 1] }}
                        className="font-gambetta italic font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#DAC5A7] leading-tight"
                    >
                        Diseño historias
                    </motion.p>
                </div>

                {/* Row 2: Description */}
                <div className="mb-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 1, 0.36, 1] }}
                        className="max-w-xs sm:max-w-sm md:max-w-md text-[#dac5a7] text-md tracking-tight leading-relaxed font-chillax font-medium"
                    >
                        Fotografía, diseño de marca y piezas visuales creadas<br />
                        con una mirada minimalista, auténtica y llena de<br />
                        intención.
                    </motion.p>
                </div>

                {/* Row 3: Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 1, 0.36, 1] }}
                    className="flex items-center gap-5"
                >
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#dac5a7] transition-colors">
                            <Instagram size={15} className="text-[#dac5a7] transition-colors" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] hidden sm:inline">Instagram</span>
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
