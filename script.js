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
const usd = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/* Mobile menu */
const burger = $("#burger"), nav = $("#nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

/* Savings calculator (simple estimate) */
const bill = $("#bill");
function calculate() {
  const v = +bill.value;
  const kwh = v / 0.17;                 // approx. monthly consumption (average tariff, USD/kWh)
  const kwp = kwh / 120;                // ~120 kWh/month per installed kWp
  $("#billVal").textContent = usd(v);
  $("#resYear").textContent = usd(v * 12 * 0.9);
  $("#resKwp").textContent = kwp.toLocaleString("en-US", { maximumFractionDigits: 1 }) + " kWp";
}
bill.addEventListener("input", calculate);
calculate();

/* WhatsApp */
const wa = $("#wa");
if (CONFIG.WHATSAPP) {
  wa.href = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(CONFIG.WHATSAPP_MSG)}`;
  wa.target = "_blank"; wa.rel = "noopener";
} else {
  wa.addEventListener("click", (e) => { e.preventDefault(); notify("WhatsApp number not configured yet.", true); });
}

/* Form */
const form = $("#form"), msg = $("#msg");
function notify(t, error) { msg.textContent = t; msg.classList.toggle("err", !!error); }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("input").forEach((i) => {
    const bad = !i.value.trim() || !i.checkValidity();
    i.classList.toggle("err", bad);
    if (bad) ok = false;
  });
  if (!ok) return notify("Please check the highlighted fields.", true);

  const d = Object.fromEntries(new FormData(form));
  const body =
    `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\n` +
    `Monthly bill: $${d.bill}\nAddress: ${d.address}`;

  if (CONFIG.EMAIL) {
    // Opens the visitor's email app. For automatic delivery, replace with a fetch() to your form service/back-end.
    location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("New quote request - Hybrid Energy")}&body=${encodeURIComponent(body)}`;
  } else {
    console.info("Form submitted (destination email not configured):\n" + body);
  }
  notify("Request received! We will contact you within 24 hours.");
  form.reset();
});

$("#year").textContent = new Date().getFullYear();
