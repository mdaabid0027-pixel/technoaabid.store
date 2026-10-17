const WHATSAPP_NUMBER = "917372067845";
const productNames = {"item1": "Snake Engine", "item2": "KOS Engine", "item3": "AimAI", "item4": "Shinigami", "item5": "Donut Striker", "item6": "Kareem Striker", "item7": "Proto Striker", "item8": "Speed Striker", "item9": "Compass Striker", "item10": "Shobha Striker", "item11": "Terminator Striker", "item12": "Azure Striker", "item13": "Champion Striker", "item14": "Dracolens Striker", "item15": "Gulaal Striker", "item16": "Legend Striker", "item17": "Classic Pucks", "item18": "Neon Pucks", "item19": "Galaxy Pucks", "item20": "Flame Pucks", "item21": "Royal Pucks", "item22": "Crystal Pucks", "item23": "Shadow Pucks", "item24": "Rainbow Pucks", "item25": "Donut Sticker", "item26": "Kareem Sticker", "item27": "Proto Sticker", "item28": "Speed Sticker", "item29": "Compass Sticker", "item30": "Shobha Sticker", "item31": "Terminator Sticker", "item32": "Azure Sticker", "item33": "Bangladesh Sticker", "item34": "Champion Sticker", "item35": "Dracolens Sticker", "item36": "Gulaal Sticker", "item37": "Carrom Avatar", "item38": "Carrom Trails", "item39": "Emoji Pack", "item40": "Carrom Pass"};

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
    const name = productNames[button.dataset.buy] || "Product";
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
