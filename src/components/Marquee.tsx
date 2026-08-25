import { motion } from "framer-motion";

const marqueeItems = [
  "Graphic Design",
  "Branding",
  "UI/UX Design",
  "Multimedia",
  "Visual Storytelling",
];

export function Marquee() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="flex w-full overflow-hidden bg-accent py-4"
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mx-6 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground sm:mx-10 sm:text-base md:text-lg">
                  {item}
                </span>
                <span className="text-2xl font-bold text-accent-foreground md:text-3xl">
                  *
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
