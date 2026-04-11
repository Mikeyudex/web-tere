import Image from 'next/image';
import { Instagram, Twitter, Dribbble } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 flex justify-center items-center flex-col text-center px-4" id="home">
            {/* Profile Image Area */}
            <div className="relative mb-8 group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gold/30 gold-glow relative z-10 mx-auto bg-[#0e0e0e]">
                    {/* Using a placeholder for now, ideally the user provides the image later */}
                    <div className="w-full h-full bg-[#0e0e0e] flex items-center justify-center">
                        <span className="text-[#dac5a7] text-xs text-center px-2">Arik Photo</span>
                    </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full translate-y-4 -z-10 group-hover:bg-gold/30 transition-all duration-700"></div>
            </div>

            <p className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 animate-fade-in-up">
                Capturo momentos
            </p>
            <p className="text-[#dac5a7] font-gambetta italic font-light text-5xl md:text-7xl lg:text-8xl mt-2">Diseño historias</p>

            <p className="max-w-xl mx-auto text-[#dac5a7] text-sm md:text-base tracking-wide leading-relaxed mb-10 font-chillax lg:text-xl font-light">
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
