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
      "Manual triage of test failures was slow. Every failed automation run required engineers to inspect logs manually, determine severity and create GitHub issues before the development team could begin fixing defects.",
    solution:
      "Built an n8n workflow powered by an AI Agent that analyzes automation reports, classifies failures, routes critical issues to Slack for human approval and automatically creates GitHub issues for lower-priority defects while logging every execution in PostgreSQL.",
    result:
      "Reduced test failure triage from hours to under one minute, improved defect response time and standardized the complete QA reporting workflow.",
  },

  {
    slug: "banking-web-automation-framework",
    id: "TC-02",
    title: "Banking Web Automation Framework",
    tag: "Selenium · Java · TestNG",
    summary:
      "Designed a scalable Selenium WebDriver automation framework using Java, TestNG and the Page Object Model for banking application regression testing.",
    stack: ["Java", "Selenium", "TestNG", "Maven", "Page Object Model", "Git"],
    problem:
      "Regression testing before every banking release was repetitive, time-consuming and prone to manual execution errors, delaying production deployments.",
    solution:
      "Developed a reusable Selenium framework with Java, TestNG and Maven. Implemented the Page Object Model, reusable utilities, explicit waits, test reporting and cross-browser execution to simplify maintenance and improve stability.",
    result:
      "Reduced regression testing effort by over 70%, improved automation reliability and enabled faster release validation across multiple banking modules.",
  },

  {
    slug: "healthcare-api-testing-framework",
    id: "TC-03",
    title: "Healthcare API Testing Framework",
    tag: "REST Assured · Postman · SQL",
    summary:
      "Automated REST API validation for healthcare applications using REST Assured with backend database verification through SQL.",
    stack: ["REST Assured", "Postman", "SQL", "Swagger", "JUnit"],
    problem:
      "Healthcare APIs required repeated validation of authentication, request payloads, response data and database consistency during every sprint.",
    solution:
      "Built automated API test suites using REST Assured, validated HTTP responses, authentication, business rules and verified backend database records using SQL queries. Integrated API collections with Postman for exploratory testing.",
    result:
      "Improved API regression coverage, detected integration defects earlier, reduced manual API testing effort and increased confidence before production releases.",
  },
];
