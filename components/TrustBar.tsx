const items = [
  { value: "2+ yrs", label: "QA experience" },
  { value: "Healthcare & Banking", label: "Domains tested" },
  { value: "Selenium · REST Assured", label: "Core stack" },
  { value: "Secure checkout", label: "Razorpay payments" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold text-fg sm:text-xl">
              {item.value}
            </p>
            <p className="mt-1 font-mono text-xs text-fg-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
