import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { personal } from "@/data/portfolioData";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion-presets";
import { SectionHeading } from "./SectionHeading";

// CountUp Animated Counter Component (Optimized 60fps requestAnimationFrame)
function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let startTime: number | null = null;
    let animId: number;
    const duration = 1000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * target);
      setValue(currentVal);
      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 items-center gap-10 xl:grid-cols-12 xl:gap-14"
        >
          {/* CONTENT COLUMN: Heading, Description & Download CV Button */}
          <div className="flex flex-col gap-6 xl:col-span-7">
            <SectionHeading
              subtitle="WHO I'M"
              title="ABOUT ME"
              className="!mb-2"
            />

            <motion.div variants={fadeUp} className="space-y-4 text-neutral-300">
              <p className="text-base sm:text-lg leading-relaxed font-normal">
                I&apos;m a{" "}
                <span className="font-semibold text-white">Creative Designer</span> passionate about
                transforming complex ideas into{" "}
                <span className="font-semibold text-[#D3F64A]">meaningful visual experiences</span>. My expertise
                spans graphic design, branding,{" "}
                <span className="font-semibold text-white">UI/UX design</span> and multimedia production.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
                I combine strategic creative thinking with human-centered design principles to create digital and print assets that communicate clearly, engage audiences, and build lasting brand value.
              </p>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={fadeUp} className="pt-2">
              <a
                href="/Sutharshana%20Suriyakuamr_CV.pdf"
                download="Sutharshana Suriyakuamr_CV.pdf"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D3F64A] px-8 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-950 shadow-xl transition-all hover:bg-[#c2e538] hover:scale-105 active:scale-95 lg:w-auto"
              >
                <HiOutlineArrowDownTray className="h-5 w-5 stroke-[2.5]" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* IMAGE COLUMN: Organic Blob Frame with Experience Badge - Hidden on SM/MD, Visible on LG */}
          <motion.div variants={fadeUp} className="hidden xl:block relative mx-auto w-full max-w-sm xl:col-span-5 xl:max-w-none">
            <div className="relative z-10 isolate mx-auto w-full max-w-[340px] sm:max-w-[380px] py-2">
              {/* Pure Outline Line Design 1 (Dashed Accent Outline, No Fill) */}
              <div
                className="absolute -inset-4 z-0 border-2 border-dashed border-[#D3F64A]/70 pointer-events-none"
                style={{
                  borderRadius: "55% 45% 60% 40% / 40% 60% 45% 55%",
                  transform: "rotate(-8deg) scale(1.04)",
                }}
              />

              {/* Pure Outline Line Design 2 (Solid Accent Outline, No Fill) */}
              <div
                className="absolute -inset-2 z-0 border border-solid border-[#D3F64A]/40 pointer-events-none"
                style={{
                  borderRadius: "45% 55% 40% 60% / 60% 40% 55% 45%",
                  transform: "rotate(5deg) scale(1.02)",
                }}
              />

              {/* Unique Organic Blob Profile Image Container */}
              <div
                className="relative z-10 h-[300px] sm:h-[360px] w-full overflow-hidden shadow-2xl bg-neutral-900 border border-white/15"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              >
                <img
                  src="/about.png"
                  onError={(e) => {
                    e.currentTarget.src = "/hero.png";
                  }}
                  alt={personal.name}
                  className="h-full w-full object-cover object-center grayscale-[0.05]"
                />
              </div>

              {/* Bottom-Left Experience Floating Badge with CountUp Animation */}
              <div className="absolute -bottom-4 left-2 z-20 flex items-center gap-3.5 rounded-2xl bg-[#18181b] px-5 py-3 text-white shadow-2xl border border-white/10 transition-transform hover:scale-105 sm:-bottom-5 sm:left-4 sm:px-6 sm:py-3.5">
                <div className="flex items-center justify-center font-display text-2xl sm:text-3xl font-black text-[#D3F64A] tracking-tight">
                  <Counter target={5} suffix="+" />
                </div>
                <div className="h-7 w-[1px] bg-white/20" />
                <div className="flex flex-col text-left font-display">
                  <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight">
                    Years of<br />Experience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


