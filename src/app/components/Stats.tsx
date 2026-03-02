const stats = [
  { num: "150+", label: "Empresas parceiras" },
  { num: "2 sem", label: "Para o primeiro diagnóstico" },
  { num: "4×", label: "Mais rápido que consultorias" },
  { num: "98%", label: "Satisfação dos CHROs" },
];

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 border border-arbon-gray-light rounded-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-8 lg:p-10 text-center bg-arbon-off-white hover:bg-arbon-ultra transition-colors ${
              i < stats.length - 1 ? "border-r border-arbon-gray-light" : ""
            } ${i < 2 ? "border-b border-arbon-gray-light lg:border-b-0" : ""}`}
          >
            <div
              className="font-display text-[clamp(36px,4vw,52px)] leading-tight tracking-tight text-gradient-red block mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {stat.num}
            </div>
            <div className="text-arbon-gray text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
