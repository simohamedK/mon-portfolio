"use client";

import Link from "next/link";
import { JSX } from "react";
export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* 👨‍💻 Logo + nom animé */}
      <div className="flex items-center gap-3 font-mono">
        <span className="text-2xl">🧑‍💻</span>
        <span className="text-green-400 text-base md:text-lg glow-text">
          kamli@dev:~$ <span className="text-white">Kamli Mohamed</span>
          <span className="cursor-blink">|</span>
        </span>
      </div>

      {/* 🔗 Liens */}
      <div className="flex gap-6 text-sm font-medium">
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
        <Link href="/contact" className="hover:text-cyan-400 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
