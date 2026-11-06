# Ethiopic Digital Solutions — Construction QS Landing Page

A responsive Cloudflare Workers Static Assets landing page using the actual product cover and screenshots supplied in the conversation.

## Included
- Responsive, mobile-first landing page
- Product overview, dashboard showcase, interactive module tabs, 12-report list, workflow, audience, FAQ and repeated Ye-Buna purchase CTAs
- Screenshot lightbox, mobile sticky purchase bar and navigation menu
- Preserves fbclid and UTM attribution parameters when visitors click through to Ye-Buna
- Optional Meta Pixel and WhatsApp configuration placeholders
- Cloudflare Wrangler configuration

## Deploy to Cloudflare Workers

1. Install Node.js on your computer (or use a supported Cloudflare deployment environment).
2. Install Wrangler: `npm install -g wrangler`
3. Log in: `npx wrangler login`
4. From this folder, deploy: `npx wrangler deploy`

The Worker serves static assets from `public/`. Cloudflare will provide a `workers.dev` address if workers.dev is enabled for your account.

## Before running paid campaigns
- Open `public/scripts.js` and set `META_PIXEL_ID` to your actual Meta Pixel ID. Leave blank to disable Pixel.
- Set `WHATSAPP_NUMBER` to the business WhatsApp number in international digits-only format, or leave blank.
- Confirm the Ye-Buna product listing is active and the destination URL is correct.
- Test on an Android phone and verify the Pixel in Meta Events Manager.
- A checkout click is tracked as InitiateCheckout only. This page does not claim to track a completed purchase; purchase confirmation must come from Ye-Buna/Chapa or a verified server-side event.

## Notes
- No price is hard-coded; visitors see the current price on Ye-Buna.
- Sample dashboard figures shown in screenshots are demonstration data, not customer results.
- Replace screenshots if the workbook interface is updated.
