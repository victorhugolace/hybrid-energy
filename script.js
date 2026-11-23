/* ========= CONFIGURATION =========
   Fill in before publishing.
   PHONE:    digits only, with country code. E.g. "17257260590"
   EMAIL:    address that will receive the form requests. */
const CONFIG = {
  PHONE: "17257260590",
  PHONE_DISPLAY: "(725) 726-0590",
  WHATSAPP: "17257260590",
  EMAIL: "partnerships@hybridenergynv.com",
  USE_FORMSUBMIT: true // Envia diretamente em segundo plano para o e-mail via FormSubmit; fallback para mailto se offline
};

const $ = (s) => document.querySelector(s);

/* ============================================================
   TRANSLATIONS (ENGLISH / SPANISH)
   ============================================================ */
const I18N = {
  en: {
    lang_toggle: "ES",
    lang_aria: "Cambiar idioma a Español",
    nav_why: "Why Switch",
    nav_how: "How It Works",
    nav_tpo: "2026 TPO Solar",
    nav_why_us: "Why Us",
    nav_impact: "Our Impact",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    cta_quote: "Get Free Quote",
    hero_pill: "<i></i> ⚡ Trusted By Homeowners Across The USA",
    hero_title: 'Solar Energy<br><span class="teal-text">Made Simple</span>',
    hero_lead: 'Potentially <strong class="hl">eliminate</strong> your energy bill with premium solar panels. <strong class="hl">Zero upfront costs</strong>, <strong class="hl-green">instant savings</strong>, and a <strong class="hl">25-year warranty</strong>.',
    hero_btn_quote: 'Get Free Quote <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
    hero_btn_calc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line></svg> Calculate Savings',
    stat_savings: "Customer Savings",
    stat_warranty: "Warranty",
    stat_rating: "Customer Rating",
    why_title: "Why Switch to Solar?",
    why_sub: "Solar energy offers immediate and long-term benefits for your home and wallet",
    why_1_title: "Lower Your Electricity Bill",
    why_1_desc: "Reduce or eliminate monthly utility costs",
    why_2_title: "Protection from Rate Hikes",
    why_2_desc: "Lock in your energy costs today",
    why_3_title: "Increase Home Value",
    why_3_desc: "Homes with solar sell faster &amp; for more",
    why_4_title: "State Tax Incentives",
    why_4_desc: "Maximize available incentives &amp; rebates",
    why_5_title: "Whole-Home Backup Power",
    why_5_desc: "Never lose power during outages",
    why_6_title: "Reduce Carbon Footprint",
    why_6_desc: "Make a positive environmental impact",
    learn_more: 'Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
    how_title: "How Hybrid Energy Works",
    how_sub: "Four simple steps to clean, affordable energy",
    how_1_title: "Free Consultation",
    how_1_desc: "Share your energy goals, roof details, and budget. We analyze your home and current utility costs to understand your needs.",
    how_2_title: "We Compare Everything",
    how_2_desc: "Our team reviews dozens of installers in your area, comparing pricing, equipment quality, warranties, and customer reviews.",
    how_3_title: "Custom Recommendations",
    how_3_desc: "Receive a clear breakdown of the top 2-3 options tailored to your home, with transparent pricing and projected savings.",
    how_4_title: "You Choose &amp; Save",
    how_4_desc: "Select the option that fits best. We coordinate installation, handle paperwork, and ensure everything goes smoothly.",
    tpo_title: '2026 Changes Everything: <span class="teal-text">TPO Solar</span> is Now the Smartest Path',
    tpo_sub: "With new federal legislation, TPO (Third-Party Ownership) structures like PPA and Solar Leases are now the most accessible way for homeowners to save money with solar.",
    tpo_1_title: "Safe Harboring",
    tpo_1_desc: "Lock in today's tax credit rates and incentive structures before installation, protecting you from future reductions.",
    tpo_2_title: "$0 Down TPO",
    tpo_2_desc: "No upfront costs, guaranteed performance, and lower monthly rates than your utility bill.",
    tpo_3_title: "Energy Independence",
    tpo_3_desc: "Stable pricing and predictable bills while utilities continue raising rates year after year.",
    tpo_btn_changes: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg> Learn More About 2026 Changes',
    tpo_btn_lock: "Lock In Your Benefits Today",
    choose_title: "Why Homeowners Choose Hybrid Energy",
    choose_sub: "The smart way to go solar — transparent, unbiased, and designed to save you money",
    choose_1_title: "Coverage Across The USA",
    choose_1_desc: "Top-rated solar pros Across USA",
    choose_2_title: "Objective &amp; Transparent",
    choose_2_desc: "Unbiased recommendations that work for you",
    choose_3_title: "Whole-Home Battery Backup",
    choose_3_desc: "Stay powered through storms &amp; blackouts",
    choose_4_title: "Zero-Down TPO Options",
    choose_4_desc: "$0 down with instant savings from day one",
    choose_5_title: "We Compare Everything",
    choose_5_desc: "All options analyzed so you don't have to",
    choose_6_title: "End-to-End Support",
    choose_6_desc: "We manage the entire process for you",
    impact_title: "Our Impact",
    impact_sub: "Making a difference, one home at a time",
    impact_1_label: "Solar Projects Installed Nationwide",
    impact_1_desc: "Homeowners we've helped connect with trusted providers across America",
    impact_2_label: "Happy Homeowners",
    impact_2_desc: "Verified clients who reduced bills, increased home value, &amp; gained energy independence",
    impact_3_label: "Trees Worth of CO₂ Absorption Saved",
    impact_3_desc: "Clean energy that protects our planet — one home at a time",
    reviews_title: "What Homeowners Are Saying",
    reviews_sub: "Join thousands of satisfied homeowners who made the switch to solar with Hybrid Energy",
    faq_title: "Frequently Asked Questions",
    faq_sub: "Everything you need to know about going solar with Hybrid Energy",
    faq_1_q: "What areas do you serve?",
    faq_1_a: "All across the U.S.",
    faq_2_q: "Why should I switch to solar?",
    faq_2_a: "Save money, increase home value, gain energy independence",
    faq_3_q: "Can I really afford solar?",
    faq_3_a: "Yes — most qualify for $0 down with instant savings",
    faq_4_q: "Do you install the solar panels yourselves?",
    faq_4_a: "No — we act as your broker, comparing the whole market to match you with the very best product, partner, and deal for your home.",
    faq_5_q: "How long does the process take?",
    faq_5_a: "Faster than your utility company answers the phone.",
    faq_6_q: "What is TPO and why is it the best option in 2026?",
    faq_6_a: "$0 down solar with guaranteed savings",
    faq_7_q: "What is Safe Harboring?",
    faq_7_a: "Lock in today's rates before they change",
    form_title: "Ready to Start Saving?",
    form_lead: "Get your free solar analysis and discover how much you can save with Hybrid Energy™",
    trust_1: "<strong>100% Free Consultation</strong>",
    trust_2: "<strong>Response in 24 Hours</strong>",
    trust_3: "<strong>Your Information is Secure</strong>",
    text_us: "Text Us",
    f_name_lbl: "Full Name *",
    f_name_ph: "John Smith",
    f_email_lbl: "Email Address *",
    f_email_ph: "john@example.com",
    f_phone_lbl: "Phone Number *",
    f_phone_ph: "(555) 123-4567",
    f_bill_lbl: "Average Monthly Electric Bill *",
    f_bill_ph: "$150",
    f_address_lbl: "Home Address *",
    f_address_ph: "123 Main St, City, State, ZIP",
    consent_text: '<b>SMS/Text Messaging Consent:</b> By providing my phone number and checking this box, I consent to receive text messages from Hybrid Energy regarding my solar consultation, appointment reminders, installation updates, and promotional offers. Message frequency varies. Message and data rates may apply. Reply STOP to opt-out or HELP for support. Consent is not required to purchase services.',
    form_btn: "Get My Free Solar Analysis",
    form_btn_sending: "Sending...",
    msg_required: "Please complete all required fields.",
    msg_success: "✓ Thanks! Your request has been received — we'll be in touch within 24 hours.",
    footer_about: "Leading the solar revolution with innovative renewable energy solutions for homes and businesses across America.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact Us",
    footer_text_us: "Text Us (SMS)",
    footer_copy: "Hybrid Energy. All rights reserved."
  },
  es: {
    lang_toggle: "EN",
    lang_aria: "Switch language to English",
    nav_why: "¿Por Qué Cambiar?",
    nav_how: "Cómo Funciona",
    nav_tpo: "Solar TPO 2026",
    nav_why_us: "Por Qué Nosotros",
    nav_impact: "Nuestro Impacto",
    nav_reviews: "Testimonios",
    nav_faq: "Preguntas Frecuentes",
    cta_quote: "Cotización Gratis",
    hero_pill: "<i></i> ⚡ De Confianza para Propietarios en Todo EE. UU.",
    hero_title: 'Energía Solar<br><span class="teal-text">Fácil y Simple</span>',
    hero_lead: 'Podría <strong class="hl">eliminar</strong> su factura de luz con paneles solares de primera calidad. <strong class="hl">Cero costos iniciales</strong>, <strong class="hl-green">ahorro inmediato</strong> y garantía de <strong class="hl">25 años</strong>.',
    hero_btn_quote: 'Cotización Gratis <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
    hero_btn_calc: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line></svg> Calcular Ahorro',
    stat_savings: "Ahorro de Clientes",
    stat_warranty: "Garantía",
    stat_rating: "Calificación de Clientes",
    why_title: "¿Por Qué Cambiar a Energía Solar?",
    why_sub: "La energía solar ofrece beneficios inmediatos y a largo plazo para su hogar y su bolsillo",
    why_1_title: "Reduzca su Factura de Luz",
    why_1_desc: "Reduzca o elimine los costos mensuales de electricidad",
    why_2_title: "Protección Contra Subidas de Tarifas",
    why_2_desc: "Congele sus costos de energía desde hoy",
    why_3_title: "Aumente el Valor de su Casa",
    why_3_desc: "Las casas con energía solar se venden más rápido y a mejor precio",
    why_4_title: "Incentivos Fiscales y Estatales",
    why_4_desc: "Aproveche al máximo incentivos y reembolsos disponibles",
    why_5_title: "Energía de Respaldo para Toda la Casa",
    why_5_desc: "Nunca se quede sin luz durante apagones",
    why_6_title: "Reduzca su Huella de Carbono",
    why_6_desc: "Genere un impacto ambiental positivo",
    learn_more: 'Más Información <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>',
    how_title: "Cómo Funciona Hybrid Energy",
    how_sub: "Cuatro sencillos pasos hacia una energía limpia y accesible",
    how_1_title: "Consulta Gratis",
    how_1_desc: "Comparta sus metas de energía, detalles de su techo y presupuesto. Analizamos su hogar y costos actuales de electricidad para entender sus necesidades.",
    how_2_title: "Comparamos Todo el Mercado",
    how_2_desc: "Nuestro equipo revisa docenas de instaladores en su área, comparando precios, calidad de equipos, garantías y opiniones de clientes.",
    how_3_title: "Recomendaciones a su Medida",
    how_3_desc: "Reciba un desglose claro de las 2 o 3 mejores opciones para su hogar, con precios transparentes y ahorros proyectados.",
    how_4_title: "Usted Elige y Ahorra",
    how_4_desc: "Elija la opción que mejor le convenga. Coordinamos la instalación, gestionamos los trámites y nos aseguramos de que todo salga perfecto.",
    tpo_title: '2026 lo Cambia Todo: <span class="teal-text">Solar TPO</span> es Ahora el Camino Más Inteligente',
    tpo_sub: "Con la nueva legislación federal, las modalidades TPO (Propiedad de Terceros) como PPA y Arrendamientos Solares son la forma más accesible para que los propietarios ahorren dinero con energía solar.",
    tpo_1_title: "Protección Safe Harbor",
    tpo_1_desc: "Asegure las tasas de crédito fiscal y los incentivos actuales antes de la instalación, protegiéndose de futuras reducciones.",
    tpo_2_title: "TPO con $0 Inicial",
    tpo_2_desc: "Sin costos iniciales, rendimiento garantizado y pagos mensuales más bajos que su factura de luz actual.",
    tpo_3_title: "Independencia Energética",
    tpo_3_desc: "Precios estables y facturas predecibles mientras las compañías eléctricas aumentan sus tarifas año tras año.",
    tpo_btn_changes: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg> Más Sobre los Cambios del 2026',
    tpo_btn_lock: "Asegure sus Beneficios Hoy",
    choose_title: "Por Qué los Propietarios Eligen Hybrid Energy",
    choose_sub: "La forma inteligente de cambiarse a solar: transparente, imparcial y diseñada para ahorrar dinero",
    choose_1_title: "Cobertura en Todo EE. UU.",
    choose_1_desc: "Profesionales solares de primer nivel en todo el país",
    choose_2_title: "Objetivo y Transparente",
    choose_2_desc: "Recomendaciones imparciales pensadas para su beneficio",
    choose_3_title: "Batería de Respaldo Completa",
    choose_3_desc: "Mantenga su hogar con energía durante tormentas y apagones",
    choose_4_title: "Opciones TPO Sin Enganche",
    choose_4_desc: "$0 de enganche con ahorros instantáneos desde el primer día",
    choose_5_title: "Comparamos Todo por Usted",
    choose_5_desc: "Todas las opciones analizadas para que usted no tenga que hacerlo",
    choose_6_title: "Acompañamiento Integral",
    choose_6_desc: "Gestionamos todo el proceso por usted de principio a fin",
    impact_title: "Nuestro Impacto",
    impact_sub: "Marcando la diferencia, un hogar a la vez",
    impact_1_label: "Proyectos Solares Instalados a Nivel Nacional",
    impact_1_desc: "Familias que hemos conectado con proveedores de confianza en todo EE. UU.",
    impact_2_label: "Familias Satisfechas",
    impact_2_desc: "Clientes verificados que redujeron facturas, aumentaron el valor de su casa e independizaron su energía",
    impact_3_label: "Árboles Equivalentes en Absorción de CO₂",
    impact_3_desc: "Energía limpia que protege nuestro planeta, hogar por hogar",
    reviews_title: "Lo Que Dicen los Propietarios",
    reviews_sub: "Únase a miles de propietarios satisfechos que se cambiaron a solar con Hybrid Energy",
    faq_title: "Preguntas Frecuentes",
    faq_sub: "Todo lo que necesita saber sobre pasarse a solar con Hybrid Energy",
    faq_1_q: "¿Qué áreas cubren?",
    faq_1_a: "En todos los Estados Unidos.",
    faq_2_q: "¿Por qué debería cambiarme a energía solar?",
    faq_2_a: "Ahorre dinero, aumente el valor de su casa y obtenga independencia energética.",
    faq_3_q: "¿Realmente puedo pagar la energía solar?",
    faq_3_a: "Sí, la mayoría califica para $0 de enganche con ahorros inmediatos.",
    faq_4_q: "¿Ustedes mismos instalan los paneles solares?",
    faq_4_a: "No: actuamos como su asesor y comparador, analizando todo el mercado para conectarlo con el mejor producto, instalador y precio para su hogar.",
    faq_5_q: "¿Cuánto tiempo tarda el proceso?",
    faq_5_a: "Más rápido de lo que su compañía eléctrica responde al teléfono.",
    faq_6_q: "¿Qué es TPO y por qué es la mejor opción en 2026?",
    faq_6_a: "Energía solar con $0 inicial y ahorros garantizados.",
    faq_7_q: "¿Qué es Safe Harboring?",
    faq_7_a: "Asegure las tarifas y beneficios de hoy antes de que cambien.",
    form_title: "¿Listo Para Empezar a Ahorrar?",
    form_lead: "Obtenga su análisis solar gratuito y descubra cuánto puede ahorrar con Hybrid Energy™",
    trust_1: "<strong>Consulta 100% Gratuita</strong>",
    trust_2: "<strong>Respuesta en 24 Horas</strong>",
    trust_3: "<strong>Su Información Está Segura</strong>",
    text_us: "Enviar Mensaje",
    f_name_lbl: "Nombre Completo *",
    f_name_ph: "Juan Pérez",
    f_email_lbl: "Correo Electrónico *",
    f_email_ph: "juan@ejemplo.com",
    f_phone_lbl: "Número de Teléfono *",
    f_phone_ph: "(555) 123-4567",
    f_bill_lbl: "Factura Promedio Mensual de Luz *",
    f_bill_ph: "$150",
    f_address_lbl: "Dirección del Hogar *",
    f_address_ph: "123 Calle Principal, Ciudad, Estado, Código Postal",
    consent_text: '<b>Consentimiento para Mensajes de Texto/SMS:</b> Al proporcionar mi número de teléfono y marcar esta casilla, acepto recibir mensajes de texto de Hybrid Energy relacionados con mi consulta solar, recordatorios de citas, actualizaciones de instalación y ofertas promocionales. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para darse de baja o HELP para obtener ayuda. El consentimiento no es un requisito para adquirir servicios.',
    form_btn: "Obtener Mi Análisis Solar Gratis",
    form_btn_sending: "Enviando...",
    msg_required: "Por favor complete todos los campos obligatorios.",
    msg_success: "✓ ¡Gracias! Hemos recibido su solicitud — nos comunicaremos con usted dentro de las próximas 24 horas.",
    footer_about: "Liderando la revolución solar con soluciones innovadoras de energía renovable para hogares y negocios en todo Estados Unidos.",
    footer_quick_links: "Enlaces Rápidos",
    footer_contact: "Contáctenos",
    footer_text_us: "Mensaje de Texto (SMS)",
    footer_copy: "Hybrid Energy. Todos los derechos reservados."
  }
};

/* ============================================================
   REVIEWS DATA (EN & ES)
   ============================================================ */
const REVIEWS = {
  en: [
    { who: "The Martinez Family", loc: "Miami, FL", i: "M", q: "Hybrid Energy made going solar so easy for our family. They handled everything and kept us updated throughout. The installer they matched us with was professional and finished ahead of schedule. Our kids love knowing we're helping the planet!" },
    { who: "Emily Johnson", loc: "Seattle, WA", i: "E", q: "I researched solar for months and was overwhelmed. Hybrid Energy simplified everything and found me better pricing than I could find on my own. The TPO option was perfect for my budget. Highly recommend!" },
    { who: "James Patterson", loc: "Atlanta, GA", i: "J", q: "The team at Hybrid Energy really knows their stuff. They compared all the options in my area and got me premium panels at a great price. My home value increased too!" },
    { who: "The Anderson Family", loc: "Portland, OR", i: "A", q: "Going solar was on our list for years. Hybrid Energy made it happen in weeks! They're true advocates for homeowners, not just another sales company. Our whole family is excited about our clean energy future." },
    { who: "Michael Rodriguez", loc: "Phoenix, AZ", i: "M", q: "Hybrid Energy saved me over $8,000 compared to the first quote I got! They found me an incredible installer with top-tier equipment. The whole process was seamless." },
    { who: "The Thompson Family", loc: "Austin, TX", i: "T", q: "We were so confused about solar until we found Hybrid Energy. They explained everything clearly and matched us with the perfect TPO system. Our electric bill is now practically zero and we didn't pay anything upfront!" },
    { who: "David Chen", loc: "San Diego, CA", i: "D", q: "Best decision ever! Hybrid Energy compared multiple installers and got me the best deal with a Tesla Powerwall included. Our home stayed powered during the last blackout." },
    { who: "Sarah Williams", loc: "Denver, CO", i: "S", q: "The transparency was refreshing. No pressure, just honest advice. They found me $0 down financing and my monthly payment is less than my old electric bill!" }
  ],
  es: [
    { who: "Familia Martínez", loc: "Miami, FL", i: "M", q: "Hybrid Energy hizo que cambiarnos a energía solar fuera súper fácil para nuestra familia. Se encargaron de todo y nos mantuvieron informados. El instalador con el que nos conectaron fue muy profesional y terminó antes de tiempo. ¡A nuestros hijos les encanta saber que ayudamos al planeta!" },
    { who: "Emily Johnson", loc: "Seattle, WA", i: "E", q: "Investigué sobre energía solar durante meses y estaba abrumada. Hybrid Energy simplificó todo y me consiguió mejores precios de los que pude encontrar por mi cuenta. La opción TPO fue perfecta para mi presupuesto. ¡Totalmente recomendados!" },
    { who: "James Patterson", loc: "Atlanta, GA", i: "J", q: "El equipo de Hybrid Energy realmente conoce el tema. Compararon todas las opciones en mi zona y me consiguieron paneles de primera calidad a un precio excelente. ¡El valor de mi casa también subió!" },
    { who: "Familia Anderson", loc: "Portland, OR", i: "A", q: "Pasarnos a solar estuvo en nuestra lista de deseos por años. ¡Hybrid Energy lo hizo realidad en pocas semanas! Son verdaderos defensores del propietario, no una simple empresa de ventas." },
    { who: "Michael Rodríguez", loc: "Phoenix, AZ", i: "M", q: "¡Hybrid Energy me ahorró más de $8,000 comparado con la primera cotización que recibí! Me encontraron un instalador increíble con equipos de primer nivel. Todo el proceso fue impecable." },
    { who: "Familia Thompson", loc: "Austin, TX", i: "T", q: "Estábamos muy confundidos hasta que encontramos Hybrid Energy. Nos explicaron todo claramente y nos recomendaron el sistema TPO perfecto. ¡Nuestra factura de luz ahora es prácticamente cero y no pagamos nada por adelantado!" },
    { who: "David Chen", loc: "San Diego, CA", i: "D", q: "¡La mejor decisión de mi vida! Hybrid Energy comparó múltiples instaladores y me consiguió la mejor oferta con una batería Tesla Powerwall incluida. Nuestra casa se mantuvo con luz durante el último apagón." },
    { who: "Sarah Williams", loc: "Denver, CO", i: "S", q: "La transparencia fue refrescante. Sin presiones, solo asesoría honesta. Me consiguieron financiamiento con $0 de enganche y mi pago mensual es menor que mi factura de luz anterior." }
  ]
};

/* State */
let currentLang = localStorage.getItem("hybrid_lang") || "en";
let currentTheme = localStorage.getItem("hybrid_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

/* Mobile menu */
const burger = $("#burger"), nav = $("#nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

/* Impact numbers count-up */
const counters = document.querySelectorAll("[data-count]");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target;
      const end = +el.dataset.count;
      const suf = el.dataset.suffix || "";
      const t0 = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / 1400, 1);
        const current = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = current.toLocaleString("en-US") + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.3 });
  counters.forEach((c) => io.observe(c));
}

/* Reviews Marquee */
const track = $("#track");
function createCard(r) {
  return `
    <div class="review-card">
      <div class="review-top">
        <div class="review-av">${r.i}</div>
        <div>
          <div class="review-name">${r.who}</div>
          <div class="review-loc">${r.loc}</div>
        </div>
      </div>
      <div class="review-stars">★★★★★</div>
      <p class="review-quote">"${r.q}"</p>
    </div>
  `;
}

function renderReviews(lang) {
  if (!track) return;
  const list = REVIEWS[lang] || REVIEWS.en;
  track.innerHTML = list.map(createCard).join("") + list.map(createCard).join("");
}

/* Messaging (SMS & WhatsApp) */
function buildTemplateMessage() {
  const name = $("#f-name")?.value.trim() || "";
  const email = $("#f-email")?.value.trim() || "";
  const phone = $("#f-phone")?.value.trim() || "";
  const bill = $("#f-bill")?.value.trim() || "";
  const address = $("#f-address")?.value.trim() || "";

  if (currentLang === "es") {
    return (
      `¡Hola! Me gustaría solicitar una cotización de energía solar con Hybrid Energy.\n\n` +
      `• Nombre Completo: ${name}\n` +
      `• Correo Electrónico: ${email}\n` +
      `• Teléfono: ${phone}\n` +
      `• Factura Mensual de Luz: ${bill}\n` +
      `• Dirección del Hogar: ${address}`
    );
  }

  return (
    `Hello! I would like a solar energy quote from Hybrid Energy.\n\n` +
    `• Full Name: ${name}\n` +
    `• Email Address: ${email}\n` +
    `• Phone Number: ${phone}\n` +
    `• Monthly Electric Bill: ${bill}\n` +
    `• Home Address: ${address}`
  );
}

function getSmsUrl() {
  const msg = buildTemplateMessage();
  // iOS Safari usa '&body=' enquanto Android/outros navegadores usam '?body='
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const sep = isIOS ? "&" : "?";
  return `sms:+${CONFIG.PHONE}${sep}body=${encodeURIComponent(msg)}`;
}

function getWhatsAppUrl() {
  const msg = buildTemplateMessage();
  return `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function updateSmsLinks() {
  document.querySelectorAll('a[href^="sms:"], #smsBtn, .sms-link').forEach((link) => {
    link.href = getSmsUrl();
  });
}

/* SMS Links */
document.querySelectorAll('a[href^="sms:"], #smsBtn, .sms-link').forEach((link) => {
  link.href = getSmsUrl();
  link.addEventListener("click", () => {
    link.href = getSmsUrl();
  });
});

/* WhatsApp Links */
document.querySelectorAll('a[href*="wa.me"], #wa, .wa-link').forEach((link) => {
  if (CONFIG.WHATSAPP) {
    link.href = getWhatsAppUrl();
    link.target = "_blank";
    link.rel = "noopener";
    link.addEventListener("click", () => {
      link.href = getWhatsAppUrl();
    });
  } else {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      notify(currentLang === "es" ? "Número de WhatsApp no configurado." : "WhatsApp number not configured yet.", true);
    });
  }
});

/* ============================================================
   THEME TOGGLE (LIGHT / DARK)
   ============================================================ */
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("hybrid_theme", theme);
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? (currentLang === "es" ? "Cambiar a tema claro" : "Switch to light theme")
        : (currentLang === "es" ? "Cambiar a tema oscuro" : "Switch to dark theme")
    );
  }
}

const themeToggle = $("#themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

/* ============================================================
   LANGUAGE TOGGLE (EN / ES)
   ============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("hybrid_lang", lang);
  document.documentElement.lang = lang;

  const dict = I18N[lang] || I18N.en;

  // Atualiza elementos de texto simples
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Atualiza placeholders dos inputs
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Atualiza botão do idioma
  const langLabel = $("#langLabel");
  const langToggle = $("#langToggle");
  if (langLabel) langLabel.textContent = dict.lang_toggle;
  if (langToggle) langToggle.setAttribute("aria-label", dict.lang_aria);

  // Atualiza depoimentos
  renderReviews(lang);

  // Atualiza templates de SMS
  updateSmsLinks();

  // Atualiza aria-label do tema
  setTheme(currentTheme);
}

const langToggle = $("#langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = currentLang === "es" ? "en" : "es";
    setLanguage(nextLang);
  });
}

/* Lead Form */
const form = $("#form"), msg = $("#msg"), submitBtn = $("#submitBtn");
function notify(text, isError) {
  if (!msg) return;
  msg.textContent = text;
  msg.classList.toggle("err", !!isError);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = I18N[currentLang] || I18N.en;

    let ok = true;
    const requiredInputs = form.querySelectorAll("input[required]");
    requiredInputs.forEach((i) => {
      const bad = !i.value.trim();
      i.classList.toggle("err", bad);
      if (bad) ok = false;
    });

    if (!ok) {
      return notify(dict.msg_required, true);
    }

    const d = Object.fromEntries(new FormData(form));
    const consent = form.querySelector('[name="sms_consent"]')?.checked ? "Yes" : "No";
    const body =
      `Name: ${d.name}\n` +
      `Email: ${d.email}\n` +
      `Phone: ${d.phone}\n` +
      `Monthly Electric Bill: ${d.bill}\n` +
      `Home Address: ${d.address}\n` +
      `SMS Consent: ${consent}`;

    if (!CONFIG.EMAIL) {
      console.info("Lead submission payload:\n" + body);
      return notify(currentLang === "es" ? "E-mail de destino no configurado." : "Destination email not configured yet.", true);
    }

    if (CONFIG.USE_FORMSUBMIT) {
      const originalText = submitBtn ? submitBtn.textContent : dict.form_btn;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = dict.form_btn_sending;
      }
      notify(dict.form_btn_sending, false);

      fetch(`https://formsubmit.co/ajax/${CONFIG.EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: currentLang === "es" ? "Nueva Solicitud de Análisis Solar - Hybrid Energy" : "New Solar Analysis Request - Hybrid Energy",
          _replyto: d.email,
          _template: "table",
          _captcha: "false",
          "Full Name": d.name,
          "Email Address": d.email,
          "Phone Number": d.phone,
          "Monthly Electric Bill": d.bill,
          "Home Address": d.address,
          "SMS Consent": consent,
          "Language": currentLang.toUpperCase()
        })
      })
        .then((res) => {
          if (!res.ok) throw new Error("Submission failed");
          return res.json();
        })
        .then(() => {
          notify(dict.msg_success, false);
          form.reset();
        })
        .catch((err) => {
          console.warn("FormSubmit error, falling back to mail client:", err);
          location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("New Solar Analysis Request - Hybrid Energy")}&body=${encodeURIComponent(body)}`;
          notify(dict.msg_success, false);
          form.reset();
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = dict.form_btn;
          }
        });
    } else {
      location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("New Solar Analysis Request - Hybrid Energy")}&body=${encodeURIComponent(body)}`;
      notify(dict.msg_success, false);
      form.reset();
    }
  });
}

const yr = $("#year");
if (yr) {
  yr.textContent = new Date().getFullYear();
}

/* Initialization */
setTheme(currentTheme);
setLanguage(currentLang);
