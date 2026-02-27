"use client";
import "../app/globals.css";
import Image from "next/image";
import logo from "../assets/6-removebg-preview (1).png";

export default function Home() {
  const { useState, useEffect } = require("react");

  const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-center">

          <div
            className={`relative flex items-center justify-between 
            w-full max-w-6xl rounded-[28px] px-8 py-3
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isScrolled ? "glass-active" : "glass-initial"}`}
          >

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
             
              <span className="font-bold text-2xl tracking-tighter text-black">
                <Image src={logo} alt="Arbon Intelligence" className="h-8 w-auto" />
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {["Problema","Solução","Método","Benefícios"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-black/70 
                  hover:text-red-600 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button className="metal-button rounded-full px-8 text-md h-11">
                Falar com especialista
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 6l12 12" />
                  <path d="M6 18L18 6" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-4 right-4 mt-3 p-6 
          rounded-[28px] md:hidden flex flex-col gap-5
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileMenuOpen ? "mobile-open" : "mobile-closed"}`}
        >
          {["Problema","Solução","Método","Benefícios"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-red-500/10 
              rounded-xl text-sm font-bold transition-all"
            >
              {item}
            </a>
          ))}

          <button className="metal-button rounded-full w-full h-12 font-bold">
            Falar com especialista
          </button>
        </div>
      </nav>
    );
  };

  return <Navbar />;
}