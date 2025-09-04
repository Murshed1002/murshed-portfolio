
import Section from "../components/Section";
import Card from "../components/Card";
import { profile } from "../data/profile";

export default function Education() {

  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <ul className="space-y-3">
            {profile.education.map((e) => (
              <li key={e.degree}>
                <p className="font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-slate-600">{e.school} • {e.period}</p>
                {e.gpa && <p className="text-sm text-slate-600">{e.gpa}</p>}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}