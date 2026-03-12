import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 return {
 title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} | Arik Portfolio`,
 };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const validProjects = ['space', 'nova', 'sonic', 'solar'];

 if (!validProjects.includes(slug)) {
 notFound();
 }

 return (
 <article className="py-32">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <Link href="/#work" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#dac5a7] hover:text-[#dac5a7] transition-colors mb-12">
 <ArrowLeft size={16} /> Back to Work
 </Link>
 
 <div className="mb-16 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">WEB DESIGN</p>
 <h1 className=" text-5xl md:text-7xl font-medium mb-8 text-[#dac5a7] tracking-wide capitalize">
 {slug} Project
 </h1>
 <p className="text-[#dac5a7] text-lg leading-relaxed max-w-2xl">
 A comprehensive web design and development project creating a modern, scalable, and highly performant digital experience for the {slug} brand.
 </p>
 </div>

 <div className="aspect-video bg-[#0e0e0e] border border-white/10 rounded-sm mb-20 overflow-hidden relative flex items-center justify-center animate-fade-in">
 <div className="text-[#dac5a7]/20 text-3xl">Desktop Mockup Display</div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
 <div className="md:col-span-2">
 <h2 className=" text-3xl text-[#dac5a7] mb-6">About the project</h2>
 <div className="text-[#dac5a7] leading-relaxed space-y-4">
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
 </div>
 
 <div className="md:col-span-1 space-y-8 p-8 bg-[#0e0e0e] border border-white/5 rounded-sm">
 <div>
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-2">Client</h4>
 <p className="text-[#dac5a7] capitalize">{slug} Inc.</p>
 </div>
 <div>
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-2">Role</h4>
 <p className="text-[#dac5a7]">Lead Designer & Developer</p>
 </div>
 <div>
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-2">Year</h4>
 <p className="text-[#dac5a7]">2026</p>
 </div>
 <div>
 <a href="#" className="inline-flex items-center justify-center w-full h-12 bg-white/5 hover:bg-gold text-[#dac5a7] hover:text-black uppercase tracking-widest text-xs transition-colors rounded-sm border border-white/10 hover:border-gold">Visit Live Site ↗</a>
 </div>
 </div>
 </div>

 <div className="aspect-[3/4] md:aspect-video bg-[#0e0e0e] border border-white/5 rounded-sm overflow-hidden relative flex items-center justify-center mb-12">
 <div className="text-[#dac5a7]/20 text-2xl">Mobile/Tablet Mockups</div>
 </div>
 <div className="aspect-video bg-[#0e0e0e] border border-white/5 rounded-sm overflow-hidden relative flex items-center justify-center">
 <div className="text-[#dac5a7]/20 text-2xl">Final Screens</div>
 </div>
 
 </div>
 </article>
 );
}
