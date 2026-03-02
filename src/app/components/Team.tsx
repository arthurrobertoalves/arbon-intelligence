const team = [
  { initials: "FD", name: "Filipe Ducas", role: "Co-founder & HR Executive", prev: "Ex OLX · XP Investimentos" },
  { initials: "GT", name: "Guilherme Tomazin", role: "HR Executive", prev: "Ex Nubank · Neon" },
  { initials: "FC", name: "Fábio Camargo", role: "HR Executive", prev: "Ex Korn Ferry" },
  { initials: "KT", name: "Karina Testai", role: "HR Executive", prev: "Ex IBM" },
  { initials: "BR", name: "Bernardo Rodrigues", role: "HR Executive", prev: "Ex GPA · PanVel" },
  { initials: "GA", name: "Gabriel Aquino", role: "HR Executive", prev: "Ex Cerc · Stone" },
  { initials: "CH", name: "Carolina Hatae", role: "HR Executive", prev: "Ex dLocal · EBANX" },
  { initials: "DP", name: "Dino Pieczynski", role: "HR Executive", prev: "Ex AON · Mercer" },
];

export default function Team() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"
      id="equipe"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
        <div>
          <span className="text-arbon-red text-xs tracking-[3px] uppercase font-medium block mb-4">
            Nossa equipe
          </span>

          <h2 className="font-display text-[clamp(32px,3.5vw,52px)] leading-tight tracking-tight text-arbon-dark">
            Experts com trajetória
            <br />
            <span className="italic text-arbon-gray">
              em RH de ponta
            </span>
          </h2>
        </div>

        <p className="text-arbon-gray text-base font-light leading-relaxed max-w-sm">
          Décadas de experiência combinadas com as melhores ferramentas de IA do mercado.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-arbon-off-white border border-arbon-gray-light rounded-2xl p-6 transition-colors hover:border-arbon-red-border hover:bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-arbon-red flex items-center justify-center text-white font-display font-bold text-base mb-4">
              {member.initials}
            </div>

            <h4 className="font-display text-base tracking-tight text-arbon-dark mb-1">
              {member.name}
            </h4>

            <p className="text-arbon-red text-xs font-medium mb-1.5">
              {member.role}
            </p>

            <p className="text-arbon-gray text-xs">
              {member.prev}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}