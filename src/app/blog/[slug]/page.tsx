import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 return {
 title: `${slug.replace(/-/g, ' ').toUpperCase()} | Arik Blog`,
 };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;

 return (
 <article className="py-32">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <Link href="/#blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#dac5a7] hover:text-[#dac5a7] transition-colors mb-12">
 <ArrowLeft size={16} /> Back to Blog
 </Link>
 
 <div className="mb-12 animate-fade-in-up">
 <div className="flex items-center justify-between mb-8">
 <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] border border-gold/30 px-3 py-1 rounded-sm">Featured Post</span>
 <span className="text-xs uppercase tracking-widest text-[#dac5a7]">JUL 29, 2026</span>
 </div>
 
 <h1 className=" text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-[#dac5a7] tracking-wide !leading-tight capitalize">
 {slug.replace(/-/g, ' ')}
 </h1>
 
 <div className="flex items-center gap-4 border-t border-b border-white/5 py-4 my-8">
 <div className="w-10 h-10 rounded-full bg-[#0e0e0e] border border-white/10 uppercase tracking-widest flex justify-center items-center text-xs text-[#dac5a7]">
 AA
 </div>
 <div>
 <p className="text-[#dac5a7] text-sm font-medium">Arik Andersson</p>
 <p className="text-[#dac5a7] text-xs">Web Designer & Developer</p>
 </div>
 </div>
 </div>

 <div className="aspect-[16/9] bg-[#0e0e0e] border border-white/10 rounded-sm mb-16 overflow-hidden relative flex items-center justify-center animate-fade-in">
 <div className="text-[#dac5a7]/20 text-2xl">Featured Image</div>
 </div>
 
 <div className="prose prose-invert prose-lg max-w-none text-[#dac5a7]">
 <p className="text-xl text-[#dac5a7] leading-relaxed mb-8">
 In today's highly competitive digital landscape, a stunning website is no longer a luxury—it's an absolute necessity. Whether you are aiming to capture new audiences or build an unforgettable brand presence, the tools you use matter.
 </p>
 
 <h2 className="text-2xl text-[#dac5a7] mt-12 mb-6">Introduction to the Topic</h2>
 <p>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 </p>
 
 <blockquote className="border-l-2 border-gold pl-6 py-2 my-10 italic text-xl text-[#dac5a7]/90">
 "Design is not just what it looks like and feels like. Design is how it works."
 </blockquote>
 
 <h2 className="text-2xl text-[#dac5a7] mt-12 mb-6">Key Takeaways</h2>
 <ul className="list-disc pl-6 space-y-4 marker:text-[#dac5a7]">
 <li>First impression is crucial for user retention metric.</li>
 <li>Typography determines how your content is received.</li>
 <li>Animations should serve a purpose, not just decorate.</li>
 </ul>
 
 <p className="mt-8">
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
 </p>
 </div>
 
 </div>
 </article>
 );
}
