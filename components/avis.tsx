'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import David from "@/public/david.png";
import Liam from "@/public/liam.svg";
import Ethan from "@/public/ethan.svg";
import Sophia from "@/public/sophia.svg";
import Sophie from "@/public/sophie.png";
import { StaticImageData } from "next/image";
export default function Avis() {
  return (
    <section id="avis" className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl uppercase tracking-widest mb-3 font-serif font-bold">
            Ce que disent nos <span className="text-[#E30613]">clients</span>
          </h2>
        </div>

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-8">
              <AvisCard
                img={David}
                name="David Carter"
                role="Responsable de la stratégie"
                text="De la conception au marketing, l'expertise et la stratégie de VISIOAD ont renforcé notre succès numérique."
              />
              <AvisCard
                img={Liam}
                name="Liam Matthew"
                role="Stratège en contenu"
                text="Travailler avec VISIOAD a révolutionné notre stratégie de contenu. Leur expertise nous a aidés à créer du contenu percutant."
              />
              <AvisCard
                img={Ethan}
                name="Ethan Parker"
                role="PDG"
                text="Collaborer avec VISIOAD a été une décision clé pour notre entreprise. Leur équipe a fourni des stratégies marketing exceptionnelles."
              />
              <AvisCard
                img={Sophia}
                name="Sophia Miller"
                role="Responsable Marketing de Croissance"
                text="L'équipe de VISIOAD a aidé à élever nos efforts marketing avec des idées innovantes et des stratégies qui ont généré une croissance significative !"
              />
              <AvisCard
                img={Sophie}
                name="Sophie Lambert"
                role="Directeur du marketing"
                text="Grâce à VISIOAD, notre entreprise a connu un essor significatif de sa présence en ligne grâce à leurs campagnes digitales ciblées."
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
type AvisCardProps = {
  img: StaticImageData;
  name: string;
  role: string;
  text: string;
};
function AvisCard({ img, name, role, text }: AvisCardProps) {
  return (
    <div className="w-87.5 bg-[#0f1311] p-8 rounded-2xl border border-white/10 shrink-0">
      <p className="text-yellow-400 text-2xl text-center mb-4">
        ★★★★<span className="text-yellow-50">★</span>
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        “{text}”
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
