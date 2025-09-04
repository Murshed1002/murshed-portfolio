
import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { profile } from "../data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-6">
        {profile.skills.map((s) => (
          <Card key={s.group}>
            <h3 className="font-semibold text-ink mb-3">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm bg-slate-100 border border-slate-200">{i}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
