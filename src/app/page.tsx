import ProfileCard from "@/components/ProfileCard";
import { JSX } from "react";
import Image from "next/image";

export default function HomePage(): JSX.Element {
  return (
    <main className="px-6 py-6">
      <section className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text">
          Développeur Full Stack & DevOps
        </h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          Passionné par le développement web, l&apos;automatisation et les défis
          techniques en entreprise 🚀
        </p>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-8">
        <ProfileCard />
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Salut, c&apos;est Kamli Mohamed
          </h1>
          <h1 className="text-4xl  ">👋</h1>
          <p className="text-lg text-shadow-gray-700">
            Étudiant en Master 1 Expert en Informatique et Systèmes
            d&apos;Information à l&apos;EPSI Paris, je recherche une alternance
            de 24 mois en développement Full Stack et DevOps, avec un rythme de
            1 semaine en école et 2 semaines en entreprise.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 animate-fade-slide">
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-cyan-500/50"
            >
              📩 Me contacter
            </a>

            <a
              href="/cv"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 hover:shadow-green-500/50"
            >
              📄 Voir mon CV
            </a>
            <a
              href="/projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 hover:shadow-pink-500/50"
            >
              📂 Voir mes projets
            </a>

            <a
              href="/about"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:from-indigo-500 hover:to-blue-700 transition-all duration-300 hover:shadow-purple-500/50"
            >
              👤 À propos de moi
            </a>
          </div>
        </div>
      </section>
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">
          🛠️ Stack technique
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center">
          {[
            { name: "React", icon: "/icons/React.svg" },
            { name: "Angular", icon: "/icons/Angular.svg" },
            { name: "Java", icon: "/icons/Java.svg" },
            { name: "Python", icon: "/icons/Python.svg" },
            { name: ".Net", icon: "/icons/NET_core.svg" },
            { name: "Node.js", icon: "/icons/Node.js.svg" },
            { name: "Docker", icon: "/icons/Docker.svg" },
            { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
            { name: "MySQL", icon: "/icons/MySQL.svg" },
            { name: "GitLab CI/CD", icon: "/icons/GitLab.svg" },
            { name: "CSharp", icon: "/icons/CSharp.svg" },
            { name: "Spring Boot", icon: "/icons/Spring.svg" },
          ].map((tech) => (
            <div key={tech.name} className="group">
              <Image
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mx-auto transition-transform group-hover:scale-110"
                width={300}
                height={300}
              />
              <p className="mt-2 text-sm text-gray-300 group-hover:text-[#38bdf8]">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">
          🚀 Mon workflow DevOps
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center items-center text-white">
          {[
            { label: "Code", icon: "🧑‍💻" },
            { label: "Build", icon: "⚙️" },
            { label: "Test", icon: "🧪" },
            { label: "Deploy", icon: "🚀" },
            { label: "Monitor", icon: "📈" },
          ].map((step) => (
            <div
              key={step.label}
              className={`rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-3xl mb-2">{step.icon}</div>
              <p className="text-sm font-semibold">{step.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
