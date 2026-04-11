"use client";

import { MonitorSmartphone, Code, Camera, BookImage, ImagesIcon, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  { id: '01', title: 'Concepto & Estrategia', desc: 'Todo proyecto web exitoso comienza con una base sólida. Hablaremos de tus metas, tu público objetivo y la visión de tu marca para crear un plan estratégico.' },
  { id: '02', title: 'Diseño UI/UX', desc: 'Nuestro equipo traducirá la identidad de tu marca en una interfaz visualmente impactante y fácil de usar. Nos enfocamos en crear una navegación intuitiva y experiencias cautivadoras.' },
  { id: '03', title: 'Desarrollo', desc: 'Haciendo uso de las últimas tecnologías le damos vida al diseño. Garantizamos sitios web altamente responsivos, rápidos, escalables y optimizados para todos los dispositivos.' },
  { id: '04', title: 'Pruebas & Lanzamiento', desc: 'Unas pruebas rigurosas aseguran que todo funcione a la perfección. Una vez aprobado, lanzaremos tu sitio web asegurando una transición impecable y dándote soporte.' },
];

const SERVICES = [
  {
    title: 'Transformando tus ideas en realidad',
    subtitle: 'DISEÑO WEB',
    desc: 'Diseños a medida adaptados a la identidad única de tu marca. Creamos páginas visualmente atractivas que no solo lucen espectaculares, sino que también conectan con tu audiencia de forma efectiva.',
    icon: <MonitorSmartphone size={32} className="text-[#dac5a7]" />
  },
  {
    title: 'Creando webs de alto rendimiento',
    subtitle: 'DESARROLLO',
    desc: 'Desarrollo web robusto y escalable utilizando herramientas modernas como Next.js. Nos aseguramos de que tu sitio sea súper rápido, seguro y esté construido para manejar un crecimiento futuro.',
    icon: <Code size={32} className="text-[#dac5a7]" />
  },
  {
    title: 'Capturando momentos especiales',
    subtitle: 'FOTOGRAFÍA',
    desc: 'Sesiones fotográficas pensadas para capturar tu esencia o la de tu proyecto. Desde retratos hasta fotografías creativas que cuentan una historia.',
    icon: <Camera size={32} className="text-[#dac5a7]" />
  },
  {
    title: 'Cuadros fotográficos',
    subtitle: 'RETRATOS',
    desc: 'Fotografías seleccionadas y enmarcadas que transforman espacios. Cada pieza busca transmitir una atmósfera, una emoción o un momento detenido en el tiempo',
    icon: <BookImage size={32} className="text-[#dac5a7]" />
  },
  {
    title: 'Diseño de marca',
    subtitle: 'BRANDING',
    desc: 'Diseño de identidad visual para emprendedores y proyectos. Logos, branding y sistemas visuales minimalistas que comunican con claridad, personalidad y fuerza.',
    icon: <ImagesIcon size={32} className="text-[#dac5a7]" />
  },
  {
    title: 'Cajas sorpresa personalizadas',
    subtitle: 'CAJAS SORPRESA',
    desc: 'Cajas sorpresa personalizadas para todo tipo de ocasiones. Diseños únicos y creativos que se adaptan a tus necesidades.',
    icon: <Box size={32} className="text-[#dac5a7]" />
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#0e0e0e]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Process Section */}
        <div className="mb-40">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#dac5a7] mb-4 font-satoshi regular text-lg">El proceso</p>
            <p className="font-satoshi text-6xl md:text-[6rem] lg:text-[7rem] font-light mb-2 text-[#dac5a7]">
              Tu sitio Web
            </p>
            <p className="font-gambetta italic text-6xl md:text-[6rem] lg:text-[7rem] leading-none font-light mb-10 text-[#dac5a7]">
              en 4 pasos
            </p>
            <p className="text-[#dac5a7] text-lg max-w-lg mx-auto font-chillax " style={{ fontWeight: '400' }}>
              Un proceso estructurado y transparente para asegurar el éxito de tu proyecto de principio a fin.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto hidden md:block relative">
            {/* The vertical timeline line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            {STEPS.map((step, index) => {
              const isRight = index % 2 !== 0;
              return (
                <motion.div
                  key={step.id}
                  className={`flex items-center justify-between group ${isRight ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2.2, delay: 0.15, ease: "easeOut" }}
                >
                  <div className={`w-[45%] ${isRight ? 'text-left' : 'text-right'}`}>
                    <div className="inline-block p-8 border border-white/5 bg-[#0e0e0e] rounded-sm group-hover:border-gold/30 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_10_30px_-15px_rgba(218,197,167,0.1)]">
                      <h3 className=" text-2xl text-[#dac5a7] mb-4 transition-colors duration-500 ease-out font-satoshi">{step.title.toUpperCase()}</h3>
                      <p className="text-[#dac5a7] text-sm leading-relaxed font-chillax" style={{ fontWeight: '400' }}>{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 bg-[#0e0e0e] flex items-center justify-center text-[#dac5a7] text-sm group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-500 ease-out group-hover:scale-110">
                    {step.id}
                  </div>

                  <div className="w-[45%]"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Process Stacking */}
          <div className="space-y-6 md:hidden">
            {STEPS.map((step, index) => {
              const isRight = index % 2 !== 0;
              return (
                <motion.div
                  key={step.id}
                  className="p-8 border border-white/5 bg-[#0e0e0e] rounded-sm group overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_10px_30px_-15px_rgba(218,197,167,0.1)]"
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 2.0, delay: 0.15, ease: "easeOut" }}
                >
                  <div className="text-[#dac5a7] text-xl mb-4 opacity-50 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:text-gold">{step.id}</div>
                  <h3 className=" text-2xl text-[#dac5a7] mb-4 transition-colors duration-500 ease-out">{step.title}</h3>
                  <p className="text-[#dac5a7] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services Detail Section */}
        <div>
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              className="mb-12 border border-white/5 bg-[#1c1a18] rounded-sm overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, delay: 0.15, ease: "easeOut" }}
            >
              <div className="p-8 md:p-12 lg:p-16">
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[#b5a38b] mb-2 font-satoshi">{service.subtitle}</p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="md:w-1/2">
                    <h3 className="font-satoshi text-3xl md:text-4xl lg:text-5xl text-[#dac5a7] font-light !leading-tight group-hover:text-[#dac5a7] transition-colors mb-6">{service.title}</h3>
                    <p className="text-[#b5a38b] text-lg leading-relaxed mb-8 max-w-md font-chillax" style={{ fontWeight: '400' }}>{service.desc}</p>
                  </div>

                  <div className="md:w-[40%] bg-[#0e0e0e] border border-white/10 rounded-sm aspect-video flex items-center justify-center p-8 relative overflow-hidden">
                    <div className="z-10 bg-[#0e0e0e]/50 p-6 backdrop-blur-md rounded-full border border-white/10 group-hover:border-gold/50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-15px_rgba(218,197,167,0.4)]">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
