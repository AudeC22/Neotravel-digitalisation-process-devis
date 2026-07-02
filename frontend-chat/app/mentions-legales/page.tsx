"use client";

export default function MentionLegale() {
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

      {/* CONTENU */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0b766f]">
          📜 Mentions légales
        </h1>

        <div className="mt-8 space-y-6 text-sm text-[#3a2622]/80 leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Éditeur du site
            </h2>
            <p>
              NeoTravel SAS — Société par actions simplifiée au capital de
              10 000 €. Siège social : 12 rue des Voyageurs, 69000 Lyon. RCS
              Lyon 123 456 789.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Directeur de la publication
            </h2>
            <p>Le service Communication NeoTravel.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Hébergement
            </h2>
            <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              logos, graphismes) est la propriété exclusive de NeoTravel SAS,
              sauf mention contraire. Toute reproduction sans autorisation
              préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Données personnelles
            </h2>
            <p>
              Les informations collectées via le formulaire de contact ou
              l'assistant en ligne sont utilisées uniquement dans le cadre du
              traitement de votre demande de transport. Conformément au RGPD,
              vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données en nous contactant.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son
              fonctionnement ainsi que des cookies de mesure d'audience,
              soumis à votre consentement. Vous pouvez modifier votre choix à
              tout moment en effaçant les données de votre navigateur pour ce
              site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-[#123b37] mb-2">
              Contact
            </h2>
            <p>
              Pour toute question relative aux présentes mentions légales,
              contactez-nous via la page Contact ou à l'adresse
              contact@neotravel.fr.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}