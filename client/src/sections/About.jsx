
import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <Card>
        <p className="text-slate-700 leading-relaxed">
          {profile.summary} I enjoy building resilient services, clean APIs, and frontends that make complex workflows simple.
        </p>
      </Card>
    </Section>
  );
}
