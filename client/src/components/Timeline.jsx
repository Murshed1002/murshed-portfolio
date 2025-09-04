
import React from "react";

export default function Timeline({ items }) {
  return (
    <ol className="relative border-s border-slate-200 ml-3">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 ring-8 ring-white border border-primary/30"></span>
          <h3 className="font-semibold text-ink">{item.title}</h3>
          <p className="text-sm text-slate-500 mb-1">{item.company} • {item.period}</p>
          <ul className="list-disc ps-5 text-slate-700 space-y-1">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}
