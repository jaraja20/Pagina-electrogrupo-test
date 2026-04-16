import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Database, Settings, Sun, Truck, MapPin, Calendar, Award } from "lucide-react";

export default function ConsilosPage() {
  return (
    <>
      <Helmet>
        <title>CONSILOS | Electrogrupo Paraguay</title>
        <meta name="description" content="CONSILOS, líder en soluciones de almacenamiento y conservación de granos. Representante oficial en Paraguay: Electrogrupo SACI." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/COPACOL_-_Ubirata_-_08-01-2025_-_v03_l0zdkc_u9wfhv.webp"
            alt="Silos CONSILOS"
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
              src="https://res.cloudinary.com/difxr700v/image/upload/v1775651670/Consilos_xyzff0.svg"
              alt="CONSILOS Logo"
              className="h-10 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
              Soluciones integrales en almacenamiento de granos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Empresa certificada ISO 9001. Silos Planos, Elevados y de Expedición. Máquinas de limpieza, Secaderos y equipamiento completo para unidades almacenadoras. Del proyecto a la puesta en marcha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/silos">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="consilos-main-service-btn">
                  Silos y Almacenamiento <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="consilos-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </a>
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
              <Badge variant="outline" className="mb-4 border-gray-300 h-[35px] px-4 flex items-center justify-center w-fit">Sobre CONSILOS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Empresa certificada ISO 9001 en poscosecha
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                CONSILOS es una empresa brasileña certificada ISO 9001, especializada en el diseño y fabricación de Silos Planos, Elevados y de Expedición, Máquinas de limpieza, Secaderos y equipamiento completo para unidades almacenadoras.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Electrogrupo representa oficialmente a CONSILOS en Paraguay desde 2025, ofreciendo el portafolio completo de soluciones de poscosecha: del proyecto a la puesta en marcha, con instalación y soporte técnico especializado.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">+40</span>
                  <span className="text-sm text-gray-500">Años de experiencia</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">Brasil</span>
                  <span className="text-sm text-gray-500">Origen</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">Líder</span>
                  <span className="text-sm text-gray-500">En poscosecha</span>
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/Edited3_qx1drj_s4hwyr.webp"
                alt="Silo CONSILOS montado"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Línea completa de poscosecha</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Equipos para cada etapa del proceso: almacenamiento, secado, limpieza y transporte de granos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Silos", desc: "Silos planos, elevados y de expedición para almacenamiento seguro de granos a gran escala.", href: "/silos", primary: true },
              { icon: Sun, title: "Secadoras de Granos", desc: "Sistemas de secado eficiente que garantizan el nivel óptimo de humedad para la conservación.", href: "#", primary: false },
              { icon: Settings, title: "Máquinas de Limpieza", desc: "Equipos de pre-limpieza y limpieza para separar impurezas y garantizar la calidad del grano.", href: "#", primary: false },
              { icon: Truck, title: "Transportadoras", desc: "Ascensores de cangilones y cintas transportadoras para el manejo eficiente del grano.", href: "#", primary: false }
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
                  data-testid={`consilos-service-${idx}`}
                >
                  <service.icon className="w-8 h-8 mb-6 text-[#E31E24]" />
                  <h3 className={`text-xl font-bold mb-3 ${service.primary ? 'text-white' : 'text-[#0D1B2A]'}`}>{service.title}</h3>
                  <p className={`mb-4 leading-relaxed text-sm ${service.primary ? 'text-gray-300' : 'text-gray-600'}`}>{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#E31E24]">
                    Ver más <ChevronRight className="w-4 h-4" />
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
            Asegure la calidad de su cosecha con CONSILOS
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Electrogrupo, representante oficial de CONSILOS en Paraguay. Soluciones completas de poscosecha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/silos">
              <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="consilos-cta-service-btn">
                Ver Silos
              </Button>
            </Link>
            <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#E31E24] px-10 text-lg h-14">
                Cotizar
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
