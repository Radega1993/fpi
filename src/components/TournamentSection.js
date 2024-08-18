import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate
import { getTorneos } from '../services/torneoService';

const TournamentSection = () => {
  const [torneos, setTorneos] = useState([]);
  const navigate = useNavigate();  // Inicializar useNavigate

  // Cargar los torneos al montar el componente
  useEffect(() => {
    const fetchTorneos = async () => {
      const response = await getTorneos();
      setTorneos(response.data);
    };
    fetchTorneos();
  }, []);

  // Filtrar los 4 próximos torneos
  const torneosFuturos = torneos
    .filter(torneo => new Date(torneo.fecha) >= new Date())  // Filtra los torneos futuros
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));  // Ordena por fecha

  const torneosParaMostrar = torneosFuturos.slice(0, 4);

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Próximos Torneos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {torneosParaMostrar.map((torneo) => (
            <div key={torneo.id} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2">{torneo.nombre}</h3>
              <p className="text-gray-700 mb-4">Fecha: {new Date(torneo.fecha).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4">Ubicación: {torneo.ubicacion}</p>
              <a href="/signup" className="text-[#17e5e5] hover:text-black">Inscribirse</a>
            </div>
          ))}
        </div>
        {torneosFuturos.length > 3 && (
          <button
            onClick={() => navigate('/tournaments')}  // Redirigir a la página de torneos
            className="mt-8 bg-[#17e5e5] text-black px-8 py-3 rounded hover:bg-[#14b3b3] transition"
          >
            Ver más fechas
          </button>
        )}
      </div>
    </section>
  );
};

export default TournamentSection;
