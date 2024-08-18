import React from 'react';

const TournamentSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Próximos Torneos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Torneo 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Nombre del Torneo 1</h3>
            <p className="text-gray-700 mb-4">Fecha: 10/10/2024</p>
            <p className="text-gray-700 mb-4">Ubicación: Campo Principal</p>
            <a href="/signup" className="text-[#17e5e5] hover:text-black">Inscribirse</a>
          </div>
          {/* Torneo 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Nombre del Torneo 2</h3>
            <p className="text-gray-700 mb-4">Fecha: 24/10/2024</p>
            <p className="text-gray-700 mb-4">Ubicación: Campo Secundario</p>
            <a href="/signup" className="text-[#17e5e5] hover:text-black">Inscribirse</a>
          </div>
          {/* Torneo 3 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Nombre del Torneo 3</h3>
            <p className="text-gray-700 mb-4">Fecha: 15/11/2024</p>
            <p className="text-gray-700 mb-4">Ubicación: Campo Principal</p>
            <a href="/signup" className="text-[#17e5e5] hover:text-black">Inscribirse</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
