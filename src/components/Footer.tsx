import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 📌 Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-cyan-400 transition-colors"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-cyan-400 transition-colors"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 📩 Boutons dynamiques */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Actions</h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-cyan-500/50 text-center"
            >
              📩 Me contacter
            </Link>
            <Link
              href="/cv"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 hover:shadow-green-500/50 text-center"
            >
              📄 Voir mon CV
            </Link>
          </div>
        </div>

        {/* 🌐 Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Réseaux</h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/s-kamli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/LinkedIn.svg"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </a>
            <a
              href="https://github.com/simohamedK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                className="w-8 h-8 hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </a>
            {/* WhatsApp direct */}
            <a
              href="https://wa.me/33767540608"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-8 h-8 hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </a>
            {/* Gmail direct */}
            <a href="mailto:Kamlimohamed.fr@gmail.com">
              <Image
                src="/icons/gmail.svg"
                alt="Gmail"
                className="w-8 h-8 hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>

      {/* ⚙️ Bas de page */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kamli Mohamed — Tous droits réservés.
      </div>
    </footer>
  );
}
