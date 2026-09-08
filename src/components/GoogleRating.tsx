import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function GoogleRating() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-24 bg-[#0c0f12] border-b border-[#1b222a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Real Data Highlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141b22] to-[#0f1418] border border-[#232f3c] shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#c6a87d]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Real Data Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b2530] border border-[#2b3949] text-xs font-semibold text-[#34d399] mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dados Reais Verificados no Perfil Google</span>
            </div>

            {/* Stars row */}
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(COMPANY_DATA.googleReviews.stars)].map((_, i) => (
                <Star
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#eab308] fill-[#eab308] drop-shadow-[0_2px_8px_rgba(234,179,8,0.25)]"
                />
              ))}
            </div>

            {/* 5,0 no Google */}
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#f8fafc] mb-2">
              {COMPANY_DATA.googleReviews.rating}{" "}
              <span className="text-xl sm:text-2xl font-normal text-[#94a3b8]">
                no Google
              </span>
            </div>

            {/* 21 avaliações */}
            <p className="text-base sm:text-lg text-[#94a3b8] mb-8 font-medium">
              {COMPANY_DATA.googleReviews.count} avaliações
            </p>

            {/* Respectful notice of real data compliance */}
            <div className="max-w-lg mx-auto mb-8 p-3 rounded-xl bg-[#0b0e11] border border-[#1b242e] text-xs text-[#7e8f9f] leading-relaxed flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c6a87d] shrink-0" />
              <span>
                Nota máxima registrada por clientes reais que avaliaram os serviços da <strong>R S IMÓVEIS</strong>.
              </span>
            </div>

            {/* Botão: Ver no Google */}
            <a
              id="google-reviews-btn"
              href={COMPANY_DATA.googleReviews.verifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1d2630] hover:bg-[#253240] border border-[#304052] hover:border-[#c6a87d]/50 text-[#f1f5f9] font-semibold text-sm transition-all duration-200 shadow-md group cursor-pointer active:scale-[0.98]"
            >
              <span>Ver no Google</span>
              <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white transition-colors" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
