import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { SiFiverr, SiMedium } from "react-icons/si";
import { personal, navItems } from "@/data/portfolioData";
import { fadeUp, viewportOnce } from "@/lib/motion-presets";

function scrollToId(id: string) {
  if (id === "hero" || id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  const allNavItems = [{ label: "Home", id: "hero" }, ...navItems];

  return (
    <footer className="relative rounded-t-3xl border-t border-border/40 bg-surface/20 px-4 pt-12 pb-4 shadow-2xl sm:rounded-t-[3.5rem] sm:px-8 sm:pt-16 md:pt-20 lg:pt-20 sm:pb-6">

      {/* ── Overlayed Logo Badge ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[#0e0e10] ring-2 ring-border sm:-top-12 sm:h-20 sm:w-20 md:-top-14 md:h-24 md:w-24 lg:-top-16 lg:h-28 lg:w-28"
      >
        <img src="/logo2.png" alt="Logo" className="absolute top-1/2 left-1/2 mt-2 h-24 w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-28 md:h-32 lg:h-36" />
      </button>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between"
      >
        {/* Description below the overlayed logo */}
        <p className="mb-6 max-w-xs text-center font-sans text-xs leading-relaxed text-muted-foreground sm:max-w-sm sm:text-sm">
          {personal.statement}
        </p>

        {/* Top Centered Navigation Links with Pill Design */}
        <nav className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {allNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="rounded-full border border-border/60 bg-surface/30 px-4 py-1.5 font-display text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground sm:text-xs"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Simple Animated Watermark Typography */}
        <div className="my-5 w-full overflow-hidden text-center px-1 sm:my-6">
          <h2 className="watermark-spotlight w-full font-display text-[7.8vw] font-black uppercase leading-none tracking-tighter select-none whitespace-nowrap sm:text-[8.8vw] md:text-[9.5vw] lg:text-[6.8vw] xl:text-[7.5vw]">
            {personal.firstName}
          </h2>
        </div>

        {/* Bottom Row: Design Credit & Social Icons */}
        <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          {/* Left: Design By */}
          <p className="text-center tracking-wide sm:text-left">
            &copy; {new Date().getFullYear()} Design by{" "}
            <span className="font-medium text-accent">
              {personal.name}
            </span>
            . All rights reserved.
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center justify-center gap-3 sm:justify-end">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="icon-btn transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="icon-btn transition-colors hover:border-accent hover:text-accent"
            >
              <FiInstagram className="h-4 w-4" />
            </a>
            <a
              href={personal.medium}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium Profile"
              className="icon-btn transition-colors hover:border-accent hover:text-accent"
            >
              <SiMedium className="h-4 w-4" />
            </a>
            <a
              href={personal.fiverr}
              target="_blank"
              rel="noreferrer"
              aria-label="Fiverr Profile"
              className="icon-btn transition-colors hover:border-accent hover:text-accent"
            >
              <SiFiverr className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="icon-btn transition-colors hover:border-accent hover:text-accent"
            >
              <FiMail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
