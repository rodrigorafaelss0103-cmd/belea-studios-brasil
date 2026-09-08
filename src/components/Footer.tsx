import { MapPin, Phone, MessageCircle, Star, ArrowUp } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-[#080a0d] border-t border-[#182028] text-[#8697a8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#141b22] border border-[#273443] flex items-center justify-center">
                <span className="font-serif-luxury text-sm tracking-wider text-[#d8be96] font-semibold">
                  RS
                </span>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  R S IMÓVEIS
                </span>
                <span className="text-[11px] text-[#94a3b8] tracking-widest uppercase">
                  São Luís - MA
                </span>
              </div>
            </div>

            <p className="text-xs text-[#738495] leading-relaxed max-w-md">
              Intermediação imobiliária em São Luís com atendimento direto, transparente e ágil pelo WhatsApp.
            </p>

            <div className="space-y-2 pt-2 text-[#9bb0c3]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c6a87d] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c6a87d] shrink-0" />
                <a
                  href={COMPANY_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_DATA.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação Rápida
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#imoveis" className="hover:text-white transition-colors">
                  Catálogo de Imóveis
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Por que a R S IMÓVEIS
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações Google (5,0)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização em São Luís
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Google Proof & Direct Action */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Reputação Comprovada
            </div>
            <div className="p-3.5 rounded-xl bg-[#10151a] border border-[#1e2833] space-y-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#eab308] fill-[#eab308]" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5,0 no Google</span>
              </div>
              <p className="text-[11px] text-[#718292]">
                Baseado em 21 avaliações públicas e verificadas.
              </p>
            </div>

            <a
              id="footer-whatsapp-btn"
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-lg bg-[#141d26] hover:bg-[#1a2530] border border-[#2b3a4a] hover:border-[#c6a87d]/50 text-white text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Abrir WhatsApp ({COMPANY_DATA.phoneDisplay})</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#151c24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#617282]">
          <div>
            © {new Date().getFullYear()} R S IMÓVEIS • São Luís - MA. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#8899aa]">
              Demonstração de Presença Digital Profissional
            </span>
            <button
              id="back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-1.5 rounded-md bg-[#131920] hover:bg-[#1c242e] text-[#94a3b8] hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
