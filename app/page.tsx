import Image from "next/image";
import Header from"@/components/header"
import Hero from"@/components/hero"
import About from"@/components/about"
import Services from"@/components/services"
import Stats from"@/components/stats"
import Avis from"@/components/avis"
import Questions from"@/components/questions"
import Contact from"@/components/contact"
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Stats/>
    <Avis/>
    <Questions/>
    <Contact/>
    </>
  );
}
