"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après le montage
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gmailkamli", // Service ID
        "template_01js", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "wWT4BRMpkOhbY5tHP" // Public Key
      )
      .then(() => {
        alert("✅ Message envoyé avec succès !");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("❌ Une erreur est survenue, veuillez réessayer.");
      });
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <h1
        className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        Me contacter
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 📌 Coordonnées animées avec liens */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
            📧{" "}
            <a
              href="mailto:kamlimohamed.fr@gmail.com"
              className="text-white hover:text-white hover:underline transition-colors duration-300"
            >
              kamlimohamed.fr@gmail.com
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
            📱{" "}
            <a
              href="tel:+33767540608"
              className="text-white hover:text-white hover:underline transition-colors duration-300"
            >
              +33 7 67 54 06 08
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
            💬{" "}
            <a
              href="https://wa.me/33767540608"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white hover:underline transition-colors duration-300"
            >
              WhatsApp direct
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
            💼{" "}
            <a
              href="https://linkedin.com/in/S-Kamli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white hover:underline transition-colors duration-300"
            >
              linkedin.com/in/S-Kamli
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-500 transition-all duration-300">
            🐙{" "}
            <a
              href="https://github.com/simohamedK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white hover:underline transition-colors duration-300"
            >
              https://github.com/simohamedK
            </a>
          </div>
        </div>

        {/* 📩 Formulaire */}
        <form
          onSubmit={handleSubmit}
          className={`bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Votre numéro de téléphone (facultatif)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 rounded-lg bg-gray-700 text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
          >
            📤 Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}
