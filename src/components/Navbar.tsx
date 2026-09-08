import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, MapPin } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Imóveis", href: "#imoveis" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0f12]/90 backdrop-blur-md border-b border-[#1f262e] shadow-lg shadow-black/20"
          : "bg-[#0c0f12]/60 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a
          id="brand-logo-link"
          href="#hero"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          {/* Architectural monogram */}
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1a2129] to-[#0f1418] border border-[#2b3542] flex items-center justify-center shadow-md group-hover:border-[#c6a87d]/60 transition-colors">
            <span className="font-serif-luxury text-lg tracking-wider text-[#d8be96] font-semibold">
              RS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#f1f5f9] group-hover:text-white transition-colors">
              R S IMÓVEIS
            </span>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#94a3b8] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#c6a87d]" />
              São Luís - MA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#94a3b8]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace("#", "")}`}
              className="hover:text-[#f8fafc] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#c6a87d] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            id="header-whatsapp-btn"
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#141b22] hover:bg-[#1a232c] border border-[#2c3745] hover:border-[#c6a87d]/50 text-[#e2e8f0] text-sm font-medium transition-all shadow-sm group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden p-2.5 rounded-lg text-[#94a3b8] hover:text-white bg-[#141a20] border border-[#222b35] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#0c0f12] border-b border-[#1f262e] px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.href.replace("#", "")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#cbd5e1] hover:text-white hover:bg-[#151c23] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1e252d] space-y-2">
            <div className="text-xs text-[#64748b] px-3">
              {COMPANY_DATA.address.full}
            </div>
            <a
              id="mobile-menu-whatsapp-btn"
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp • {COMPANY_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
