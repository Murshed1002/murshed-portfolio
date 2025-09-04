
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Golam Murshed. Built with React + Tailwind.
    </footer>
  );
}
