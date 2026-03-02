import Link from "next/link";

const links = {
  Insights: ["Blog", "Casos de Sucesso", "Webinars", "Benchmark de Salários"],
  Empresa: ["Sobre", "Segurança", "Metodologia", "Press Releases"],
  Legal: ["Termos de Uso", "Política de Privacidade", "Carreiras"],
};

export default function Footer() {
  return (
    <footer className="border-t border-arbon-gray-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-arbon-red rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs font-display">A</span>
              </div>
              <span
                className="font-display text-xl text-arbon-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                arbon
              </span>
            </div>
            <p className="text-arbon-gray text-sm leading-relaxed max-w-xs">
              AI-Native HR: experts em people, ferramentas sob medida e
              engenheiros de IA que entregam em dias o que levaria meses.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h5 className="text-xs font-semibold text-arbon-gray tracking-[2px] uppercase mb-5">
                {section}
              </h5>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-arbon-gray text-sm hover:text-arbon-dark transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-arbon-gray-light pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-arbon-gray">
          <span>© 2026 Arbon. Todos os direitos reservados.</span>
          <span>Feito com ❤️ no Brasil</span>
        </div>
      </div>
    </footer>
  );
}
