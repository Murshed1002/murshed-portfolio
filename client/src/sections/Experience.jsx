
import React from "react";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline items={profile.experience} />
    </Section>
  );
}
