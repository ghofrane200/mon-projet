import Image from "next/image";
import Header from"@/components/header"
import Hero from"@/components/hero"
import About from"@/components/about"
import Services from"@/components/services"
import Stats from"@/components/stats"
import Partenaires from"@/components/partenaires"
import Avis from"@/components/avis"
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Stats/>
    <Partenaires/>
    <Avis/>
    </>
  );
}
