import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiEnvelope, HiPhone } from "react-icons/hi2";
import { toast } from "sonner";
import { personal } from "@/data/portfolioData";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion-presets";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/maewgwrv", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      toast.success("Message sent successfully", {
        duration: 5000,
      });
    } catch (error) {
      console.error("Contact form submission failed", error);
      toast.error("Something went wrong. Please send me an email directly.", {
        description: personal.email,
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 pt-12 pb-24 sm:px-8 lg:pt-20 lg:pb-36">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          subtitle="GET IN TOUCH"
          title="CONTACT"
          description="Have a project in mind? Let's collaborate and bring your creative vision to life."
          split
        />

        <div className="mt-14 grid grid-cols-1 gap-12 xl:grid-cols-[1fr_0.7fr] xl:gap-20">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="min-w-0 space-y-6"
          >
            {[
              { id: "name", label: "Your Name", type: "text" },
              { id: "email", label: "Your Email", type: "email" },
            ].map((field) => (
              <motion.div key={field.id} variants={fadeUp}>
                <label
                  htmlFor={field.id}
                  className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  className="field"
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <label
                htmlFor="message"
                className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground"
              >
                Your Message
              </label>
              <textarea id="message" name="message" rows={4} required className="field resize-none" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D3F64A] px-8 py-4 font-display text-xs font-bold uppercase tracking-widest text-neutral-950 shadow-xl transition-all hover:bg-[#c2e538] hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                <HiArrowRight
                  aria-hidden
                  className="h-4 w-4"
                />
              </button>
            </motion.div>
          </motion.form>

          {/* Right column: icon cards + map */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="min-w-0 flex flex-col gap-4"
          >
            {/* Email & Phone icon cards */}
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/50 group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-accent font-display">
                    {item.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm text-foreground font-sans">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Google Maps embed — Vavuniya, Sri Lanka */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <iframe
                title="Vavuniya, Sri Lanka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63145.09810437535!2d80.46577573935547!3d8.751406369094013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb53fd41dea677%3A0xd7d6c3e63b03bfbc!2sVavuniya%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
