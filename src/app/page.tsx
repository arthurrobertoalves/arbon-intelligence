import dynamic from "next/dynamic";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: true });

const Clients = dynamic(() => import("./components/Clients"), { ssr: true });
const Stats = dynamic(() => import("./components/Stats"), { ssr: true });
const Problem = dynamic(() => import("./components/Problem"), { ssr: true });
const Solution = dynamic(() => import("./components/Solution"), { ssr: true });
const Team = dynamic(() => import("./components/Team"), { ssr: true });
const Quote = dynamic(() => import("./components/Quote"), { ssr: true });
const CTA = dynamic(() => import("./components/CTA"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Stats />
        <Problem />
        <Solution />
        <Team />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
