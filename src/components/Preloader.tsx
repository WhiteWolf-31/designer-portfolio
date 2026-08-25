import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    // Smooth 60fps Countup from 0% to 100%
    let start: number | null = null;
    const duration = 2400; // 2.4 seconds countup (slower)

    const animateCount = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const current = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(current);

      if (elapsed < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setTimeout(() => { // Slight pause before slide-up
          setLoading(false);
          document.body.style.overflow = "";
        }, 400);
      }
    };

    const animId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  const easeCurve = [0.76, 0, 0.24, 1] as const;

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} Z`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 Z`;

  const curveVariants = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.6, ease: easeCurve },
    },
  };

  const slideUpVariants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 1.6, ease: easeCurve },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          style={{ height: dimension.height > 0 ? dimension.height : "100dvh" }}
          className="fixed inset-x-0 top-0 z-[9999] w-screen overflow-hidden bg-[#0e0e10]"
        >
          {/* Centred Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-40 w-auto object-contain sm:h-52 md:h-64"
            />
          </div>

          {/* Bottom-Right Large CountUp Percentage Number */}
          <div className="absolute bottom-6 right-6 z-20 sm:bottom-10 sm:right-10">
            <span className="font-display text-5xl font-extrabold tracking-tight text-[#D3F64A] sm:text-7xl md:text-8xl">
              {progress}%
            </span>
          </div>

          {/* Curved SVG Bottom Arch */}
          {dimension.width > 0 && (
            <svg
              className="absolute top-0 pointer-events-none fill-[#0e0e10]"
              style={{ width: dimension.width, height: dimension.height + 300 }}
            >
              <motion.path
                variants={curveVariants}
                initial="initial"
                exit="exit"
              />
            </svg>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
