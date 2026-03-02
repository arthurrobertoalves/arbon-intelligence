"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo_arbon_noBG.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-4"
            : "top-0"
        }`}
      >
        <div className="flex justify-center px-4">
          <div
            className={`
              w-full max-w-6xl
              transition-all duration-500
              ${
                isScrolled
                  ? "rounded-full px-8 py-4 shadow-xl border border-white/40"
                  : "rounded-none px-6 py-6 border-b border-white/30"
              }
              bg-white/60 backdrop-blur-xl
              flex items-center justify-between
            `}
          >
            {/* Logo */}
            <Image src={logo} alt="Arbon Intelligence Logo" width={144} height={2}></Image>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10 text-sm font-medium">
              <a href="#problema" className="hover:text-red-600 transition">
                Problema
              </a>
              <a href="#solucao" className="hover:text-red-600 transition">
                Solução
              </a>
              <a href="#metodo" className="hover:text-red-600 transition">
                Método
              </a>
              <a href="#beneficios" className="hover:text-red-600 transition">
                Benefícios
              </a>
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <button className="bg-red-700 hover:bg-red-700 transition text-white px-6 py-2.5 rounded-full font-semibold shadow-md">
                Falar com especialista
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-black"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 px-4">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40 flex flex-col gap-5">
              <a href="#problema">Problema</a>
              <a href="#solucao">Solução</a>
              <a href="#metodo">Método</a>
              <a href="#beneficios">Benefícios</a>
              <button className="bg-red-600 text-white rounded-full py-3 font-semibold">
                Falar com especialista
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Espaço para compensar header fixo */}
      <div className="h-24"></div>
    </>
  );
}