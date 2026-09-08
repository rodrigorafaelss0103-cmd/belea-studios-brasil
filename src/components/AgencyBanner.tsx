import { useState } from "react";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

export function AgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id="agency-presentation-banner"
      className="bg-[#141a20] border-b border-[#232b35] text-xs text-[#a0abb8] py-2 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c6a87d]/20 text-[#d8be96]">
            <Sparkles className="w-3 h-3" />
          </span>
          <span className="font-medium text-[#e2e8f0]">
            Demonstração Visual da Presença Digital
          </span>
          <span className="hidden sm:inline text-[#64748b]">•</span>
          <span className="hidden sm:inline text-[#94a3b8]">
            Proposta exclusiva desenvolvida para a diretoria da <strong>R S IMÓVEIS</strong> em São Luís - MA
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-[#34d399] font-medium text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pronto para receber imóveis reais</span>
          </div>
          <button
            id="close-agency-banner-btn"
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Ocultar aviso de demonstração"
            className="text-[#64748b] hover:text-[#e2e8f0] p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
