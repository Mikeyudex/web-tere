"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const ACHIEVEMENTS = [
  { label: 'PROJECTS DONE', value: '150+' },
  { label: 'HAPPY CLIENTS', value: '300+' },
  { label: 'SUCCESS RATE', value: '100%' },
  { label: 'FOLLOWERS', value: '100k' },
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const match = value.match(/([0-9]+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const animatedText = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const animation = animate(motionValue, targetNumber, {
        duration: 2,
        ease: "easeOut",
      });
      return () => animation.stop();
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, targetNumber]);

  if (!match) return <span>{value}</span>;

  return <motion.span ref={ref}>{animatedText}</motion.span>;
}

export default function Achievements() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#0e0e0e]" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12 md:gap-4 text-center">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center justify-center p-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className=" text-4xl md:text-5xl font-light text-[#dac5a7] mb-2 group-hover:text-[#dac5a7] transition-colors font-satoshi">
                <Counter value={item.value} />
              </h3>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#dac5a7] font-satoshi">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
