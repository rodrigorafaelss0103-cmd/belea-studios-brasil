import { useState } from "react";
import { MapPin, Navigation, Copy, Check, Compass, Building2, ExternalLink } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "R S IMÓVEIS Av. Guajajaras, 46 - Sala 06 - Forquilha, São Luís - MA"
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    "Av. Guajajaras, 46 - Forquilha, São Luís - MA"
  )}`;

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#0f1317] border-b border-[#1b222a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161f28] border border-[#263544] text-xs font-semibold uppercase tracking-wider text-[#c6a87d] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Endereço Comercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Nossa Localização em São Luís
          </h2>
          <p className="mt-3 text-[#94a3b8] text-base leading-relaxed">
            Fácil acesso na Av. Guajajaras, um dos principais eixos de mobilidade e negócios da capital.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Address Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#131920] border border-[#212b36] shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#19232d] border border-[#2b3a4a] flex items-center justify-center text-[#c6a87d] mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-[#c6a87d] block mb-2">
                Escritório Comercial
              </span>

              <h3 className="text-2xl font-bold text-[#f8fafc] mb-6">
                R S IMÓVEIS
              </h3>

              {/* Exact Address Format Requested */}
              <div className="space-y-1.5 text-base sm:text-lg text-[#e2e8f0] font-medium leading-snug p-4 rounded-2xl bg-[#0c0f12] border border-[#1b232c] mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#c6a87d] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Av. Guajajaras, 46 - Sala 06</div>
                    <div className="text-[#94a3b8]">Forquilha</div>
                    <div className="text-[#94a3b8]">São Luís - MA</div>
                    <div className="text-xs text-[#64748b] mt-1">CEP: 65056-045</div>
                  </div>
                </div>
              </div>

              {/* Quick details */}
              <p className="text-xs text-[#8293a4] leading-relaxed mb-6">
                Atendimento presencial com hora marcada e canal direto no WhatsApp para envio de localização em tempo real e rotas.
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              {/* Botão solicitado: Como chegar */}
              <a
                id="location-how-to-get-btn"
                href={mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#c6a87d] hover:bg-[#d8be96] text-[#0c0f12] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c6a87d]/10 active:scale-[0.98] cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              {/* Secondary actions: Copiar endereço & Waze */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="copy-address-btn"
                  type="button"
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3 rounded-lg bg-[#18212a] hover:bg-[#202b37] border border-[#2b3847] text-xs font-medium text-[#cbd5e1] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#94a3b8]" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>

                <a
                  id="open-waze-btn"
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#18212a] hover:bg-[#202b37] border border-[#2b3847] text-xs font-medium text-[#cbd5e1] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Visual Map Preview Card */}
          <div className="lg:col-span-7 h-[360px] sm:h-[440px] rounded-3xl bg-[#131920] border border-[#212b36] overflow-hidden relative shadow-xl flex flex-col">
            {/* Real embedded Google Maps interactive iframe for Av. Guajajaras, 46 - Forquilha, São Luís */}
            <iframe
              title="Mapa de Localização da R S IMÓVEIS"
              src="https://maps.google.com/maps?q=Av.+Guajajaras,+46+-+Forquilha,+S%C3%A3o+Lu%C3%ADs+-+MA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[40%] contrast-[110%] opacity-90 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlaid location tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0c0f12]/90 backdrop-blur-md border border-[#293645] p-3 rounded-xl shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#c6a87d]/20 text-[#d8be96] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">R S IMÓVEIS • Sala 06</div>
                <div className="text-[#94a3b8]">Av. Guajajaras, 46 - Forquilha, São Luís</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
