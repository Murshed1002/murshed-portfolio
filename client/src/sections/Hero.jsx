
import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import avatar from "../assets/profile.svg";

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-12 gradient-bg">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm tracking-wide text-slate-600">Full-Stack Developer</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mt-2">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-prose">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-ink text-white hover:opacity-90">View Projects</a>
            <a href="/resume.pdf" className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">Download Resume</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <img src={avatar} alt="Profile" className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-md border border-slate-200 bg-white p-4"/>
        </motion.div>
      </div>
    </section>
  );
}
