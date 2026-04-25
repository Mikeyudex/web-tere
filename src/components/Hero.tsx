import Image from 'next/image';
import { Instagram, Twitter, Dribbble } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex justify-center items-center flex-col text-center px-4 overflow-hidden" id="home">
            {/* Background Camera Integration with "Velo" (Veil) Effect */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[110%] h-full opacity-40">
                    <img 
                        src="/images/camara.jpg" 
                        alt="Background Camera" 
                        className="w-full h-full object-cover"
                        style={{
                            maskImage: 'radial-gradient(circle at 50% 45%, black 5%, transparent 65%)',
                            WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 5%, transparent 65%)'
                        }}
                    />
                </div>
                
                {/* The "Velo" - Expanded glow surrounding the camera area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[#dac5a7]/5 blur-[160px] rounded-full opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square bg-[#dac5a7]/10 blur-[100px] rounded-full opacity-40"></div>
                
                {/* Global blend gradients to ensure edges are invisible */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e]"></div>
            </div>

            <p className="font-satoshi text-5xl md:text-7xl lg:text-9xl font-light tracking-tight mb-4 animate-fade-in-up relative z-10">
                Capturo momentos
            </p>
            <p className="text-[#dac5a7] font-gambetta italic font-light text-5xl md:text-7xl lg:text-9xl mt-2 animate-fade-in-up relative z-10">Diseño historias</p>

            <p className="max-w-xl mx-auto text-[#dac5a7]/90 text-sm md:text-base tracking-wide leading-relaxed mb-10 font-chillax lg:text-xl font-light mt-12 animate-fade-in relative z-10">
                Fotografía, diseño de marca y piezas visuales creadas con una mirada
                minimalista, auténtica y llena de intención.
            </p>

            <div className="flex items-center gap-6 mb-20 animate-fade-in">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                        <Instagram size={16} className="text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors hidden sm:inline">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                        <Twitter size={16} className="text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors hidden sm:inline">Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                        <Dribbble size={16} className="text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors hidden sm:inline">Dribbble</span>
                </a>
            </div>
        </section>
    );
}
