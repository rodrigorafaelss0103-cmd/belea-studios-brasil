import { X, MessageCircle, MapPin, Bed, Bath, Maximize2, Check, Sparkles, Building } from "lucide-react";
import { PropertyCardDemo } from "../data/propertiesDemo";
import { COMPANY_DATA } from "../data/company";

interface PropertyDetailModalProps {
  property: PropertyCardDemo | null;
  onClose: () => void;
}

export function PropertyDetailModal({ property, onClose }: PropertyDetailModalProps) {
  if (!property) return null;

  const handleWhatsappInquiry = () => {
    const text = `Olá! Vi a demonstração do site da R S IMÓVEIS e gostaria de informações sobre imóveis disponíveis em São Luís.`;
    window.open(COMPANY_DATA.whatsappMessageUrl(text), "_blank");
  };

  return (
    <div
      id="property-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="property-detail-modal-card"
        className="bg-[#11171d] border border-[#273442] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-[#e2e8f0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f2935] bg-[#151c23]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#c6a87d]/20 text-[#d8be96] text-xs font-semibold uppercase tracking-wider">
              {property.badge}
            </span>
            <span className="text-xs text-[#94a3b8] hidden sm:inline">
              Demonstração de Estrutura
            </span>
          </div>
          <button
            id="close-property-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#94a3b8] hover:text-white rounded-lg hover:bg-[#202a35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Architectural Placeholder Visual Area */}
          <div className="relative rounded-xl bg-[#17212b] border border-dashed border-[#2d3d4e] aspect-video flex flex-col items-center justify-center p-6 text-center group">
            <div className="w-14 h-14 rounded-full bg-[#202b37] flex items-center justify-center text-[#c6a87d] mb-3">
              <Building className="w-7 h-7" />
            </div>
            <div className="text-sm font-semibold text-[#f1f5f9]">
              Espaço Reservado para Galeria de Fotos
            </div>
            <p className="text-xs text-[#8799ab] max-w-md mt-1">
              Na versão final com os dados da R S IMÓVEIS, este espaço receberá carrossel de fotos profissionais de fachada, interior, planta e áreas sociais.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e1318] text-[11px] text-[#c6a87d] border border-[#2b3949]">
              <Sparkles className="w-3 h-3" />
              <span>Nenhum imóvel fictício foi inventado</span>
            </div>
          </div>

          {/* Details header */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc]">
                {property.placeholderTitle}
              </h3>
              <div className="text-base font-semibold text-[#d8be96]">
                {property.priceNotice}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#94a3b8] mt-2">
              <MapPin className="w-4 h-4 text-[#c6a87d]" />
              <span>{property.locationNotice}</span>
            </div>
          </div>

          {/* Key Attributes Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#141b22] border border-[#212c38]">
            <div className="flex flex-col items-center justify-center text-center p-2">
              <Bed className="w-5 h-5 text-[#c6a87d] mb-1" />
              <span className="text-xs text-[#8292a2]">Quartos</span>
              <span className="text-sm font-semibold text-[#f1f5f9]">{property.bedroomsNotice}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2 border-x border-[#212c38]">
              <Bath className="w-5 h-5 text-[#c6a87d] mb-1" />
              <span className="text-xs text-[#8292a2]">Banheiros</span>
              <span className="text-sm font-semibold text-[#f1f5f9]">{property.bathroomsNotice}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2">
              <Maximize2 className="w-5 h-5 text-[#c6a87d] mb-1" />
              <span className="text-xs text-[#8292a2]">Metragem</span>
              <span className="text-sm font-semibold text-[#f1f5f9]">{property.areaNotice}</span>
            </div>
          </div>

          {/* Explanation for the agency owner */}
          <div className="p-4 rounded-xl bg-[#0f1418] border border-[#242f3c] space-y-2.5">
            <div className="text-xs font-semibold tracking-wider text-[#c6a87d] uppercase flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>Como funciona esta integração na prática:</span>
            </div>
            <p className="text-xs text-[#a4b4c4] leading-relaxed">
              Quando um cliente navegar pelo seu catálogo e se interessar por um imóvel específico, o botão abaixo abre o seu WhatsApp <strong>({COMPANY_DATA.phoneDisplay})</strong> já com o código e título do imóvel pré-preenchido, eliminando atrito no primeiro contato.
            </p>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              id="property-modal-inquire-btn"
              type="button"
              onClick={handleWhatsappInquiry}
              className="w-full py-3.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar imóveis disponíveis no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
