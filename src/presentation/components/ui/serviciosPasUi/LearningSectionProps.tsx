import type React from "react"

interface LearningSectionProps {
  videoLinks?: string[]
}

const LearningSection: React.FC<LearningSectionProps> = ({
  videoLinks = [
    "https://www.youtube.com/embed/X_G4hwi6bB4",
    "https://www.youtube.com/embed/fnW8rLkdVxA",
    "https://www.youtube.com/embed/zJ3GiqTVywA",
  ],
}) => {
  return (
    <section className="w-full py-12 px-8 bg-white">
      <div className="max-w-12xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-lg font-open-sans mb-6 text-[#0000FF]"><span className="text-[#0000FF] font-medium">Capacitación constante para crecer juntos</span>
        </h2>

        {/* Description */}
        <div className="text-sm text-[#5E5E5E] mb-8 max-w-4xl mx-auto space-y-2 leading-relaxed font-open-sans">
          <p className="">
            El{" "}
            <strong>aprendizaje</strong> es parte de nuestra esencia. <br />
          </p>
          <p className="">
           Ofrecemos capacitaciones continuas en áreas clave como comercial, siniestros, administración, marketing e inteligencia artificial. 

          Cada encuentro está liderado por referentes de nuestro equipo, que comparten experiencia y conocimientos prácticos para ayudarte a profesionalizar tu trabajo, adaptarte a los cambios del mercado y crecer con herramientas reales.

          </p>
        </div>

        {/* Videos Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-8 max-w-12xl">
          {videoLinks.map((videoLink, index) => (
            <div key={index} className="flex-1 max-w-sm">
              {videoLink ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={videoLink}
                    className="w-full h-full rounded-lg shadow-md"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video ${index + 1}`}
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Video {index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningSection
