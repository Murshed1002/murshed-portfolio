
import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map((p) => (
          <Card key={p.name}>
            <h3 className="text-xl font-semibold text-ink">{p.name}</h3>
            <p className="text-sm text-slate-500">{p.org} • {p.duration}</p>
            <p className="mt-3 text-slate-700">{p.description}</p>
            <ul className="mt-3 list-disc ps-5 text-slate-700">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="px-2 py-1 text-xs rounded bg-slate-100 border border-slate-200">{s}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
