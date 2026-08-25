import { motion } from "framer-motion";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineSwatch,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { additionalSkills } from "@/data/portfolioData";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion-presets";
import { SectionHeading } from "./SectionHeading";

// Skill cards with Graphic Design as 3rd card, short descriptions, and custom icons
const skillsData = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "User-centered interfaces, mobile app experiences, and interactive design systems.",
    image: "/images/skills/ui_ux_mockup.png",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    number: "02",
    title: "Branding",
    description: "Brand identity guidelines, logo design, visual language, and typography systems.",
    image: "/images/skills/branding_mockup.png",
    icon: HiOutlinePaintBrush,
    isFeatured: true, // Theme highlighted card (middle card)
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Visual communications, marketing graphics, posters, and digital asset design.",
    image: "/images/skills/graphic_design_mockup.png",
    icon: HiOutlineSwatch,
  },
  {
    number: "04",
    title: "Multimedia",
    description: "Motion graphics, 3D visual assets, video editing timelines, and visual storytelling.",
    image: "/images/skills/multimedia_mockup.png",
    icon: HiOutlineVideoCamera,
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-12 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          subtitle="SKILLS"
          title="MY EXPERTISE"
          description="A curated collection of my technical and creative skills spanning graphic design, branding, UI/UX and multimedia."
          centered
        />

        {/* Skill Cards Grid (Borderless cards matching reference layout) */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {skillsData.map((card) => {
            const isFeatured = !!card.isFeatured;
            const Icon = card.icon;

            return (
              <motion.article
                key={card.number}
                variants={fadeUp}
                className={`relative flex flex-col justify-between rounded-[2.25rem] p-6 transition-none ${
                  isFeatured
                    ? "bg-[#D3F64A] text-neutral-950 shadow-2xl"
                    : "bg-[#1e1e21] text-white shadow-lg"
                }`}
              >
                {/* Header Title & Short Description (Left Aligned) */}
                <div className="px-1 pt-1 pb-3">
                  <h3
                    className={`font-display text-xl sm:text-2xl font-medium tracking-tight text-left ${
                      isFeatured ? "text-neutral-950 font-semibold" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed text-left ${
                      isFeatured ? "text-neutral-900/90 font-medium" : "text-neutral-400"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>


                {/* Card Deck Mockup Container */}
                <div className="relative w-full mt-auto">
                  {/* Layer 1 (Back Tab) */}
                  <div
                    className={`h-3.5 w-[82%] mx-auto rounded-t-xl ${
                      isFeatured ? "bg-neutral-900/20" : "bg-[#424246]"
                    }`}
                  />

                  {/* Layer 2 (Middle Tab) */}
                  <div
                    className={`h-3.5 w-[90%] mx-auto rounded-t-xl -mt-2 relative z-10 ${
                      isFeatured ? "bg-neutral-900/35" : "bg-[#5c5c60]"
                    }`}
                  />

                  {/* Layer 3 (Front Mockup Box with Concave Cutout Notch) */}
                  <div
                    className="relative z-20 w-full h-[250px] sm:h-[280px] rounded-t-2xl rounded-bl-2xl overflow-hidden -mt-2 shadow-md bg-neutral-200"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle at 100% 100%, transparent 78px, black 79px)",
                      maskImage:
                        "radial-gradient(circle at 100% 100%, transparent 78px, black 79px)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>

                  {/* Bottom Right Floating Circular Skill Icon Button */}
                  <div
                    className={`absolute bottom-0 right-0 z-30 flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${
                      isFeatured
                        ? "bg-[#111113] text-[#D3F64A]"
                        : "bg-[#D3F64A] text-neutral-950"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Additional Skills Pills */}
        <motion.ul
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap justify-center gap-2.5"
        >
          {additionalSkills.map((skill) => (
            <motion.li
              key={skill}
              variants={fadeUp}
              className="rounded-full bg-white/[0.04] px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-neutral-400"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

