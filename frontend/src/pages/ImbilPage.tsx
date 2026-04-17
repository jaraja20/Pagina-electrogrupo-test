import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TallyModal } from "@/components/TallyModal";
import { ChevronRight, Waves, Wrench, ShieldCheck, MapPin, Calendar, Award } from "lucide-react";

export default function ImbilPage() {
  return (
    <>
      <Helmet>
        <title>IMBIL | Electrogrupo Paraguay</title>
        <meta name="description" content="IMBIL, líder en fabricación de bombas de agua industriales y agrícolas. Representante oficial en Paraguay: Electrogrupo SACI." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#0D1B2A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Bombas_campo_funcionando_yevcla_c545ri.webp"
            alt="IMBIL Sistemas de Bombeo"
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
              src="https://res.cloudinary.com/difxr700v/image/upload/v1775651673/IMBIL_xo11xm.svg"
              alt="IMBIL Logo"
              className="h-10 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-heading">
              Soluciones de bombeo de agua para el agro
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              IMBIL es un referente brasileño en la fabricación de bombas metalúrgicas de alta potencia para irrigación agrícola, abastecimiento urbano e industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/sistema-de-bombeo">
                <Button size="lg" className="bg-[#E31E24] text-white hover:bg-red-700 px-8 w-full sm:w-auto" data-testid="imbil-main-service-btn">
                  Sistemas de Bombeo <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <TallyModal formId="b584We">
                <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#0D1B2A] w-full sm:w-auto" data-testid="imbil-cotizar-btn">
                  Solicitar Cotización
                </Button>
              </TallyModal>
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
              <Badge variant="outline" className="mb-4 border-gray-300 h-[35px] px-4 flex items-center justify-center w-fit">Sobre IMBIL</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6 font-heading">
                Bombas de alta performance para grandes caudales
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                IMBIL (Indústria Metalúrgica de Bombas Irmãos Lachmann) es un fabricante brasileño con más de seis décadas de experiencia en bombas centrífugas de alto rendimiento. Especialistas en sistemas para irrigación agrícola con énfasis en cultivos con demanda de grandes caudales.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Electrogrupo es el representante oficial de IMBIL en Paraguay desde 2024, brindando cobertura de proyecto, instalación y servicio técnico especializado para sistemas de bombeo de cualquier escala.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-6 h-6 text-[#E31E24] mb-2" />
                  <span className="text-2xl font-bold text-[#0D1B2A]">+60</span>
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
                  <span className="text-sm text-gray-500">En bombeo agrícola</span>
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
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Bombas_campo_funcionando_yevcla_c545ri.webp"
                alt="IMBIL bombas en operación"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Línea de bombas IMBIL</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bombas centrífugas de alto rendimiento para irrigación, abastecimiento y aplicaciones industriales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Waves, title: "Bombas para Irrigación", desc: "Bombas centrífugas diseñadas específicamente para sistemas de riego agrícola, con caudales variables y alta eficiencia energética.", href: "/sistema-de-bombeo", primary: true },
              { icon: Wrench, title: "Bombas Industriales", desc: "Soluciones de bombeo para aplicaciones industriales y de abastecimiento urbano, con materiales resistentes a la corrosión.", href: "/sistema-de-bombeo", primary: false },
              { icon: ShieldCheck, title: "Repuestos y Asistencia", desc: "Stock permanente de repuestos originales IMBIL. Servicio técnico especializado y mantenimiento preventivo.", href: "#", primary: false }
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
                  data-testid={`imbil-service-${idx}`}
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
            Potencia y confiabilidad IMBIL para su campo
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Electrogrupo, representante oficial de IMBIL en Paraguay. Bombas de agua de alto rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sistema-de-bombeo">
              <Button size="lg" className="bg-white text-[#E31E24] hover:bg-gray-100 px-10 text-lg h-14" data-testid="imbil-cta-service-btn">
                Ver Sistemas de Bombeo
              </Button>
            </Link>
            <TallyModal formId="b584We">
              <Button size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#E31E24] px-10 text-lg h-14">
                Cotizar
              </Button>
            </TallyModal>
          </div>
        </div>
      </section>
    </>
  );
}
