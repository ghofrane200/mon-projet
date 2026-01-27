import Image from "next/image";
import Google from "@/public/google.svg";
import Meta from "@/public/meta.svg";
import Microsoft from "@/public/microsoft.svg";
import Amazon from "@/public/amazon.svg";
export default function Partenaires (){
  return (
    <section id="partenaires" className="py-20 bg-[#0f1311] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          <h2 className="text-4xl uppercase tracking-widest mb-3 font-serif font-Bold">
             <span className="text-[#E30613]">Partenaires</span> reconnus dans l’industrie
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          <div className="bg-black/50 rounded-xl overflow-hidden">
            <div className="relative h-50">
              <Image
                src={Google}
                alt="Google"
                fill
                className="object-contain p-6"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed p-5 text-center">
              Offrir des services de qualité avec une expertise certifiée par Google.
            </p>
          </div>
          <div className="bg-black/50 rounded-xl overflow-hidden">
            <div className="relative h-50">
              <Image
                src={Meta}
                alt="Meta"
                fill
                className="object-contain p-6"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed p-5 text-center">
              Déverrouiller tout le potentiel du marketing sur Facebook et Instagram.
            </p>
          </div>
          <div className="bg-black/50 rounded-xl overflow-hidden">
            <div className="relative h-50">
              <Image
                src={Microsoft}
                alt="Microsoft"
                fill
                className="object-contain p-6"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed p-5 text-center">
              Certifié pour des solutions publicitaires avancées de Microsoft.
                          </p>
          </div>
           <div className="bg-black/50 rounded-xl overflow-hidden">
            <div className="relative h-50">
              <Image
                src={Amazon}
                alt="amazon"
                fill
                className="object-contain p-6"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed p-5 text-center">
              Expert en génération de résultats avec la publicité Amazon.
                          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
