
import React from "react";
import { Link } from "react-scroll";
import { Download, Linkedin } from "lucide-react";

export default function Navbar() {
  const items = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
    { to: "education", label: "Education" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-xl text-ink">GM</a>
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              offset={-72}
              spy={true}
              smooth={true}
              duration={1}
              className="cursor-pointer text-slate-700 hover:text-ink transform transition-transform duration-300 hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/murshed1002"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50"
            target="_blank" rel="noreferrer"
          >
            <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-ink text-white hover:opacity-90"
          >
            <Download size={18} /> <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
