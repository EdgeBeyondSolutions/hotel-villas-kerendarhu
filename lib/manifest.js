(function () {
  "use strict";

  window.__BRAND__ = {
    name: "Hotel Villas Kerendarhú",
    shortName: "Villas Kerendarhú",
    tagline: "Vive la magia, descansa con encanto",
    homeLine: "Tu hogar en Bernal",
    town: "Bernal, Pueblo Mágico · Querétaro",
    address: "Independencia, Centro · Bernal, Ezequiel Montes, Querétaro · C.P. 76680",
    phoneDisplay: "55 3922 3098",
    whatsappNumber: "525539223098",
    phoneAltDisplay: "441 690 5470",
    rating: { value: 4.1, count: 243, source: "Google" },
    roomCount: 11,
    priceFrom: 700,
    currency: "MXN",

    nav: [
      { href: "#habitaciones", label: "Habitaciones" },
      { href: "#kerendarhu", label: "La casa" },
      { href: "#bernal", label: "Descubre Bernal" },
      { href: "#testimonios", label: "Huéspedes" },
      { href: "#reservar", label: "Reservar" },
    ],

    stats: [
      { value: 4.1, decimals: 1, suffix: "", label: "Calificación en Google · 243 reseñas" },
      { value: 11, decimals: 0, suffix: "", label: "Habitaciones — nunca vas a ser un número de folio" },
      { value: 2, decimals: 0, suffix: "", label: "Calles del centro de Bernal y de la Peña" },
    ],

    rooms: [
      {
        id: "matrimonial",
        name: "Habitación Matrimonial",
        desc: "Cama matrimonial, ideal para parejas que vienen a perderse un fin de semana en el pueblo.",
        photo: "assets/img/habitacion-matrimonial.webp",
        tags: ["Cama matrimonial", "Cocineta", "Baño privado", "TV pantalla plana"],
        from: 700,
      },
      {
        id: "king",
        name: "Habitación King Size",
        desc: "La más espaciosa de la casa. Cabecera de madera tallada a mano, para dormir como se debe.",
        photo: "assets/img/habitacion-king.webp",
        tags: ["Cama king size", "Cocineta", "Baño privado", "WiFi rápido"],
        from: 750,
      },
      {
        id: "vista",
        name: "Con vista a La Peña",
        desc: "Los cuartos del segundo piso se asoman directo al monolito. Café en mano, la Peña de frente.",
        photo: "assets/img/vista-habitacion.webp",
        tags: ["Vista a la Peña", "Terraza compartida", "Doble o matrimonial", "Baño privado"],
        from: 700,
      },
      {
        id: "grupos",
        name: "Para grupos y cuadrillas",
        desc: "Habitaciones dobles y mini-departamento para hasta 6 personas. Ideal para equipos de trabajo, técnicos y proveedores en Bernal.",
        photo: "assets/img/fachada-noche.webp",
        tags: ["Hasta 6 personas", "Facturación", "Estacionamiento", "Café de cortesía"],
        from: 700,
      },
    ],

    amenities: [
      { icon: "wifi", label: "WiFi rápido en toda la casa" },
      { icon: "parking", label: "Estacionamiento dentro del hotel" },
      { icon: "kitchen", label: "Cocineta en cada habitación" },
      { icon: "coffee", label: "Café y té de cortesía" },
      { icon: "tv", label: "TV de pantalla plana" },
      { icon: "invoice", label: "Facturamos tu estancia" },
      { icon: "terrace", label: "Terraza con vista a la Peña" },
      { icon: "pin", label: "A 2 calles del centro de Bernal" },
    ],

    experiences: [
      {
        title: "Subir la Peña de Bernal",
        desc: "El tercer monolito más grande del mundo, a dos calles de tu cuarto. Súbela al amanecer, antes de que llegue el sol fuerte.",
        photo: "assets/img/pena-dia.webp",
      },
      {
        title: "Perderse en el Centro",
        desc: "Calles empedradas, dulces de xoconostle, cantera rosa y la torre de la parroquia encendida en la noche.",
        photo: "assets/img/bernal-plaza-noche.webp",
      },
      {
        title: "Feria del Queso y el Vino",
        desc: "A unos minutos, la ruta del vino de Querétoro. Vendimias, quesos artesanales y viñedos que se recorren en un día.",
        photo: "assets/img/fuegos-artificiales.webp",
      },
      {
        title: "Equinoccio en la Peña",
        desc: "Cada primavera miles suben a recibir la energía del equinoccio. Fuegos artificiales, música y un pueblo entero despierto.",
        photo: "assets/img/pena-atardecer.webp",
      },
    ],

    testimonials: [
      {
        quote: "Llegamos tarde un viernes y aun así nos recibieron con café caliente. La vista a la Peña desde el cuarto vale toda la estadía.",
        name: "Huésped verificado",
        detail: "Reseña de Google · estancia de fin de semana",
        placeholder: true,
      },
      {
        quote: "Fuimos una cuadrilla de trabajo por dos semanas. Nos facturaron todo, el WiFi aguantó las videollamadas y el estacionamiento fue clave.",
        name: "Huésped verificado",
        detail: "Reseña de Google · estancia de trabajo",
        placeholder: true,
      },
      {
        quote: "Subimos la Peña en la mañana y regresamos a dormir siesta en la terraza. Se siente como quedarte en casa de alguien que sí conoce el pueblo.",
        name: "Huésped verificado",
        detail: "Reseña de Google · escapada en pareja",
        placeholder: true,
      },
    ],

    faqs: [
      {
        q: "¿A qué hora es el check-in y el check-out?",
        a: "Check-in a partir de las 15:00 y check-out antes de las 12:00. Si llegas más temprano o necesitas salir más tarde, escríbenos por WhatsApp y lo vemos según disponibilidad.",
      },
      {
        q: "¿Tienen estacionamiento?",
        a: "Sí, estacionamiento dentro del hotel sin costo adicional para huéspedes hospedados.",
      },
      {
        q: "¿Las habitaciones tienen cocina?",
        a: "Cada habitación cuenta con cocineta equipada, ideal si vienes por varios días o en grupo.",
      },
      {
        q: "¿Aceptan estancias de trabajo o grupos grandes?",
        a: "Sí. Tenemos tarifas y habitaciones pensadas para cuadrillas, técnicos, instaladores y equipos de trabajo, incluyendo facturación de tu estancia.",
      },
      {
        q: "¿Qué tan lejos están de la Peña de Bernal?",
        a: "A dos calles del centro histórico y a un paseo corto caminando de la base de la Peña.",
      },
      {
        q: "¿Cómo reservo?",
        a: "Lo más rápido es por WhatsApp — usa el formulario de esta página y te escribimos para confirmar fecha y tarifa, sin compromiso.",
      },
    ],

    ticker: [
      "La Peña de Bernal", "Pueblo Mágico", "Querétaro", "Feria del Queso y el Vino",
      "Equinoccio de Primavera", "Cantera Rosa", "Ruta del Vino", "Tu hogar en Bernal",
    ],
  };
})();
