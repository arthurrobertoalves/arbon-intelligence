export default function Quote() {
  return (
    <section className="bg-arbon-dark py-24 lg:py-32 text-center px-6 overflow-hidden relative">
      {/* Subtle red glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(224,32,32,0.15), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className="font-display text-8xl leading-none text-arbon-red mb-[-20px] block"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;
        </div>
        <blockquote
          className="font-display text-[clamp(22px,3vw,38px)] font-normal leading-tight tracking-tight text-white mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trabalhei construindo empresas por 20 anos e nunca tive uma área de RH
          que realmente fizesse a empresa crescer mais. Essa é a primeira vez que
          vejo isso mudar.
        </blockquote>
        <p className="text-white/40 text-sm">
          <strong className="text-white/70">Keith Rabois</strong> — Managing Director, Khosla Ventures
        </p>
      </div>
    </section>
  );
}
