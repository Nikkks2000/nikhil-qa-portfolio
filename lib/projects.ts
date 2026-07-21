export type Project = {
  slug: string;
  id: string;
  title: string;
  tag: string;
  summary: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "ai-qa-automation-agent",
    id: "TC-01",
    title: "AI QA Automation Agent",
    tag: "n8n · AI Agent",
    summary:
      "An automated QA pipeline with HITL priority gating, Slack alerts and GitHub issue creation — logged end-to-end in Postgres.",
    stack: ["n8n", "Postgres", "Slack API", "GitHub API"],
    problem:
      "Manual triage of test failures was slow — every failing test needed a human to read logs, decide severity, and open a ticket before anyone could act on it.",
    solution:
      "Built an n8n workflow with an AI Agent node that reads test output, classifies severity, and routes accordingly: low-priority issues get logged straight to GitHub, high-priority ones ping Slack for human review before an issue is opened (human-in-the-loop gating).",
    result:
      "Cut the time between a test failing and a ticket existing from hours to under a minute for most cases, while keeping a human in the loop for anything ambiguous.",
  },
  {
    slug: "video-auto-captioning-saas",
    id: "TC-02",
    title: "Video Auto-Captioning SaaS",
    tag: "Full-stack · Multi-tenant",
    summary:
      "Auto-captioning for Reels & Shorts with support for Hindi and Romanized Hinglish. Async processing, JWT tenancy, Stripe billing.",
    stack: ["FastAPI", "Celery", "Redis", "Stripe"],
    problem:
      "Indian creators posting in Hindi or Hinglish were underserved by existing auto-caption tools, which mostly handle English well and mangle Romanized Hindi.",
    solution:
      "Built a FastAPI backend with Celery + Redis for async video processing, JWT-based multi-tenancy so multiple creators/agencies can use one instance safely, and Stripe for subscription billing. Added language handling tuned for Hindi and Romanized Hinglish.",
    result:
      "A working product with a 27-test suite covering the processing pipeline, billing, and auth — validated end-to-end before onboarding real users.",
  },
  {
    slug: "ecommerce-qa-audit",
    id: "TC-03",
    title: "E-commerce QA Audit",
    tag: "Manual + Defect Reporting",
    summary:
      "Full functional test pass on a live e-commerce flow — 12 logged defects with repro steps, severity and a recorded walkthrough.",
    stack: ["Manual Testing", "Bug Reporting", "Loom"],
    problem:
      "A live e-commerce site needed an independent QA pass before a hiring decision — checkout, cart and product flows hadn't been stress-tested from a QA-first lens.",
    solution:
      "Ran a structured functional test pass across the core purchase flow, logged 12 defects (BUG-001 through BUG-012) each with reproduction steps and severity, and recorded a Loom walkthrough explaining the findings.",
    result:
      "Delivered a clear, prioritized defect report plus a written task submission — used as part of a QA hiring assignment.",
  },
];
