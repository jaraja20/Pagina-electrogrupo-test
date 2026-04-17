import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Waves, Gauge, ShieldCheck, Cpu } from "lucide-react";

export default function SistemaBombeoPage() {
  return (
    <>
      <Helmet>
        <title>Sistemas de Bombeo IMBIL | Electrogrupo Paraguay</title>
        <meta name="description" content="Bombas centrífugas de alto rendimiento IMBIL para irrigación agrícola. Representante oficial en Paraguay: Electrogrupo." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Bombas_campo_funcionando_yevcla_c545ri.webp"
            alt="Sistema de Bombeo IMBIL en operación"
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
              <Badge className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 px-4 py-1 text-sm">IMBIL</Badge>
              <Link to="/marca/imbil" className="text-white/70 hover:text-white text-sm transition-colors">Ver empresa →</Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight font-heading">
              Sistemas de Bombeo de Agua
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Bombas centrífugas de alta eficiencia diseñadas para irrigación agrícola. Potencia, confiabilidad y bajo consumo energético para su operación de riego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button data-tally-open="b584We" data-tally-layout="modal" data-tally-auto-close="3000">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="bombeo-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </button>
              <Link to="/marca/imbil">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="bombeo-brand-btn">
                  Conocer IMBIL
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
              ¿Por qué elegir bombas IMBIL?
            </h2>
            <p className="text-gray-600 text-lg">
              Bombas metalúrgicas de fabricación brasileña con más de 60 años de trayectoria en soluciones de bombeo para el sector agrícola e industrial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waves, title: "Alto Caudal", desc: "Capacidad de bombeo variable que se adapta a los requerimientos de caudal de cada proyecto de irrigación.", tooltip: "Caudal adaptable" },
              { icon: Gauge, title: "Eficiencia Energética", desc: "Diseño hidrodinámico optimizado que reduce el consumo de energía y los costos operativos.", tooltip: "Bajo consumo" },
              { icon: ShieldCheck, title: "Durabilidad", desc: "Materiales de alta resistencia a la corrosión y al desgaste, garantizando años de operación confiable.", tooltip: "Larga vida útil" },
              { icon: Cpu, title: "Versatilidad", desc: "Modelos disponibles para diversas aplicaciones: riego agrícola, abastecimiento urbano e industrial.", tooltip: "Múltiples usos" }
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904816/metallic-factory-machine_npwyji_vwqxhf.webp"
                alt="Detalles técnicos de bombas IMBIL"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-gray-300">Especificaciones</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Ingeniería de calidad para su sistema de riego
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Cada bomba IMBIL es seleccionada y configurada por nuestro equipo técnico según las necesidades específicas de caudal, presión y condiciones de su proyecto.
              </p>
              <ul className="space-y-6">
                {[
                  "Bombas centrífugas horizontales y verticales para diferentes configuraciones de instalación.",
                  "Caudales desde 10 m³/h hasta más de 5.000 m³/h para proyectos de cualquier escala.",
                  "Materiales: hierro fundido, acero inoxidable y aleaciones especiales según la aplicación.",
                  "Compatibilidad con sistemas de riego por pivot, aspersión y goteo."
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
            ¿Necesita una solución de bombeo para su campo?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nuestros ingenieros están listos para diseñar el sistema de bombeo ideal para su proyecto de irrigación.
          </p>
          <button data-tally-open="b584We" data-tally-layout="modal" data-tally-auto-close="3000">
            <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="bombeo-cta-btn">
              Contactar a un Asesor
            </Button>
          </button>
        </div>
      </section>
    </>
  );
}
