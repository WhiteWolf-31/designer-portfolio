import { motion } from "framer-motion";
import { experience } from "@/data/portfolioData";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion-presets";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          subtitle="WORK HISTORY"
          title="EXPERIENCE"
          description="A timeline of roles and projects where I've applied my creative skills to deliver impactful work."
          centered
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 space-y-5"
        >
          {experience.map((job) => (
            <motion.article
              key={job.number}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-[#0e0e10] p-6 sm:p-8"
            >
              {/* Top Row: Logo Icon + Title/Company + Year Pill */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: Logo + Role Info */}
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden p-2">
                    <img src="/primeone-global.svg" alt="Prime One Global" className="h-full w-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-thin text-white sm:text-2xl">
                      {job.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-medium text-accent">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Right: Year Pill */}
                <span className="shrink-0 rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-1.5 font-sans text-xs font-medium text-neutral-200 hidden sm:inline-block">
                  {job.period}
                </span>
              </div>

              {/* Mobile: Year Pill below header */}
              <span className="mt-3 inline-block rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-1.5 font-sans text-xs font-medium text-neutral-200 sm:hidden">
                {job.period}
              </span>

              {/* Skill Tag Pills */}
              {job.points.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-normal text-neutral-300 font-sans"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Role Description */}
              {job.description ? (
                <p className="mt-5 pt-5 border-t border-white/[0.08] text-xs sm:text-sm leading-relaxed text-neutral-400 font-sans">
                  {job.description}
                </p>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
