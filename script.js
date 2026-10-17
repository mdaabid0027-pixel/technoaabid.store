const WHATSAPP_NUMBER = "917372067845";
const productNames = {
  snake: "Snake Engine",
  kos: "KOS Engine",
  aimai: "AimAI",
  shinigami: "Shinigami",
  striker: "Carrom Striker",
  avatar: "Carrom Avatar",
  pucks: "Carrom Pucks",
  trails: "Carrom Trails"
};

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.product !== filter);
    });
  });
});

document.querySelectorAll("[data-buy]").forEach(button => {
  button.addEventListener("click", () => {
    const name = productNames[button.dataset.buy];
    const message = `Hello Techno Aabid Store! 👋\n\nI want to enquire about: ${name}.\nPlease share the details and price. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

document.getElementById("contactWhatsApp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Techno Aabid Store! I need help with a product.")}`;

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
