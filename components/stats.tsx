export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-center text-4xl uppercase tracking-widest text-white mb-6 font-serif font-extrabold ">
            Prouvé par les <span className="text-[#E30613]">Stats</span>
          </h2>
          <p className="text-white mb-4 text-center text-sm">
            Notre expertise et notre impact sur le succès de nos partenaires sont
            soutenus par des faits et chiffres solides. Nous prônons des objectifs
            clairs et mesurables, l'analyse des données pour des résultats
            quantifiables et des décisions éclairées.
          </p>
        </div>
        <div className="grid gap-12 grid-cols-2 md:grid-cols-3 text-center">

          <div>
            <p className="text-4xl md:text-5xl">15k</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Portée mensuelle des réseaux
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl ">+900</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Projets photo professionnels
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl ">80%</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Taux de satisfaction des clients
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl ">2022</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Dans l'industrie depuis
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl ">+500</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Portée et impact de la campagne
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl ">+100</p>
            <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">
              Stagiaires développés et formés
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
