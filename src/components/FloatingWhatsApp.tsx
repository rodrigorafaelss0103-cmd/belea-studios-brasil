import { MessageCircle } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento Rápido WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      {/* Label on desktop hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#11161c]/95 backdrop-blur-md border border-[#2b3949] text-xs font-semibold text-[#f1f5f9] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar no WhatsApp • (98) 98337-6732
      </span>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da R S IMÓVEIS"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-emerald-400/30 relative cursor-pointer"
      >
        {/* Pulse radar wave */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
        
        {/* Unread message indicator pill */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c6a87d] border-2 border-[#0c0f12] rounded-full flex items-center justify-center text-[9px] font-bold text-[#0c0f12]">
          1
        </span>

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </aside>
  );
}
