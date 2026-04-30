'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Grid } from 'lucide-react';

const IMAGES = [
  "/images/IMG_1254.webp",
  "/images/IMG_1256.webp",
  "/images/IMG_1279.webp",
  "/images/IMG_1280.webp",
  "/images/IMG_1290.webp",
  "/images/camara.webp",
  "/images/tere.webp"
];

const TEXTS = [
  { label: "Glamour", paragraph: "Capturando la esencia del momento a través de una lente que busca la elegancia y la sofisticación en cada detalle." },
  { label: "Fashion", paragraph: "Explorando nuevas fronteras en la fotografía de moda, donde cada sombra y cada luz cuentan una historia única." },
  { label: "Portrait", paragraph: "La belleza se encuentra en la simplicidad y en la fuerza de la mirada. Un recorrido visual por la estética contemporánea." },
  { label: "Studio", paragraph: "Técnica y creatividad se unen en el estudio para crear composiciones que trascienden lo cotidiano." },
  { label: "Editorial", paragraph: "Narrativas visuales que capturan la atención y comunican mensajes profundos a través de la imagen." },
  { label: "Cámara", paragraph: "El equipo es solo una extensión del ojo del fotógrafo, capturando momentos que durarán para siempre." },
  { label: "Legacy", paragraph: "Un tributo a la trayectoria y al estilo único que define cada una de nuestras capturas." }
];

export default function WorksV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [index, setIndex] = useState(0);
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, IMAGES.length - 1]);

  useEffect(() => {
    return scrollProgress.on("change", (latest) => {
      const newIndex = Math.floor(latest);
      if (newIndex !== index && newIndex < IMAGES.length - 1) {
        setIndex(newIndex);
      }
    });
  }, [scrollProgress, index]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#0e0e0e]">
      {/* Sticky container adjusted to align content more towards the center/bottom if needed */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-[5vh]">

        {/* Layout Wrapper */}
        <div className="w-full max-w-[1800px] flex flex-col lg:flex-row justify-center items-center lg:items-start lg:px-[86px] relative">

          {/* Left Side: Column 1 */}
          <div className="flex flex-col z-10 w-full lg:w-auto">

            {/* Main Image Container: 60vh Height, 3:2 Aspect Ratio, with mask to blend with background */}
            <div
              className="relative h-[60vh] aspect-[3/2] overflow-hidden group bg-white/5 shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)',
                maskComposite: 'intersect',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)',
                WebkitMaskComposite: 'source-in'
              }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={`main-${index}`}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.32, 0, 0.67, 0] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={IMAGES[index]}
                    alt={`Main Work ${index}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Gap Container: Balanced Gap */}
          <div className="hidden lg:block lg:min-w-[80px] lg:w-[150px] xl:w-[350px]" />

          {/* Right Side: Column 2 */}
          <div className="flex flex-col lg:mr-[75px] w-full lg:w-auto mt-10 lg:mt-[42vh] px-4 lg:px-0">

            {/* Category Label */}
            <div className="h-6  overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`label-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[#dac5a7] text-xs uppercase tracking-[0.15em] font-medium font-chillax absolute"
                >
                  {TEXTS[index]?.label}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Paragraph Block: Moved from Column 1 */}
            <div className="w-full max-w-[270px] min-h-[100px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`para-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[#dac5a7] text-[0.90rem] font-regular leading-relaxed font-satoshi"
                >
                  {TEXTS[index]?.paragraph}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Dots in Navigation Position */}
            <div className="flex items-center gap-2 mt-4">
              {IMAGES.map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-[#dac5a7]' : 'w-2 bg-[#dac5a7]/20'}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
