"use client";

import Link from 'next/link';

export default function Footer() {
 return (
 <footer className="bg-[#0e0e0e] border-t border-white/5 pt-24 pb-12 mt-32">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
 
 <div className="col-span-1">
 <Link href="/" className=" text-3xl font-bold text-[#dac5a7] mb-6 block">
 arik<span className="text-[#dac5a7]">.</span>
 </Link>
 <div className="space-y-4">
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Instagram</p>
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Twitter</p>
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Dribbble</p>
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Behance</p>
 </div>
 </div>
 
 <div className="col-span-1">
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-6">Pages</h4>
 <div className="space-y-4">
 <Link href="/" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Home</Link>
 <Link href="#services" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Services</Link>
 <Link href="#about" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">About</Link>
 <Link href="#pricing" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Pricing</Link>
 <Link href="#contact" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Contact</Link>
 </div>
 </div>

 <div className="col-span-1">
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-6">CMS</h4>
 <div className="space-y-4">
 <Link href="#work" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Work</Link>
 <Link href="#work" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Work Single</Link>
 <Link href="#blog" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Blog</Link>
 <Link href="#blog" className="block text-sm text-[#dac5a7] hover:text-[#dac5a7] uppercase tracking-widest transition-colors">Blog Single</Link>
 </div>
 </div>

 <div className="col-span-1">
 <h4 className="text-xs uppercase tracking-widest text-[#dac5a7] mb-6">Utility Pages</h4>
 <div className="space-y-4">
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Styleguide</p>
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">404 Error Page</p>
 <p className="text-sm text-[#dac5a7] uppercase tracking-widest hover:text-[#dac5a7] cursor-pointer transition-colors">Licensing</p>
 </div>
 </div>

 </div>

 <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
 <p className="text-xs text-[#dac5a7] mb-4 md:mb-0">
 © Made by <span className="text-[#dac5a7] border-b border-gray-600 pb-0.5">Yudex Labs</span>
 </p>
 <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs uppercase tracking-widest text-[#dac5a7] hover:text-[#dac5a7] transition-colors flex items-center gap-2">
 To Top <span className="text-lg">↑</span>
 </button>
 </div>
 </div>
 </footer>
 );
}
