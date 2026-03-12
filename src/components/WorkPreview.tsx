import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
 { id: 'space', title: 'Space', category: 'WEB DESIGN', color: 'bg-[#0e0e0e]' },
 { id: 'nova', title: 'Nova', category: 'WEB DESIGN', color: 'bg-[#0e0e0e]' },
 { id: 'sonic', title: 'Sonic', category: 'WEB DESIGN', color: 'bg-[#0e0e0e]' },
 { id: 'solar', title: 'Solar', category: 'WEB DESIGN', color: 'bg-[#0e0e0e]' },
];

export default function WorkPreview() {
 return (
 <section className="py-32" id="work">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-20 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">Work</p>
 <h2 className=" text-4xl md:text-5xl font-medium mb-6 text-[#dac5a7] tracking-wide">
 My latest web design projects and see how we can<br className="hidden md:block"/> help bring your ideas to life.
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 {PROJECTS.map((project) => (
 <Link href={`/trabajos/${project.id}`} key={project.id} className="group cursor-pointer block">
 <div className={`relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5 mb-6 ${project.color} flex items-center justify-center p-8 md:p-12 transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]`}>
 <div className="relative w-full h-full max-w-sm mx-auto shadow-2xl rounded-sm overflow-hidden border border-white/10 group-hover:-translate-y-2 transition-transform duration-500 bg-[#0e0e0e]">
 {/* Placeholder for project mockups */}
 <div className="absolute inset-0 flex items-center justify-center text-[#dac5a7]/20 text-2xl group-hover:text-[#dac5a7] transition-colors">
 {project.title} Mockup
 </div>
 </div>
 {/* View Project overlay button */}
 <div className="absolute inset-0 bg-[#0e0e0e]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
 <span className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-xs uppercase tracking-widest border border-white/10 text-[#dac5a7] group-hover:border-gold group-hover:text-[#dac5a7] transition-colors">
 View Project <ArrowUpRight size={14} />
 </span>
 </div>
 </div>
 <div className="flex justify-between items-center px-2">
 <h3 className="text-lg tracking-wide text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors">{project.title}</h3>
 <p className="text-[10px] uppercase tracking-widest text-[#dac5a7]">{project.category}</p>
 </div>
 </Link>
 ))}
 </div>
 
 <div className="text-center mt-20">
 <Link href="/trabajos" className="inline-flex items-center justify-center h-14 px-10 text-xs uppercase tracking-widest bg-transparent border border-white/20 text-[#dac5a7] rounded-sm hover:border-gold hover:text-[#dac5a7] transition-colors">
 View All Works
 </Link>
 </div>
 </div>
 </section>
 );
}
