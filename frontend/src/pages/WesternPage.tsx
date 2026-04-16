import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Droplets, Cpu, ShieldCheck, MapPin, Calendar, Award } from "lucide-react";

export default function WesternPage() {
  return (
    <>
      <Helmet>
        <title>Western Irrigation | Electrogrupo Paraguay</title>
        <meta name="description" content="Western, líder mundial en sistemas de riego por Pivot Central. Representante oficial en Paraguay: Electrogrupo SACI." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Photo_Wes_Pivots_Wa_Corn-1_mf2qcz_sl1ijr.webp"
            alt="Western Pivot Central en campo"
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
              src="https://res.cloudinary.com/difxr700v/image/upload/v1775651676/Western_mzvt1o.svg"
              alt="Western Logo"
              className="h-10 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
              Líder mundial en sistemas de riego por Pivot
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Con décadas de experiencia e innovación, Western diseña y fabrica los sistemas de riego por Pivot Central más confiables y eficientes del mercado global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/riego-por-pivot">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="western-main-service-btn">
                  Riego por Pivot <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="western-cotizar-btn">
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
              <Badge variant="outline" className="mb-4 border-gray-300 h-[35px] px-4 flex items-center justify-center w-fit">Sobre Western</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Durabilidad, confiabilidad y máxima productividad
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Western diseña y fabrica sistemas de riego para condiciones extremas, cualquier superficie y cualquier tipo de agua. Tuberías de acero galvanizado que garantizan más de 15.000 horas de riego sin corrosión. Fabricados bajo rigurosos estándares de calidad.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Electrogrupo es el distribuidor oficial de Western en Paraguay desde 2022, brindando cobertura de proyecto, instalación y servicio técnico para productores en todo el país.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">25.000+</span>
                  <span className="text-sm text-gray-500">Pivots vendidos</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">80</span>
                  <span className="text-sm text-gray-500">Países</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Award className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">15.000h</span>
                  <span className="text-sm text-gray-500">Garantía anti-corrosión</span>
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/iC_Wes_Eu_Corn_2021_04_1_orrzuk_wurarg.webp"
                alt="Western Pivot en operación"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Soluciones de riego Western</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sistemas diseñados para maximizar la eficiencia hídrica y el rendimiento de sus cultivos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Pivotes Centrales y Corner",
                desc: "Pivot Central CP600 configurable con múltiples longitudes de tramo, diámetros de tubería (5\", 6⅝\", 8⅝\") y opciones de aspersión. Pivot Corner con guía GPS de precisión < 2.5cm.",
                href: "/riego-por-pivot",
                primary: true
              },
              {
                icon: Cpu,
                title: "Tecnología iControl",
                desc: "Línea completa de paneles de control: iControlBasic, iControlStandard, iControlEvoTouch con pantalla táctil 7\", iControlRemote para gestión desde cualquier dispositivo.",
                href: "/riego-por-pivot",
                primary: false
              },
              {
                icon: ShieldCheck,
                title: "Permapipe™ y Repuestos",
                desc: "Tubería con revestimiento interno de HDPE para aguas corrosivas. Stock permanente de repuestos originales, motores, reductores y neumáticos.",
                href: "#",
                primary: false
              }
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
                  data-testid={`western-service-${idx}`}
                >
                  <service.icon className={`w-8 h-8 mb-6 ${service.primary ? 'text-[#E31E24]' : 'text-[#E31E24]'}`} />
                  <h3 className={`text-xl font-bold mb-3 ${service.primary ? 'text-white' : 'text-[#0D1B2A]'}`}>{service.title}</h3>
                  <p className={`mb-4 leading-relaxed ${service.primary ? 'text-gray-300' : 'text-gray-600'}`}>{service.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold ${service.primary ? 'text-[#E31E24]' : 'text-[#E31E24]'}`}>
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
            Transforme la productividad de su campo con Western
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Electrogrupo, representante oficial de Western en Paraguay. Asesoramiento, instalación y soporte técnico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/riego-por-pivot">
              <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="western-cta-service-btn">
                Ver Riego por Pivot
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
