import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Droplets,
  Zap,
  Activity,
  Leaf,
  FlaskConical,
  Beaker,
  ShieldCheck,
  Crosshair,
  Clock,
  Sprout,
  TrendingUp,
  Gauge,
  CheckCircle2,
  Trophy,
  Headphones,
  ArrowRight,
  Calculator,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- External links ---
const TALLY_FORM_URL = "https://tally.so/r/b584We";
const OUROPRO_LOGO = "https://res.cloudinary.com/difxr700v/image/upload/v1775651674/OuroPro_qusrqe.svg";

// --- Image assets ---
// NOTE: TODO - Replace placeholders with real OuroPro photos when available
const PLACEHOLDER = (label: string) =>
  `https://placehold.co/1920x1080/0D1B2A/E31E24?text=OuroPro+%E2%80%A2+${encodeURIComponent(label)}`;

const IMG = {
  hero: "https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp",
  cardComposition: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/ws9t6b8e_OuroPro%20tres%20componentes%2001.webp",
  cardTechnology: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/bd37s1ey_OuroPro02%20tecnologia%20de%20formulacion%20americana.webp",
  cardPivot: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/vy32ac95_OuroPro%2003%20Compatible%20con%20pivot.webp",
  cardProductivity: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/d6kpxi70_OuroPro04%20Record.webp",
  cardSupport: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/1fkdh4is_Soporte%20tecnico%2005.webp",
  wideComposition: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/ws9t6b8e_OuroPro%20tres%20componentes%2001.webp",
  wideTechnology: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/bd37s1ey_OuroPro02%20tecnologia%20de%20formulacion%20americana.webp",
  widePivot: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/vy32ac95_OuroPro%2003%20Compatible%20con%20pivot.webp",
  wideProductivity: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/d6kpxi70_OuroPro04%20Record.webp",
  wideSupport: "https://customer-assets.emergentagent.com/job_page-builder-367/artifacts/1fkdh4is_Soporte%20tecnico%2005.webp",
  ctaFinal: "https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp",
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
  { title: "Composición líquida de tres elementos", text: "50% amídico, 25% amoniacal y 25% nítrico." },
  { title: "Absorción eficiente y duradera", text: "Nutrición inmediata, media y prolongada en una sola aplicación." },
  { title: "Récords de productividad por hectárea", text: "Más absorción, menos pérdidas, más rendimiento." },
];

// --- Intro cards ---
const INTRO_CARDS = [
  {
    title: "Composición líquida de tres elementos",
    desc: "50% Amídico, 25% amoniacal y 25% nítrico.",
    image: IMG.cardComposition,
    target: "composicion",
  },
  {
    title: "Tecnología de formulación americana",
    desc: "Tecnología americana probada, formulada para condiciones de calor, humedad y suelos tropicales.",
    image: IMG.cardTechnology,
    target: "tecnologia",
  },
  {
    title: "Compatible con Fertirrigación por pivot central.",
    desc: "Nutrición precisa a través del riego que ya tenés en campo.",
    image: IMG.cardPivot,
    target: "pivot",
  },
  {
    title: "Alcanzá nuevos récords de productividad por hectárea.",
    desc: "Estudios comprobados de mejora de rendimiento.",
    image: IMG.cardProductivity,
    target: "productividad",
  },
  {
    title: "Soporte técnico real",
    desc: "Indicaciones de aplicación y dosificación.",
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
    id: "composicion",
    eyebrow: "Composición líquida de tres elementos",
    title: "Diseñado para nutrir más,\nno para fertilizar igual.",
    text: "Cada gota aporta los tres ritmos de nitrógeno: 50% amídico, 25% amoniacal y 25% nítrico. Tecnología americana en una sola aplicación.",
    image: IMG.wideComposition,
    imageAlt: "Fertilizante OuroPro con las tres formas de nitrógeno",
    benefits: [
      { icon: Zap, title: "Nítrico de acción inmediata", text: "Absorción rápida para crecimiento inicial." },
      { icon: Activity, title: "Amoniacal de liberación media", text: "Soporte sostenido durante el desarrollo." },
      { icon: Leaf, title: "Amídico de liberación prolongada", text: "Nutrición continua hasta el final de la campaña." },
    ],
    bg: "gray",
  },
  {
    id: "tecnologia",
    eyebrow: "Tecnología de formulación americana",
    title: "Tecnología de formulación\namericana probada.",
    text: "Tecnología americana probada, formulada para condiciones de calor, humedad y suelos tropicales.",
    image: IMG.wideTechnology,
    imageAlt: "Formulación americana OuroPro adaptada al clima tropical",
    benefits: [
      { icon: Beaker, title: "Estabilidad en tanque y sistema", text: "No se separa ni obstruye líneas de riego." },
      { icon: Droplets, title: "Compatible con la mayoría de aguas", text: "Funciona en condiciones reales del campo." },
      { icon: ShieldCheck, title: "Menor riesgo de quemaduras", text: "Seguro para el cultivo en comparación con otras soluciones." },
    ],
    bg: "white",
  },
  {
    id: "pivot",
    eyebrow: "Compatible con fertirrigación por pivot central",
    title: "Nutrición precisa\na través del pivot central.",
    text: "Aplicá OuroPro directamente con tu pivote Western. Fertilizante líquido que se distribuye uniformemente sin desperdicio.",
    image: IMG.widePivot,
    imageAlt: "Pivot central Western aplicando fertilizante OuroPro",
    benefits: [
      { icon: Clock, title: "Ahorro de tiempo y mano de obra", text: "Una sola operación: riego + fertilización." },
      { icon: Crosshair, title: "Fertirrigación de precisión", text: "El nutriente exacto en el momento exacto. Sin pérdidas por volatilización o lixiviación." },
      { icon: Sprout, title: "Aplicación uniforme con el agua", text: "Cada hectárea recibe exactamente lo necesario." },
    ],
    bg: "gray",
  },
  {
    id: "productividad",
    eyebrow: "Récords de productividad por hectárea",
    title: "Mayor rendimiento por hectárea,\nresultados desde la primera aplicación.",
    text: "OuroPro maximiza la eficiencia de uso de nitrógeno (EUN) al fraccionar la dosis en los momentos críticos del cultivo.",
    image: IMG.wideProductivity,
    imageAlt: "Cultivo con OuroPro mostrando mayor rendimiento por hectárea",
    benefits: [
      { icon: FlaskConical, title: "Absorción en las tres fases", text: "Nutrición inmediata, media y prolongada." },
      { icon: Gauge, title: "Mayor uniformidad en el campo", text: "Cada planta recibe nitrógeno disponible cuando lo necesita." },
      { icon: Trophy, title: "Récords de productividad comprobados", text: "Mejora real de rendimiento por hectárea con fertirrigación precisa." },
    ],
    bg: "white",
  },
  {
    id: "soporte",
    eyebrow: "Soporte técnico real",
    title: "Respaldo que mantiene\ntu fertirrigación productiva.",
    text: "Electrogrupo acompaña con técnicos especializados en fertirrigación y riego por pivot.",
    image: IMG.wideSupport,
    imageAlt: "Equipo técnico Electrogrupo acompañando fertirrigación con OuroPro",
    benefits: [
      { icon: Clock, title: "Respuesta rápida ante consultas", text: "Soporte cuando realmente importa." },
      { icon: Headphones, title: "Indicaciones precisas de aplicación", text: "Dosificación adaptada a tu cultivo." },
      { icon: CheckCircle2, title: "Continuidad operativa garantizada", text: "Menos interrupciones, más rendimiento." },
    ],
    bg: "gray",
  },
];

// --- Hero ---
const Hero = () => (
  <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
    <div className="absolute inset-0 z-0">
      <img src={IMG.hero} alt="Cultivo fertilizado con nitrógeno líquido OuroPro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/75 via-[#0D1B2A]/60 to-[#0D1B2A]/92" />
    </div>
    <div className="container mx-auto px-6 md:px-8 relative z-10 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
        <img src={OUROPRO_LOGO} alt="OuroPro" className="h-[26px] md:h-[32px] w-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" data-testid="hero-ouropro-logo" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.05] font-heading tracking-tight" data-testid="ouropro-hero-title">
          Nitrógeno Líquido OuroPro
          <br />
          en suelo paraguayo.
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-3xl leading-snug font-light">
          Fertilizante que ofrece nutrición completa y protección enzimática para tus cultivos. Formulado con las tres formas de nitrógeno.
        </p>
        <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0 mb-14 max-w-5xl">
          {HERO_KSPS.map((ksp, idx) => (
            <div key={idx} className="contents">
              {idx > 0 && <div className="hidden md:block w-px self-stretch bg-white/30 mx-7 lg:mx-10" />}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }} className="flex-1">
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight mb-2">{ksp.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{ksp.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
          <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-primary">
            <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#E31E24] hover:text-white transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto">
              Cotizar
            </Button>
          </a>
          <a href="#productividad" data-testid="hero-cta-secondary">
            <Button size="lg" variant="outline" className="bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0D1B2A] transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto">
              Calcular l/ha
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Intro ---
const OuroProIntro = () => (
  <section className="bg-[#0D1B2A] py-24 md:py-32 overflow-hidden">
    <div className="container mx-auto px-6 md:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-5 block">OuroPro, fertilizante para el campo paraguayo</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1] mb-6 tracking-tight">
          El nitrógeno que sí rinde,
          <br className="hidden md:block" /> no el que se pierde.
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          Cada gota tiene un objetivo claro: convertir insumo en productividad real.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
        {INTRO_CARDS.map((card, idx) => (
          <motion.article key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.09 }} whileHover={{ y: -6 }} className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[2/3] group shadow-xl" data-testid={`ouropro-card-${idx}`}>
            <button type="button" onClick={() => { const el = document.getElementById(card.target); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="absolute inset-0 w-full h-full text-left cursor-pointer border-0 bg-transparent focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E31E24]/60 rounded-3xl" aria-label={`Ir a la sección ${card.title}`} data-testid={`ouropro-card-link-${card.target}`}>
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/55" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white">
                <h3 className="text-base lg:text-lg font-bold mb-2 leading-snug font-heading">{card.title}</h3>
                <p className="text-xs lg:text-sm text-white/85 leading-relaxed">{renderWithBoldBrands(card.desc)}</p>
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

// --- Final CTA (with 2 buttons) ---
const FinalCTA = () => (
  <section className="relative py-32 md:py-40 overflow-hidden" data-testid="section-cta-final">
    <div className="absolute inset-0 z-0">
      <img src={IMG.ctaFinal} alt="OuroPro convirtiendo nitrógeno en rendimiento" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/92 via-[#0D1B2A]/70 to-[#0D1B2A]/40" />
    </div>
    <div className="container mx-auto px-6 md:px-8 relative z-10">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-4xl text-white">
        <img src={OUROPRO_LOGO} alt="OuroPro" className="h-[28px] md:h-[34px] w-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" data-testid="cta-ouropro-logo" />
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-6 block">No es un costo. Es rendimiento.</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] mb-8 tracking-tight">
          Con OuroPro el nitrógeno deja de ser un costo.
          <br className="hidden md:block" /> Se convierte en rendimiento.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
          {renderWithBoldBrands("OuroPro entrega tres formas de N en una sola pasada. Más absorción, menos pérdidas y mayor productividad por hectárea.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-cotizar-btn">
            <Button size="lg" className="bg-[#E31E24] hover:bg-white hover:text-[#0D1B2A] text-white transition-colors px-10 h-14 text-base font-semibold rounded-md w-full sm:w-auto">
              Cotizar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href={TALLY_FORM_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-calcular-btn">
            <Button size="lg" variant="outline" className="bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0D1B2A] transition-all px-10 h-14 text-base font-semibold rounded-md w-full sm:w-auto">
              Calcular l/ha
              <Calculator className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Page ---
export default function FertirrigacionPage() {
  return (
    <>
      <Helmet>
        <title>Nitrógeno Líquido OuroPro | Fertirrigación Paraguay | Electrogrupo</title>
        <meta name="description" content="OuroPro: fertilizante de nitrógeno líquido con las tres formas de N (amídico, amoniacal y nítrico). Compatible con fertirrigación por pivot central Western. Tecnología americana en suelo paraguayo." />
        <meta name="keywords" content="OuroPro, nitrógeno líquido, fertirrigación, pivot central, Western, EUN, eficiencia uso nitrógeno, Electrogrupo, Paraguay" />
      </Helmet>
      <Hero />
      <OuroProIntro />
      {SECTIONS.map((section) => (
        <BenefitSection key={section.id} data={section} />
      ))}
      <FinalCTA />
    </>
  );
}
