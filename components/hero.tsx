import Image from "next/image";
import HeroImg from "@/public/hero.png"

export default function Hero() {
  return (
    <section className=" relative min-h-screen w-full overflow-hidden">

      
      <video 
        src="/hero video.mp4" 
        autoPlay 
        muted 
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-32 gap-5 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Notre expertise en marketing digital crée des opportunités pour votre entreprise
        </h1>

        <p className="max-w-xl text-gray-200 text-base md:text-lg">
          Nous optimisons vos campagnes pour maximiser vos résultats et votre retour sur investissement.
        </p>
      </div>
    </section>
  );
}
