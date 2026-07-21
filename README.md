# Nikhil Patil — QA Portfolio & Shop

Next.js + Tailwind CSS starter site: portfolio + digital product shop for QA/testing tools.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (recommended: Vercel)
1. Push this folder to a GitHub repo
2. Import the repo at vercel.com → deploy (auto-detects Next.js)
3. Add your custom domain in Vercel project settings

## Before going live — checklist
- [ ] Replace placeholder email in `app/contact/page.tsx` with your real business email
- [ ] Replace LinkedIn `#` link in `app/contact/page.tsx`
- [ ] Update legal business name in `app/legal/terms/page.tsx`, `privacy`, `refund` pages
- [ ] Get Razorpay account activated (PAN + bank details), then wire the "Buy now" buttons in `app/shop/page.tsx` to real Razorpay Checkout or Payment Links
- [ ] Set up product delivery: on payment success, email the download link (Razorpay webhooks + a mail service like Resend, or start manually for the first sales)
- [ ] Add Google Analytics 4, Search Console verification, and Microsoft Clarity snippet in `app/layout.tsx`
- [ ] Replace placeholder project descriptions in `components/ProjectsGrid.tsx` with your real case studies if you want more detail
- [ ] Buy a custom domain and point it at Vercel

## Structure
- `app/page.tsx` — home (hero, trust bar, projects, shop preview)
- `app/shop/page.tsx` — full product listing
- `app/contact`, `app/faq`, `app/legal/*` — supporting pages
- `lib/products.ts` — edit this file to add/change products
- `components/` — all reusable UI pieces

## Phase 2 additions (this update)
- **Lead magnet**: home page email capture (`components/EmailCapture.tsx`) posts to `app/api/subscribe/route.ts` — currently a stub that logs the email. Wire it to Mailchimp/ConvertKit/Resend before launch (see comments in the route file).
- **CTA banners**: reusable `components/CtaBanner.tsx`, now on home page + FAQ page. Drop it on any page with custom heading/link.
- **Bundle product**: "Complete QA Toolkit" in `lib/products.ts` — 20% cheaper than buying both separately, flagged with a "Best value" badge on the shop page.
- **Coupon codes**: shop page has a coupon input (`components/ShopClient.tsx`) with two demo codes — `QA10` (10% off) and `LAUNCH20` (20% off) — defined in `lib/products.ts`. This is client-side only for now; before launch, create matching coupons in Razorpay so the discount is actually enforced at checkout.

## Still not done (optional, Phase 2 tail)
- Affiliate/referral program — skipped for now since it needs a tracking mechanism (referral links + payout logic); flag if you want this built next.

## Phase 3 additions (this update)
- **Case studies**: `/work/[slug]` — each project now has a full Problem/Solution/Result page, linked from the homepage project cards. Edit content in `lib/projects.ts`.
- **Blog**: `/blog` + `/blog/[slug]` — 2 starter posts in `lib/blog.ts`. Add new posts by adding an object to that array.
- **Testimonials**: `components/Testimonials.tsx` — shows an honest "no reviews yet" state until you add real ones to `lib/testimonials.ts`. Intentionally not pre-filled with fake reviews.
- **Free tool**: `/tools/test-data-generator` — a real, working client-side tool (sample user records + edge-case strings for form/API testing). No backend, no API key, good for organic traffic/SEO too.
- **Premium (coming soon)**: `/premium` — waitlist page for a future membership, using the same email capture component.
- Nav updated with Blog link; footer updated with Free Tools + Premium links.

## Not built (flag if you want these)
- Video demos — no video hosting/embeds set up yet; add a YouTube/Loom embed component once you have footage.
- Affiliate/referral program — still needs tracking + payout logic, bigger scope.

## Light/dark mode + SaaS polish (this update)
- Added `next-themes` — toggle button in the navbar (sun/moon icon), defaults to dark.
- Light mode tokens live in `app/globals.css` under `:root`; dark mode overrides under `.dark`. Same accent green, tuned per background for contrast.
- Rounded corners softened across cards/buttons (`rounded-xl`/`rounded-2xl`) and nav text switched from mono to regular sans for a cleaner, more corporate SaaS feel — kept mono for tags, code, and prices where it adds meaning.
- Test locally with `npm run dev` and click the toggle — check both modes on the shop and blog pages too, not just the homepage.
