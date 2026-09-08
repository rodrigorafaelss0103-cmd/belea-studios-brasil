import { motion } from "motion/react";
import { MessageCircle, ArrowDown, Star, CheckCircle, Shield, Building2 } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function Hero() {
  const scrollToProperties = () => {
    const el = document.getElementById("imoveis");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-[#1b222a]"
    >
      {/* Subtle Architectural Atmosphere Grid & Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,#1f2a36_0%,#0c0f12_70%)] pointer-events-none" />
      
      {/* Architectural subtle blueprint line patterns */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center z-10">
        
        {/* Discretely: R S IMÓVEIS • São Luís - MA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161e26] border border-[#27323f] text-xs font-medium tracking-wider text-[#d1dbe5] mb-8 shadow-sm"
        >
          <Building2 className="w-3.5 h-3.5 text-[#c6a87d]" />
          <span>{COMPANY_DATA.taglineDiscreet}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f8fafc] max-w-4xl mx-auto leading-[1.15]"
        >
          Seu próximo imóvel{" "}
          <span className="text-[#d8be96] font-normal italic font-serif-luxury">
            pode estar aqui.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed"
        >
          Encontre imóveis em São Luís com atendimento direto pelo WhatsApp.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          {/* Main button: Encontrar meu imóvel */}
          <button
            id="hero-find-property-btn"
            type="button"
            onClick={scrollToProperties}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#c6a87d] hover:bg-[#d8be96] text-[#0c0f12] font-semibold text-base transition-all duration-200 shadow-lg shadow-[#c6a87d]/10 hover:shadow-[#c6a87d]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Encontrar meu imóvel</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Secondary button: Falar no WhatsApp */}
          <a
            id="hero-whatsapp-btn"
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#141c24] hover:bg-[#1a2530] border border-[#2b3949] hover:border-[#c6a87d]/50 text-[#e2e8f0] font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.98] group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>

        {/* Discreet Proof Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 pt-8 border-t border-[#1a212a] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141b22] border border-[#242f3c] flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f1f5f9]">5,0 no Google</div>
              <div className="text-xs text-[#788899]">21 avaliações reais</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141b22] border border-[#242f3c] flex items-center justify-center shrink-0">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f1f5f9]">Atendimento Direto</div>
              <div className="text-xs text-[#788899]">Sem intermediários</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141b22] border border-[#242f3c] flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4 text-[#c6a87d]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f1f5f9]">São Luís - MA</div>
              <div className="text-xs text-[#788899]">Forquilha e região</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
