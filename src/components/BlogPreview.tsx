import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
 { id: 'framer-stunning-website', title: 'How to Build a Stunning Website with Framer', date: 'JUL 29, 2026', category: 'BRANDING', excerpt: 'Learn how to create an impressive website using Framer with our step-by-step guide.' },
 { id: 'website-elements-engagement', title: '10 website elements for maximum user engagement', date: 'JUL 25, 2026', category: 'WEB DESIGN', excerpt: '10 website elements to engage users, from intuitive navigation to compelling visuals' },
 { id: 'content-driving-traffic', title: 'The importance of content in driving website traffic', date: 'JUL 13, 2026', category: 'BRANDING', excerpt: 'Quality content is king. Learn how to create valuable, SEO-optimized content.' }
];

export default function BlogPreview() {
 return (
 <section className="py-32 bg-[#0e0e0e] border-t border-white/5" id="blog">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center mb-20 animate-fade-in-up">
 <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4">Blog</p>
 <h2 className=" text-4xl md:text-5xl font-medium mb-6 text-[#dac5a7] tracking-wide">
 Get the latest insights and tips on web design,<br className="hidden md:block"/> development, and SEO in our blog.
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {ARTICLES.map((article) => (
 <Link href={`/blog/${article.id}`} key={article.id} className="group block h-full">
 <div className="bg-[#0e0e0e] border border-white/5 rounded-sm overflow-hidden h-full flex flex-col hover:border-gold/30 transition-colors">
 <div className="aspect-[16/9] bg-[#0e0e0e] overflow-hidden relative border-b border-white/5">
 <div className="absolute inset-0 flex items-center justify-center text-[#dac5a7]/20 group-hover:scale-105 transition-transform duration-700">
 Image Placeholder
 </div>
 </div>
 <div className="p-8 flex flex-col flex-grow relative">
 <p className="text-[10px] uppercase tracking-widest text-[#dac5a7] mb-4">{article.date}</p>
 <h3 className=" text-2xl text-[#dac5a7] mb-4 group-hover:text-[#dac5a7] transition-colors">{article.title}</h3>
 <p className="text-sm text-[#dac5a7] leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
 <div className="flex items-center justify-between mt-auto">
 <span className="text-[10px] uppercase tracking-widest text-[#dac5a7] border border-gold/30 px-3 py-1 rounded-sm group-hover:bg-gold/10 transition-colors">{article.category}</span>
 <ArrowUpRight size={16} className="text-[#dac5a7] group-hover:text-[#dac5a7] transition-colors" />
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>

 </div>
 </section>
 );
}
