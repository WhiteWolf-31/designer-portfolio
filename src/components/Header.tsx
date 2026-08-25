import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/portfolioData";
import { EASE } from "@/lib/motion-presets";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 260 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6"
      >
        <nav
          aria-label="Main"
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-[2rem] border border-border bg-surface/80 px-4 py-2 shadow-xl shadow-black/5 backdrop-blur-2xl sm:px-8"
        >
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 items-center justify-start sm:h-11"
              aria-label="Back to top"
            >
              <img src="/logo2.png" alt="Logo" className="-ml-4 mt-1 h-20 w-auto shrink-0 max-w-none object-contain sm:-ml-8 sm:mt-2 sm:h-24 md:-ml-12 md:mt-3 md:h-32 lg:-ml-6 lg:mt-1 lg:h-24" />
            </button>
          </div>

          {/* Center: Navlinks */}
          <div className="flex flex-[2] justify-center">
            <ul className="hidden items-center gap-2 xl:flex" onMouseLeave={() => setHovered("")}>
              {navItems
                .filter((item) => item.id !== "contact")
                .map((item) => (
                  <li key={item.id} onMouseEnter={() => setHovered(item.id)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => go(item.id)}
                      className={`relative z-10 flex flex-col items-center justify-center rounded-2xl px-5 py-2.5 transition-colors duration-300 ${
                        active === item.id
                          ? "text-white font-bold"
                          : "text-neutral-400 font-medium hover:text-white"
                      }`}
                    >
                      <span className="relative z-10 text-[0.7rem] font-medium uppercase tracking-[0.18em]">
                        {item.label}
                      </span>

                      {active === item.id && (
                        <>
                          <motion.div
                            layoutId="nav-active-bg"
                            className="absolute inset-0 -z-10 rounded-2xl bg-white/[0.05]"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                          <motion.div
                            layoutId="nav-active-indicator"
                            className="absolute bottom-1.5 h-[3px] w-5 rounded-full bg-accent"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                        </>
                      )}

                      {hovered === item.id && active !== item.id && (
                        <motion.div
                          layoutId="nav-hover-bg"
                          className="absolute inset-0 -z-10 rounded-2xl bg-white/[0.02]"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </motion.button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Right: Contact CTA & Hamburger */}
          <div className="flex flex-1 justify-end">
            <button
              onClick={() => go("contact")}
              className="group hidden xl:inline-block rotate-[5deg] origin-center rounded-[5px] bg-accent pb-[3px] shadow-[0_2px_0_#D3F64A] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-[5px] active:pb-0"
            >
              <span className="block rounded-[5px] border-2 border-accent bg-[#0e0e10] px-6 py-2 font-display text-xs font-bold uppercase tracking-wider text-accent">
                Contact
              </span>
            </button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/[0.05] shadow-sm transition-all hover:bg-white/10 xl:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="block h-[2px] w-5 rounded-full bg-accent"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="block h-[2px] w-5 rounded-full bg-accent"
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-x-4 top-[88px] z-40 flex max-h-[calc(100dvh-110px)] flex-col overflow-y-auto overflow-x-hidden rounded-3xl border border-white/10 bg-[#121214]/95 p-4 shadow-2xl backdrop-blur-2xl xl:hidden"
          >
            <ul className="flex flex-col space-y-2">
              {navItems
                .filter((item) => item.id !== "contact")
                .map((item, i) => (
                  <li key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i + 0.05, type: "spring", stiffness: 350, damping: 30 }}
                    >
                      <button
                        onClick={() => go(item.id)}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left font-display text-lg uppercase tracking-widest transition-all hover:bg-white/5 hover:text-accent ${
                          active === item.id ? "text-accent" : "text-foreground"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className={`text-xs ${active === item.id ? "text-accent" : "text-muted-foreground opacity-50"}`}>
                          0{i + 1}
                        </span>
                      </button>
                    </motion.div>
                  </li>
                ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: EASE }}
              className="mt-6 flex justify-center"
            >
              <button
                onClick={() => go("contact")}
                className="group w-full rounded-xl border-2 border-accent bg-[#0e0e10] p-1.5 transition-transform active:scale-[0.98]"
              >
                <span className="flex w-full -translate-y-2 items-center justify-center rounded-lg border-2 border-accent bg-[#0e0e10] py-3.5 font-display text-xs font-bold uppercase tracking-wider text-accent shadow-[0_6px_0_0_#D3F64A] transition-all duration-300 group-hover:translate-y-0 group-hover:shadow-none group-active:translate-y-0 group-active:shadow-none">
                  Contact
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
