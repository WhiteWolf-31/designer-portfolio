import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "@/data/portfolioData";
import { EASE } from "@/lib/motion-presets";

const OCCUPATIONS = [
  "Creative Designer",
  "Graphic Designer",
  "Content Creator",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % OCCUPATIONS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex w-full flex-1 flex-col items-center justify-between overflow-hidden px-4 pt-28 pb-0 sm:px-6 md:px-8 lg:pt-32 lg:pb-0"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Header & 2-Line Headline */}
      <div className="z-10 flex flex-col items-center text-center px-2">
        {/* Hello badge */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2 font-display text-xs font-medium tracking-wider text-muted-foreground sm:text-sm md:text-base"
        >
          Hi there
        </motion.p>

        {/* 2-Line Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-5xl text-center font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          <span>I&apos;m <span className="text-accent">{personal.firstName}</span>,</span>
          <br />

          {/* Cycling occupation line */}
          <span className="relative mt-1 block overflow-hidden" style={{ minHeight: "1.2em" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block font-display text-white"
              >
                {OCCUPATIONS[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
      </div>

      {/* Accent Backdrop - True half-circle arch, flush to bottom, no glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        className="absolute bottom-0 left-1/2 z-0 h-[38%] w-[260px] -translate-x-1/2 rounded-t-full rounded-b-none bg-accent sm:w-[340px] md:h-[40%] md:w-[420px] xl:h-[40%] xl:w-[480px] 2xl:w-[520px]"
      />

      {/* Center & Bottom Image Stage */}
      <div className="relative z-10 flex min-h-0 w-full flex-1 items-end justify-center mt-12 sm:mt-16 xl:mt-0">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="relative z-10 flex justify-center max-h-[58vh] max-w-[320px] sm:max-w-[400px] md:max-w-[480px] xl:max-h-[64vh] xl:max-w-[560px] 2xl:max-w-[620px]"
        >
          <img
            src="/hero.png"
            alt={personal.name}
            className="h-auto max-h-full w-full object-cover grayscale-[0.05]"
          />

          {/* Overlay Hire Me Button at Image Bottom */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => scrollToId("contact")}
            className="absolute bottom-4 left-1/2 z-30 w-[80%] -translate-x-1/2 whitespace-nowrap rounded-full border-5 border-white bg-accent px-9 py-3 font-display text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-2xl shadow-accent/50 transition-all hover:scale-105 hover:bg-accent/90 sm:bottom-6 sm:w-[70%] sm:px-11 sm:py-3.5 sm:text-sm xl:w-auto"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
