import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-[#17e5e5] text-black py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contacto</h2>
        <p className="mb-8">Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros torneos y eventos.</p>
        <p><strong>Email:</strong> contacto@clubfutbol.com</p>
        <p><strong>Teléfono:</strong> +1 234 567 890</p>
        <p><strong>Dirección:</strong> Calle Principal, Ciudad, País</p>
      </div>
    </section>
  );
};

export default ContactSection;
