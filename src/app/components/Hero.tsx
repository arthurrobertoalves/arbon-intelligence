import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-1 pb-20 overflow-hidden">
      {/* Headline */}
      <h1 className="relative z-10 font-display text-[clamp(48px,8vw,104px)] leading-[0.95] tracking-tight text-arbon-dark max-w-5xl mb-6 animate-fade-up">
        Decisões sob pressão.
        <br />
        <span className="text-gradient-red italic">Riscos sob controle.</span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 text-arbon-gray text-lg lg:text-xl max-w-xl mb-10 font-light leading-relaxed animate-fade-up">
        Especialistas em RH e engenheiros de IA que entregam em dias o que
        levaria meses — da estratégia à implementação.
      </p>

      {/* Actions */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center animate-fade-up">
        <Link
          href="#"
          className="bg-arbon-red text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-arbon-red-dark transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-arbon-red/20"
        >
          Agendar diagnóstico gratuito
        </Link>

        <Link
          href="#"
          className="text-arbon-dark font-medium text-base hover:text-arbon-red transition-colors flex items-center gap-1.5"
        >
          Ver casos de sucesso
          <span className="text-lg">→</span>
        </Link>
      </div>

      {/* Social proof */}
      <p className="relative z-10 text-arbon-gray text-sm mt-10 animate-fade-up">
        Escolhido por líderes que priorizam performance, clareza e decisões sob
        pressão
      </p>
    </section>
  );
}
