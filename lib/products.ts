export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  description: string;
  includes: string[];
  bundle?: boolean;
};

export const products: Product[] = [
  {
    slug: "qa-testing-checklist-pack",
    name: "QA Testing Checklist Pack",
    tagline: "20 checklists for web, API and mobile testing",
    price: 299,
    description:
      "The exact checklists used to test production features across healthcare and banking projects — functional, regression, API and cross-browser, ready to adapt to your project.",
    includes: [
      "20 ready-to-use checklists (PDF + editable Sheet)",
      "Functional, regression, API, mobile & cross-browser coverage",
      "Bug report template included",
      "Instant download after payment",
    ],
  },
  {
    slug: "api-testing-starter-kit",
    name: "API Testing Starter Kit",
    tagline: "REST Assured + Postman collection, ready to run",
    price: 499,
    description:
      "A working REST Assured project skeleton plus a Postman collection with authentication, chained requests and assertion examples — clone it and start testing your own API in minutes.",
    includes: [
      "REST Assured Java project (Maven-ready)",
      "Postman collection with environment variables",
      "Sample assertions for auth, CRUD & error flows",
      "Setup walkthrough (PDF)",
    ],
  },
  {
    slug: "complete-qa-toolkit-bundle",
    name: "Complete QA Toolkit",
    tagline: "Both kits together — save 20%",
    price: 639,
    originalPrice: 798,
    bundle: true,
    description:
      "Everything above in one bundle: the full checklist pack and the API testing starter kit, at a bundled price.",
    includes: [
      "QA Testing Checklist Pack (20 checklists)",
      "API Testing Starter Kit (REST Assured + Postman)",
      "20% cheaper than buying separately",
      "Instant download after payment",
    ],
  },
];

// Static demo coupons — client-side only. For real discounts before launch,
// create matching coupon codes in Razorpay (Payment Links support coupons)
// so the discount is actually enforced at checkout, not just shown in the UI.
export const coupons: Record<string, number> = {
  QA10: 10,
  LAUNCH20: 20,
};
