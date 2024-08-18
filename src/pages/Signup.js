import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    team: '',
    tournament: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Formulario de Inscripción</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">
            Nombre Completo:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 w-full border rounded"/>
          </label>
        </div>
        <div>
          <label className="block text-lg font-medium">
            Correo Electrónico:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 w-full border rounded"/>
          </label>
        </div>
        <div>
          <label className="block text-lg font-medium">
            Teléfono:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 p-2 w-full border rounded"/>
          </label>
        </div>
        <div>
          <label className="block text-lg font-medium">
            Equipo (si aplica):
            <input type="text" name="team" value={formData.team} onChange={handleChange} className="mt-1 p-2 w-full border rounded"/>
          </label>
        </div>
        <div>
          <label className="block text-lg font-medium">
            Torneo:
            <input type="text" name="tournament" value={formData.tournament} onChange={handleChange} required className="mt-1 p-2 w-full border rounded"/>
          </label>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Inscribirse
        </button>
      </form>
    </div>
  );
};

export default Signup;
