import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion-presets";

export function SectionHeading({
  index,
  title,
  subtitle,
  description,
  centered = false,
  split = false,
  className = "",
}: {
  index?: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  split?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`relative mb-8 sm:mb-10 md:mb-12 lg:mb-14 ${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
    >
      {/* Tilted Neon Accent Badge */}
      {(index || subtitle) && (
        <div className="mb-2.5 sm:mb-3">
          <span className="inline-block origin-bottom-left -rotate-3 rounded bg-accent px-3 py-1 font-display text-[0.65rem] font-black uppercase tracking-wider text-accent-foreground shadow-lg transition-transform duration-300 hover:rotate-0 sm:px-3.5 sm:text-xs md:px-4 md:py-1.5 md:text-sm">
            {index ? `${index} • ` : ""}{subtitle || title}
          </span>
        </div>
      )}

      {/* Title + optional split description */}
      {split && description ? (
        <div className="flex flex-col items-start gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h2>
          <p className="max-w-full text-sm leading-relaxed text-muted-foreground md:max-w-xs md:shrink-0 md:text-right lg:max-w-sm">
            {description}
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              {description}
            </p>
          )}
        </>
      )}
    </motion.div>
  );
}
