import Image from "next/image";
import HeroImg from "@/public/hero.png"
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src={HeroImg} 
        alt="hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 "></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-32 gap-5">

        <h1 className="text-5xl text-white tracking-tight mt-6">
          Notre marketing digital génère <br />
          des prospects pour votre entreprise
        </h1>

        <p className="max-w-xl text-gray-200 text-base md:text-lg mb-8">
          Nous optimisons votre marketing digital pour de meilleurs résultats,
          en vous faisant gagner temps et argent !
        </p>

        <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-white hover:text-black transition">
          Voir une vidéo rapide
        </button>

      </div>
    </section>
  );
}
