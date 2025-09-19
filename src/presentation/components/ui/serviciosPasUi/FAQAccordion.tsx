import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "¿Qué tipo de red es Nimbus?",
      answer: "Somos una red de productores independientes. Cada PAS mantiene su cartera y opera con autonomía comercial, con el respaldo de un equipo que acompaña de verdad."
    },
    {
      id: 2,
      question: "¿Qué beneficios ofrece sumarse a Nimbus?",
      answer: "Acceso a aseguradoras líderes, capacitaciones continuas, soporte en gestión, acompañamiento comercial, materiales de marketing y experiencias exclusivas para nuestra red."
    },
    {
      id: 3,
      question: "¿Qué tipos de seguros puedo ofrecer?",
      answer: "Podés operar en todos los ramos: automotores, hogar, vida, ART, flotas, seguros técnicos, agro, responsabilidad civil, entre otros. Te damos apoyo integral para trabajar donde más valor puedas generar."
    },
    {
      id: 4,
      question: "¿Con qué aseguradoras puedo trabajar?",
      answer: "Nimbus trabaja con más de 20 aseguradoras líderes. Cada PAS elige con qué compañías operar según su estrategia comercial y el perfil de su cartera."
    },
    {
      id: 5,
      question: "¿Cómo accedo a productos, tarifas y condiciones?",
      answer: "Nuestro equipo comercial te acompaña en la cotización, selección de coberturas y emisión de pólizas, para que puedas ofrecer soluciones claras y competitivas a tus clientes."
    },
    {
      id: 6,
      question: "¿Quién me ayuda a gestionar siniestros y pólizas?",
      answer: "Contás con el apoyo de un equipo especializado en administración y siniestros que te acompaña en cada paso para agilizar tu trabajo y dar respuesta a tus clientes."
    },
    {
      id: 7,
      question: "¿La cartera de clientes es mía?",
      answer: "Sí. En Nimbus conservás la titularidad de tus clientes y gestionás tu cartera con autonomía. Nosotros te damos las herramientas para que crezca con solidez."
    },
    {
      id: 8,
      question: "¿Qué herramientas me ofrecen para atraer más clientes?",
      answer: "Capacitaciones, acompañamiento comercial, materiales de marca, y soporte estratégico para fortalecer tu presencia y profesionalismo."
    },
    {
      id: 9,
      question: "¿Qué tipo de capacitaciones ofrecen?",
      answer: "Brindamos formación continua en temas clave: comercial, siniestros, administración, marketing e inteligencia artificial, siempre con un enfoque práctico."
    },
    {
      id: 10,
      question: "¿Cómo se dictan las capacitaciones?",
      answer: "Se realizan mayormente de forma virtual y en vivo. También hay encuentros presenciales y contenidos especiales a demanda."
    },
    {
      id: 11,
      question: "¿Las capacitaciones tienen costo?",
      answer: "No. Las capacitaciones están incluidas para todos los productores que forman parte de la red."
    },
    {
      id: 12,
      question: "¿Qué necesito para ser PAS?",
      answer: "Debés estar matriculado ante la Superintendencia de Seguros de la Nación (SSN) y cumplir con los requisitos del organismo. Si aún no estás matriculado, te ayudamos a orientarte."
    },
    {
      id: 13,
      question: "¿Qué es el PCC?",
      answer: "El Programa de Capacitación Continuada es obligatorio y requiere completar 4 cursos al año. Está gestionado por entes autorizados y se realiza en formato virtual o presencial."
    },
    {
      id: 14,
      question: "¿Cómo hago la rúbrica digital?",
      answer: "La SSN implementó la Rúbrica Digital 2.0, que reemplaza los libros físicos. Se gestiona online. Podés ver el manual oficial acá."
    },
    {
      id: 15,
      question: "¿Cómo se paga la matrícula anual de PAS?",
      answer: "El pago se realiza a través del sistema REPAS con clave fiscal. El vencimiento es el 30 de abril de cada año. Más info en este enlace."
    },
    {
      id: 16,
      question: "¿Qué pasa si quiero dejar la red?",
      answer: "La desvinculación es simple. Solo te pedimos comunicarlo con anticipación para ordenar los procesos con aseguradoras y garantizar una salida prolija."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-12xl mx-auto p-6 bg-white">
      {/* Title */}
      <h2 className="text-[#0000FF] text-[18px] mb-8 text-center">
        <span className="text-[#0000FF] text-[18px] font-open-sans"><strong>Preguntas frecuentes</strong></span> de nuestra red
      </h2>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full py-4 px-0 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200 p-2 cursor-pointer"
            >
              <span 
                className="text-[#5E5E5E] text-xs leading-relaxed pr-4"
                style={{ 
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '12px'
                }}
              >
                {item.question}
              </span>
              <svg
                className={`w-4 h-4 text-[#5E5E5E] transition-transform duration-200 flex-shrink-0 ${
                  openItems.includes(item.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(item.id) ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <div 
                className="text-[#5E5E5E] text-xs leading-relaxed"
                style={{ 
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '12px'
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;