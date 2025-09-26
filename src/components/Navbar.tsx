"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono">
          <span className="text-2xl">🧑‍💻</span>
          <span className="text-green-400 text-base md:text-lg glow-text">
            kamli@dev:~$ <span className="text-white">Kamli Mohamed</span>
            <span className="cursor-blink">|</span>
          </span>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* 🔗 Liens desktop */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">
            À propos
          </Link>
          <Link
            href="/projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* 🔗 Liens mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/projects"
            className="hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projets
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
