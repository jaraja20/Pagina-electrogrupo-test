import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Droplets,
  Gauge,
  ShieldCheck,
  Mountain,
  Wind,
  Bell,
  TrendingUp,
  Headphones,
  Clock,
  CheckCircle2,
  Layers,
  Radio,
  HardHat,
  Hammer,
  Infinity as InfinityIcon,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- External links ---
const TALLY_FORM_URL = "https://tally.so/r/b584We";
const WESTERN_LOGO = "https://res.cloudinary.com/difxr700v/image/upload/v1775651676/Western_mzvt1o.svg";

// --- Image assets ---
const IMG = {
  hero: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/daoeptqy_Photo_St_Alf-3.webp",
  // Intro 5 cards
  cardEfficiency: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/gr0ner6q_image_bloom_1x.webp",
  cardAdaptation: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/4qgohdra_Photo_Wes_Li_Ls4x4d_Pi_Wa_Alf-1.webp",
  cardControl: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/a4snhbvn_Photo_Ic_Pa-8.webp",
  cardRobustness: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/jtscfa5b_Wh-8.webp",
  cardSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/nkieayq1_20240912_104456.webp",
  // Wide images per section
  wideEfficiency: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/iolswxde_Photo_Wes_Dt_Pi_Wa_Alf-1.webp",
  wideAdaptation: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/opclm8gd_Photo_Wes_Pivots_Cp600_Wa_Wh-12.webp",
  wideControl: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/62mdk8ul_DSC08207.webp",
  wideRobustness: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/jtscfa5b_Wh-8.webp",
  wideSupport: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/lfrnnsuz_Local_EG_tpbdfl_kor0p1.webp",
  // Final CTA
  ctaFinal: "https://customer-assets.emergentagent.com/job_empresa-solutions-2/artifacts/inwers3f_Photo_Wes_Li_Ls4x4d_Pi_Wa_Alf.webp",
};

// --- Helper: bold "Western" inside any string ---
const renderWithBoldWestern = (text: string): ReactNode[] => {
  const parts = text.split(/(Western)/g);
  return parts.map((part, i) =>
    part === "Western" ? (
      <strong key={i} className="font-bold">
        Western
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

// --- Hero KSPs (no icons, separated by vertical bars) ---
const HERO_KSPS: { title: string; text: string }[] = [
  { title: "Sistema de riego adaptado a tu campo", text: "Solución que se ajusta a tus necesidades." },
  { title: "Control remoto en tiempo real", text: "Monitoreo y gestión a distancia." },
  { title: "Distribución eficiente de agua", text: "Optimización del uso del recurso hídrico." },
];

// --- Intro dark cards: 5 items ---
const WESTERN_CARDS = [
  {
    title: "Eficiencia en distribución de agua",
    desc: "Más del 90% de uniformidad. Menos desperdicio, más rendimiento real.",
    image: IMG.cardEfficiency,
  },
  {
    title: "Adaptación total al entorno",
    desc: "Topografía, cultivo y suelo.",
    image: IMG.cardAdaptation,
  },
  {
    title: "Paneles iControl - Control remoto en tiempo real",
    desc: "Alertas, automatización y monitoreo.",
    image: IMG.cardControl,
  },
  {
    title: "Robustez estructural y durabilidad",
    desc: "Diseñado para condiciones exigentes por décadas.",
    image: IMG.cardRobustness,
  },
  {
    title: "Soporte técnico contínuo",
    desc: "La respuesta rápida que buscás, en el momento preciso.",
    image: IMG.cardSupport,
  },
];

// --- Benefit data ---
type Benefit = { icon: LucideIcon; title: string; text: string };

type SectionData = {
  id: string;
  eyebrow: string;
  title: string; // can contain \n to split lines
  text: string;
  image: string;
  imageAlt: string;
  benefits: Benefit[];
  bg: "white" | "gray";
};

const SECTIONS: SectionData[] = [
  {
    id: "eficiencia",
    eyebrow: "Eficiencia en distribución de agua",
    title: "Cada gota cuenta. Cada hectárea responde.",
    text: "Cuando la lluvia falla, tu rendimiento no puede fallar. Con Western alcanzás más del 90% de uniformidad de riego, reducís hasta un 30% el uso de agua y asegurás que cada sector del campo reciba exactamente lo que necesita. Resultado: cultivos más parejos, mejor desarrollo y mayor retorno por campaña.",
    image: IMG.wideEfficiency,
    imageAlt: "Cortina de agua uniforme sobre el cultivo bajo un pivot Western",
    benefits: [
      { icon: Droplets, title: "Carta de aspersión personalizada", text: "El riego se ajusta al cultivo, no al revés." },
      { icon: Gauge, title: "Uniformidad de riego del 90%", text: "Más consistencia, más previsibilidad en los resultados." },
      { icon: Wind, title: "Menor evaporación y deriva del viento", text: "Menos pérdida invisible, más eficiencia real." },
    ],
    bg: "gray",
  },
  {
    id: "adaptacion",
    eyebrow: "Adaptación total al entorno",
    title: "Si el terreno cambia, el sistema responde.",
    text: "La irregularidad del campo ya no es una limitante. Western trabaja sin perder eficiencia en terrenos con pendientes de hasta el 15%, adaptándose a distintas configuraciones sin comprometer el rendimiento.",
    image: IMG.wideAdaptation,
    imageAlt: "Pivot Western regando una superficie amplia de cultivo",
    benefits: [
      { icon: Layers, title: "Tramos de 38–62m + aleros hasta 25m", text: "Cobertura total, sin importar la escala del campo." },
      { icon: Mountain, title: "Pendiente máxima del 15%", text: "Rendimiento estable incluso en condiciones desafiantes." },
      { icon: ShieldCheck, title: "Torre flexible y patas reforzadas", text: "Diseñado para operar donde otros sistemas se quedan cortos." },
    ],
    bg: "white",
  },
  {
    id: "icontrol",
    eyebrow: "Paneles iControl - Control remoto en tiempo real",
    title: "Decidir tarde cuesta. Decidir en tiempo real produce.",
    text: "El campo no espera. Y vos no podés estar en todos lados. Con iControl, monitoreás y gestionás todo el sistema de riego desde donde estés: activación, velocidad, presión, alertas y automatizaciones. Detectás problemas antes de que impacten y ajustás en el momento exacto. Resultado: menos intervención manual, menos errores operativos y más control sobre cada hectárea.",
    image: IMG.wideControl,
    imageAlt: "Panel iControl standard con sus diales, indicadores y switches",
    benefits: [
      { icon: Radio, title: "Control total desde cualquier lugar", text: "Accedé al sistema en tiempo real, sin depender de estar en campo." },
      { icon: Bell, title: "Alertas y automatización inteligente", text: "El sistema te avisa antes de que el problema escale." },
      { icon: TrendingUp, title: "Optimización continua del riego", text: "Ajustes precisos que mejoran rendimiento campaña tras campaña." },
    ],
    bg: "gray",
  },
  {
    id: "robustez",
    eyebrow: "Robustez estructural y durabilidad",
    title: "Hecho para durar. Diseñado para no fallar.",
    text: "El campo exige. Y los equipos lo saben. Western está construido con materiales de alta resistencia y una ingeniería pensada para operar durante décadas en condiciones reales: polvo, humedad, uso intensivo. Menos paradas, menos mantenimiento inesperado, más continuidad operativa.",
    image: IMG.wideRobustness,
    imageAlt: "Tubos de acero galvanizado en caliente apilados, listos para conformar un pivot Western",
    benefits: [
      { icon: HardHat, title: "Acero galvanizado en caliente", text: "Soporta condiciones extremas sin comprometer desempeño." },
      { icon: Hammer, title: "Componentes diseñados para durar décadas", text: "Menos reemplazos, menor costo a largo plazo." },
      { icon: InfinityIcon, title: "Operación confiable campaña tras campaña", text: "Un sistema que responde cuando más lo necesitás." },
    ],
    bg: "white",
  },
  {
    id: "soporte",
    eyebrow: "Soporte técnico continuo",
    title: "El respaldo no se promete.\nSe demuestra.",
    text: "Cuando el sistema se detiene, el tiempo juega en contra. Por eso con Electrogrupo el trabajo no termina en la instalación. Tenés un equipo técnico que responde rápido, entiende el campo y resuelve sin vueltas. Porque no se trata solo de tener tecnología, sino de mantenerla operando al máximo.",
    image: IMG.wideSupport,
    imageAlt: "Vista aérea de la sede de Electrogrupo — respaldo técnico y logístico garantizado",
    benefits: [
      { icon: Clock, title: "Respuesta rápida en momentos críticos", text: "Soporte cuando realmente importa." },
      { icon: Headphones, title: "Acompañamiento técnico especializado", text: "Hablá directamente con expertos." },
      { icon: CheckCircle2, title: "Continuidad operativa garantizada", text: "Menos tiempo detenido, más productividad." },
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
        alt="Pivot Western regando un campo de alfalfa en Paraguay"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/70 via-[#0D1B2A]/55 to-[#0D1B2A]/90" />
    </div>

    <div className="container mx-auto px-6 md:px-8 relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <img
          src={WESTERN_LOGO}
          alt="Western"
          className="h-[26px] md:h-[32px] w-auto mb-8 brightness-0 invert"
          referrerPolicy="no-referrer"
          data-testid="hero-western-logo"
        />
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.05] font-heading tracking-tight"
          data-testid="pivot-hero-title"
        >
          Riego por Pivot Central
          <br />
          <strong className="font-bold">Western</strong> en Paraguay
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-3xl leading-snug font-light">
          Control total para producir sin depender del clima.
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
          <a href="#eficiencia" data-testid="hero-cta-secondary">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0D1B2A] transition-all px-8 h-12 text-base font-semibold rounded-md w-full sm:w-auto"
            >
              Calcular retorno (ROI)
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Intro Dark Section: 5 cards ---
const WesternIntro = () => (
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
          Western, hecho para el campo paraguayo
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1] mb-6 tracking-tight">
          Diseñado para producir más,
          <br className="hidden md:block" /> no para regar igual.
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          Cada componente tiene un objetivo claro: mejorar tu margen por hectárea.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
        {WESTERN_CARDS.map((card, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.09 }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:aspect-[2/3] group cursor-default shadow-xl"
            data-testid={`western-card-${idx}`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6 text-white">
              <h3 className="text-base lg:text-lg font-bold mb-2 leading-snug font-heading">
                {card.title}
              </h3>
              <p className="text-xs lg:text-sm text-white/85 leading-relaxed">
                {card.desc}
              </p>
            </div>
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
        {/* Header: title + text in 2-col */}
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
              {renderWithBoldWestern(data.text)}
            </p>
          </motion.div>
        </div>

        {/* Wide image */}
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

        {/* Benefits grid (3 cards) */}
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
        alt="Pivot Western proyectando agua contra un paisaje de campo"
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
          src={WESTERN_LOGO}
          alt="Western"
          className="h-[28px] md:h-[34px] w-auto mb-8 brightness-0 invert"
          referrerPolicy="no-referrer"
          data-testid="cta-western-logo"
        />
        <span className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.25em] mb-6 block">
          No es un gasto. Es una decisión.
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[1.05] mb-8 tracking-tight">
          El clima no es una variable.
          <br className="hidden md:block" /> Es un riesgo que podés eliminar.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
          Cada campaña que pasa sin riego controlado es rendimiento que no vuelve.{" "}
          <strong className="font-semibold text-white">Western</strong> no es un gasto: es una decisión estratégica.
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
export default function PivotIrrigation() {
  return (
    <>
      <Helmet>
        <title>Riego por Pivot Central Western en Paraguay | Electrogrupo</title>
        <meta
          name="description"
          content="Riego por Pivot Central Western: más del 90% de uniformidad, control iControl en tiempo real, adaptación a pendientes de hasta 15% y soporte técnico Electrogrupo."
        />
        <meta
          name="keywords"
          content="riego por pivot, pivot central, Western, iControl, irrigación Paraguay, Electrogrupo, agricultura, eficiencia hídrica"
        />
      </Helmet>

      <Hero />
      <WesternIntro />
      {SECTIONS.map((section) => (
        <BenefitSection key={section.id} data={section} />
      ))}
      <FinalCTA />
    </>
  );
}
