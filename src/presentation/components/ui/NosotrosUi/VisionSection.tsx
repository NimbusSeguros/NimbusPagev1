import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
            Visión
          </h2>
          <p className="text-lg max-w-4xl mx-auto" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
            Nuestro plan estratégico de trabajo se basa en lograr crecimiento y desarrollo sostenido. Nuestros objetivos son:
          </p>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-start justify-center gap-8 lg:gap-16">
          {/* Capital humano */}
          <div className="flex-1 max-w-sm text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272240/Mask_group_3_vdgu2k.png"
                alt="Capital humano"
                className="w-64 h-64 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              Capital humano
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Ser un buen espacio en el cual trabajar y en el que todos los integrantes de la comunidad NIMBUS deseen crecer y dar siempre lo mejor de sí mismos.
            </p>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center py-22">
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272063/Vector_67_iff8c6.svg"
              alt="Separator"
              className="w-25 h-16"
            />
          </div>

          {/* PAS */}
          <div className="flex-1 max-w-sm text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272239/Mask_group_4_p0mdfx.png"
                alt="PAS"
                className="w-64 h-64 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              PAS
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Desarrollar una vasta red de trabajo articulado y colaborativo.
            </p>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center py-22">
            <img
              src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272063/Vector_67_iff8c6.svg"
              alt="Separator"
              className="w-25 h-16"
            />
          </div>

          {/* Clientes */}
          <div className="flex-1 max-w-sm text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272239/Mask_group_5_bdvvcx.png"
                alt="Clientes"
                className="w-64 h-64 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              Clientes
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Asesorar y acercar la más amplia cartera de productos de las empresas líderes del mercado.
            </p>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="md:hidden space-y-12">
          {/* Capital humano */}
          <div className="text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272240/Mask_group_3_vdgu2k.png"
                alt="Capital humano"
                className="w-48 h-48 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              Capital humano
            </h3>
            <p className="text-sm leading-relaxed px-4" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Ser un buen espacio en el cual trabajar y en el que todos los integrantes de la comunidad NIMBUS deseen crecer y dar siempre lo mejor de sí mismos.
            </p>
          </div>

          {/* PAS */}
          <div className="text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272239/Mask_group_4_p0mdfx.png"
                alt="PAS"
                className="w-48 h-48 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              PAS
            </h3>
            <p className="text-sm leading-relaxed px-4" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Desarrollar una vasta red de trabajo articulado y colaborativo.
            </p>
          </div>

          {/* Clientes */}
          <div className="text-center">
            <div className="relative mb-6">
              <img
                src="https://res.cloudinary.com/dr8n9s55i/image/upload/v1750272239/Mask_group_5_bdvvcx.png"
                alt="Clientes"
                className="w-48 h-48 rounded-full mx-auto object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0000FF', fontFamily: 'Open Sans, sans-serif' }}>
              Clientes
            </h3>
            <p className="text-sm leading-relaxed px-4" style={{ color: '#5E5E5E', fontFamily: 'Open Sans, sans-serif' }}>
              Asesorar y acercar la más amplia cartera de productos de las empresas líderes del mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;