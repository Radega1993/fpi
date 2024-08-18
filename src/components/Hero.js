import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#17e5e5] text-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Bienvenido al Club de Fútbol</h2>
        <p className="text-lg mb-8">Descubre todo sobre nuestros torneos y eventos.</p>
        <a href="/signup" className="bg-black text-[#17e5e5] px-8 py-3 rounded hover:bg-gray-800 transition">Únete Ahora</a>
      </div>
    </section>
  );
};

export default Hero;
