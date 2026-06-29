import { createFileRoute } from "@tanstack/react-router";
import heroPhoto from "@/assets/ingrid/ingrid-hero.jpeg.asset.json";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Especialidades } from "@/components/site/Especialidades";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

const TITLE = "Ingrid Tenorio — Terapia Emocional em Londrina, PR";
const DESCRIPTION =
  "Acompanhamento emocional especializado em Londrina. Clareza, identidade e poder pessoal — 4 anos de experiência transformando vidas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroPhoto.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPhoto.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Depoimentos />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
