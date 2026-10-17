# Techno Aabid Store — Starter Website

A static, mobile-friendly product catalog with WhatsApp order links. This starter version intentionally has **no login, wallet, checkout, or payment processing**.

## Included
- Responsive dark gaming storefront
- Product cards for Snake Engine, KOS Engine, AimAI, and Shinigami
- Game and duration selectors
- Buy buttons that open WhatsApp with a pre-filled order enquiry
- Product filters and mobile navigation

## Before launch
- Review the product names, supported game/duration options, and terms.
- Replace the placeholder price text after the owner provides the new price list.
- Confirm the WhatsApp number in `script.js`.
- Ensure products and sales comply with relevant game/service terms and local laws.

## Deploy on Vercel
1. Create a new GitHub repository, e.g. `techno-aabid-store-website`.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder to the repository root.
3. In Vercel, choose **Add New → Project**, import the new repository, and deploy.
4. No build command or environment variables are needed for this static starter.
5. Vercel will assign a `.vercel.app` URL. A custom domain can be added later.

Vercel Git deployments can automatically redeploy on pushes to the connected repository. See:
https://vercel.com/docs/git
https://vercel.com/docs/deployments/overview


## Catalogue update
This version has filterable categories for Engines, Strikers, Pucks, Stickers & Emojis, and Other Items. Prices are intentionally omitted. Each Buy button opens WhatsApp with the selected item name. The product visuals are editable illustrative placeholders; replace them with your own logo and product images when ready. The layout is inspired by common game-shop catalogues and is not an exact copy of Miniclip's official shop.
