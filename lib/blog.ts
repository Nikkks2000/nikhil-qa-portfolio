export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "building-in-public-qa-toolkit",
    title: "Why I'm building QA tools instead of just doing QA",
    date: "2026-07-15",
    readTime: "4 min",
    excerpt:
      "Two years into manual and automation testing, the templates I kept rebuilding for every project turned into a product. Here's the reasoning.",
    content: [
      "Every new project starts the same way: set up a test plan, write checklists from scratch, wire up an API testing collection. After doing this enough times across healthcare and banking projects, the checklists stopped changing much — only the product did.",
      "That repetition is the whole reason this site exists. Instead of rebuilding the same structure every time, I packaged it — checklists, an API testing starter kit, and small automation tools — so other testers don't have to start from a blank page either.",
      "This is also a build-in-public log. Future posts will cover what's shipped, what didn't work, and real numbers once there are some to share — no inflated claims before there's data to back them up.",
    ],
  },
  {
    slug: "api-testing-checklist-basics",
    title: "The API testing checklist I actually use",
    date: "2026-07-02",
    readTime: "5 min",
    excerpt:
      "Auth, status codes, schema validation, edge cases — the core checklist that catches most API bugs before they reach staging.",
    content: [
      "Most API bugs fall into a handful of buckets: broken auth, wrong status codes, unvalidated input, and schema drift after a backend change. A short, repeatable checklist catches the majority of these before code even reaches staging.",
      "Auth first: test with a valid token, an expired token, no token, and a token for a different user/role. Then status codes: confirm 2xx on success, and that failures return the right 4xx/5xx — not a 200 with an error message buried in the body.",
      "Input validation matters more than teams expect: send missing required fields, wrong types, and boundary values (empty strings, huge numbers, unicode). Finally, check the response schema against what the frontend actually expects — this is where REST Assured or a solid Postman collection earns its keep, since you can automate the whole checklist once and rerun it on every change.",
    ],
  },
];
