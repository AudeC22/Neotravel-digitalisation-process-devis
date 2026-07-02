"use client";

export default function APropos() {
  return (
    <main className="w-screen min-h-screen relative pt-[96px] bg-[#fff7ea]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-30 w-full bg-[#fff7ea]/90 backdrop-blur-md border-b border-white/50 shadow-sm">
        <div className="h-[96px] px-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="/logo-neotravel.png"
              alt="Logo NeoTravel"
              className="h-[66px] w-auto object-contain"
            />

            <div className="h-12 w-px bg-[#0b766f]/30" />

            <div>
              <p className="text-[#0b766f] text-xl font-bold">
                Voyageons ensemble
              </p>
              <p className="text-[#0b766f]/80 text-sm">
                Des solutions de transport pour tous vos groupes
              </p>
            </div>
          </div>

                    <nav className="hidden md:flex items-center gap-10 text-[#0b766f] font-semibold">
            <a href="/" className="hover:text-[#b55309] transition">
              Accueil
            </a>
            <a href="/apropos#a-propos" className="hover:text-[#b55309] transition">
              À propos
            </a>
            <a href="/apropos#services" className="hover:text-[#b55309] transition">
              Services
            </a>
            <a href="/apropos#contact" className="hover:text-[#b55309] transition">
              Contact
            </a>
            <a href="/mentions-legales" className="hover:text-[#b55309] transition">
              Mentions légales
            </a>
          </nav>
        </div>
      </header>

      {/* À PROPOS */}
      <section
        id="a-propos"
        className="max-w-5xl mx-auto px-6 py-16 scroll-mt-[110px]"
      >
        <h1 className="text-3xl font-bold text-[#0b766f]">À propos</h1>
        <p className="mt-4 text-[#3a2622]/80 max-w-3xl leading-relaxed">
          NeoTravel accompagne depuis plusieurs années les entreprises, écoles
          et associations dans l'organisation de leurs déplacements de
          groupe. Notre mission : simplifier la réservation de transport en
          combinant un assistant intelligent et une équipe humaine
          disponible à chaque étape de votre projet.
        </p>
        <p className="mt-4 text-[#3a2622]/80 max-w-3xl leading-relaxed">
          Que vous organisiez un séminaire de 20 personnes ou une sortie
          scolaire de plusieurs classes, nous adaptons nos solutions à votre
          budget et à votre calendrier.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">🚐 Une flotte adaptée</p>
            <p className="mt-2 text-sm text-[#3a2622]/70">
              Des véhicules de toutes tailles pour s'ajuster au nombre de
              voyageurs.
            </p>
          </div>
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">🤝 Une équipe à l'écoute</p>
            <p className="mt-2 text-sm text-[#3a2622]/70">
              Disponible avant, pendant et après votre trajet pour répondre à
              vos besoins.
            </p>
          </div>
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">⚡ Un devis rapide</p>
            <p className="mt-2 text-sm text-[#3a2622]/70">
              Décrivez votre trajet à l'assistant et recevez une estimation
              en quelques minutes.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-5xl mx-auto px-6 py-16 scroll-mt-[110px]"
      >
        <h2 className="text-2xl font-bold text-[#0b766f]">Nos services</h2>
        <p className="mt-3 text-[#3a2622]/80 max-w-2xl">
          NeoTravel organise le transport de vos groupes pour toutes les
          occasions : entreprises, écoles, associations, événements privés.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🚌",
              title: "Transport longue distance",
              desc: "Trajets inter-villes pour groupes, avec véhicules adaptés à toutes les tailles de groupe.",
            },
            {
              emoji: "🏢",
              title: "Séminaires d'entreprise",
              desc: "Logistique complète pour vos déplacements professionnels, du départ au retour.",
            },
            {
              emoji: "🏫",
              title: "Sorties scolaires",
              desc: "Solutions sécurisées et encadrées pour le transport d'élèves.",
            },
            {
              emoji: "🧾",
              title: "Devis sur mesure",
              desc: "Un devis personnalisé en fonction de votre trajet, du nombre de voyageurs et de vos dates.",
            },
            {
              emoji: "🗺️",
              title: "Voyages organisés",
              desc: "Planification d'itinéraires complets pour vos excursions et voyages de groupe.",
            },
            {
              emoji: "📞",
              title: "Assistance dédiée",
              desc: "Une équipe disponible avant, pendant et après votre trajet pour répondre à vos besoins.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-6 shadow-sm"
            >
              <div className="text-3xl">{service.emoji}</div>
              <h3 className="mt-3 font-bold text-[#123b37]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#3a2622]/70">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16 scroll-mt-[110px]"
      >
        <h2 className="text-2xl font-bold text-[#0b766f]">Contact</h2>
        <p className="mt-4 text-[#3a2622]/80 max-w-2xl">
          Une question, une demande spécifique ? Notre équipe vous répond
          rapidement.
        </p>

        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">📍 Adresse</p>
            <p className="mt-1 text-sm text-[#3a2622]/70">
              12 rue des Voyageurs, 69000 Lyon
            </p>
          </div>
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">✉️ Email</p>
            <p className="mt-1 text-sm text-[#3a2622]/70">
              contact@neotravel.fr
            </p>
          </div>
          <div className="bg-white/80 border border-[#e6d8c8] rounded-2xl p-5">
            <p className="font-semibold text-[#123b37]">📞 Téléphone</p>
            <p className="mt-1 text-sm text-[#3a2622]/70">04 00 00 00 00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
