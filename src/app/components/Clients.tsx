const clients = [
  "iFood","Nubank","VTEX","QuintoAndar","C6 Bank","Creditas",
  "Nuvemshop","Wildlife Studios","Loft","Unico","CloudWalk",
  "Loggi","Stone","Hotmart","Gympass","RD Station","Dock",
  "Olist","EBANX","99",
];

const loopClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="border-y border-arbon-gray-light py-14">
      <p className="text-center text-xs text-arbon-gray tracking-[3px] uppercase mb-8">
        Empresas que já transformaram seu RH
      </p>

      <div className="marquee-container">
        <div className="marquee-track">
          {loopClients.map((name, i) => (
            <span
              key={name + i}
              className="text-arbon-gray-light font-display text-xl font-normal whitespace-nowrap hover:text-arbon-dark transition-colors cursor-default"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}