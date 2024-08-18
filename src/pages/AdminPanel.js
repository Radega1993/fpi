import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getTorneos, createTorneo, deleteTorneo } from '../services/torneoService';

const AdminPanel = () => {
  const [torneos, setTorneos] = useState([]);
  const [newTorneo, setNewTorneo] = useState({ nombre: '', fecha: '', ubicacion: '' });

  // Cargar torneos al montar el componente
  useEffect(() => {
    const fetchTorneos = async () => {
      const response = await getTorneos();
      setTorneos(response.data);
    };
    fetchTorneos();
  }, []);

  // Manejar cambios en el formulario de creación
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTorneo({ ...newTorneo, [name]: value });
  };

  // Manejar el envío del formulario de creación
  const handleCreateTorneo = async (e) => {
    e.preventDefault();
    await createTorneo(newTorneo);
    setNewTorneo({ nombre: '', fecha: '', ubicacion: '' });
    const response = await getTorneos();
    setTorneos(response.data);
  };

  // Manejar eliminación de un torneo
  const handleDeleteTorneo = async (id) => {
    await deleteTorneo(id);
    const response = await getTorneos();
    setTorneos(response.data);
  };

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Panel de Administración</h1>
        <p className="text-lg mb-8">Aquí los administradores pueden gestionar torneos.</p>

        {/* Formulario para agregar un nuevo torneo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Torneo</h2>
          <form onSubmit={handleCreateTorneo} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del Torneo"
              value={newTorneo.nombre}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="date"
              name="fecha"
              placeholder="Fecha"
              value={newTorneo.fecha}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="ubicacion"
              placeholder="Ubicación"
              value={newTorneo.ubicacion}
              onChange={handleInputChange}
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-[#17e5e5] text-black p-2 rounded hover:bg-[#14b3b3] transition"
            >
              Agregar Torneo
            </button>
          </form>
        </div>

        {/* Tabla de torneos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Listado de Torneos</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Nombre</th>
                <th className="py-2 px-4 border">Fecha</th>
                <th className="py-2 px-4 border">Ubicación</th>
                <th className="py-2 px-4 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {torneos.map((torneo) => (
                <tr key={torneo.id}>
                  <td className="py-2 px-4 border">{torneo.nombre}</td>
                  <td className="py-2 px-4 border">{torneo.fecha}</td>
                  <td className="py-2 px-4 border">{torneo.ubicacion}</td>
                  <td className="py-2 px-4 border text-center">
                    <button
                      onClick={() => handleDeleteTorneo(torneo.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPanel;
