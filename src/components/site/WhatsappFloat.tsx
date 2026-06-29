import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5543988549807?text=" +
  encodeURIComponent("Oi Ingrid, gostaria de agendar uma sessão");

export const INSTAGRAM_URL = "https://instagram.com/iingridtenorioo";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Ingrid no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-warm transition-all hover:scale-105 hover:bg-primary/90 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
