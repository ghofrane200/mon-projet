import Image from "next/image";
import Team from "@/public/team.svg"
export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white  px-6 gap-8 items-center">
        <div>
          <h2 className="text-center text-4xl uppercase tracking-widest text-white mb-6 font-serif font-extrabold">
           À propos de <span className="text-[#E30613]">nous</span>
          </h2>
          <div className="relative w-full h-100">
          <Image
            src={Team} 
            alt="À propos de nous"
            fill
            className="object-contain"
          />
          </div>
          <p className="text-white mb-4 text-center text-sm p-5">
            Nous sommes dédiés à accélérer la croissance des entreprises grâce à des stratégies complètes de publicité numérique et en ligne. 
            Notre équipe d'experts excelle en stratégies marketing, SEO, marketing de contenu et réseaux sociaux. 
            Partenaire avec VISIOAD et découvrez une approche sur mesure du marketing digital qui transforme votre entreprise.
          </p>
       </div>
    </section>
  );
}
