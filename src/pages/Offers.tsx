import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Offers() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF5A00] mb-6">Nos Packs SyndicPro</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Une **gestion moderne et adaptée** à tous types de copropriétés. **Choisissez le pack qui correspond à vos besoins**.
          </p>
        </div>

        {/* Grid des packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Pack Éco", desc: "Idéal pour maîtriser votre budget, avec les outils essentiels pour la gestion.", price: "29 MAD par fraction divise/mois", bg: "bg-gray-100" },
            { name: "Pack Zen", desc: "Une gestion sans stress avec assistance automatique et suivi simplifié.", price: "49 MAD par fraction divise/mois", bg: "bg-blue-50" },
            { name: "Pack Gold", desc: "Un accompagnement expert avec des conseils personnalisés et audit financier.", price: "89 MAD par fraction divise /mois", bg: "bg-gray-100" },
            { name: "Pack Lux", desc: "Le premium absolu : gestion complète, services concierge et réunions privées.", price: "149 MAD /mois", bg: "bg-blue-50" }
          ].map((pack, index) => (
            <div key={index} className={`${pack.bg} p-6 rounded-lg shadow-md flex flex-col items-center`}>
              <h3 className="text-2xl font-semibold text-[#FF5A00]">{pack.name}</h3>
              <p className="text-lg text-gray-700 mt-2 text-center">{pack.desc}</p>
              <span className="text-xl font-bold mt-4">{pack.price}</span>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-12 text-center">
          <a
            href="/start"
            className="bg-[#FF5A00] text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-[#e04e00] transition-all"
          >
            Choisir mon pack →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}