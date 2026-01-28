

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0f1311] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-center text-4xl uppercase tracking-widest text-white mb-3 font-serif font-bold">
            Nos <span className="text-[#E30613]">services</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-3">

          <div className=" p-8 rounded-2xl  transition">
            
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif text-center">MARKETING DIGITAL</h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
              Nos services de marketing digital sont conçus pour améliorer votre présence en ligne et engager efficacement votre audience.
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>

          <div className=" p-8 rounded-2xl transition">
            
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif text-center">CREATION DE CONTENU ET PRODUCTION MULTIMEDIA</h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
             Nous livrons du contenu de haute qualité et une production médiatique conçue pour raconter l'histoire de votre marque.   
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>

          <div className=" p-8 rounded-2xl transition">
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif  text-center">SERVICE DE DESIGN</h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
              Élevez votre marque avec des designs créatifs et fonctionnels, alliant innovation et praticité pour réussir.
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>

          <div className=" p-8 rounded-2xl transition">
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif  text-center">DEVELOPPEMENT WEB ET APPLICATION</h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
               Création de sites web et d'applications responsives conçus pour offrir des expériences utilisateur fluides et générer des résultats.
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>
          <div className=" p-8 rounded-2xl transition">
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif text-center">VENTE ET GESTION DE COMPTE </h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
              Stimuler la croissance grâce à des stratégies de vente expertes et une gestion de compte dédiée pour établir des relations clients durables. 
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>
          <div className=" p-8 rounded-2xl transition">
            <h4 className="bg-white text-[#000000AB] text-xl font-semibold mb-3 rounded-xl p-4 font-serif text-center ">SURVEILLANCE CCT</h4>
            <p className="text-gray-300 text-sm leading-relaxed p-5">
             Assurez la sécurité avec surveillance CCTV 24/7, alertes en temps réel et accès à distance, partout et à tout moment.
            </p>
            <div className="flex items-center justify-center">
                <button className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-[#8a8888ab] hover:text-black transition">
                 Voir plus
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
