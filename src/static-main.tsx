import React from "react";
import ReactDOM from "react-dom/client";
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
import "./styles.css";

function App() {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
