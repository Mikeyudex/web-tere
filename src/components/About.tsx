export default function About() {
 return (
 <section className="py-32 bg-[#0e0e0e]" id="about">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Signature Header */}
 <div className="flex items-center justify-center mb-24 opacity-60">
 <h2 className=" text-5xl md:text-7xl lg:text-9xl text-[#dac5a7]/5 whitespace-nowrap overflow-hidden">
 Arik Andersson <span className="mx-8">&bull;</span> Arik Andersson
 </h2>
 </div>

 <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
 <div className="lg:w-1/3">
 <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 bg-[#0e0e0e] flex items-center justify-center mb-8 mx-auto lg:mx-0">
 {/* Replace with actual image later */}
 <span className="text-[#dac5a7] text-sm">Portrait</span>
 </div>
 </div>
 
 <div className="lg:w-2/3">
 <h3 className=" text-3xl md:text-4xl text-[#dac5a7] font-medium mb-10 pb-10 border-b border-white/10">
 A visual designer<br/>
 <span className="text-[#dac5a7] italic font-light">crafting experiences</span>
 </h3>
 
 <div className="text-[#dac5a7] text-sm leading-relaxed space-y-6">
 <p>
 Hello, I'm Arik. For the past decade, I've specialized in helping forward-thinking brands define and construct elegant, functional, and deeply resonant digital experiences. I believe that powerful design is rooted in a profound understanding of the user, paired with an uncompromising dedication to visual excellence.
 </p>
 <p>
 My process is intrinsically collaborative. I immerse myself within a company's goals to uncover the core narrative waiting to be told. Whether reshaping a legacy institution or defining the visual language for a modern startup, my approach remains consistent: distill complexity into clarity and beauty.
 </p>
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
