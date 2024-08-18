import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Para la gestión de meta tags
import { getTorneos } from '../services/torneoService';
import Layout from '../components/Layout';

const Tournaments = () => {
  const [torneosPasados, setTorneosPasados] = useState([]);
  const [torneosEnCurso, setTorneosEnCurso] = useState([]);
  const [torneosFuturos, setTorneosFuturos] = useState([]);

  useEffect(() => {
    const fetchTorneos = async () => {
      const response = await getTorneos();
      const torneos = response.data;

      const hoy = new Date();
      const pasados = torneos.filter(torneo => new Date(torneo.fecha) < hoy);
      const futuros = torneos.filter(torneo => new Date(torneo.fecha) > hoy);
      const enCurso = torneos.filter(torneo => new Date(torneo.fecha).toDateString() === hoy.toDateString());

      setTorneosPasados(pasados);
      setTorneosEnCurso(enCurso);
      setTorneosFuturos(futuros);
    };
    fetchTorneos();
  }, []);

  const renderTorneos = (torneos) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {torneos.map((torneo) => (
        <div key={torneo.id} className="bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-2">{torneo.nombre}</h3>
          <p className="text-gray-700 mb-4">Fecha: {new Date(torneo.fecha).toLocaleDateString()}</p>
          <p className="text-gray-700 mb-4">Ubicación: {torneo.ubicacion}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      <Helmet>
        <title>Torneos de Fútbol | Club de Fútbol</title>
        <meta name="description" content="Consulta los torneos de fútbol pasados, en curso y futuros de nuestro club. Mantente al día con todos los eventos importantes." />
        <meta name="keywords" content="fútbol, torneos, club de fútbol, eventos de fútbol, torneos futuros" />
      </Helmet>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Torneos</h1>

        {torneosEnCurso.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17e5e5]">Torneos en Curso</h2>
            {renderTorneos(torneosEnCurso)}
          </section>
        )}

        {torneosFuturos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17e5e5]">Próximos Torneos</h2>
            {renderTorneos(torneosFuturos)}
          </section>
        )}

        {torneosPasados.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#17e5e5]">Torneos Pasados</h2>
            {renderTorneos(torneosPasados)}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Tournaments;
