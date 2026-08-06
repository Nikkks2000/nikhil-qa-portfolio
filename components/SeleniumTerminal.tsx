"use client";

import { useEffect, useState } from "react";

const logs = [
  "[INFO] Starting Selenium Suite...",
  "[INFO] Launching Chrome Browser",
  "[PASS] LoginTest",
  "[PASS] DashboardTest",
  "[PASS] PatientSearchTest",
  "[PASS] AppointmentBookingTest",
  "[PASS] BillingModuleTest",
  "[PASS] LogoutTest",
  "[INFO] Closing Browser",
  "[SUCCESS] BUILD SUCCESS",
];

export default function SeleniumTerminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= logs.length) return;

    const t = setTimeout(() => {
      setVisible((v) => v + 1);
    }, 450);

    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="rounded-3xl border border-border bg-[#0b1220] p-5 font-mono text-sm text-green-400 shadow-2xl">
      <div className="mb-4 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {logs.slice(0, visible).map((log, i) => (
        <div key={i} className="mb-2">
          {log}
        </div>
      ))}

      {visible === logs.length && (
        <div className="mt-5 border-t border-green-700 pt-4">
          Tests Run : 42
          <br />
          Passed : 42
          <br />
          Failed : 0
          <br />
          Time : 01:42
        </div>
      )}
    </div>
  );
}
