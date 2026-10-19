const WHATSAPP_NUMBER = "917372067845";
const products = [{"name": "Donut Striker", "category": "strikers", "image": "assets/products/striker-donut.png", "price": 72}, {"name": "Kareem Striker", "category": "strikers", "image": "assets/products/striker-kareem.png", "price": 72}, {"name": "Proto Striker", "category": "strikers", "image": "assets/products/striker-proto.png", "price": 72}, {"name": "Speed Striker", "category": "strikers", "image": "assets/products/striker-speed.png", "price": 72}, {"name": "Compass Striker", "category": "strikers", "image": "assets/products/striker-compass.png", "price": 144}, {"name": "Shobha Striker", "category": "strikers", "image": "assets/products/striker-shobha.png", "price": 144}, {"name": "Terminator Striker", "category": "strikers", "image": "assets/products/striker-terminator.png", "price": 144}, {"name": "Azure Striker", "category": "strikers", "image": "assets/products/striker-azure-striker.png", "price": 179}, {"name": "Bangladesh Striker", "category": "strikers", "image": "assets/products/striker-bangladesh-striker.png", "price": 179}, {"name": "Champion Striker", "category": "strikers", "image": "assets/products/striker-champion.png", "price": 179}, {"name": "Dracolens Striker", "category": "strikers", "image": "assets/products/striker-dracolens.png", "price": 179}, {"name": "Gulaal Striker", "category": "strikers", "image": "assets/products/striker-gulaal.png", "price": 179}, {"name": "Happy Pixel Striker", "category": "strikers", "image": "assets/products/striker-happy-pixel.png", "price": 179}, {"name": "India Striker", "category": "strikers", "image": "assets/products/striker-india.png", "price": 179}, {"name": "Inferno Striker", "category": "strikers", "image": "assets/products/striker-inferno.png", "price": 179}, {"name": "Pakistan Striker", "category": "strikers", "image": "assets/products/striker-pakistan.png", "price": 179}, {"name": "Regalia Striker", "category": "strikers", "image": "assets/products/striker-regaliya.png", "price": 179}, {"name": "Saudi Arabia Striker", "category": "strikers", "image": "assets/products/striker-saudi-arabia.png", "price": 179}, {"name": "Serpent Striker", "category": "strikers", "image": "assets/products/striker-serpent.png", "price": 179}, {"name": "UK Striker", "category": "strikers", "image": "assets/products/striker-uk.png", "price": 179}, {"name": "USA Striker", "category": "strikers", "image": "assets/products/striker-usa.png", "price": 179}, {"name": "Veer Striker", "category": "strikers", "image": "assets/products/striker-veer.png", "price": 179}, {"name": "Volcanic Striker", "category": "strikers", "image": "assets/products/striker-volcanic.png", "price": 179}, {"name": "Precious Striker", "category": "strikers", "image": "assets/products/striker-precious.png", "price": 179}, {"name": "Donut Sticker", "category": "stickers", "image": "assets/products/striker-donut.png", "price": 72}, {"name": "Kareem Sticker", "category": "stickers", "image": "assets/products/striker-kareem.png", "price": 72}, {"name": "Proto Sticker", "category": "stickers", "image": "assets/products/striker-proto.png", "price": 72}, {"name": "Speed Sticker", "category": "stickers", "image": "assets/products/striker-speed.png", "price": 72}, {"name": "Compass Sticker", "category": "stickers", "image": "assets/products/striker-compass.png", "price": 144}, {"name": "Shobha Sticker", "category": "stickers", "image": "assets/products/striker-shobha.png", "price": 144}, {"name": "Terminator Sticker", "category": "stickers", "image": "assets/products/striker-terminator.png", "price": 144}, {"name": "Azure Sticker", "category": "stickers", "image": "assets/products/striker-azure-striker.png", "price": 179}, {"name": "Bangladesh Sticker", "category": "stickers", "image": "assets/products/striker-bangladesh-striker.png", "price": 179}, {"name": "Champion Sticker", "category": "stickers", "image": "assets/products/striker-champion.png", "price": 179}, {"name": "Dracolens Sticker", "category": "stickers", "image": "assets/products/striker-dracolens.png", "price": 179}, {"name": "Gulaal Sticker", "category": "stickers", "image": "assets/products/striker-gulaal.png", "price": 179}, {"name": "Happy Pixel Sticker", "category": "stickers", "image": "assets/products/striker-happy-pixel.png", "price": 179}, {"name": "India Sticker", "category": "stickers", "image": "assets/products/striker-india.png", "price": 179}, {"name": "Inferno Sticker", "category": "stickers", "image": "assets/products/striker-inferno.png", "price": 179}, {"name": "Pakistan Sticker", "category": "stickers", "image": "assets/products/striker-pakistan.png", "price": 179}, {"name": "Regalia Sticker", "category": "stickers", "image": "assets/products/striker-regaliya.png", "price": 179}, {"name": "Saudi Arabia Sticker", "category": "stickers", "image": "assets/products/striker-saudi-arabia.png", "price": 179}, {"name": "Serpent Sticker", "category": "stickers", "image": "assets/products/striker-serpent.png", "price": 179}, {"name": "UK Sticker", "category": "stickers", "image": "assets/products/striker-uk.png", "price": 179}, {"name": "USA Sticker", "category": "stickers", "image": "assets/products/striker-usa.png", "price": 179}, {"name": "Veer Sticker", "category": "stickers", "image": "assets/products/striker-veer.png", "price": 179}, {"name": "Volcanic Sticker", "category": "stickers", "image": "assets/products/striker-volcanic.png", "price": 179}, {"name": "Precious Sticker", "category": "stickers", "image": "assets/products/striker-precious.png", "price": 179}, {"name": "Bishop Puck", "category": "pucks", "image": "assets/products/puck-bishop.png", "price": 72}, {"name": "Cookie Puck", "category": "pucks", "image": "assets/products/puck-cookie.png", "price": 72}, {"name": "Fyreskin Puck", "category": "pucks", "image": "assets/products/puck-fyreskin.png", "price": 72}, {"name": "Rangeela Puck", "category": "pucks", "image": "assets/products/puck-rangeela.png", "price": 72}, {"name": "Rook Puck", "category": "pucks", "image": "assets/products/puck-rook.png", "price": 72}, {"name": "Zippy Puck", "category": "pucks", "image": "assets/products/puck-zippy.png", "price": 72}, {"name": "Eclipse Puck", "category": "pucks", "image": "assets/products/puck-eclipse.png", "price": 72}, {"name": "Madhu Puck", "category": "pucks", "image": "assets/products/puck-madhu.png", "price": 72}, {"name": "Splash Puck", "category": "pucks", "image": "assets/products/puck-splash.png", "price": 72}, {"name": "Dizzy Emoji", "category": "emojis", "image": "assets/products/emoji-dizzy.png", "price": 36}, {"name": "Firesticks Emoji", "category": "emojis", "image": "assets/products/emoji-firesticks.png", "price": 36}, {"name": "Flip Emoji", "category": "emojis", "image": "assets/products/emoji-flip.png", "price": 36}, {"name": "Lamp Emoji", "category": "emojis", "image": "assets/products/emoji-lamp.png", "price": 36}, {"name": "Tangled Emoji", "category": "emojis", "image": "assets/products/emoji-trangled.png", "price": 36}, {"name": "Shiver Emoji", "category": "emojis", "image": "assets/products/emoji-shiver.png", "price": 36}, {"name": "Yeah Emoji", "category": "emojis", "image": "assets/products/emoji-yeah.png", "price": 36}, {"name": "Libra Avatar", "category": "extras", "image": "assets/products/avatar-libra.png", "price": 36}, {"name": "Virgo Avatar", "category": "extras", "image": "assets/products/avatar-virgo.png", "price": 36}, {"name": "Festivals of Lights Frame", "category": "extras", "image": "assets/products/frame-festival-of-lights-frame.png", "price": 72}, {"name": "Wild Frame", "category": "extras", "image": "assets/products/frame-wild-frame.png", "price": 72}, {"name": "Burst Trails", "category": "trails", "image": "assets/products/trails-burst.png", "price": 108}, {"name": "Flame Trails", "category": "trails", "image": "assets/products/trails-flame.png", "price": 108}, {"name": "Mystic Trails", "category": "trails", "image": "assets/products/trails-mystic.png", "price": 108}, {"name": "Aqua Trails", "category": "trails", "image": "assets/products/trails-aqua.png", "price": 108}, {"name": "Verdant Trails", "category": "trails", "image": "assets/products/trails-verdent.png", "price": 108}, {"name": "Zazzle Trails", "category": "trails", "image": "assets/products/trails-zazzle.png", "price": 144}, {"name": "Scorch Trails", "category": "trails", "image": "assets/products/trails-scorch.png", "price": 144}, {"name": "Carrom Pass", "category": "extras", "image": "assets/products/additional-information-carrom-pass.png", "price": 119}, {"name": "Coins — Available Now", "category": "extras", "image": "assets/products/additional-information-coins.png", "price": 199}, {"name": "Gems — Available Now", "category": "extras", "image": "assets/products/additional-information-gems.png", "price": 250}, {"name": "Coins in Stock", "category": "extras", "image": "assets/products/additional-information-coins-stock.png", "price": 250}, {"name": "8 Ball Pool Products", "category": "extras", "image": "assets/products/additional-information-8-bp-available.png", "price": 399}];
const productGrid = document.getElementById("productGrid");
const categoryLabels = {strikers:"STRIKER COLLECTION",pucks:"PUCK COLLECTION",stickers:"STICKER COLLECTION",emojis:"EMOJI COLLECTION",trails:"TRAILS COLLECTION",extras:"OTHER ITEMS"};
productGrid.innerHTML = products.map((p, i) => `
  <article class="product-card" data-product="${p.category}">
    <button class="product-visual product-image-visual image-preview" type="button" data-preview-index="${i}" aria-label="View full image of ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.category === "extras" ? "ITEM" : p.category.replace(/s$/, "").toUpperCase()}</span><span class="zoom-hint">VIEW FULL IMAGE ↗</span></button>
    <div class="product-info"><div class="product-category">${categoryLabels[p.category] || "STORE COLLECTION"}</div><h3>${p.name}</h3>
      <div class="product-buy-row"><div class="price"><small>PRICE</small><strong>₹${p.price}.00</strong></div><button class="buy-button" data-buy-index="${i}"><span class="wa-icon">◉</span> BUY <span>↗</span></button></div>
    </div>
  </article>`).join("");


const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");
function closeImageModal(){ imageModal.classList.remove("open"); imageModal.setAttribute("aria-hidden", "true"); modalImage.src = ""; document.body.classList.remove("modal-open"); }
function openImageModal(product){ modalImage.src = product.image; modalImage.alt = product.name; modalCaption.textContent = product.name; imageModal.classList.add("open"); imageModal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); }
productGrid.addEventListener("click", (event) => { const button = event.target.closest("[data-preview-index]"); if (button) openImageModal(products[Number(button.dataset.previewIndex)]); });
modalClose.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", (event) => { if (event.target === imageModal) closeImageModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeImageModal(); });

document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      const category = card.dataset.product;
      const visible = filter === "all" || category === filter || (filter === "stickers" && category === "emojis");
      card.classList.toggle("hidden", !visible);
    });
  });
});
document.querySelectorAll("[data-buy-index]").forEach(button => {
  button.addEventListener("click", () => {
    const product = products[Number(button.dataset.buyIndex)];
    const message = `Hello Techno Aabid Store! 👋\n\nI want to order/enquire about: ${product.name}.\nListed price: ₹${product.price}.00.\nPlease confirm availability and details. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});
document.querySelectorAll("[data-feature-buy]").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.dataset.featureBuy;
    const message = `Hello Techno Aabid Store! 👋\n\nI want to enquire about: ${productName}.\nPlease share availability and details on WhatsApp. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

const contactMessage = encodeURIComponent("Hello Techno Aabid Store! I need help with a product.");
document.getElementById("contactWhatsApp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${contactMessage}`;
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
 const isOpen = nav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(isOpen)); menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.textContent = "☰"; }));

// Live catalogue search in the header
const productSearch = document.getElementById("productSearch");
if (productSearch) {
  productSearch.addEventListener("input", () => {
    const query = productSearch.value.trim().toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
      const matchesText = card.textContent.toLowerCase().includes(query);
      const categoryFilter = document.querySelector(".filter.active")?.dataset.filter || "all";
      const category = card.dataset.product;
      const matchesCategory = categoryFilter === "all" || category === categoryFilter || (categoryFilter === "stickers" && category === "emojis");
      card.classList.toggle("hidden", !(matchesText && matchesCategory));
    });
  });
}
