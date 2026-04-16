import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Users, Truck, Building2, Calendar } from "lucide-react";

const timeline = [
  { year: "1990", title: "Eléctrica Industrial", desc: "Inicio de operaciones como empresa de instalaciones eléctricas industriales." },
  { year: "2010", title: "Proyectos Llave en Mano", desc: "Expansión hacia proyectos integrales de sistemas de irrigación." },
  { year: "2017", title: "Nueva Sede Industrial", desc: "Inauguración de la nueva planta industrial en Santa Rita." },
  { year: "2021", title: "Mayor Cobertura", desc: "Alcanzamos la mayor cobertura de irrigación en Paraguay." },
  { year: "2022", title: "Representación Western®", desc: "Alianza con Western para sistemas de riego por Pivot Central." },
  { year: "2024", title: "Representación IMBIL®", desc: "Incorporación de bombas de alta performance para irrigación." },
  { year: "2025", title: "Representación CONSILOS®", desc: "Soluciones completas de almacenamiento y conservación de granos." },
  { year: "2026", title: "Representación OuroPro", desc: "Fertirrigación de precisión para el campo paraguayo." },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f4f5f6]">
      <Helmet>
        <title>Sobre Nosotros | Electrogrupo SACI</title>
        <meta name="description" content="Electrogrupo SACI, empresa agroindustrial con sede en Santa Rita, Alto Paraná. Desde 1990 proyectamos, fabricamos e instalamos soluciones para el agro paraguayo." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#0D1B2A] tracking-tight leading-[1.1]"
            data-testid="about-hero-title"
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
              Somos Electrogrupo SACI, una empresa agroindustrial con sede en Santa Rita, Alto Paraná. Desde 1990 proyectamos, fabricamos e instalamos soluciones para electricidad industrial, irrigación y almacenamiento de granos en todo el territorio nacional.
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
            alt="Planta industrial Electrogrupo - Santa Rita"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 right-8 text-white text-sm font-medium tracking-wider uppercase">
            Sede Central - Santa Rita, Alto Paraná
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "30+", label: "Años construyendo el agro paraguayo" },
              { icon: Users, value: "60+", label: "Colaboradores" },
              { icon: Truck, value: "20+", label: "Flota de vehículos" },
              { icon: Building2, value: "5.700m²", label: "Planta industrial propia" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
                data-testid={`about-stat-${idx}`}
              >
                <stat.icon className="w-6 h-6 text-[#E31E24] mx-auto mb-3" />
                <span className="text-3xl md:text-4xl font-bold text-[#0D1B2A] block mb-1">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are - Dark Section */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Quiénes Somos</h2>
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-semibold">Nuestra Historia</div>
              <h3 className="text-2xl font-medium mb-6 leading-snug">
                Lo que empezó como una empresa eléctrica en el interior de Paraguay hoy es un grupo agroindustrial que instala tecnología de primer nivel.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Hoy somos referencia en el mercado paraguayo por nuestra capacidad técnica, respaldo posventa y una cartera de clientes que crece con cada cosecha. No vendemos equipos: entregamos sistemas de vanguardia.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                No crecimos por azar — crecimos porque el campo paraguayo nos fue exigiendo más, y siempre respondimos.
              </p>
              <Link to="/proyectos" className="inline-block">
                <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0D1B2A] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
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

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-[#f4f5f6]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4 font-heading">Nuestro Crecimiento</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cada hito representa una decisión tomada con visión: sumar una marca, incorporar una división, abrir una sucursal.
            </p>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`relative md:flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8`}
                  data-testid={`timeline-item-${idx}`}
                >
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4 md:mb-8">
                      <span className="text-[#E31E24] font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E31E24] border-4 border-[#f4f5f6] z-10" />
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4 font-heading">Ubicaciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <MapPin className="w-8 h-8 text-[#E31E24] mb-4" />
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">Casa Matriz</h3>
              <p className="text-gray-600 mb-1">Calle de Servicio de la Ruta 6ta, Tramo Norte.</p>
              <p className="text-gray-600 mb-1">Barrio Los Maizales, Santa Rita, Alto Paraná.</p>
              <p className="text-gray-500 text-sm mt-4">Planta industrial propia de + 5.700m²</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <MapPin className="w-8 h-8 text-[#E31E24] mb-4" />
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">Sucursal Katueté</h3>
              <p className="text-gray-600 mb-1">Calle Las Residentas esq. Calle 6</p>
              <p className="text-gray-600 mb-1">Barrio María Auxiliadora, Katueté, Canindeyú.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 md:py-32 bg-[#f4f5f6]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-[#0D1B2A] tracking-tight leading-tight"
            >
              Nuestras<br />Marcas
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md lg:ml-auto"
            >
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Trabajamos con marcas especializadas para cada etapa de su producción diseñados para mejorar la productividad, rendimiento y control operativo.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Western®", desc: "Sistemas de riego por Pivot Central con tecnología iControl, diseñados para maximizar la eficiencia hídrica en cultivos.", href: "/marca/western", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651676/Western_mzvt1o.svg" },
              { name: "CONSILOS®", desc: "Empresa certificada ISO 9001. Silos Planos, Elevados y de Expedición. Máquinas de limpieza, Secaderos y equipamiento completo.", href: "/marca/consilos", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651670/Consilos_xyzff0.svg" },
              { name: "IMBIL®", desc: "Bombas de alta performance para sistemas de irrigación agrícola, con énfasis en cultivos con demanda de grandes caudales.", href: "/marca/imbil", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651673/IMBIL_xo11xm.svg" },
              { name: "OuroPro", desc: "Fertirrigación de precisión. Sistemas inteligentes para la aplicación exacta de agua y nutrientes en cada etapa del cultivo.", href: "/marca/ouropro", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651674/OuroPro_qusrqe.svg" },
            ].map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={brand.href} className="block group">
                  <div className="border-t border-gray-300 pt-4 mb-4">
                    <img src={brand.logo} alt={brand.name} className="h-6 mb-3 opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                    <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-500">{brand.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
