"use client";

import Image from "next/image";
import { JSX } from "react";

export default function ProfileCard(): JSX.Element {
  return (
    <section className="flex justify-center mt-16 px-6">
      <div className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center border border-gray-700">
        <div className="flex justify-center mb-4">
          <div className="w-44 h-44 rounded-full border-4 border-[#38bdf8] shadow-lg overflow-hidden">
            <Image
              src="/Ma_Photo.jpeg"
              alt="Kamli Mohamed"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#38bdf8] mb-1">
          Kamli Mohamed
        </h2>
        <p className="text-base text-gray-300 mb-1">📍 Paris, Île-de-France</p>
        <p className="text-base text-gray-300 mb-1">
          📧 kamlimohamed.fr@gmail.com
        </p>
        <p className="text-base text-gray-300 mb-2">📱 +33 7 67 54 06 08</p>

        {/* 💼 Badge */}
        <div className="mt-4 inline-block bg-green-500 text-white text-xs px-4 py-1 rounded-full shadow-md">
          Open To Work
        </div>
      </div>
    </section>
  );
}
