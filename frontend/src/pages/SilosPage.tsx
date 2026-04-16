import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Database, ShieldCheck, Thermometer, Cpu } from "lucide-react";

export default function SilosPage() {
  return (
    <>
      <Helmet>
        <title>Silos CONSILOS | Electrogrupo Paraguay</title>
        <meta name="description" content="Silos planos, elevados y de expedición CONSILOS. Soluciones de almacenamiento de granos de clase mundial. Representante oficial: Electrogrupo." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/COPACOL_-_Ubirata_-_08-01-2025_-_v03_l0zdkc_u9wfhv.webp"
            alt="Silos CONSILOS instalados"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 px-4 py-1 text-sm">CONSILOS</Badge>
              <Link to="/marca/consilos" className="text-white/70 hover:text-white text-sm transition-colors">Ver empresa →</Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight font-heading">
              Silos y Almacenamiento de Granos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Silos planos, elevados y de expedición fabricados con los más altos estándares de calidad. Conserve su producción con la máxima seguridad y eficiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="silos-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </a>
              <Link to="/marca/consilos">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="silos-brand-btn">
                  Conocer CONSILOS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
              ¿Por qué elegir silos CONSILOS?
            </h2>
            <p className="text-gray-600 text-lg">
              Equipos diseñados para garantizar la conservación óptima de granos, con tecnología que controla temperatura, humedad y ventilación.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Gran Capacidad", desc: "Silos disponibles desde pequeñas capacidades hasta más de 20.000 toneladas, adaptándose a cualquier escala de producción." },
              { icon: Thermometer, title: "Control de Temperatura", desc: "Sistemas de aireación y termometría integrados que monitorean y regulan las condiciones internas del silo." },
              { icon: ShieldCheck, title: "Estructura Robusta", desc: "Chapa de acero galvanizado de alta resistencia con tratamiento anticorrosivo para máxima durabilidad." },
              { icon: Cpu, title: "Automatización", desc: "Sistemas de control automatizado para carga, descarga, ventilación y monitoreo remoto del silo." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-[#E31E24]">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/Edited3_qx1drj_s4hwyr.webp"
                alt="Silo CONSILOS montaje completo"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-gray-300">Tipos de Silos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Soluciones para cada necesidad de almacenamiento
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                CONSILOS ofrece una línea completa de silos diseñados para diferentes necesidades de almacenamiento, desde pequeños productores hasta grandes cooperativas.
              </p>
              <ul className="space-y-6">
                {[
                  "Silos Planos: ideales para grandes volúmenes, con sistema de barrido mecanizado y ventilación optimizada.",
                  "Silos Elevados: perfectos para espacios reducidos, con descarga por gravedad y fácil integración con sistemas de transporte.",
                  "Silos de Expedición: diseñados para carga rápida de camiones, con compuertas de descarga de alta velocidad.",
                  "Sistemas complementarios: secadoras, máquinas de limpieza y transportadoras para una solución integral."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-[#E31E24]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E31E24] text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading max-w-3xl mx-auto">
            Proteja su cosecha con silos CONSILOS
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nuestro equipo de ingenieros diseñará la solución de almacenamiento ideal para su establecimiento.
          </p>
          <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="silos-cta-btn">
              Contactar a un Asesor
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
