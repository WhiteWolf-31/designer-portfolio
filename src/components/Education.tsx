import { motion } from "framer-motion";
import { education } from "@/data/portfolioData";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion-presets";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          subtitle="MY JOURNEY"
          title="EDUCATION"
          description="My academic background and the institutions that shaped my creative foundation."
          split
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 space-y-5"
        >
          {education.map((item) => (
            <motion.article
              key={item.school}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-[#0e0e10] p-6 sm:p-8"
            >
              {/* Top Row: Logo Icon + Title/Award + Year Pill */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: Icon + Education Info */}
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-accent">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.94 49.94 0 0 0-9.902 3.912l-.003.002c-.874.494-1.986.51-2.868.046a49.89 49.89 0 0 0-5.6-2.643v4.626c0 1.598-.824 3.077-2.148 3.946a.75.75 0 0 1-.842-1.246c.866-.585 1.49-1.558 1.49-2.697V9.75c0-.13.013-.257.038-.382h-.037a.75.75 0 0 1-.231-1.337A60.65 60.65 0 0 1 11.7 2.805Z"></path><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c-.22.595-.395 1.24-.522 1.905a49.27 49.27 0 0 0-7.144 3.123 3.031 3.031 0 0 1-2.12.043 49.23 49.23 0 0 0-7.447-3.296 2.053 2.053 0 0 1-1.026-1.545c.29-.12.585-.234.882-.343a48.5 48.5 0 0 1 7.643 3.32.75.75 0 0 0 .57-.015l.001-.001Z"></path><path fillRule="evenodd" d="M12 22.5c-4.489 0-8.31-2.316-10.409-5.748a.75.75 0 0 1 1.258-.834 11.08 11.08 0 0 0 18.302 0 .75.75 0 1 1 1.258.834C20.31 20.184 16.489 22.5 12 22.5Z" clipRule="evenodd"></path></svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-thin text-white sm:text-2xl">
                      {item.school}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-medium text-accent">
                      {item.award}
                    </p>
                  </div>
                </div>

                {/* Right: Year Pill */}
                <span className="shrink-0 rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-1.5 font-sans text-xs font-medium text-neutral-200 hidden sm:inline-block">
                  {item.period}
                </span>
              </div>

              {/* Mobile: Year Pill below header */}
              <span className="mt-3 inline-block rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-1.5 font-sans text-xs font-medium text-neutral-200 sm:hidden">
                {item.period}
              </span>

              {/* Field Tag Pill */}
              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-normal text-neutral-300 font-sans">
                  {item.field}
                </li>
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
