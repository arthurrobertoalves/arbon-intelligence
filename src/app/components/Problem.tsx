const problems = [
  {
    icon: "📊",
    title: "Consultorias",
    description:
      "Lentas, genéricas, entregam slides bonitos e vão embora. Você fica com o PowerPoint — e o problema continua existindo.",
  },
  {
    icon: "🔧",
    title: "Software de prateleira",
    description:
      "Ferramenta genérica que não se adapta ao seu negócio. Você compra e depois descobre que ninguém usa direito.",
  },
  {
    icon: "🏃",
    title: "Time interno sobrecarregado",
    description:
      "Sem tempo para estratégia, afogado no operacional. Sob pressão constante do CEO para ser mais estratégico.",
  },
];

export default function Problem() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
      
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <span className="text-arbon-red text-xs tracking-[3px] uppercase font-medium block mb-4">
          O problema
        </span>

        <h2 className="font-display text-[clamp(36px,4vw,60px)] leading-tight tracking-tight text-arbon-dark mb-5">
          O mercado de RH
          <br />
          <span className="italic text-arbon-gray">está quebrado</span>
        </h2>

        <p className="text-arbon-gray text-lg font-light leading-relaxed">
          Apesar de centenas de ferramentas e consultorias, as empresas ainda
          lutam para tornar People uma função realmente estratégica.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((item) => (
          <div
            key={item.title}
            className="bg-arbon-off-white border border-arbon-gray-light rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="w-12 h-12 bg-white border border-arbon-gray-light rounded-xl flex items-center justify-center text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="font-display text-xl tracking-tight mb-3 text-arbon-dark">
              {item.title}
            </h3>

            <p className="text-arbon-gray text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}