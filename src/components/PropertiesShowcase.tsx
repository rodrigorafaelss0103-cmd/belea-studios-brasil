import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Eye,
  Info,
  Building,
  Home,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import { PROPERTY_DEMO_STRUCTURE, PropertyCardDemo } from "../data/propertiesDemo";
import { PropertyDetailModal } from "./PropertyDetailModal";

export function PropertiesShowcase() {
  const [selectedProperty, setSelectedProperty] = useState<PropertyCardDemo | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const filterTabs = [
    { id: "todos", label: "Todos os Tipos", icon: Layers },
    { id: "Apartamento", label: "Apartamentos", icon: Building },
    { id: "Casa em Condomínio", label: "Casas", icon: Home },
    { id: "Sala Comercial", label: "Comerciais", icon: Briefcase },
  ];

  const filteredProperties =
    activeFilter === "todos"
      ? PROPERTY_DEMO_STRUCTURE
      : PROPERTY_DEMO_STRUCTURE.filter((p) => p.displayCategory === activeFilter);

  return (
    <section id="imoveis" className="py-20 sm:py-28 bg-[#0c0f12] relative border-b border-[#1b222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161f28] border border-[#263544] text-xs font-semibold uppercase tracking-wider text-[#c6a87d] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vitrine de Imóveis • Demonstração da Estrutura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Catálogo Moderno de Imóveis
          </h2>
          <p className="mt-3 text-[#94a3b8] text-base leading-relaxed">
            Estrutura visual desenvolvida para apresentar com elegância os imóveis que serão cadastrados pela{" "}
            <span className="text-[#f1f5f9] font-semibold">R S IMÓVEIS</span> em São Luís.
          </p>
        </div>

        {/* Clear Notice Banner about Real Inventory Integrity */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#11171e] border border-[#222c38] flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#18222c] border border-[#2b3949] flex items-center justify-center shrink-0 text-[#c6a87d]">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
            <strong className="text-[#f1f5f9] font-semibold block mb-0.5">
              Transparência total na demonstração:
            </strong>
            Em respeito à sua marca e em conformidade com as diretrizes, não inventamos imóveis, valores ou fotos fictícias. Os cards abaixo representam a arquitetura visual pronta para receber o inventário real da R S IMÓVEIS.
          </div>
        </div>

        {/* Category Filters Mockup */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#c6a87d] text-[#0c0f12] shadow-md font-semibold"
                    : "bg-[#141b22] text-[#94a3b8] hover:text-white border border-[#212b36] hover:bg-[#1a232c]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modern Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              id={`property-card-${property.id}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#12171d] rounded-2xl border border-[#202934] hover:border-[#c6a87d]/40 overflow-hidden flex flex-col shadow-lg shadow-black/30 transition-all group"
            >
              {/* Space for Photo */}
              <div className="relative aspect-[16/10] bg-[#172029] border-b border-[#202934] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Visual subtle blueprint architectural background */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Badge: Exemplo de imóvel (Demonstração) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#0c0f12]/90 backdrop-blur-md border border-[#c6a87d]/40 text-[#d8be96] text-[10px] font-bold uppercase tracking-wider">
                    {property.badge}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#202b37] border border-[#2d3b4a] flex items-center justify-center text-[#c6a87d] mb-2 group-hover:scale-105 transition-transform">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#f1f5f9]">
                    Espaço para Foto Principal
                  </span>
                  <span className="text-[11px] text-[#768798] mt-0.5 max-w-[210px]">
                    Receberá imagem em alta definição do imóvel real
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Space for Price */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <div className="text-xs font-semibold text-[#c6a87d] uppercase tracking-wider">
                      {property.typeLabel}
                    </div>
                  </div>

                  <div className="text-lg font-bold text-[#f8fafc] mb-1 group-hover:text-[#d8be96] transition-colors">
                    {property.priceNotice}
                  </div>

                  {/* Space for Location */}
                  <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#c6a87d] shrink-0" />
                    <span>{property.locationNotice}</span>
                  </div>

                  {/* Spaces for Bedrooms, Bathrooms, Area */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-2.5 rounded-xl bg-[#171f27] border border-[#222c38] text-xs text-[#cbd5e1] mb-5">
                    <div className="flex items-center gap-1.5 justify-center text-center">
                      <Bed className="w-3.5 h-3.5 text-[#c6a87d]" />
                      <span className="font-medium text-[11px] sm:text-xs truncate">{property.bedroomsNotice}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center text-center border-x border-[#253240]">
                      <Bath className="w-3.5 h-3.5 text-[#c6a87d]" />
                      <span className="font-medium text-[11px] sm:text-xs truncate">{property.bathroomsNotice}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center text-center">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c6a87d]" />
                      <span className="font-medium text-[11px] sm:text-xs truncate">{property.areaNotice}</span>
                    </div>
                  </div>
                </div>

                {/* Button "Ver detalhes" */}
                <button
                  id={`btn-view-details-${property.id}`}
                  type="button"
                  onClick={() => setSelectedProperty(property)}
                  className="w-full py-3 px-4 rounded-xl bg-[#19222c] hover:bg-[#c6a87d] text-[#e2e8f0] hover:text-[#0c0f12] font-semibold text-xs sm:text-sm border border-[#2b3949] hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn active:scale-[0.98]"
                >
                  <Eye className="w-4 h-4 text-[#c6a87d] group-hover/btn:text-[#0c0f12] transition-colors" />
                  <span>Ver detalhes</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom invitation for catalog registration */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-b from-[#131920] to-[#0e1318] border border-[#212c38] max-w-2xl mx-auto">
          <p className="text-sm text-[#cbd5e1] font-medium">
            Tem imóveis prontos para anunciar pela R S IMÓVEIS?
          </p>
          <p className="text-xs text-[#8192a3] mt-1 mb-4">
            Podemos conectar o seu inventário completo com fotos, tours virtuais e integração imediata de captação.
          </p>
          <a
            href="https://wa.me/5598983376732?text=Olá!%20Gostaria%20de%20saber%20como%20cadastrar%20meus%20imóveis%20na%20plataforma%20da%20R%20S%20IMÓVEIS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#c6a87d] hover:text-[#d8be96] transition-colors"
          >
            <span>Falar sobre publicação de imóveis no WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
