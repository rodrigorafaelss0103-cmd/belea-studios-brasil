export const COMPANY_DATA = {
  name: "R S IMÓVEIS",
  taglineDiscreet: "R S IMÓVEIS • São Luís - MA",
  address: {
    street: "Av. Guajajaras, 46 - Sala 06",
    neighborhood: "Forquilha",
    cityState: "São Luís - MA",
    cep: "65056-045",
    full: "Av. Guajajaras, 46 - Sala 06 - Forquilha, São Luís - MA, 65056-045",
  },
  phoneDisplay: "(98) 98337-6732",
  phoneRaw: "5598983376732",
  whatsappUrl: "https://wa.me/5598983376732",
  whatsappMessageUrl: (message?: string) =>
    message
      ? `https://wa.me/5598983376732?text=${encodeURIComponent(message)}`
      : "https://wa.me/5598983376732",
  googleReviews: {
    rating: "5,0",
    stars: 5,
    count: 21,
    verifiedUrl: "https://www.google.com/search?q=R+S+IMOVEIS+Av.+Guajajaras+46+Forquilha+Sao+Luis+MA",
  },
  mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=R+S+IM%C3%93VEIS+Av.+Guajajaras%2C+46+-+Sala+06+-+Forquilha%2C+S%C3%A3o+Lu%C3%ADs+-+MA",
};
