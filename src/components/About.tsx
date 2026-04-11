export default function About() {
    return (
        <section className="py-32 bg-[#0e0e0e]" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row  items-start justify-between">
                    <div className="lg:w-1/3">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 bg-[#0e0e0e] flex items-center justify-center mb-8 mx-auto lg:mx-0">
                            <img src={'/images/tere.jpg'} alt="Teresa Yudex" className="object-cover" />
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <h3 className="font-satoshi text-3xl md:text-4xl lg:text-8xl text-[#dac5a7] font-light mb-10 pb-10 border-b border-white/10">
                            Tere<br />
                            <span className="text-[#dac5a7] italic font-light font-gambetta text-3xl md:text-4xl lg:text-8xl">Yudex</span>
                        </h3>

                        <div className="text-[#dac5a7] text-xl leading-relaxed space-y-6 font-chillax font-light px-2 md:px-2 lg:px-2 sm:px-10">
                            <p>
                                Soy diseñadora en formación y una apasionada de la fotografía. Me encanta capturar la escena en el momento preciso: cuando la luz, la emoción y el enfoque se alinean para contar una historia.
                            </p>
                            {/*  <p>
                                En el diseño me inspiro en lo minimalista y lo audaz. Creo que menos puede decir mucho más cuando cada elemento se usa de manera estratégica. Este proyecto nace de mi deseo de crear, experimentar y ayudar a otros a expresar su identidad a través de imágenes y diseño.
                            </p> */}
                        </div>

                        <div className="mt-12 flex items-center gap-6">
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
