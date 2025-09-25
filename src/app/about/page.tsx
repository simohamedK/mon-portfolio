"use client";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-slide");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10">
      {/* Hero */}
      <section className="text-center mb-12 fade-slide">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
          <img
            src="/Ma_Photo.jpeg"
            alt="Kamli Mohamed"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Mohamed Kamli
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Étudiant Master 1 — Développeur Full Stack & DevOps
        </p>
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <a
            href="mailto:kamlimohamed.fr@gmail.com"
            className="hover:text-cyan-400"
          >
            📧 kamlimohamed.fr@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/S-Kamli"
            target="_blank"
            className="hover:text-cyan-400"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://wa.me/33767540608"
            target="_blank"
            className="hover:text-cyan-400"
          >
            📱 WhatsApp
          </a>
        </div>
      </section>

      {/* Profil */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Profil</h2>
        <p className="text-gray-300 leading-relaxed">
          Étudiant en Master 1 Expert en Informatique et Systèmes d'information
          à l'EPSI Paris, je recherche une alternance de 24 mois en
          développement Full Stack & DevOps. Passionné par la création de
          solutions innovantes, je combine compétences techniques et esprit
          d'équipe pour contribuer à des projets ambitieux.
        </p>
      </section>

      {/* Compétences techniques */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Compétences techniques
        </h2>

        {/* Frontend */}
        <h3 className="text-lg font-semibold text-blue-400 mt-4">Frontend</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "Vue.js",
            "TailwindCSS",
            "Bootstrap",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-black transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Backend */}
        <h3 className="text-lg font-semibold text-green-400 mt-6">Backend</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            "Node.js",
            "Express.js",
            "Java",
            "Spring Boot",
            "Python",
            "Django",
            "Flask",
            "PHP",
            "Laravel",
            "C#",
            "ASP.NET",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-green-500 hover:text-black transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bases de données */}
        <h3 className="text-lg font-semibold text-yellow-400 mt-6">
          Bases de données
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {["MySQL", "PostgreSQL", "MongoDB", "SQLite"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-yellow-500 hover:text-black transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* DevOps */}
        <h3 className="text-lg font-semibold text-purple-400 mt-6">
          DevOps & Outils
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            "Docker",
            "Kubernetes",
            "Git",
            "GitLab CI/CD",
            "Jenkins",
            "Bash",
            "Linux",
            "Nginx",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-purple-500 hover:text-black transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Expériences */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Expériences professionnelles
        </h2>
        <ul className="space-y-6">
          <li>
            <strong>Développeur Full Stack — CHU</strong> (06/2024 - 09/2024)
            <p className="text-gray-400 text-sm">
              Angular 16, Spring Boot 3, MySQL 8, Docker
            </p>
            <p className="text-gray-300">
              Développement d’une application de gestion hospitalière,
              intégration API REST, optimisation des performances et déploiement
              via Docker.
            </p>
          </li>
          <li>
            <strong>Développeur Web & Mobile — ESISA</strong> (03/2023 -
            07/2023)
            <p className="text-gray-400 text-sm">Java EE, Flutter, MySQL</p>
            <p className="text-gray-300">
              Création d’une plateforme éducative et application mobile, gestion
              des données et mise en place d’authentification sécurisée.
            </p>
          </li>
          <li>
            <strong>Développeur Web — IT Advisor SARL</strong> (07/2022 -
            09/2022)
            <p className="text-gray-400 text-sm">
              HTML, CSS, JS, Python, PHP, React, MongoDB
            </p>
            <p className="text-gray-300">
              Refonte de site web, ajout de fonctionnalités interactives,
              intégration de bases NoSQL et automatisation de tâches.
            </p>
          </li>
        </ul>
      </section>

      {/* Formations animées */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Formations
        </h2>
        <div className="relative border-l-4 border-cyan-400 pl-8">
          {[
            {
              date: "2025 - 2027",
              title: "Master Expert en Informatique",
              school: "EPSI Paris",
            },
            {
              date: "2024",
              title: "Ingénierie des Systèmes d'information",
              school: "ESISA",
            },
            { date: "2023", title: "Ingénierie logicielle", school: "ESISA" },
          ].map((formation, idx) => (
            <div key={idx} className="mb-8 fade-slide relative">
              <div className="absolute -left-7 top-1 w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-lg font-semibold">{formation.title}</h3>
              <p className="text-gray-400">
                {formation.school} — {formation.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Centres d'intérêt */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Centres d'intérêt
        </h2>
        <p className="text-gray-300 mb-4">
          En tant que développeur Full Stack & DevOps, je m'intéresse à tout ce
          qui peut enrichir mes compétences techniques et ma créativité.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Open source",
            "Veille technologique",
            "Hackathons",
            "Développement mobile",
            "Intelligence artificielle",
            "Cloud computing",
            "Sécurité informatique",
            "Automatisation",
            "UI/UX Design",
            "Optimisation des performances",
            "Architecture logicielle",
            "Apprentissage continu",
            "Partage de connaissances",
            "Sport",
            "Voyages",
            "Photographie",
            "Gaming",
            "Lecture tech",
          ].map((interest) => (
            <span
              key={interest}
              className="bg-gray-800 px-3 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition-colors"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto mb-12 fade-slide">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
          Certifications
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li>NDG Linux Essentials — Cisco Networking Academy</li>
          <li>Cisco CCNA 1 — Introduction aux réseaux</li>
          <li>JavaScript — OpenClassrooms</li>
          <li>Python — OpenClassrooms</li>
        </ul>
      </section>
    </main>
  );
}
