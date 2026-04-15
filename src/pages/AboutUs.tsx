import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Helmet>
        <title>Sobre Nosotros | Electrogrupo</title>
        <meta name="description" content="Conoce más sobre Electrogrupo, nuestra historia, misión y visión." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#0D1B2A] tracking-tight leading-[1.1]"
          >
            Impulsando el<br />desarrollo del<br />campo paraguayo
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md lg:ml-auto"
          >
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Electrogrupo trabaja estrechamente con productores y empresas del sector agropecuario para brindar soluciones tecnológicas de vanguardia que aseguren un crecimiento sostenible.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden relative"
        >
          <img 
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904815/Local_EG_tpbdfl_kor0p1.webp" 
            alt="Instalaciones de Electrogrupo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 right-8 text-white text-sm font-medium tracking-wider uppercase">
            Sede Central - Electrogrupo
          </div>
        </motion.div>
      </section>

      {/* Dark Section - Our Work / History */}
      <section className="bg-[#0D1B2A] text-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuestra Historia</h2>
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-semibold">01</div>
              <h3 className="text-2xl font-medium mb-6 leading-snug">
                Más de 30 años transformando la manera en que se produce en el campo.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Desde nuestros inicios, hemos construido una sólida reputación basada en la confianza, la calidad y el compromiso inquebrantable con nuestros clientes. Hemos sido pioneros en la introducción de sistemas de riego eficientes y soluciones de almacenamiento de granos de clase mundial en Paraguay.
              </p>
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0D1B2A] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[600px] rounded-2xl overflow-hidden"
            >
              <img 
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Edited5_a41ono_snlmxc.webp" 
                alt="Trabajo en el campo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Light Section - Mission & Vision */}
      <section className="bg-[#f4f5f6] py-24 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-[#0D1B2A] mb-8 leading-tight tracking-tight">
                Misión y<br />Visión
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-16">
                Nuestra misión es proveer equipos y servicios de la más alta calidad que optimicen los recursos y maximicen la rentabilidad de los productores.
              </p>
              
              <div className="flex items-start gap-8">
                <div className="text-7xl font-bold text-[#0D1B2A] leading-none">1</div>
                <div>
                  <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">Visión hacia el futuro</h4>
                  <p className="text-gray-600">
                    Visualizamos un futuro donde la tecnología y la sostenibilidad vayan de la mano para garantizar la seguridad alimentaria y el cuidado del medio ambiente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative dashed circle/line behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-dashed border-gray-300 rounded-full -z-10" />
              
              <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img 
                  src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/iC_Wes_Eu_Corn_2021_04_1_orrzuk_wurarg.webp" 
                  alt="Cultivos y tecnología" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section - More from Electrogrupo */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-[#0D1B2A] tracking-tight leading-tight"
            >
              Más sobre<br />Electrogrupo
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Descubre nuestras últimas novedades, proyectos destacados y cómo estamos transformando el sector agropecuario.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 inline-block mb-4">
                Innovación
              </div>
              <div className="border-t border-gray-300 pt-4 mb-6">
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">
                  Tecnología de precisión para el campo
                </h3>
                <p className="text-sm text-gray-500">24 de Junio, 2026, Electrogrupo</p>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/innovar_-0661_xufmhs_wtl4kr.webp" 
                  alt="Innovación" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 inline-block mb-4">
                Sostenibilidad
              </div>
              <div className="border-t border-gray-300 pt-4 mb-6">
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">
                  Gestión eficiente del agua
                </h3>
                <p className="text-sm text-gray-500">15 de Mayo, 2026, Electrogrupo</p>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Pi_Am_Li_02_1_ek45ij_byq8da.webp" 
                  alt="Sostenibilidad" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
