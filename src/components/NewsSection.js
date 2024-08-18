import React from 'react';

const NewsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artículo 1 */}
          <article className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Título de la Noticia 1</h3>
            <p className="text-gray-700 mb-4">Resumen de la noticia 1. Un vistazo rápido a lo que está sucediendo en el club.</p>
            <a href="#" className="text-[#17e5e5] hover:text-black">Leer más...</a>
          </article>
          {/* Artículo 2 */}
          <article className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Título de la Noticia 2</h3>
            <p className="text-gray-700 mb-4">Resumen de la noticia 2. Un vistazo rápido a lo que está sucediendo en el club.</p>
            <a href="#" className="text-[#17e5e5] hover:text-black">Leer más...</a>
          </article>
          {/* Artículo 3 */}
          <article className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Título de la Noticia 3</h3>
            <p className="text-gray-700 mb-4">Resumen de la noticia 3. Un vistazo rápido a lo que está sucediendo en el club.</p>
            <a href="#" className="text-[#17e5e5] hover:text-black">Leer más...</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
