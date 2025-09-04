
import React from "react";

export default function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}
