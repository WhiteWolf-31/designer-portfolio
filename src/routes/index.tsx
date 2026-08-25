import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Sutharshana Suriyakumar — Creative Designer";
const description =
  "Portfolio of Sutharshana Suriyakumar, a creative designer in Vavuniya, Sri Lanka, working across graphic design, branding, UI/UX and multimedia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />
      <main>
        <div className="flex flex-col xl:h-[100dvh]">
          <Hero />
          <Marquee />
        </div>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
