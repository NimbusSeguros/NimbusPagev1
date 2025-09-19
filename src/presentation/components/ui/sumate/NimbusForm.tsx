"use client";
import type React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
// Define your own features array for the feature cards
const features = [
  {
    icon: "🚀",
    title: "Crecimiento",
    description: "Impulsá tu desarrollo personal y profesional.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    description: "Conectá con personas con tus mismos intereses.",
  },
  {
    icon: "🎓",
    title: "Aprendizaje",
    description: "Accedé a recursos y capacitaciones exclusivas.",
  },
  {
    icon: "💡",
    title: "Innovación",
    description: "Participá en proyectos y desafíos creativos.",
  },
];

// ✅ Inicializar EmailJS una sola vez
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const NimbusForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    telefono: "",
    provincia: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmails = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateIdAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
    const templateIdClient = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT;

    if (!serviceId || !templateIdAdmin || !templateIdClient) {
      throw new Error("Configuración de EmailJS incompleta");
    }

    // Variables que debes usar también en tu plantilla de EmailJS {{nombreApellido}}, {{email}}, etc.
    const adminParams = {
      nombreApellido: formData.nombreApellido,
      email: formData.email,
      telefono: formData.telefono,
      provincia: formData.provincia,
    };

    // Enviar ambos emails
    await Promise.all([
      emailjs.send(serviceId, templateIdAdmin, adminParams),
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos vacíos
    const camposVacios = Object.entries(formData)
      .filter(([_, valor]) => !valor.trim())
      .map(([campo]) => campo);

    if (camposVacios.length > 0) {
      Swal.fire({
        title: "Campos obligatorios",
        text: `Por favor completa los siguientes campos: ${camposVacios.join(", ")}`,
        icon: "error",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#0000FF",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmails();

      // WhatsApp
      const mensaje = `Formulario desde la página de nimbus, nuevo PAS 
      
      • Nombre y Apellido: ${formData.nombreApellido}
      • Teléfono: ${formData.telefono}
      • Provincia: ${formData.provincia}
      • Correo Electrónico: ${formData.email}`;

      const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER || "5493434464748";
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      Swal.fire({
        title: "¡Formulario enviado!",
        html: `<p>✅ Correos enviados exitosamente</p>
               <p>📱 Te redirigiremos a WhatsApp</p>`,
        icon: "success",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#72FF47",
      }).then(() => {
        window.open(urlWhatsApp, "_blank");
        setFormData({
          nombreApellido: "",
          email: "",
          telefono: "",
          provincia: "",
        });
      });
    } catch (error) {
      console.error("Error al enviar emails:", error);

      Swal.fire({
        title: "Error",
        text: "No se pudieron enviar los correos. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#0000FF",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Agrega estilos personalizados para el select si es necesario
  const selectStyles = `
    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' fill='gray' xmlns='http://www.w3.org/2000/svg'><path d='M4 6l4 4 4-4'/></svg>");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1em;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: selectStyles }} />
      <div className="min-h-screen flex flex-col md:flex-row font-['Open_Sans']">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-xl font-thin text-[#0000FF] mb-8 font-['Open_Sans']">
              Completá tus datos para dar el <span className="font-bold font-['Open_Sans']">primer paso</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombreApellido"
                  className="font-['Open_Sans'] block text-sm font-medium text-[#8D8B8E] mb-2"
                >
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  id="nombreApellido"
                  name="nombreApellido"
                  value={formData.nombreApellido}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border font-['Open_Sans'] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-['Open_Sans'] font-medium text-[#8D8B8E] mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border font-['Open_Sans'] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="provincia"
                    className="font-['Open_Sans'] block text-sm font-medium text-[#8D8B8E] mb-2"
                  >
                    Provincia *
                  </label>
                  <select
                    id="provincia"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border font-['Open_Sans'] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Seleccione</option>
                    <option value="buenos-aires">Buenos Aires</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="santa-fe">Santa Fe</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="tucuman">Tucumán</option>
                    <option value="entre-rios">Entre Ríos</option>
                    <option value="salta">Salta</option>
                    <option value="chaco">Chaco</option>
                    <option value="corrientes">Corrientes</option>
                    <option value="misiones">Misiones</option>
                    <option value="san-juan">San Juan</option>
                    <option value="jujuy">Jujuy</option>
                    <option value="rio-negro">Río Negro</option>
                    <option value="formosa">Formosa</option>
                    <option value="neuquen">Neuquén</option>
                    <option value="chubut">Chubut</option>
                    <option value="san-luis">San Luis</option>
                    <option value="catamarca">Catamarca</option>
                    <option value="la-rioja">La Rioja</option>
                    <option value="la-pampa">La Pampa</option>
                    <option value="santiago-del-estero">Santiago del Estero</option>
                    <option value="santa-cruz">Santa Cruz</option>
                    <option value="tierra-del-fuego">Tierra del Fuego</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="font-['Open_Sans'] block text-sm font-medium text-[#8D8B8E] mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border font-['Open_Sans'] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[45%] bg-[#72FF47] hover:bg-[#0000FF] font-['Open_Sans'] text-[#0000FF] hover:text-white font-semibold py-3 px-2 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-xs disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-[#72FF47] disabled:hover:text-[#0000FF]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Quiero ser parte"
                )}
              </button>
            </form>
          </div>
        </div>
        {/* Right Side - Feature Cards */}
        <div className="w-full md:w-1/2 bg-[#0000FF] p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-xl font-bold text-[#72FF47] mb-8 font-['Open_Sans'] ">
              Lo que encontrás en <span className="text-[#72FF47] font-['Open_Sans']">Nimbus</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 font-['Open_Sans'] rounded-full flex items-center justify-center text-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      <span className="font-semibold text-[#0000FF] font-['Open_Sans']">{feature.title}</span>{" "}
                      <span className="text-gray-600 font-['Open_Sans']">{feature.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NimbusForm;
