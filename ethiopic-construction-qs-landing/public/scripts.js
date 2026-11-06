(() => {
  const BUY_URL = "https://ye-buna.com/EthiopicSolutions?ref=product_detail&product=6ac3839d89dfc_EthiopicSolutions";
  const META_PIXEL_ID = ""; // Add your Meta Pixel ID here before running ads.
  const WHATSAPP_NUMBER = ""; // Optional: international format digits only, e.g. 2519XXXXXXXX.

  // Preserve advertising attribution parameters when the visitor opens Ye-Buna.
  const params = new URLSearchParams(window.location.search);
  const attribution = new URLSearchParams();
  ["fbclid","gclid","utm_source","utm_medium","utm_campaign","utm_content","utm_term","utm_id"].forEach(k => {
    if (params.has(k)) attribution.set(k, params.get(k));
  });
  const buyUrl = BUY_URL + (attribution.toString() ? "&" + attribution.toString() : "");
  document.querySelectorAll("[data-buy]").forEach(a => {
    a.href = buyUrl;
    a.addEventListener("click", () => {
      if (typeof window.fbq === "function") window.fbq("track", "InitiateCheckout", {content_name:"Construction QS System", content_category:"Digital Product"});
      try { sessionStorage.setItem("eds_last_checkout_click", new Date().toISOString()); } catch(e) {}
    });
  });

  if (META_PIXEL_ID) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID); window.fbq('track','PageView');
  }

  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  document.querySelectorAll(".module-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".module-tab").forEach(t => {t.classList.remove("active");t.setAttribute("aria-selected","false");});
      document.querySelectorAll(".module-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active"); tab.setAttribute("aria-selected","true");
      document.getElementById("panel-" + tab.dataset.panel).classList.add("active");
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");
  document.querySelectorAll("[data-lightbox]").forEach(btn => btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.lightbox; lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
  }));
  const closeLightbox = () => {lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImg.src="";};
  lightbox.querySelector("button").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {if(e.target === lightbox) closeLightbox();});
  document.addEventListener("keydown", e => {if(e.key === "Escape") closeLightbox();});
  document.getElementById("year").textContent = new Date().getFullYear();

  // Optional WhatsApp support: configure WHATSAPP_NUMBER above to reveal a floating contact shortcut.
  if (WHATSAPP_NUMBER) {
    const wa = document.createElement("a"); wa.className = "whatsapp-float";
    wa.href = "https://wa.me/" + WHATSAPP_NUMBER; wa.target = "_blank"; wa.rel = "noopener";
    wa.textContent = "WhatsApp"; wa.setAttribute("aria-label","Contact us on WhatsApp");
    document.body.appendChild(wa);
  }
})();