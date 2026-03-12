import { MonitorSmartphone, Code, Search } from 'lucide-react';

const STEPS = [
 { id: '01', title: 'Concept & Strategy', desc: 'Every successful web design project starts with a solid foundation. We will discuss your goals, target audience, and brand vision to create a strategic plan.' },
 { id: '02', title: 'UI/UX Design', desc: 'Our design team will translate your brand identity into a visually stunning and user-friendly interface. We focus on creating intuitive navigation and engaging user experiences.' },
 { id: '03', title: 'Development', desc: 'Using the latest technologies, we bring the design to life. We guarantee highly responsive, fast, and scalable websites optimized for all devices.' },
 { id: '04', title: 'Testing & Launch', desc: 'Rigorous testing ensures everything works flawlessly. Once approved, we will launch your website, ensuring a smooth transition and providing you with the necessary support.' },
];

const SERVICES = [
 { 
 title: 'Transforming Your Ideas into Reality', 
 subtitle: 'WEB DESIGN',
 desc: 'Bespoke web designs tailored to your unique brand identity. We craft visually compelling websites that not only look stunning but also engage your audience effectively.',
 icon: <MonitorSmartphone size={32} className="text-[#dac5a7]" />
 },
 { 
 title: 'Developing High-Performance Websites', 
 subtitle: 'DEVELOPMENT',
 desc: 'Robust and scalable web development using modern frameworks like Next.js. We ensure your site is fast, secure, and built to handle future growth.',
 icon: <Code size={32} className="text-[#dac5a7]" />
 },
 { 
 title: "Boosting Your Website's Organic Traffic", 
 subtitle: 'SEO OPTIMIZATION',
 desc: 'Comprehensive SEO strategies to improve your search engine rankings. We implement technical, on-page, and off-page SEO to drive consistent organic traffic.',
 icon: <Search size={32} className="text-[#dac5a7]" />
 },
];

export default function Services() {
 return (
 <section className="py-32 bg-[#0e0e0e]" id="services">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Process Section */}
 <div className="mb-40">
 <div className="text-center mb-20 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">Process</p>
 <h2 className=" text-4xl md:text-5xl font-medium mb-6 text-[#dac5a7] tracking-wide">
 Your Website<br/>in 4 steps
 </h2>
 <p className="text-[#dac5a7] text-sm max-w-lg mx-auto">
 A structured and transparent process to ensure your project's success from start to finish.
 </p>
 </div>

 <div className="space-y-6 max-w-4xl mx-auto hidden md:block relative">
 {/* The vertical timeline line */}
 <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
 
 {STEPS.map((step, index) => (
 <div key={step.id} className={`flex items-center justify-between group ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
 <div className={`w-[45%] ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
 <div className="inline-block p-8 border border-white/5 bg-[#0e0e0e] rounded-sm group-hover:border-gold/30 transition-colors">
 <h3 className=" text-2xl text-[#dac5a7] mb-4 group-hover:text-[#dac5a7] transition-colors">{step.title}</h3>
 <p className="text-[#dac5a7] text-sm leading-relaxed">{step.desc}</p>
 </div>
 </div>
 
 {/* Center Node */}
 <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 bg-[#0e0e0e] flex items-center justify-center text-[#dac5a7] text-sm group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-colors">
 {step.id}
 </div>
 
 <div className="w-[45%]"></div>
 </div>
 ))}
 </div>

 {/* Mobile Process Stacking */}
 <div className="space-y-6 md:hidden">
 {STEPS.map((step) => (
 <div key={step.id} className="p-8 border border-white/5 bg-[#0e0e0e] rounded-sm group">
 <div className="text-[#dac5a7] text-xl mb-4 opacity-50">{step.id}</div>
 <h3 className=" text-2xl text-[#dac5a7] mb-4 group-hover:text-[#dac5a7] transition-colors">{step.title}</h3>
 <p className="text-[#dac5a7] text-sm leading-relaxed">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Services Detail Section */}
 <div>
 {SERVICES.map((service, idx) => (
 <div key={idx} className="mb-12 border border-white/5 bg-[#0e0e0e] rounded-sm overflow-hidden group">
 <div className="p-8 md:p-12 lg:p-16">
 <p className="text-[10px] uppercase tracking-[0.2em] text-[#dac5a7] mb-6">{service.subtitle}</p>
 <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
 <div className="md:w-1/2">
 <h3 className=" text-3xl md:text-4xl lg:text-5xl text-[#dac5a7] font-medium !leading-tight group-hover:text-[#dac5a7] transition-colors mb-6">{service.title}</h3>
 <p className="text-[#dac5a7] text-sm leading-relaxed mb-8 max-w-md">{service.desc}</p>
 
 <div className="flex flex-col gap-4">
 <div className="flex items-center gap-4 text-sm text-[#dac5a7]">
 <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
 Custom Design System
 </div>
 <div className="flex items-center gap-4 text-sm text-[#dac5a7]">
 <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
 Responsive Layouts
 </div>
 <div className="flex items-center gap-4 text-sm text-[#dac5a7]">
 <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
 Interactive Elements
 </div>
 </div>
 </div>
 
 <div className="md:w-[40%] bg-[#0e0e0e] border border-white/10 rounded-sm aspect-video flex items-center justify-center p-8 relative overflow-hidden">
 <div className="z-10 bg-[#0e0e0e]/50 p-6 backdrop-blur-md rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
 {service.icon}
 </div>
 <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 </div>
 </section>
 );
}
