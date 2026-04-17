import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, Gauge, Leaf, MapPin, Calendar, Award } from "lucide-react";

export default function OuroProPage() {
  return (
    <>
      <Helmet>
        <title>OuroPro | Electrogrupo Paraguay</title>
        <meta name="description" content="OuroPro, especialistas en fertirrigación de precisión. Representante oficial en Paraguay: Electrogrupo SACI." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp"
            alt="OuroPro Fertirrigación"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <img
              src="https://res.cloudinary.com/difxr700v/image/upload/v1775651674/OuroPro_qusrqe.svg"
              alt="OuroPro Logo"
              className="h-10 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
              Fertirrigación de precisión para su cultivo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              OuroPro desarrolla sistemas avanzados de fertirrigación que combinan la aplicación precisa de agua y nutrientes, optimizando el crecimiento y rendimiento de los cultivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/fertirrigacion">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="ouropro-main-service-btn">
                  Fertirrigación <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <button data-tally-open="b584We" data-tally-layout="modal" data-tally-auto-close="3000">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="ouropro-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-gray-300 h-[35px] px-4 flex items-center justify-center w-fit">Sobre OuroPro</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Tecnología avanzada en nutrición vegetal
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                OuroPro es una empresa especializada en el desarrollo de soluciones de fertirrigación de alta precisión. Sus sistemas permiten la aplicación exacta de fertilizantes y nutrientes a través del sistema de riego, maximizando la absorción y reduciendo el desperdicio.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Como representante oficial, Electrogrupo ofrece los sistemas OuroPro junto con asesoramiento agronómico para garantizar una implementación óptima en cada proyecto.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">Precisión</span>
                  <span className="text-sm text-gray-500">Aplicación exacta</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">Brasil</span>
                  <span className="text-sm text-gray-500">Origen</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">Líder</span>
                  <span className="text-sm text-gray-500">En fertirrigación</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden h-[450px]"
            >
              <img
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp"
                alt="OuroPro Fertirrigación en campo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-gray-300 h-[35px] px-4 flex items-center justify-center mx-auto w-fit">Productos y Servicios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Soluciones de fertirrigación OuroPro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sistemas inteligentes para la aplicación precisa de fertilizantes junto con el riego.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "Fertirrigación de Precisión", desc: "Sistemas que combinan riego y nutrición en una sola operación, garantizando la dosificación exacta de fertilizantes para cada cultivo.", href: "/fertirrigacion", primary: true },
              { icon: Gauge, title: "Dosificación Automática", desc: "Controladores inteligentes que ajustan automáticamente la concentración y el volumen de nutrientes según las necesidades del cultivo.", href: "/fertirrigacion", primary: false },
              { icon: Leaf, title: "Asesoramiento Agronómico", desc: "Servicio de consultoría para diseñar planes de fertirrigación adaptados al tipo de suelo, cultivo y condiciones climáticas.", href: "#", primary: false }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={service.href}
                  className={`block p-8 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 h-full ${service.primary ? 'bg-[#0D1B2A] border-[#0D1B2A] text-white' : 'bg-white border-gray-100'}`}
                  data-testid={`ouropro-service-${idx}`}
                >
                  <service.icon className="w-8 h-8 mb-6 text-[#E31E24]" />
                  <h3 className={`text-xl font-bold mb-3 ${service.primary ? 'text-white' : 'text-[#0D1B2A]'}`}>{service.title}</h3>
                  <p className={`mb-4 leading-relaxed ${service.primary ? 'text-gray-300' : 'text-gray-600'}`}>{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#E31E24]">
                    Más información <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E31E24] text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading max-w-3xl mx-auto">
            Optimice la nutrición de sus cultivos con OuroPro
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Electrogrupo, representante oficial de OuroPro en Paraguay. Fertirrigación de precisión para su campo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fertirrigacion">
              <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="ouropro-cta-service-btn">
                Ver Fertirrigación
              </Button>
            </Link>
            <button data-tally-open="b584We" data-tally-layout="modal" data-tally-auto-close="3000">
              <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#E31E24] px-10 text-lg h-14">
                Cotizar
              </Button>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
