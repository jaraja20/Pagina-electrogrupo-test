import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, Gauge, Leaf, Cpu } from "lucide-react";

export default function FertirrigacionPage() {
  return (
    <>
      <Helmet>
        <title>Fertirrigación OuroPro | Electrogrupo Paraguay</title>
        <meta name="description" content="Sistemas de fertirrigación de precisión OuroPro. Aplicación exacta de agua y nutrientes para maximizar el rendimiento de sus cultivos." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp"
            alt="Fertirrigación OuroPro en campo"
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
              <Badge className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 px-4 py-1 text-sm">OuroPro</Badge>
              <Link to="/marca/ouropro" className="text-white/70 hover:text-white text-sm transition-colors">Ver empresa →</Link>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight font-heading">
              Fertirrigación de Precisión
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Combine riego y nutrición en una sola operación. Sistemas inteligentes que aplican la cantidad exacta de fertilizantes para cada etapa del cultivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="fertirrigacion-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </a>
              <Link to="/marca/ouropro">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="fertirrigacion-brand-btn">
                  Conocer OuroPro
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
              Ventajas de la fertirrigación
            </h2>
            <p className="text-gray-600 text-lg">
              La fertirrigación permite aplicar nutrientes directamente en la zona radicular del cultivo, logrando una absorción más eficiente y reduciendo el desperdicio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: "Dosificación Precisa", desc: "Control exacto de la cantidad de fertilizante aplicado en cada ciclo de riego, adaptándose a cada etapa fenológica." },
              { icon: Gauge, title: "Ahorro de Insumos", desc: "Reducción de hasta 30% en el uso de fertilizantes gracias a la aplicación localizada y precisa." },
              { icon: Leaf, title: "Mayor Rendimiento", desc: "Incremento significativo en la productividad del cultivo al optimizar la nutrición en el momento adecuado." },
              { icon: Cpu, title: "Automatización", desc: "Sistemas programables que automatizan todo el proceso de fertirrigación, reduciendo la mano de obra necesaria." }
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp"
                alt="Sistema de fertirrigación OuroPro"
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
                Tecnología adaptada a su cultivo
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Cada sistema de fertirrigación OuroPro es configurado según las características del cultivo, tipo de suelo y fuente de agua disponible.
              </p>
              <ul className="space-y-6">
                {[
                  "Inyectores de fertilizante con control de flujo proporcional al caudal de riego.",
                  "Compatibilidad con sistemas de riego por pivot, goteo y aspersión.",
                  "Tanques de mezcla con agitadores para garantizar homogeneidad en la solución nutritiva.",
                  "Sensores de EC y pH para monitoreo en tiempo real de la concentración de nutrientes."
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
            Maximice el rendimiento de sus cultivos con fertirrigación
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nuestro equipo de ingenieros agrónomos diseñará el plan de fertirrigación ideal para su establecimiento.
          </p>
          <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="fertirrigacion-cta-btn">
              Contactar a un Asesor
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
