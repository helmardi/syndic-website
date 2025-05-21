import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Discover() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Une gestion repensée</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Fini les complications, SyndicPro vous offre une **gestion claire et efficace** de votre copropriété.
          </p>
        </div>

        {/* Sections avec un fond alterné */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { number: "01", title: "Transparence", desc: "Accédez aux informations en temps réel.", bg: "bg-gray-100" },
            { number: "02", title: "Gestion facile", desc: "Une interface fluide et intuitive.", bg: "bg-gray-100" },
            { number: "03", title: "Optimisation", desc: "Des solutions adaptées à vos besoins.", bg: "bg-gray-100" },
            { number: "04", title: "Communication", desc: "Un dialogue simplifié entre copropriétaires.", bg: "bg-gray-100" },
            { number: "05", title: "Conseils", desc: "Plus de 200  experts techniques sur tous les sujets de la copropriété pour accompagner votre référent ou votre gestionnaire.Comptables, juristes, experts travaux, rénovation énergétique", bg: "bg-gray-100" },
            { number: "06", title: "Notre Engagement", desc: "Si vous optez pour notre offre de syndic professionnel, vous aurez des gestionnaires triés sur le volet pour administrer votre copropriété. .", bg: "bg-gray-100" }
          ].map((item, index) => (
            <div key={index} className={`${item.bg} p-6 rounded-lg shadow-md flex flex-col items-center`}>
              <span className="text-3xl font-bold text-blue-600">{item.number}</span>
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              <p className="text-lg text-gray-700 mt-2 text-center">{item.desc}</p>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
