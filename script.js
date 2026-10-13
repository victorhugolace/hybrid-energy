/* ========= CONFIGURATION =========
   Fill in before publishing.
   WHATSAPP: digits only, with country code and area code. E.g. "15551234567"
   EMAIL:    address that will receive the form requests. */
const CONFIG = {
  WHATSAPP: "",
  EMAIL: "",
  WHATSAPP_MSG: "Hello! I would like a solar energy quote from Hybrid Energy."
};

const $ = (s) => document.querySelector(s);

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

/* Reviews Marquee Data */
const REVIEWS = [
  { who: "The Martinez Family", loc: "Miami, FL", i: "M", q: "Hybrid Energy made going solar so easy for our family. They handled everything and kept us updated throughout. The installer they matched us with was professional and finished ahead of schedule. Our kids love knowing we're helping the planet!" },
  { who: "Emily Johnson", loc: "Seattle, WA", i: "E", q: "I researched solar for months and was overwhelmed. Hybrid Energy simplified everything and found me better pricing than I could find on my own. The TPO option was perfect for my budget. Highly recommend!" },
  { who: "James Patterson", loc: "Atlanta, GA", i: "J", q: "The team at Hybrid Energy really knows their stuff. They compared all the options in my area and got me premium panels at a great price. My home value increased too!" },
  { who: "The Anderson Family", loc: "Portland, OR", i: "A", q: "Going solar was on our list for years. Hybrid Energy made it happen in weeks! They're true advocates for homeowners, not just another sales company. Our whole family is excited about our clean energy future." },
  { who: "Michael Rodriguez", loc: "Phoenix, AZ", i: "M", q: "Hybrid Energy saved me over $8,000 compared to the first quote I got! They found me an incredible installer with top-tier equipment. The whole process was seamless." },
  { who: "The Thompson Family", loc: "Austin, TX", i: "T", q: "We were so confused about solar until we found Hybrid Energy. They explained everything clearly and matched us with the perfect TPO system. Our electric bill is now practically zero and we didn't pay anything upfront!" },
  { who: "David Chen", loc: "San Diego, CA", i: "D", q: "Best decision ever! Hybrid Energy compared multiple installers and got me the best deal with a Tesla Powerwall included. Our home stayed powered during the last blackout." },
  { who: "Sarah Williams", loc: "Denver, CO", i: "S", q: "The transparency was refreshing. No pressure, just honest advice. They found me $0 down financing and my monthly payment is less than my old electric bill!" }
];

const track = $("#track");
if (track) {
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
  // Render twice for seamless continuous scroll loop
  track.innerHTML = REVIEWS.map(createCard).join("") + REVIEWS.map(createCard).join("");
}

/* WhatsApp */
const wa = $("#wa");
if (wa) {
  if (CONFIG.WHATSAPP) {
    wa.href = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(CONFIG.WHATSAPP_MSG)}`;
    wa.target = "_blank";
    wa.rel = "noopener";
  } else {
    wa.addEventListener("click", (e) => {
      e.preventDefault();
      notify("WhatsApp number not configured yet.", true);
    });
  }
}

/* Lead Form */
const form = $("#form"), msg = $("#msg");
function notify(text, isError) {
  if (!msg) return;
  msg.textContent = text;
  msg.classList.toggle("err", !!isError);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    const requiredInputs = form.querySelectorAll("input[required]");
    requiredInputs.forEach((i) => {
      const bad = !i.value.trim();
      i.classList.toggle("err", bad);
      if (bad) ok = false;
    });

    if (!ok) {
      return notify("Please complete all required fields.", true);
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

    if (CONFIG.EMAIL) {
      location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("New Solar Analysis Request - Hybrid Energy")}&body=${encodeURIComponent(body)}`;
    } else {
      console.info("Lead submission payload:\n" + body);
    }

    notify("✓ Thanks! Your request has been received — we'll be in touch within 24 hours.", false);
    form.reset();
  });
}

const yr = $("#year");
if (yr) {
  yr.textContent = new Date().getFullYear();
}