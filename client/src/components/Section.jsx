
import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-8">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
