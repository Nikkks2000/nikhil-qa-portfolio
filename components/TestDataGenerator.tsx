"use client";

import { useState } from "react";

const firstNames = ["Aarav", "Priya", "Rohan", "Ananya", "Vikram", "Isha", "Kabir", "Meera"];
const lastNames = ["Sharma", "Patel", "Verma", "Iyer", "Reddy", "Nair", "Gupta", "Singh"];
const domains = ["example.com", "test.co.in", "mailinator.com", "demo.dev"];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDigits(n: number) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join("");
}

function generateRow() {
  const first = randomFrom(firstNames);
  const last = randomFrom(lastNames);
  return {
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}${Math.floor(
      Math.random() * 99,
    )}@${randomFrom(domains)}`,
    phone: `9${randomDigits(9)}`,
    pan: `${Array.from({ length: 5 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    ).join("")}${randomDigits(4)}${String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    )}`,
  };
}

const edgeCaseStrings = [
  "",
  " ",
  "a".repeat(255),
  "<script>alert(1)</script>",
  "' OR '1'='1",
  "😀🚀🔥",
  "null",
  "0",
  "-1",
  "नमस्ते",
  "test@test",
  "   leading and trailing spaces   ",
];

export default function TestDataGenerator() {
  const [rows, setRows] = useState(() =>
    Array.from({ length: 5 }, generateRow),
  );
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  function regenerate() {
    setRows(Array.from({ length: 5 }, generateRow));
  }

  function copyEdgeCase(str: string, i: number) {
    navigator.clipboard.writeText(str).then(() => {
      setCopiedIdx(i);
      setTimeout(() => setCopiedIdx(null), 1200);
    });
  }

  return (
    <div className="space-y-12">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">
            Sample user records
          </h2>
          <button
            onClick={regenerate}
            className="focus-ring rounded-xl border border-border px-4 py-2 font-mono text-xs hover:border-accent hover:text-accent"
          >
            Regenerate ↻
          </button>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left font-mono text-xs">
            <thead className="bg-surface-2 text-fg-muted">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">PAN (format)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r, i) => (
                <tr key={i} className="bg-surface">
                  <td className="px-4 py-3">{r.name}</td>
                  <td className="px-4 py-3">{r.email}</td>
                  <td className="px-4 py-3">{r.phone}</td>
                  <td className="px-4 py-3">{r.pan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 font-mono text-[11px] text-fg-muted">
          PAN numbers are format-valid, not real — for UI/format testing only.
        </p>
      </div>

      <div>
        <h2 className="mb-4 font-display text-lg font-semibold">
          Edge-case strings
        </h2>
        <p className="mb-4 text-sm text-fg-muted">
          Common inputs that break form validation — click to copy.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {edgeCaseStrings.map((str, i) => (
            <button
              key={i}
              onClick={() => copyEdgeCase(str, i)}
              className="focus-ring flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-2.5 text-left font-mono text-xs transition-colors hover:border-accent"
            >
              <span className="truncate text-fg-muted">
                {str === "" ? "(empty string)" : str === " " ? "(single space)" : str}
              </span>
              <span className="ml-3 shrink-0 text-accent">
                {copiedIdx === i ? "Copied ✓" : "Copy"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
