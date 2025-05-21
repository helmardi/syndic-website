import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Carousel />
        
        {/* This section is a placeholder - content would be added in the real implementation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mb-4">
                Une solution complète pour la gestion immobilière
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                SyndicPro offre une plateforme innovante pour simplifier la gestion de copropriété.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#FF5A00]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-[#FF5A00] rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Gestion simplifiée</h3>
                <p className="text-gray-600 text-center">
                  Des outils intuitifs pour une gestion quotidienne efficace
                </p>
              </div>
              
              {/* Service Card 2 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#FF5A00]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-[#FF5A00] rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Transparence totale</h3>
                <p className="text-gray-600 text-center">
                  Suivez toutes les opérations en temps réel
                </p>
              </div>
              
              {/* Service Card 3 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#FF5A00]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <div className="w-8 h-8 bg-[#FF5A00] rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Communication facilitée</h3>
                <p className="text-gray-600 text-center">
                  Échangez facilement avec tous les copropriétaires
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;