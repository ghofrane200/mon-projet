import Image from "next/image";
import David from "@/public/david.png"
import Liam from "@/public/liam.svg"
import Ethan from "@/public/ethan.svg"
export default function Avis() {
  return (
    <section id="avis" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl uppercase tracking-widest mb-3 font-serif font-bold">
            Ce que  disent nos <span className="text-[#E30613]">clients</span> 
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-[#0f1311] p-8 rounded-2xl border border-white/10">
            <p className="text-yellow-400 text-2xl text-center p-3">★★★★<span className="text-yellow-50">★</span></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              “De la conception au marketing, l'expertise et la stratégie de VISIOAD ont renforcé notre succès numérique.”
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={David}
                  alt="Client 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">David Carter</p>
                <p className="text-sm text-gray-400">Resposable de la stratégie</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0f1311] p-8 rounded-2xl border border-white/10">
            <p className="text-yellow-400 text-2xl text-center p-3">★★★★<span className="text-yellow-50">★</span></p>

            <p className="text-gray-300 leading-relaxed mb-6">
              “Travailler avec VISIOAD a révolutionné notre stratégie de contenu. Leur expertise nous a aidés à créer du contenu percutant !”
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={Liam}
                  alt="Client 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">Liam Matthew</p>
                <p className="text-sm text-gray-400">Stratége en contenu</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0f1311] p-8 rounded-2xl border border-white/10">
            <p className="text-yellow-400 text-2xl text-center p-3">★★★★<span className="text-yellow-50">★</span></p>
            <p className="text-gray-300 leading-relaxed mb-6">
              “Collaborer avec VISIOAD a été une décision clé pour notre entreprise. Leur équipe a fourni des stratégies marketing exceptionnelles.”
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={Ethan}
                  alt="Client 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">Ethan Parker</p>
                <p className="text-sm text-gray-400">PDG</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
