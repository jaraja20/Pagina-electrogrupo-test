import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, ShieldCheck, Cpu, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PivotIrrigation() {
  return (
    <>
      <Helmet>
        <title>Riego por Pivot Central Western | Electrogrupo Paraguay</title>
        <meta 
          name="description" 
          content="Optimice el rendimiento de su cultivo con los sistemas de riego por Pivot Central Western. Alta durabilidad, eficiencia hídrica y control remoto inteligente." 
        />
        <meta name="keywords" content="riego por pivot, pivot central, Western, irrigación agrícola, eficiencia hídrica, campo paraguayo, Electrogrupo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Photo_Wes_Pivots_Wa_Corn-1_mf2qcz_sl1ijr.webp" 
            alt="Sistema de riego por Pivot Central Western en operación" 
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
            <Badge className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 mb-6 px-4 py-1 text-sm">
              Western Irrigation
            </Badge>
            <Link to="/marca/western" className="text-white/70 hover:text-white text-sm transition-colors ml-3">Ver empresa →</Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight font-heading">
              Sistemas de Riego por Pivot Central Western
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Pivot Central CP600 diseñado para una amplia variedad de condiciones meteorológicas, de cultivo y terreno. Máximo rendimiento con mínimo consumo de agua. Más de 25.000 pivots vendidos en 80 países.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tally.so/r/b584We" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 transition-all px-8 w-full sm:w-auto">
                  Solicitar Cotización
                </Button>
              </a>
              <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto">
                Descargar Catálogo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
              ¿Por qué elegir un Pivot Central Western?
            </h2>
            <p className="text-gray-600 text-lg">
              Diseñados para soportar las condiciones más exigentes del campo paraguayo, los pivotes Western ofrecen una combinación inigualable de durabilidad y tecnología avanzada.
            </p>
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Estructura Robusta",
                  desc: "Tuberías de acero galvanizado en caliente con +15.000 horas de riego garantizadas sin corrosión. Barras de marco de acero de alta resistencia con cabezas forjadas en caliente.",
                  tooltip: "+15.000h garantía"
                },
                {
                  icon: Droplets,
                  title: "Eficiencia Hídrica",
                  desc: "Cartas de aspersión personalizadas para cada terreno, cultivo y condición climática. Baja presión de trabajo, aplicación eficiente y mínima pérdida por evaporación y viento.",
                  tooltip: "Ahorro de agua"
                },
                {
                  icon: Cpu,
                  title: "Tecnología iControl",
                  desc: "Paneles de control avanzados: iControlEvoTouch con pantalla táctil 7\" Siemens. Gestión remota con iControlRemote desde cualquier dispositivo conectado a internet.",
                  tooltip: "Control inteligente"
                },
                {
                  icon: Settings,
                  title: "Motores de Alta Eficiencia",
                  desc: "Motores de alta fiabilidad con 95% de eficiencia. Reductores de acero de alta resistencia diseñados para tramos más largos. Fabricados bajo ISO 9001.",
                  tooltip: "95% eficiencia"
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <Tooltip>
                    <TooltipTrigger render={<div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-[#E31E24] cursor-help" />}>
                      <feature.icon className="w-7 h-7" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/iC_Wes_Eu_Corn_2021_04_1_orrzuk_wurarg.webp" 
                alt="Detalles técnicos del Pivot Western" 
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
                Pivot CP600 - Ingeniería de Precisión
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Cada sistema Western CP600 es configurado a medida según la topografía, el tipo de suelo y los requerimientos hídricos de su proyecto agrícola.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Tramos disponibles desde 38,38m (125.7') hasta 62,05m (203.7') para adaptarse a cualquier tamaño de parcela.",
                  "Opciones de tubería en diámetros de 5\" (127mm), 6⅝\" (168.3mm) y 8⅝\" (219.1mm) para optimizar flujo y presión.",
                  "Aleros configurables de 1,8m hasta 25,6m. Tecnología Permapipe™ con revestimiento interno de HDPE para aguas corrosivas.",
                  "Pivot Corner con guía GPS de precisión < 2.5cm utilizando hasta 20 satélites. Aumenta hasta 20% el área irrigada."
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

      {/* CTA Section */}
      <section className="py-24 bg-[#E31E24] text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading max-w-3xl mx-auto">
            ¿Listo para transformar la productividad de su campo?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Nuestros ingenieros agrónomos están listos para diseñar el sistema de riego por pivot perfecto para su establecimiento.
          </p>
          <a href="https://tally.so/r/b584We" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 transition-all px-10 text-lg h-14">
              Contactar a un Asesor
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}

  );
}
