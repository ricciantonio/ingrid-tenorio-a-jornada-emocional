import { ArrowRight, MessageCircle } from "lucide-react";
const ctaPhoto = { url: "https://i.imgur.com/oZiJr2D.jpg" };
import { WHATSAPP_URL } from "./WhatsappFloat";

export function CtaFinal() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="texture-grain relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-warm">
          <div className="texture-grain-overlay" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 20%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 70%)",
            }}
          />

          <div className="relative grid items-center gap-10 p-8 sm:p-14 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                Sua transformação começa aqui
              </span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                Pronta para começar sua{" "}
                <span className="italic text-gold">transformação emocional?</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
                Dê o primeiro passo. Vamos conversar — sem compromisso — e construir o caminho que
                faz sentido para você.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-base font-medium text-primary shadow-soft transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agende sua sessão agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel:+5543988549807"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  +55 43 98854-9807
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-2 -z-10 rounded-[1.75rem] border border-primary-foreground/30"
                style={{ transform: "rotate(3deg)" }}
              />
              <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-primary-foreground/20">
                <img
                  src={ctaPhoto.url}
                  alt="Ingrid Tenorio convidando você para começar"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
