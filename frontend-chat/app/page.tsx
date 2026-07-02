"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

type Tab = "assistant" | "devis" | "voyages";

const conversations = [
  "Transport Lyon → Marseille",
  "Séminaire entreprise",
  "Sortie scolaire",
  "Devis groupe 45 personnes",
];

const devisItems = ["Devis en préparation", "Devis envoyés"];

const VALID_ID = "EquipeNeotravel";
const VALID_MP = "Groupe17@!epitechwesh!";

const WEBHOOK_URL = "http://localhost:5678/webhook/neotravel-mvp";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Bonjour 👋 Décrivez votre besoin : lieu de départ, destination, date, nombre de passagers et type de trajet.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("assistant");
  const [signedIn, setSignedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginMp, setLoginMp] = useState("");
  const [loginError, setLoginError] = useState("");

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const text = input.trim();

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur webhook");
      }

      const data = await res.json();

      const botReply =
        data.output ||
        data.reply ||
        data.response ||
        data.reponse ||
        data.message ||
        data.text ||
        "Réponse reçue.";

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: botReply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Erreur : impossible de contacter le Webhook n8n.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleLoginSubmit(e: FormEvent) {
    e.preventDefault();

    if (loginId === VALID_ID && loginMp === VALID_MP) {
      setSignedIn(true);
      setShowLogin(false);
      setLoginId("");
      setLoginMp("");
      setLoginError("");
    } else {
      setLoginError("Identifiant ou mot de passe incorrect.");
    }
  }

  return (
    <main
      className="w-screen h-screen relative overflow-hidden pt-[96px]"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundPosition: "72px 96px",
        backgroundSize: "calc(100vw - 72px) calc(100vh - 96px)",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff7ea",
      }}
    >
      <header className="fixed top-0 left-0 z-30 w-full h-[96px] bg-[#fff7ea]/90 backdrop-blur-md border-b border-white/50 shadow-sm">
        <div className="h-full px-12 flex items-center justify-between">
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
            <a href="/apropos#services" className="hover:text-[#b55309] transition">
              Services
            </a>
            <a href="/apropos#a-propos" className="hover:text-[#b55309] transition">
              À propos
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

      <aside className="group fixed top-[96px] left-0 z-20 h-[calc(100vh-96px)] w-[72px] hover:w-[300px] bg-[#fff7ea]/92 backdrop-blur-md border-r border-white/60 shadow-xl flex flex-col transition-all duration-300 overflow-hidden">
        <div className="p-4 border-b border-[#0b766f]/10">
          <button
            onClick={() => {
              setActiveTab("assistant");
              setMessages([
                {
                  role: "bot",
                  text: "Bonjour 👋 Décrivez votre besoin : lieu de départ, destination, date, nombre de passagers et type de trajet.",
                },
              ]);
            }}
            className="w-full bg-[#0b766f] text-white rounded-xl py-3 font-semibold hover:bg-[#095f59] transition"
          >
            <span className="group-hover:hidden">+</span>
            <span className="hidden group-hover:inline">+ Nouvelle demande</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-5 text-[#123b37]">
          <div className={signedIn ? "" : "opacity-40 pointer-events-none"}>
            <p className="hidden group-hover:block text-xs uppercase tracking-[0.18em] text-[#0b766f]/70 font-bold mb-2">
              Historique Conversations 🔒
            </p>

            {conversations.map((item) => (
              <button
                key={item}
                disabled={!signedIn}
                className="w-full text-left rounded-xl px-3 py-2 text-sm hover:bg-white/70 transition"
              >
                💬 <span className="hidden group-hover:inline ml-2">{item}</span>
              </button>
            ))}
          </div>

          <div className={signedIn ? "" : "opacity-40 pointer-events-none"}>
            <p className="hidden group-hover:block text-xs uppercase tracking-[0.18em] text-[#0b766f]/70 font-bold mb-2">
              Devis 🔒
            </p>

            {devisItems.map((item) => (
              <button
                key={item}
                disabled={!signedIn}
                onClick={() => setActiveTab("devis")}
                className="w-full text-left rounded-xl px-3 py-2 text-sm hover:bg-white/70 transition"
              >
                📄 <span className="hidden group-hover:inline ml-2">{item}</span>
              </button>
            ))}
          </div>

          <div>
            <p className="hidden group-hover:block text-xs uppercase tracking-[0.18em] text-[#0b766f]/70 font-bold mb-2">
              Outils
            </p>

            {["Aide", "Paramètres"].map((item) => (
              <button
                key={item}
                className="w-full text-left rounded-xl px-3 py-2 text-sm hover:bg-white/70 transition"
              >
                ⚙️ <span className="hidden group-hover:inline ml-2">{item}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-[#0b766f]/10">
          <button
            onClick={() => (signedIn ? setSignedIn(false) : setShowLogin(true))}
            className="w-full bg-[#b55309] text-white rounded-xl py-3 font-semibold hover:bg-[#9a4708] transition"
          >
            <span className="group-hover:hidden">{signedIn ? "👤" : "↗"}</span>
            <span className="hidden group-hover:inline">
              {signedIn ? "Se déconnecter" : "Se connecter"}
            </span>
          </button>
        </div>
      </aside>

      <section className="absolute top-[96px] left-[72px] right-0 bottom-0 flex items-center justify-center">
        <div className="w-[780px] h-[620px] bg-white/80 backdrop-blur-md rounded-[28px] shadow-2xl flex flex-col overflow-hidden border border-white/40 z-10">
          <div className="bg-[#0b766f]/90 text-white">
            <div className="p-5 pb-3">
              <h1 className="text-xl font-semibold">Assistant NeoTravel</h1>
              <p className="text-sm opacity-80">● En ligne</p>
            </div>

            <div className="flex px-5 gap-1">
              {[
                { id: "assistant" as Tab, label: "💬 Assistant" },
                { id: "devis" as Tab, label: "🧾 Devis" },
                { id: "voyages" as Tab, label: "🗺️ Voyages" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-t-xl transition ${
                    activeTab === tab.id
                      ? "bg-white/85 text-[#0b766f]"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "assistant" && (
            <>
              <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-5 bg-white/35">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "self-end bg-[#0b766f] text-white"
                        : "self-start bg-white/85 text-[#3a2622]"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}

                {loading && (
                  <div className="self-start bg-white/85 text-[#3a2622] rounded-2xl px-4 py-3">
                    Réponse en cours...
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-white/40 bg-white/60">
                <div className="flex gap-2 bg-white/75 border border-white/50 rounded-2xl p-2">
                  <input
                    className="flex-1 bg-transparent outline-none px-3 text-[#3a2622]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez votre demande..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage();
                    }}
                  />

                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="bg-[#b55309] text-white rounded-xl px-5 py-3 disabled:opacity-40"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "devis" && (
            <div className="flex-1 overflow-y-auto p-6 bg-white/35 flex flex-col gap-3">
              {!signedIn ? (
                <div className="rounded-2xl px-4 py-3 border border-white/50 bg-white/70">
                  <p className="font-semibold text-[#123b37]">
                    🔒 Connectez-vous pour voir vos devis
                  </p>
                </div>
              ) : (
                devisItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl px-4 py-3 border border-white/50 bg-white/70"
                  >
                    <p className="font-semibold text-[#123b37]">📄 {item}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "voyages" && (
            <div className="flex-1 p-6 bg-white/35">
              <div className="rounded-2xl px-4 py-3 border border-white/50 bg-white/70">
                <p className="font-semibold text-[#123b37]">
                  🚐 Aucun voyage sauvegardé pour le moment
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {showLogin && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center"
          onClick={() => {
            setShowLogin(false);
            setLoginError("");
          }}
        >
          <form
            onSubmit={handleLoginSubmit}
            className="bg-white rounded-3xl shadow-2xl max-w-[420px] w-[90%] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-[#0b766f]">
              🔐 Se connecter
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <input
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="Identifiant (ex: EquipeNeotravel)"
                className="border border-[#e6d8c8] rounded-xl px-3 py-2 text-sm outline-none"
              />

              <input
                type="password"
                value={loginMp}
                onChange={(e) => setLoginMp(e.target.value)}
                placeholder="Mot de passe (ex: Groupe17@!epitechwesh!)"
                className="border border-[#e6d8c8] rounded-xl px-3 py-2 text-sm outline-none"
              />
            </div>

            {loginError && (
              <p className="mt-3 text-sm text-red-600 font-semibold">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full bg-[#b55309] text-white rounded-xl py-3 font-semibold hover:bg-[#9a4708] transition"
            >
              Se connecter
            </button>
          </form>
        </div>
      )}
    </main>
  );
}