
import Image from "next/image";


const clients = [
  { name: "Schneider Electric", logo: "/logos/schneider.svg" },
  { name: "Rádio Táxi Vermelho e Branco", logo: "/logos/radio-taxi.png" },
  { name: "EcoCasa", logo: "/logos/eco-casa.png" },
  { name: "Fortes Maquetes", logo: "/logos/fortes.jpeg" },
  { name: "Votorantim Cimentos", logo: "/logos/votorantim.png" },
  { name: "CEAP", logo: "/logos/ceap.png" },
  { name: "Comp", logo: "/logos/comp.png" },
  { name: "Ília", logo: "/logos/ilia.png" },
];

const loopClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="border-y border-arbon-gray-light py-14">
      <p className="text-center text-xs text-arbon-gray tracking-[3px] uppercase mb-8">
        Empresas que reconhecem nosso trabalho
      </p>

      <div className="marquee-container overflow-hidden">
        <div className="marquee-track flex items-center gap-12">
          {loopClients.map((client, i) => (
            <div key={client.name + i} className="relative h-14 w-[140px]">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                sizes="225px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}