export default function About() {
    return (
        <section className="relative bg-[#0e0e0e] overflow-hidden" id="about">
            {/* Full height image that blends with background */}
            <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-0">
                <img 
                    src="/images/design-teresa.webp" 
                    alt="Teresa Yudex" 
                    className="w-full h-full object-cover object-top lg:object-center grayscale-[20%] brightness-90"
                />
                {/* Smooth blend gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e0e0e] hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
                {/* Mobile overlay for better text contrast */}
                <div className="absolute inset-0 bg-[#0e0e0e]/50 lg:hidden"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
                <div className="flex flex-col lg:flex-row items-center justify-end">
                    <div className="lg:w-2/3 lg:pl-12">
                        <h3 className="font-satoshi text-3xl md:text-4xl lg:text-8xl text-[#dac5a7] font-light mb-10 pb-10 border-b border-white/10">
                            Tere<br />
                            <span className="text-[#dac5a7] italic font-light font-gambetta text-3xl md:text-4xl lg:text-8xl">Yudex</span>
                        </h3>

                        <div className="text-[#dac5a7] text-xl leading-relaxed space-y-6 font-chillax font-light px-2 md:px-10 lg:px-0">
                            <p>
                                Soy diseñadora en formación y una apasionada de la fotografía. Me encanta capturar la escena en el momento preciso: cuando la luz, la emoción y el enfoque se alinean para contar una historia.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-6 px-2 md:px-10 lg:px-0">
                            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#dac5a7] hover:text-[#dac5a7] hover:border-gold transition-colors cursor-pointer">in</a>
                            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#dac5a7] hover:text-[#dac5a7] hover:border-gold transition-colors cursor-pointer">be</a>
                            <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs text-[#dac5a7] hover:text-[#dac5a7] hover:border-gold transition-colors cursor-pointer">dr</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
