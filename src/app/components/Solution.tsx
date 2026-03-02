const steps = [
  {
    num: "01",
    title: "Diagnóstico completo",
    desc: "Análise profunda das políticas, processos e ferramentas de people da sua empresa. Em 2 semanas, você tem clareza total de onde está e o que precisa evoluir.",
  },
  {
    num: "02",
    title: "Alinhamento de prioridades",
    desc: "Definimos juntos os outcomes prioritários e construímos o primeiro escopo — políticas, processos e software + IA sob medida para o seu negócio.",
  },
  {
    num: "03",
    title: "Experts + AI em ação",
    desc: "Nosso time trabalha lado a lado com o seu — redesenhando políticas, construindo ferramentas e entregando resultados reais. Em dias, não meses.",
  },
];

const bars = [
  { name: "Recrutamento", pct: 88 },
  { name: "Remuneração", pct: 76 },
  { name: "Performance", pct: 94 },
  { name: "Engajamento", pct: 70 },
  { name: "L&D", pct: 82 },
];

export default function Solution() {
  return (
    <section className="bg-arbon-off-white border-y border-arbon-gray-light" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Steps */}
        <div>
          <span className="text-arbon-red text-xs tracking-[3px] uppercase font-medium block mb-4">
            A solução
          </span>
          <h2
            className="font-display text-[clamp(32px,3.5vw,52px)] leading-tight tracking-tight text-arbon-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Como a parceria<br />
            <span className="italic text-arbon-gray">com a Arbon funciona</span>
          </h2>
          <p className="text-arbon-gray mb-12 font-light leading-relaxed">
            Experts de RH + Engenheiros de IA trabalhando como parte do seu time.
          </p>

          <div className="flex flex-col gap-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal flex gap-5 p-6 rounded-xl border border-transparent hover:border-arbon-gray-light hover:bg-white transition-all cursor-default group"
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full bg-arbon-red flex items-center justify-center text-white font-display font-bold text-xs"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.num}
                  </div>
                </div>
                <div>
                  <h4
                    className="font-display text-lg tracking-tight mb-2 text-arbon-dark"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-arbon-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="bg-white border border-arbon-gray-light rounded-3xl p-10 red-glow reveal">
          {/* Top metric */}
          <div className="mb-10">
            <div
              className="font-display text-[72px] leading-none tracking-tight text-gradient-red"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4×
            </div>
            <p className="text-arbon-gray text-sm mt-1">
              Velocidade de entrega vs. modelo tradicional
            </p>
          </div>

          {/* Bars */}
          <div>
            <p className="text-xs text-arbon-gray tracking-[2px] uppercase mb-5">
              Áreas de impacto
            </p>
            <div className="flex flex-col gap-4">
              {bars.map((bar, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-xs text-arbon-gray w-24 text-right shrink-0">
                    {bar.name}
                  </span>
                  <div className="flex-1 h-1.5 bg-arbon-gray-ultra rounded-full overflow-hidden">
                    <div
                      className="bar-fill h-full rounded-full bg-gradient-to-r from-arbon-red to-arbon-red-light"
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                  <span
                    className="text-xs font-display font-bold text-arbon-dark w-8 shrink-0"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {bar.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
