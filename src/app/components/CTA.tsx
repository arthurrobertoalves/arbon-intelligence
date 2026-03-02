import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6000 lg:px-10 py-24 lg:py-32">
      <div className="relative bg-arbon-off-white border border-arbon-gray-light rounded-3xl p-12 lg:p-20 text-center overflow-hidden">

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[140px] pointer-events-none will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse, rgba(224,32,32,0.08), transparent 70%)",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-arbon-red to-transparent" />

        <div className="relative z-10">
          <span className="text-arbon-red text-xs tracking-[3px] uppercase font-medium block mb-6">
            Comece agora
          </span>

          <h2
            className="font-display text-[clamp(32px,4vw,60px)] leading-tight tracking-tight text-arbon-dark mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pronto para transformar<br />
            o RH da sua empresa?
          </h2>

          <p className="text-arbon-gray text-lg mb-10 font-light">
            Diagnóstico gratuito. Resultados em semanas, não meses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#"
              className="bg-arbon-red text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-arbon-red-dark transition-colors transition-transform duration-200 hover:-translate-y-1 will-change-transform shadow-md hover:shadow-lg shadow-arbon-red/20"
            >
              Agendar diagnóstico gratuito
            </Link>

            <Link
              href="#"
              className="text-arbon-dark border border-arbon-gray-light px-8 py-4 rounded-xl font-medium text-base hover:border-arbon-red-border transition-colors transition-transform duration-200 hover:-translate-y-1 will-change-transform"
            >
              Ver casos de sucesso
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}