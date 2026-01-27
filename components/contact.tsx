export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 ">

        <div>
          <h2 className="text-center text-4xl uppercase tracking-widest text-white mb-3 font-serif font-bold">
            Obtenez un <span className="text-[#E30613]">devis gratuit</span>
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            Nous sommes impatients de vous rencontrer !<br />
            Remplissez le formulaire ci-dessous et transformons votre vision en réalité.
          </p>
        </div>

        <form className="space-y-6 p-0">

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">Téléphone</label>
              <input
                type="tel"
                maxLength={8}
                pattern="\d{8}"
                placeholder="Téléphone"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm mb-2">Sujet</label>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={4}
              maxLength={300}
              placeholder=""
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black/70 text-white px-6 py-3 uppercase tracking-wide text-sm border border-white hover:bg-white hover:text-black transition"
          >
            Demandez votre devis
          </button>
        </form>

      </div>
    </section>
  );
}
