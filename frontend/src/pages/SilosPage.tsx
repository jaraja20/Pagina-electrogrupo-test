import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Warehouse,
  Archive,
  ArrowDown,
  Truck,
  Flame,
  Thermometer,
  Leaf,
  Award,
  Workflow,
  ArrowUpDown,
  Gauge,
  Zap,
  ShieldCheck,
  HardHat,
  Hammer,
  Infinity as InfinityIcon,
  Clock,
  Headphones,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- External links ---
const TALLY_FORM_URL = "https://tally.so/r/b584We";
const CONSILOS_LOGO = "https://res.cloudinary.com/difxr700v/image/upload/v1775651670/Consilos_xyzff0.svg";

// --- Image assets ---
const IMG = {
  hero: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/5d8q9bru_C%C3%B3pia_de_cons_20190114_023_unjyzv_mxh4wm.webp",
  // Intro 5 cards
  cardStorage: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/ajfe01mb_Edited1_qkj2jl_h85w7a.webp",
  cardDrying: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/gmiv14os_Edited5_a41ono_snlmxc.webp",
  cardConveyors: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/ai89u9ks_Edited3_qx1drj_s4hwyr.webp",
  cardRobustness: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/klzdmwl9_COPACOL_-_Ubirata_-_08-01-2025_-_v03_l0zdkc_u9wfhv.webp",
  cardSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/5d8q9bru_C%C3%B3pia_de_cons_20190114_023_unjyzv_mxh4wm.webp",
  // Wide images per section
  wideStorage: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/ajfe01mb_Edited1_qkj2jl_h85w7a.webp",
  wideDrying: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/gmiv14os_Edited5_a41ono_snlmxc.webp",
  wideConveyors: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/ai89u9ks_Edited3_qx1drj_s4hwyr.webp",
  wideRobustness: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/klzdmwl9_COPACOL_-_Ubirata_-_08-01-2025_-_v03_l0zdkc_u9wfhv.webp",
  wideSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/5d8q9bru_C%C3%B3pia_de_cons_20190114_023_unjyzv_mxh4wm.webp",
  // Final CTA
  ctaFinal: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/ajfe01mb_Edited1_qkj2jl_h85w7a.webp",
};

// --- Helper: bold brand names inside any string ---
const BRANDS = ["Western", "Electrogrupo", "IMBIL", "CONSILOS", "OuroPro"];
const BRAND_SPLIT_REGEX = /(Western|Electrogrupo|IMBIL|CONSILOS|OuroPro)/gi;
const renderWithBoldBrands = (text: string): ReactNode[] => {
  const parts = text.split(BRAND_SPLIT_REGEX);
  return parts.map((part, i) =>
    BRANDS.some((b) => b.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

// --- Hero KSPs ---
const HERO_KSPS: { title: string; text: string }[] = [
  { title: "Silos Planos, Elevados y de expedición", text: "Elegí la configuración ideal para tu operación." },
  { title: "Secadoras y pre-limpiadoras", text: "Equipos EcoDry de bajo impacto ambiental." },
  { title: "Elevadores y transportadores helicoidales", text: "Flujo continuo y capacidad adaptable." },
];

// --- Intro dark cards: 5 items, each linked to a section ---
const INTRO_CARDS = [
  {
    title: "Almacenamiento versátil",
    desc: "Silos planos, elevados y de expedición en acero galvanizado.",
    image: IMG.cardStorage,
    target: "almacenamiento",
  },
  {
    title: "Sistemas de secado y limpieza",
    desc: "EcoDry y Ecomaq: secado eficiente con bajo impacto ambiental.",
    image: IMG.cardDrying,
    target: "secado",
  },
  {
    title: "Ascensores y cintas transportadoras",
    desc: "Flujo continuo vertical y horizontal en todo tu post-cosecha.",
    image: IMG.cardConveyors,
    target: "transporte",
  },
  {
    title: "Robustez estructural y durabilidad",
    desc: "Acero galvanizado ZAR 345/450, normas NR12 y NPT027.",
    image: IMG.cardRobustness,
    target: "robustez",
  },
  {
    title: "Soporte técnico continuo",
    desc: "Acompañamiento desde la instalación hasta cada cosecha.",
    image: IMG.cardSupport,
    target: "soporte",
  },
];

// --- Benefit section data ---
type Benefit = { icon: LucideIcon; title: string; text: string };

type SectionData = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  benefits: Benefit[];
  bg: "white" | "gray";
};

const SECTIONS: SectionData[] = [
  {
    id: "almacenamiento",
    eyebrow: "Almacenamiento versátil",
    title: "Almacenamiento que se adapta a tu cosecha.",
    text: "Desde almacenamiento a largo plazo hasta descarga rápida. CONSILOS ofrece silos planos, elevados y de expedición fabricados en acero galvanizado de alta resistencia.",
    image: IMG.wideStorage,
    imageAlt: "Silos CONSILOS instalados en campo paraguayo con logo visible",
    benefits: [
      { icon: Archive, title: "Silos planos para conservación prolongada", text: "Almacenamiento a largo plazo con mínima pérdida de calidad." },
      { icon: ArrowDown, title: "Silos elevados para descarga ágil", text: "Flujo rápido de grano sin demoras." },
      { icon: Truck, title: "Silos de expedición para flujo continuo", text: "Optimización de logística de salida." },
    ],
    bg: "gray",
  },
  {
    id: "secado",
    eyebrow: "Sistemas de secado y limpieza",
    title: "Secado y limpieza de granos\ncon mínima pérdida.",
    text: "Equipos EcoDry de bajo impacto ambiental y máquinas de limpieza que eliminan impurezas y humedad sin dañar el grano.",
    image: IMG.wideDrying,
    imageAlt: "Secadora CONSILOS EcoDry en operación, con tubos rojos característicos",
    benefits: [
      { icon: Thermometer, title: "Secado uniforme y eficiente", text: "Mantiene la calidad del grano sin sobrecalentamiento." },
      { icon: Leaf, title: "Equipos EcoDry y Ecomaq", text: "Aseguran el secado y limpieza de forma menos agresiva con el ambiente." },
      { icon: Award, title: "Menor pérdida de calidad en almacenamiento", text: "Mayor valor comercial de tu cosecha." },
    ],
    bg: "white",
  },
  {
    id: "transporte",
    eyebrow: "Ascensores y cintas transportadoras",
    title: "Flujo continuo y sin interrupciones.",
    text: "Elevadores y cintas de alta capacidad que integran todo el sistema de post-cosecha con mínimo mantenimiento.",
    image: IMG.wideConveyors,
    imageAlt: "Complejo integrado CONSILOS con silos y galpón de recepción",
    benefits: [
      { icon: ArrowUpDown, title: "Transporte vertical y horizontal eficiente", text: "Movimiento rápido en todo el flujo." },
      { icon: Gauge, title: "Capacidad adaptada a tu volumen", text: "Escalá según tu producción real." },
      { icon: Zap, title: "Operación continua sin atascos", text: "Menos paradas, más productividad." },
    ],
    bg: "gray",
  },
  {
    id: "robustez",
    eyebrow: "Robustez estructural y durabilidad",
    title: "Construido para durar\nen el campo paraguayo.",
    text: "Acero galvanizado ZAR 345/450, normas NR12 y NPT027. Diseñado para resistir viento, humedad y uso intensivo.",
    image: IMG.wideRobustness,
    imageAlt: "Vista cenital de la estructura reforzada de silos CONSILOS",
    benefits: [
      { icon: HardHat, title: "Estructura reforzada y segura", text: "Resiste condiciones extremas del campo." },
      { icon: Hammer, title: "Componentes que duran décadas", text: "Menos reemplazos, menor costo." },
      { icon: InfinityIcon, title: "Mínimo mantenimiento correctivo", text: "Operación confiable campaña tras campaña." },
    ],
    bg: "white",
  },
  {
    id: "soporte",
    eyebrow: "Soporte técnico continuo",
    title: "Respaldo que mantiene\ntu inversión productiva.",
    text: "Electrogrupo acompaña desde la instalación hasta el día a día con técnicos que conocen el campo paraguayo.",
    image: IMG.wideSupport,
    imageAlt: "Vista aérea del complejo CONSILOS instalado por Electrogrupo",
    benefits: [
      { icon: Clock, title: "Respuesta rápida ante incidencias", text: "Intervención en el momento crítico." },
      { icon: Headphones, title: "Asistencia técnica especializada", text: "Soporte con conocimiento real de aplicación." },
      { icon: CheckCircle2, title: "Mayor disponibilidad del sistema", text: "Menos tiempo detenido, más producción." },
    ],
    bg: "gray",
  },
];

// --- Hero ---
const Hero = () => (
  <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
    <div className="absolute inset-0 z-0">
      <img
        src={IMG.hero}
        alt="Vista aérea de un complejo de silos CONSILOS en el campo paraguayo"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/75 via-[#0D1B2A]/60 to-[#0D1B2A]/92" />
    </div>

    <div className="container mx-auto px-6 md:px-8 relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <img
          src={CONSILOS_LOGO}
          alt="CONSILOS"
          className="h-[26px] md:h-[32px] w-auto mb-8 brightness-0 invert"
          referrerPolicy="no-referrer"
          data-testid="hero-consilos-logo"
        />
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.05] font-heading tracking-tight"
          data-testid="silos-hero-title"
        >
          Soluciones en almacenamiento
          <br />
          de granos en Paraguay
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-3xl leading-snug font-light">
          Instalación de silos metálicos para soja, maíz y trigo. Equipos de secado, limpieza y transporte con soporte técnico.
        </p>

        <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0 mb-14 max-w-5xl">
          {HERO_KSPS.map((ksp, idx) => (
            <div key={idx} className="contents">
              {idx > 0 && (
                <div className="hidden md:block w-px self-stretch bg-white/30 mx-7 lg:mx-10" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
                className="flex-1"
              >
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight mb-2">
                  {ksp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{ksp.text}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary">
            <Button
              size="lg"
              className="bg-white text-[#0D1B2A] hover:bg-[#E31E24] hover:text-white transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto"
            >
              Solicitar evaluación técnica
            </Button>
          </a>
          <a href="#almacenamiento" data-testid="hero-cta-secondary">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0D1B2A] transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto"
            >
              Ver soluciones
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Intro Dark Section: 5 clickable cards ---
const ConsilosIntro = () => (
  <section className="bg-[#0D1B2A] py-24 md:py-32 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-5 block">
          CONSILOS, hecho para el campo paraguayo
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1] mb-6 tracking-tight">
          Diseñado para proteger más,
          <br className="hidden md:block" /> no para almacenar igual.
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          Cada componente tiene un objetivo claro: preservar el valor de tu cosecha.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
        {INTRO_CARDS.map((card, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.09 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[2/3] group shadow-xl"
            data-testid={`consilos-card-${idx}`}
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById(card.target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="absolute inset-0 w-full h-full text-left cursor-pointer border-0 bg-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E31E24]/60 rounded-3xl"
              aria-label={`Ir a la sección ${card.title}`}
              data-testid={`consilos-card-link-${card.target}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/55" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white">
                <h3 className="text-base lg:text-lg font-bold mb-2 leading-snug font-heading">
                  {card.title}
                </h3>
                <p className="text-xs lg:text-sm text-white/85 leading-relaxed">
                  {card.desc}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E31E24] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                  Ver más <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </div>
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

// --- Reusable Benefit Section ---
const BenefitSection = ({ data }: { data: SectionData }) => {
  const bgClass = data.bg === "gray" ? "bg-[#f4f5f6]" : "bg-white";

  return (
    <section
      id={data.id}
      className={`${bgClass} py-24 md:py-32`}
      data-testid={`section-${data.id}`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-5 block">
              {data.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] font-heading leading-[1.08] tracking-tight whitespace-pre-line">
              {data.title}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {renderWithBoldBrands(data.text)}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[340px] md:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden mb-14 md:mb-20 shadow-xl"
        >
          <img
            src={data.image}
            alt={data.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {data.benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl p-8 border border-gray-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  data.bg === "gray" ? "bg-white" : "bg-[#f4f5f6]"
                }`}
                data-testid={`benefit-${data.id}-${idx}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 flex items-center justify-center mb-6 text-[#E31E24]">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D1B2A] mb-3 leading-snug font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Final CTA ---
const FinalCTA = () => (
  <section className="relative py-32 md:py-40 overflow-hidden" data-testid="section-cta-final">
    <div className="absolute inset-0 z-0">
      <img
        src={IMG.ctaFinal}
        alt="Silos CONSILOS en el campo paraguayo protegiendo la cosecha"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/92 via-[#0D1B2A]/70 to-[#0D1B2A]/40" />
    </div>

    <div className="container mx-auto px-6 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-white"
      >
        <img
          src={CONSILOS_LOGO}
          alt="CONSILOS"
          className="h-[28px] md:h-[34px] w-auto mb-8 brightness-0 invert"
          referrerPolicy="no-referrer"
          data-testid="cta-consilos-logo"
        />
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-6 block">
          No es un gasto. Es cosecha protegida.
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] mb-8 tracking-tight">
          El almacenamiento no es un gasto.
          <br className="hidden md:block" /> Es cosecha protegida.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
          {renderWithBoldBrands(
            "Con CONSILOS convertís tu producción en valor real, sin pérdidas por humedad, plagas o deterioro."
          )}
        </p>
        <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-final-btn">
          <Button
            size="lg"
            className="bg-[#E31E24] hover:bg-white hover:text-[#0D1B2A] text-white transition-colors px-10 h-14 text-base font-semibold rounded-md"
          >
            Solicitar evaluación técnica
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

// --- Page ---
export default function SilosPage() {
  return (
    <>
      <Helmet>
        <title>Soluciones en almacenamiento de granos | Silos CONSILOS Paraguay | Electrogrupo</title>
        <meta
          name="description"
          content="Instalación de silos metálicos CONSILOS para almacenamiento de soja, maíz y trigo en Paraguay. Equipos de secado EcoDry, limpieza Ecomaq, elevadores y soporte técnico Electrogrupo."
        />
        <meta
          name="keywords"
          content="silos CONSILOS, almacenamiento de granos, post cosecha, silos metálicos, soja, maíz, trigo, secadoras EcoDry, Electrogrupo, Paraguay"
        />
      </Helmet>

      <Hero />
      <ConsilosIntro />
      {SECTIONS.map((section) => (
        <BenefitSection key={section.id} data={section} />
      ))}
      <FinalCTA />
    </>
  );
}
