import { motion } from "motion/react";
import { UserCheck, CheckCircle2, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export function WhyChooseUs() {
  const benefits = [
    {
      id: "benefit-atendimento-direto",
      number: "01",
      title: "Atendimento Direto",
      icon: UserCheck,
      description:
        "Comunicação direta, transparente e sem intermediários desnecessários. Tratamento personalizado para entender exatamente o seu objetivo imobiliário.",
    },
    {
      id: "benefit-imoveis-selecionados",
      number: "02",
      title: "Imóveis Selecionados",
      icon: CheckCircle2,
      description:
        "Foco em oportunidades com documentação confiável e alto potencial em São Luís, priorizando segurança jurídica e satisfação na escolha.",
    },
    {
      id: "benefit-atendimento-sao-luis",
      number: "03",
      title: "Atendimento em São Luís",
      icon: MapPin,
      description:
        "Base física estabelecida na Av. Guajajaras e compreensão prática da dinâmica dos bairros, acessos e tendências da capital maranhense.",
    },
    {
      id: "benefit-contato-rapido-whatsapp",
      number: "04",
      title: "Contato Rápido pelo WhatsApp",
      icon: MessageSquare,
      description:
        "Sem filas ou formulários burocráticos. Receba fotos, esclarecimentos e agendamentos de visita na palma da sua mão pelo (98) 98337-6732.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#0f1317] border-b border-[#1b222a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c6a87d] block mb-2">
            Diferenciais de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight">
            Por que escolher a R S IMÓVEIS
          </h2>
          <p className="mt-4 text-[#94a3b8] text-base leading-relaxed">
            Uma abordagem séria, transparente e próxima para conectar você ao imóvel ideal em São Luís - MA.
          </p>
        </div>

        {/* Benefits List in an elegant 2x2 architectural layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.id}
                id={b.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#131920] border border-[#212b36] hover:border-[#c6a87d]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#19222b] border border-[#2a3746] flex items-center justify-center text-[#c6a87d] group-hover:bg-[#c6a87d] group-hover:text-[#0c0f12] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#546476] group-hover:text-[#c6a87d] transition-colors">
                      {b.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#f1f5f9] tracking-tight mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1b232c] flex items-center gap-2 text-xs font-medium text-[#7d90a2] group-hover:text-[#d8be96] transition-colors">
                  <span>Atendimento dedicado</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141c24] border border-[#263444] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping hidden sm:block shrink-0" />
            <div>
              <p className="text-sm font-bold text-[#f8fafc]">
                Deseja falar diretamente com a equipe agora?
              </p>
              <p className="text-xs text-[#899cb0]">
                Canal exclusivo de atendimento rápido pelo WhatsApp da R S IMÓVEIS.
              </p>
            </div>
          </div>
          <a
            id="why-us-whatsapp-btn"
            href={COMPANY_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#c6a87d] hover:bg-[#d8be96] text-[#0c0f12] font-semibold text-xs sm:text-sm transition-all duration-200 shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Iniciar conversa</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
