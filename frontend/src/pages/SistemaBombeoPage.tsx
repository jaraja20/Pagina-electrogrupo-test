import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Droplets,
  Zap,
  Gauge,
  Radio,
  Activity,
  Bell,
  Ship,
  Factory,
  Network,
  Cog,
  CheckCircle2,
  Wrench,
  Clock,
  Headphones,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- External links ---
const TALLY_FORM_URL = "https://tally.so/r/b584We";
const IMBIL_LOGO = "https://res.cloudinary.com/difxr700v/image/upload/v1775651673/IMBIL_xo11xm.svg";

// --- Image assets ---
// NOTE: TODO - Replace placeholders with real IMBIL photos when available
const PLACEHOLDER = (label: string) =>
  `https://placehold.co/1920x1080/0D1B2A/E31E24?text=IMBIL+%E2%80%A2+${encodeURIComponent(label)}`;

const IMG = {
  hero: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/bfmzq3d4_Balsas%20flotantes%20para%20captacion%2003.webp",
  cardCapacity: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/1roxp0yx_Capacidad%20variable%2001.webp",
  cardPlatform: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/fej37yq1_Plataforma%20de%20manejo%20de%20riego%2002.webp",
  cardBalsas: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/bfmzq3d4_Balsas%20flotantes%20para%20captacion%2003.webp",
  cardRotor: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/cjqp9rje_Rotor%20Non%20Clog%2004.webp",
  cardSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/urwegtr6_Soporte%20tecnico%2005.webp",
  wideCapacity: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/1roxp0yx_Capacidad%20variable%2001.webp",
  widePlatform: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/fej37yq1_Plataforma%20de%20manejo%20de%20riego%2002.webp",
  wideBalsas: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/bfmzq3d4_Balsas%20flotantes%20para%20captacion%2003.webp",
  wideRotor: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/cjqp9rje_Rotor%20Non%20Clog%2004.webp",
  wideSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/urwegtr6_Soporte%20tecnico%2005.webp",
  ctaFinal: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/1roxp0yx_Capacidad%20variable%2001.webp",
};

// --- Helper: bold brand names ---
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
const HERO_KSPS = [
  { title: "Capacidad de bombeo variable", text: "Caudal adaptable a cada etapa del cultivo." },
  { title: "Plataforma móvil de manejo de riego", text: "Control remoto en tiempo real desde cualquier lugar." },
  { title: "Balsas flotantes de fabricación propia", text: "Captación superficial estable, hecha en planta Electrogrupo." },
];

// --- Intro cards ---
const INTRO_CARDS = [
  {
    title: "Capacidad de bombeo variable",
    desc: "Caudal adaptable que optimiza agua y energía.",
    image: IMG.cardCapacity,
    target: "capacidad",
  },
  {
    title: "Plataforma móvil de manejo de riego",
    desc: "Control remoto en tiempo real del sistema.",
    image: IMG.cardPlatform,
    target: "plataforma",
  },
  {
    title: "Balsas flotantes para captación superficial",
    desc: "Fabricación propia en +5.700 m² de planta metalúrgica.",
    image: IMG.cardBalsas,
    target: "balsas",
  },
  {
    title: "Rotor non-clog",
    desc: "Paso libre de sedimentos sin obstrucciones.",
    image: IMG.cardRotor,
    target: "rotor",
  },
  {
    title: "Soporte técnico continuo",
    desc: "Intervención rápida y asistencia especializada.",
    image: IMG.cardSupport,
    target: "soporte",
  },
];

// --- Sections ---
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
    id: "capacidad",
    eyebrow: "Capacidad de bombeo variable",
    title: "Riego eficiente\ncon caudal variable.",
    text: "En sistemas de bombeo para irrigación de arroz, el caudal no puede ser fijo. Cada etapa del cultivo demanda un volumen distinto. Con IMBIL ajustás el caudal según la necesidad real, optimizando agua y energía en cada momento productivo.",
    image: IMG.wideCapacity,
    imageAlt: "Sistema de bombeo IMBIL en operación con caudal variable",
    benefits: [
      { icon: Droplets, title: "Caudal adaptable por etapa del cultivo", text: "Aplicás exactamente lo que el cultivo necesita en cada fase." },
      { icon: Zap, title: "Ahorro energético en operación continua", text: "Reducís consumo sin afectar al rendimiento." },
      { icon: Gauge, title: "Mayor control del sistema de riego", text: "Ajustes precisos que mejoran la previsibilidad productiva." },
    ],
    bg: "gray",
  },
  {
    id: "plataforma",
    eyebrow: "Plataforma móvil de manejo de riego",
    title: "Control de riego remoto\ncon plataforma móvil.",
    text: "La gestión manual limita la eficiencia. Con la plataforma de control de riego desarrollada por Electrogrupo, operás el sistema en tiempo real desde cualquier lugar, tomando decisiones con información actualizada.",
    image: IMG.widePlatform,
    imageAlt: "Plataforma digital de control de riego desarrollada por Electrogrupo",
    benefits: [
      { icon: Radio, title: "Monitoreo y control en tiempo real", text: "Visualizás y gestionás el sistema sin necesidad de estar en campo." },
      { icon: Activity, title: "Decisiones más rápidas basadas en datos", text: "Actuás en el momento justo, no después." },
      { icon: Bell, title: "Automatización para mayor eficiencia operativa", text: "Menos intervención manual, más precisión." },
    ],
    bg: "white",
  },
  {
    id: "balsas",
    eyebrow: "Balsas flotantes para captación superficial",
    title: "Captación estable\ncon balsas de industria propia.",
    text: "Las balsas flotantes son de fabricación propia en la planta metalúrgica de Electrogrupo, con más de 5.700 m² de infraestructura productiva, lo que garantiza control total de calidad y adaptación a condiciones reales del campo paraguayo.",
    image: IMG.wideBalsas,
    imageAlt: "Balsa flotante IMBIL fabricada por Electrogrupo para captación superficial",
    benefits: [
      { icon: Factory, title: "Fabricación propia con control de calidad", text: "Desarrolladas internamente para asegurar rendimiento y durabilidad." },
      { icon: Ship, title: "Infraestructura industrial de +5.700 m²", text: "Capacidad productiva que respalda cada solución instalada." },
      { icon: Network, title: "Integración total con el sistema de bombeo", text: "Menos incompatibilidades, más eficiencia desde el origen." },
    ],
    bg: "gray",
  },
  {
    id: "rotor",
    eyebrow: "Rotor non-clog",
    title: "Paso libre de sedimentos\nsin obstrucciones.",
    text: "El agua real en campo contiene sedimentos y residuos. El sistema debe estar preparado para eso. El diseño non-clog evita bloqueos y mantiene el flujo constante en condiciones reales.",
    image: IMG.wideRotor,
    imageAlt: "Rotor non-clog IMBIL operando con agua con sedimentos",
    benefits: [
      { icon: Cog, title: "Paso libre amplio sin obstrucciones", text: "Opera con agua con sedimentos sin comprometer el sistema." },
      { icon: CheckCircle2, title: "Caudal estable en condiciones exigentes", text: "Menos variaciones, mayor previsibilidad." },
      { icon: Wrench, title: "Menor mantenimiento correctivo", text: "Reducís paradas por bloqueos inesperados." },
    ],
    bg: "white",
  },
  {
    id: "soporte",
    eyebrow: "Soporte técnico continuo",
    title: "Soporte técnico\nque responde cuando importa.",
    text: "Cuando el sistema se detiene, cada minuto cuenta. Electrogrupo acompaña con soporte técnico enfocado en mantener la operación en marcha en todo momento.",
    image: IMG.wideSupport,
    imageAlt: "Equipo técnico de Electrogrupo interviniendo un sistema de bombeo IMBIL",
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
      <img src={IMG.hero} alt="Sistema de bombeo IMBIL en campo paraguayo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/75 via-[#0D1B2A]/60 to-[#0D1B2A]/92" />
    </div>
    <div className="container mx-auto px-6 md:px-8 relative z-10 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
        <img src={IMBIL_LOGO} alt="IMBIL" className="h-[26px] md:h-[32px] w-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" data-testid="hero-imbil-logo" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.08] font-heading tracking-tight" data-testid="imbil-hero-title">
          Sistemas de bombeo
          <br />
          para irrigación <span className="inline-block w-px h-[0.7em] bg-white/40 align-middle mx-3 md:mx-4" aria-hidden="true" /> IMBIL
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-3xl leading-snug font-light">
          Más horas de riego, menor costo por hectárea y resultados consistentes en cada zafra.
        </p>
        <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0 mb-14 max-w-5xl">
          {HERO_KSPS.map((ksp, idx) => (
            <div key={idx} className="contents">
              {idx > 0 && <div className="hidden md:block w-px self-stretch bg-white/30 mx-7 lg:mx-10" />}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }} className="flex-1">
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight mb-2">{ksp.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{renderWithBoldBrands(ksp.text)}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
          <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary">
            <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#E31E24] hover:text-white transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto">
              Solicitar evaluación técnica
            </Button>
          </a>
          <a href="#capacidad" data-testid="hero-cta-secondary">
            <Button size="lg" variant="outline" className="bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0D1B2A] transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto">
              Ver soluciones
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Intro ---
const ImbilIntro = () => (
  <section className="bg-[#0D1B2A] py-24 md:py-32 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-5 block">IMBIL, hecho para el campo paraguayo</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1] mb-6 tracking-tight">
          Diseñado para regar más,
          <br className="hidden md:block" /> no para bombear igual.
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          Cada componente tiene un objetivo claro: convertir cada m³ de agua en rendimiento consistente.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
        {INTRO_CARDS.map((card, idx) => (
          <motion.article key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.09 }} whileHover={{ y: -6 }} className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[2/3] group shadow-xl" data-testid={`imbil-card-${idx}`}>
            <button type="button" onClick={() => { const el = document.getElementById(card.target); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="absolute inset-0 w-full h-full text-left cursor-pointer border-0 bg-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E31E24]/60 rounded-3xl" aria-label={`Ir a la sección ${card.title}`} data-testid={`imbil-card-link-${card.target}`}>
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/55" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white">
                <h3 className="text-base lg:text-lg font-bold mb-2 leading-snug font-heading">{card.title}</h3>
                <p className="text-xs lg:text-sm text-white/85 leading-relaxed">{card.desc}</p>
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

// --- Benefit Section ---
const BenefitSection = ({ data }: { data: SectionData }) => {
  const bgClass = data.bg === "gray" ? "bg-[#f4f5f6]" : "bg-white";
  return (
    <section id={data.id} className={`${bgClass} py-24 md:py-32`} data-testid={`section-${data.id}`}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-5 block">{data.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] font-heading leading-[1.08] tracking-tight whitespace-pre-line">{data.title}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-5 lg:pt-4">
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">{renderWithBoldBrands(data.text)}</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative w-full h-[340px] md:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden mb-14 md:mb-20 shadow-xl">
          <img src={data.image} alt={data.imageAlt} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {data.benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`rounded-2xl p-8 border border-gray-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${data.bg === "gray" ? "bg-white" : "bg-[#f4f5f6]"}`} data-testid={`benefit-${data.id}-${idx}`}>
                <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 flex items-center justify-center mb-6 text-[#E31E24]">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D1B2A] mb-3 leading-snug font-heading">{benefit.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{benefit.text}</p>
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
      <img src={IMG.ctaFinal} alt="Sistema IMBIL convirtiendo agua en productividad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/92 via-[#0D1B2A]/70 to-[#0D1B2A]/40" />
    </div>
    <div className="container mx-auto px-6 md:px-8 relative z-10">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-4xl text-white">
        <img src={IMBIL_LOGO} alt="IMBIL" className="h-[28px] md:h-[34px] w-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" data-testid="cta-imbil-logo" />
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-6 block">No es un insumo. Es rendimiento.</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] mb-8 tracking-tight">
          Convertí al agua en tu aliado,
          <br className="hidden md:block" /> no en una variable irregular.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
          {renderWithBoldBrands("Las bombas IMBIL impactan en la productividad desde el día uno, evitá pérdidas innecesarias y conseguí resultados consistentes en cada zafra.")}
        </p>
        <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-final-btn">
          <Button size="lg" className="bg-[#E31E24] hover:bg-white hover:text-[#0D1B2A] text-white transition-colors px-10 h-14 text-base font-semibold rounded-md">
            Solicitar evaluación técnica
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

// --- Page ---
export default function SistemaBombeoPage() {
  return (
    <>
      <Helmet>
        <title>Sistemas de bombeo para irrigación | IMBIL Paraguay | Electrogrupo</title>
        <meta name="description" content="Bombas IMBIL para irrigación de arroz y cultivos en Paraguay: caudal variable, plataforma móvil de control, balsas flotantes de fabricación propia, rotor non-clog y soporte técnico Electrogrupo." />
        <meta name="keywords" content="bombas IMBIL, sistema de bombeo, riego arroz, caudal variable, balsa flotante, rotor non-clog, Electrogrupo, Paraguay" />
      </Helmet>
      <Hero />
      <ImbilIntro />
      {SECTIONS.map((section) => (
        <BenefitSection key={section.id} data={section} />
      ))}
      <FinalCTA />
    </>
  );
}
