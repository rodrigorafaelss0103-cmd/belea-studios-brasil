import { MessageCircle, Phone, Clock, MapPin, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function ContactCta() {
  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#0a0d10] relative overflow-hidden">
      {/* Subtle architectural radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#192430_0%,#0a0d10_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Discreet Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161f28] border border-[#263544] text-xs font-semibold text-[#c6a87d] mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento Direto e Personalizado</span>
        </div>

        {/* Requested Strong Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f8fafc] tracking-tight max-w-2xl mx-auto leading-tight">
          Vamos encontrar o imóvel certo para você?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
          Inicie uma conversa direta pelo WhatsApp com a equipe da <strong>R S IMÓVEIS</strong>. Receba atendimento ágil para compra, venda ou locação em São Luís.
        </p>

        {/* Big CTA Button Requested: "Falar com a R S IMÓVEIS" */}
        <div className="mt-10 max-w-md mx-auto">
          <a
            id="final-cta-whatsapp-btn"
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 px-8 rounded-2xl bg-[#c6a87d] hover:bg-[#d8be96] text-[#0c0f12] font-bold text-lg sm:text-xl transition-all duration-200 shadow-xl shadow-[#c6a87d]/20 hover:shadow-[#c6a87d]/30 flex items-center justify-center gap-3 cursor-pointer group active:scale-[0.99]"
          >
            <MessageCircle className="w-6 h-6 text-[#0c0f12] fill-[#0c0f12]/10 group-hover:scale-110 transition-transform" />
            <span>Falar com a R S IMÓVEIS</span>
          </a>
        </div>

        {/* Quick Contact Micro-Details */}
        <div className="mt-12 pt-8 border-t border-[#1b232c] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#7d90a2]">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#c6a87d]" />
            <span className="font-medium text-[#d1dbe5]">{COMPANY_DATA.phoneDisplay}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c6a87d]" />
            <span>Forquilha, São Luís - MA</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c6a87d]" />
            <span>Resposta rápida no WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
