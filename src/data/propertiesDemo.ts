export interface PropertyCardDemo {
  id: string;
  typeLabel: string;
  badge: string;
  displayCategory: string;
  placeholderTitle: string;
  priceNotice: string;
  locationNotice: string;
  bedroomsNotice: string;
  bathroomsNotice: string;
  areaNotice: string;
  demoDescription: string;
  highlightFeature: string;
}

export const PROPERTY_DEMO_STRUCTURE: PropertyCardDemo[] = [
  {
    id: "prop-demo-01",
    typeLabel: "Exemplo • Residencial",
    badge: "Exemplo de imóvel (Demonstração)",
    displayCategory: "Apartamento",
    placeholderTitle: "Estrutura pronta para Apartamento",
    priceNotice: "Preço sob consulta (Cadastro real)",
    locationNotice: "Bairro em São Luís (A cadastrar)",
    bedroomsNotice: "3 quartos",
    bathroomsNotice: "2 banheiros",
    areaNotice: "85 m²",
    demoDescription: "Layout projetado para fotos profissionais de fachada, sala integrada, suíte e varanda. Conexão direta com WhatsApp da R S IMÓVEIS.",
    highlightFeature: "1 vaga de garagem • Varanda",
  },
  {
    id: "prop-demo-02",
    typeLabel: "Exemplo • Casa / Condomínio",
    badge: "Exemplo de imóvel (Demonstração)",
    displayCategory: "Casa em Condomínio",
    placeholderTitle: "Estrutura pronta para Casa ou Sobrado",
    priceNotice: "Preço sob consulta (Cadastro real)",
    locationNotice: "Bairro em São Luís (A cadastrar)",
    bedroomsNotice: "4 quartos (3 suítes)",
    bathroomsNotice: "4 banheiros",
    areaNotice: "220 m²",
    demoDescription: "Espaço preparado para fotos de área de lazer privativa, acabamento premium e detalhes de segurança.",
    highlightFeature: "Piscina privativa • Espaço gourmet",
  },
  {
    id: "prop-demo-03",
    typeLabel: "Exemplo • Comercial",
    badge: "Exemplo de imóvel (Demonstração)",
    displayCategory: "Sala Comercial",
    placeholderTitle: "Estrutura pronta para Imóvel Comercial",
    priceNotice: "Preço sob consulta (Cadastro real)",
    locationNotice: "Bairro em São Luís (A cadastrar)",
    bedroomsNotice: "Recepção + 2 salas",
    bathroomsNotice: "1 banheiro",
    areaNotice: "48 m²",
    demoDescription: "Ideal para consultórios, escritórios ou salas corporativas nas principais avenidas de São Luís.",
    highlightFeature: "Vaga rotativa • Elevador",
  },
];
