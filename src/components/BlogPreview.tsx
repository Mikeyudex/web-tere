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
                    <h2 className="text-3xl md:text-6xl lg:text-8xl text-[#dac5a7] mb-4 font-satoshi font-light">Blog</h2>
                    <p className="text-xl mb-6 text-[#ae9e86] font-chillax font-light" style={{ fontWeight: '400' }}>
                        Obtén las últimas novedades sobre diseño web,<br className="hidden md:block" /> desarrollo y SEO en mi blog.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article) => (
                        <Link href={`/blog/${article.id}`} key={article.id} className="group block h-full">
                            <div className="bg-[#1c1a18] border border-white/5 rounded-sm overflow-hidden h-full flex flex-col hover:border-gold/30 transition-colors">
                                <div className="aspect-[16/9] bg-[#0e0e0e] overflow-hidden relative border-b border-white/5">
                                    <div className="absolute inset-0 flex items-center justify-center text-[#dac5a7]/20 group-hover:scale-105 transition-transform duration-700">
                                        <img src="https://framerusercontent.com/images/mt5235VjEvQgNy263szLqR2xMo.webp?scale-down-to=512" alt="" />
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <p className="text-[14px] uppercase tracking-widest text-[#786d5d] mb-4 font-satoshi" style={{ fontWeight: '400' }}>{article.date}</p>
                                    <h3 className="font-satoshi font-light text-2xl text-[#dac5a7] mb-4 group-hover:text-[#dac5a7] transition-colors">{article.title}</h3>
                                    <p className="text-md text-[#dac5a7] leading-relaxed mb-6 flex-grow font-chillax" style={{ fontWeight: '300' }}>{article.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="font-satoshi text-[12px] uppercase tracking-widest text-[#dac5a7] border border-gold/30 px-3 py-1 group-hover:bg-gold/10 transition-colors bg-[#282621]">{article.category}</span>
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
