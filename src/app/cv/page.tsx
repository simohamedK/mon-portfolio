// app/cv/page.tsx ou pages/cv.tsx
export default function CVPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
        📄 Mon CV
      </h1>

      <p className="mb-6 text-lg text-gray-300">
        Voici mon parcours et mes compétences. Vous pouvez le consulter en ligne
        ou le télécharger.
      </p>

      {/* Boutons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="/cv/KamliMohamedCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 hover:shadow-green-500/50"
        >
          📥 Télécharger mon CV
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-cyan-500/50"
        >
          📩 Me contacter
        </a>
      </div>

      {/* Aperçu du CV */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-2 max-w-[900px] mx-auto">
        <iframe
          src="/cv/KamliMohamedCV.pdf"
          className="max-w-[900px] w-full h-[90vh] rounded-lg mx-auto"
        />
      </div>
    </main>
  );
}
