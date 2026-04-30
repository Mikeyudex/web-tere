"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Trabajos', href: '#work' },
  { label: 'Acerca de mí', href: '#about' },
  /* { label: 'Blog', href: '#blog' }, */
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      setIsTransitioning(true);

      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'instant' // native css behavior was removed anyway
          });

          const main = document.getElementById('main-content');
          if (main) {
            main.classList.remove('animate-page-slide-up');
            void main.offsetWidth; // trigger reflow
            main.classList.add('animate-page-slide-up');
          }
        }

        setIsTransitioning(false);
      }, 200); // Wait for fade to black
    }
  };

  return (
    <>
      {/* Overlay Transition */}
      <div
        className={`fixed inset-0 z-[100] bg-[#0e0e0e] transition-opacity duration-500 pointer-events-none ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
      />

      <header className="fixed top-4 w-full z-50 flex justify-center">
        <div className="bg-[#0e0e0e]/80 backdrop-blur-md border border-[#333333] px-8 py-4 flex items-center justify-between min-w-[300px] md:min-w-[600px]">
          {/* Logo */}
          <Link href="/" className="font-sans font-light text-2xl tracking-wider text-[#dac5a7] mr-12" onClick={(e) => handleNavClick(e, '#home')}>
            Tere Yudex<span className="text-[#dac5a7]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[#dac5a7]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative cursor-pointer text-[13px] uppercase tracking-[0.15em] transition-colors hover:text-[#dac5a7] font-sans"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#dac5a7] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-8 px-6 py-2 bg-[#dac5a7] hover:bg-[#e8d5b7] text-black transition-colors cursor-pointer text-[13px] uppercase tracking-[0.15em] font-medium font-sans"
            >
              Hablemos!
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#dac5a7] hover:text-[#dac5a7]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%] mt-4"
            >
              <div className="px-4 py-8 bg-[#0e0e0e]/95 backdrop-blur-xl border border-[#333333] space-y-6 flex flex-col items-center shadow-2xl rounded-lg">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    key={link.label}
                    href={link.href}
                    className="block cursor-pointer font-sans text-[13px] uppercase tracking-[0.2em] text-[#dac5a7] hover:text-[#dac5a7] py-1"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                  href="#contact"
                  className="block mt-4 cursor-pointer px-10 py-3 bg-[#dac5a7] text-black text-[13px] uppercase tracking-[0.2em] font-medium font-sans"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Hablemos!
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
