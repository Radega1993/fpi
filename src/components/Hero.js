import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-[#17e5e5] text-black py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/4.jpeg')" }}
    >
      <div className="bg-black bg-opacity-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-white">Bienvenido al Club de Fútbol</h2>
          <p className="text-lg mb-8 text-white">Descubre todo sobre nuestros torneos y eventos.</p>
          <a
            href="/signup"
            className="bg-[#17e5e5] text-black px-8 py-3 rounded hover:bg-[#14b3b3] transition"
          >
            Únete Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
