import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence, animate } from "motion/react";
import PivotIrrigation from "./pages/PivotIrrigation";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUs from "./pages/AboutUs";
import WesternPage from "./pages/WesternPage";
import ConsilosPage from "./pages/ConsilosPage";
import OuroProPage from "./pages/OuroProPage";
import ImbilPage from "./pages/ImbilPage";
import SistemaBombeoPage from "./pages/SistemaBombeoPage";
import FertirrigacionPage from "./pages/FertirrigacionPage";
import SilosPage from "./pages/SilosPage";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Phone,
  Droplets,
  Zap,
  ArrowRight,
  Info,
  Paperclip,
  ArrowUpRight,
  ArrowUp,
  Briefcase,
  Database,
  Settings,
  Sun,
  Truck,
  Waves,
  Play,
  Pause
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AnimatedCounter = ({ from, to, duration = 2, prefix = "", suffix = "" }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, prefix, suffix, isInView]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSolid = !isHomePage || isScrolled || isNavHovered || activeMenu;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Empresa", href: "#", subItems: [
      { name: "Sobre nosotros", icon: Info, href: "/sobre-nosotros" },
      { name: "Proyectos", icon: Paperclip, href: "/proyectos" },
      { name: "Trabaja con nosotros", icon: Briefcase, href: "https://tally.so/r/wL5qMz", external: true }
    ]},
    { name: "Irrigación", href: "#", subItems: [
      { name: "Riego por Pivot", icon: Droplets, href: "/riego-por-pivot" },
      { name: "Sistemas de Bombeo", icon: Waves, href: "/sistema-de-bombeo" },
      { name: "Fertirrigación", icon: Zap, href: "/fertirrigacion" }
    ]},
    { name: "Pos Cosecha", href: "#", subItems: [
      { name: "Silos", icon: Database, href: "/silos" },
      { name: "Máquinas de limpieza", icon: Settings, href: "#" },
      { name: "Secadora de granos", icon: Sun, href: "#" },
      { name: "Transportadoras", icon: Truck, href: "#" }
    ]},
    { name: "Contacto", href: "#" },
    { name: "Soporte", href: "#" },
  ];

  return (
    <nav 
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => {
        setIsNavHovered(false);
        setActiveMenu(null);
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={isSolid ? "https://res.cloudinary.com/difxr700v/image/upload/v1775651671/EG_dn4opk.svg" : "https://res.cloudinary.com/difxr700v/image/upload/v1775651672/EGWhite_cqzbep.svg"} 
            alt="Electrogrupo Logo" 
            className="h-[25px] w-auto transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full">
          {navItems.map((link) => (
            <div 
              key={link.name}
              className="h-full flex items-center px-6 relative cursor-pointer group"
              onMouseEnter={() => setActiveMenu(link.name)}
            >
              <Link 
                to={link.href} 
                className={`text-[15px] font-medium transition-colors ${activeMenu === link.name ? 'text-[#E31E24]' : (isSolid ? 'text-gray-800 group-hover:text-[#E31E24]' : 'text-white group-hover:text-white/80')}`}
              >
                {link.name}
              </Link>
              {/* Red line indicator */}
              <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#E31E24] transition-transform duration-300 origin-left ${activeMenu === link.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </div>
          ))}
        </div>

        {/* Actions - removed */}
        <div className="hidden lg:flex items-center gap-4">
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className={isSolid ? "text-black" : "text-white hover:bg-white/20 hover:text-white"}>
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="px-8 overflow-y-auto">
              <div className="flex flex-col gap-6 mt-10">
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((link, index) => (
                    <AccordionItem value={`item-${index}`} key={link.name} className="border-b-0">
                      {link.subItems ? (
                        <>
                          <AccordionTrigger className="text-lg font-semibold text-gray-900 py-3 hover:no-underline">
                            {link.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 mt-2">
                              {link.subItems.map((subItem, idx) => (
                                subItem.external ? (
                                  <a 
                                    key={idx} 
                                    href={subItem.href || "#"} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[15px] text-gray-500 hover:text-[#E31E24] transition-colors py-1"
                                  >
                                    {subItem.name}
                                  </a>
                                ) : (
                                  <Link 
                                    key={idx} 
                                    to={subItem.href || "#"} 
                                    className="text-[15px] text-gray-500 hover:text-[#E31E24] transition-colors py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                )
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <div className="py-3">
                          <Link 
                            to={link.href} 
                            className="text-lg font-semibold text-gray-900 hover:text-[#E31E24] transition-colors"
                          >
                            {link.name}
                          </Link>
                        </div>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="pt-6 border-t flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger render={<a href="#" className="hover:opacity-80 transition-opacity" />}>
                          <Instagram className="w-5 h-5 text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Síguenos en Instagram</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger render={<a href="#" className="hover:opacity-80 transition-opacity" />}>
                          <Facebook className="w-5 h-5 text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Síguenos en Facebook</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu && navItems.find(item => item.name === activeMenu)?.subItems && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#f4f5f6] border-t border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 md:px-8 py-12">
              <div className="flex justify-start gap-20 mb-10 px-8">
                {navItems.find(item => item.name === activeMenu)?.subItems?.map((subItem, idx) => {
                  const Icon = subItem.icon;
                  return subItem.external ? (
                    <a key={idx} href={subItem.href || "#"} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group/sub min-w-[120px]">
                      <Icon className="w-7 h-7 text-gray-700 group-hover/sub:text-[#E31E24] transition-colors" />
                      <span className="text-[15px] font-medium text-gray-800 group-hover/sub:text-[#E31E24] transition-colors text-center">{subItem.name}</span>
                    </a>
                  ) : (
                    <Link key={idx} to={subItem.href || "#"} className="flex flex-col items-center gap-4 group/sub min-w-[120px]">
                      <Icon className="w-7 h-7 text-gray-700 group-hover/sub:text-[#E31E24] transition-colors" />
                      <span className="text-[15px] font-medium text-gray-800 group-hover/sub:text-[#E31E24] transition-colors text-center">{subItem.name}</span>
                    </Link>
                  )
                })}
              </div>
              <div className="border-t border-gray-300 pt-6 px-8">
                <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-gray-600 hover:text-[#E31E24] flex items-center gap-2 transition-colors">
                  Contactanos <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      label: "Western",
      title: "Riego por Pivot Central",
      ksps: [
        "Sistema de riego\nadaptado a tu campo",
        "Control remoto\nen tiempo real",
        "Distribución eficiente\nde agua"
      ],
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Photo_Wes_Pivots_Wa_Corn-1_mf2qcz_sl1ijr.webp",
      href: "/riego-por-pivot"
    },
    {
      label: "IMBIL",
      title: "Sistemas de Bombeo",
      ksps: [
        "Capacidad de bombeo\nvariable",
        "Plataforma de manejo\nde riego",
        "Adaptado a la necesidad\nde riego"
      ],
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Bombas_campo_funcionando_yevcla_c545ri.webp",
      href: "#"
    },
    {
      label: "CONSILOS",
      title: "Soluciones en almacenamiento de granos",
      ksps: [
        "Silos Planos, Elevados\ny de Expedición",
        "Sistemas de secado\ny limpieza",
        "Ascensores y cintas\ntransportadoras"
      ],
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/COPACOL_-_Ubirata_-_08-01-2025_-_v03_l0zdkc_u9wfhv.webp",
      href: "#"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length, isPlaying]);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Images */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading={currentSlide === 0 ? "eager" : "lazy"}
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white flex flex-col items-center"
          >
            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white mb-6 px-4 h-[30px] rounded-[9px] flex items-center justify-center">
              {slides[currentSlide].label}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight font-heading w-full px-4">
              {slides[currentSlide].title}
            </h1>
            
            <div className="flex flex-row items-start justify-center gap-3 sm:gap-6 md:gap-8 mb-8 md:mb-10 w-full">
              {slides[currentSlide].ksps.map((ksp, idx) => (
                <div key={idx} className="contents">
                  {idx > 0 && <div className="w-px h-10 md:h-12 bg-white/30 shrink-0" />}
                  <div className="flex flex-col items-center text-center flex-1">
                    <p className="text-xs sm:text-sm md:text-lg font-medium leading-tight whitespace-pre-line">{ksp}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-4">
              <a href="https://tally.so/r/b584We" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#FF0000] hover:text-white transition-all px-8 w-full">
                  Cotizar
                </Button>
              </a>
              <Link 
                to={slides[currentSlide].href} 
                className="inline-flex items-center justify-center gap-2 px-8 h-9 rounded-lg text-sm font-medium transition-all bg-transparent text-white border border-transparent hover:border-white hover:bg-transparent hover:text-white w-full sm:w-auto"
              >
                Más información <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <div className="flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-12 bg-white" : "w-8 bg-white/30 hover:bg-white/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white/70 hover:text-white transition-colors"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </section>
  );
};

// Shared brand + service data (single source of truth)
const BRAND_SERVICES = [
  {
    key: "consilos",
    brandName: "CONSILOS",
    serviceTitle: "Soluciones en almacenamiento y conservación de granos",
    brandSummary: "CONSILOS es líder brasileño en soluciones integrales para almacenamiento y conservación de granos, con más de cuatro décadas desarrollando equipos de clase mundial para cooperativas y productores.",
    serviceDesc: "Diseñamos, fabricamos e instalamos silos planos, elevados y de expedición, junto con sistemas de secado, limpieza y transporte de granos. Cada proyecto se adapta a la capacidad de acopio y logística de su establecimiento.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/C%C3%B3pia_de_cons_20190114_023_unjyzv_mxh4wm.webp",
    moreHref: "/marca/consilos",
  },
  {
    key: "western",
    brandName: "Western",
    serviceTitle: "Riego por Pivot Central",
    brandSummary: "Western Irrigation es referencia mundial en riego por pivot central, con estructuras robustas en acero galvanizado y tecnología de control remoto en tiempo real.",
    serviceDesc: "Sistemas de pivot central configurables por tramos y diámetros, con ingeniería de precisión para maximizar el rendimiento del cultivo con la menor huella hídrica posible.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/iC_Wes_Eu_Corn_2021_04_1_orrzuk_wurarg.webp",
    moreHref: "/riego-por-pivot",
  },
  {
    key: "imbil",
    brandName: "IMBIL",
    serviceTitle: "Soluciones en bombeo de agua",
    brandSummary: "IMBIL es referente en bombas hidráulicas industriales y agrícolas, con más de 75 años de experiencia fabricando equipos de alta eficiencia.",
    serviceDesc: "Bombas centrífugas, sumergibles y de alta presión, adaptadas al caudal y altura manométrica de su proyecto, con plataforma de gestión remota del bombeo.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/Bombas_campo_funcionando_yevcla_c545ri.webp",
    moreHref: "/sistema-de-bombeo",
  },
  {
    key: "ouropro",
    brandName: "OuroPro",
    serviceTitle: "Fertirrigación de precisión",
    brandSummary: "OuroPro desarrolla soluciones avanzadas de fertirrigación para agricultura de precisión, optimizando la nutrición del cultivo y reduciendo el impacto ambiental.",
    serviceDesc: "Inyectores y sistemas de dosificación que permiten aplicar fertilizantes líquidos a través del pivot de riego, elevando la eficiencia nutricional de cada hectárea.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904813/37411_ujtcim_xcsfmr.webp",
    moreHref: "/fertirrigacion",
  },
  {
    key: "electrogrupo",
    brandName: "Electrogrupo",
    serviceTitle: "Servicios especializados",
    brandSummary: "Más de 30 años diseñando e instalando soluciones eléctricas industriales, irrigación y almacenamiento para el campo paraguayo, con 60+ colaboradores y planta propia.",
    serviceDesc: "Proyectos llave en mano de electricidad industrial, automatización, mantenimiento y consultoría técnica para todo el ciclo productivo agrícola.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904816/metallic-factory-machine_npwyji_vwqxhf.webp",
    moreHref: "/sobre-nosotros",
  },
];

const Brands = ({ onBrandClick }: { onBrandClick: (key: string) => void }) => {
  const brands = [
    { name: "IMBIL", key: "imbil", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651673/IMBIL_xo11xm.svg" },
    { name: "Western", key: "western", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651676/Western_mzvt1o.svg" },
    { name: "CONSILOS", key: "consilos", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651670/Consilos_xyzff0.svg" },
    { name: "OuroPro", key: "ouropro", logo: "https://res.cloudinary.com/difxr700v/image/upload/v1775651674/OuroPro_qusrqe.svg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <Badge variant="outline" className="mb-4 border-gray-300 mx-auto w-[125px] h-[35px] flex items-center justify-center">Nuestras marcas</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Representante oficial</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Trabajamos con marcas especializadas para cada etapa de su producción diseñados para mejorar la productividad, rendimiento y control operativo.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {brands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => onBrandClick(brand.key)}
              className="flex justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-md py-2 bg-transparent border-0"
              data-testid={`brand-link-${brand.key}`}
              aria-label={`Ver servicio de ${brand.name}`}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                className="h-[35px] w-auto opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/difxr700v/image/upload/v1775904813/DJI_20260330162107_0034_D_jxk3me_lvarsf.webp" 
              alt="Farm technology" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 border-gray-300 w-[120px] h-[35px] flex items-center justify-center">Nuestra misión</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6 leading-tight font-heading">
              Brindar tecnología e innovación para el campo paraguayo
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Desde 1990 proyectamos, fabricamos e instalamos soluciones para electricidad industrial, irrigación y almacenamiento de granos en todo el territorio nacional. No vendemos equipos: entregamos sistemas de vanguardia.
            </p>
            
            <Link to="/sobre-nosotros">
              <Button variant="link" className="text-[#E31E24] p-0 h-auto mb-12 gap-2 text-lg font-semibold">
                Sobre nosotros <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <span className="text-4xl font-bold text-[#0D1B2A] block mb-1">
                  <AnimatedCounter from={0} to={30} prefix="+" />
                </span>
                <span className="text-gray-500 text-sm">Años construyendo el agro</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#0D1B2A] block mb-1">
                  <AnimatedCounter from={0} to={60} prefix="+" />
                </span>
                <span className="text-gray-500 text-sm">Colaboradores</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#0D1B2A] block mb-1">5.700m²</span>
                <span className="text-gray-500 text-sm">Planta industrial propia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solutions = ({
  sectionRef,
  expandedKey,
  setExpandedKey,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  expandedKey: string | null;
  setExpandedKey: (k: string | null) => void;
}) => {
  const expanded = BRAND_SERVICES.find((s) => s.key === expandedKey);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50" data-testid="solutions-section">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-gray-300 w-[160px] h-[35px] flex items-center justify-center mx-auto">Todos los implementos</Badge>
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Soluciones que se adaptan a tu campo</h2>
            <p className="text-gray-600">Explorá nuestro amplio catálogo de implementos.</p>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key={`expanded-${expanded.key}`}
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.6 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left center" }}
              className="relative w-full rounded-3xl overflow-hidden min-h-[620px] shadow-2xl"
              data-testid={`expanded-service-${expanded.key}`}
            >
              <img
                src={expanded.image}
                alt={expanded.serviceTitle}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

              {/* Close button (top-right) */}
              <button
                onClick={() => setExpandedKey(null)}
                className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                aria-label="Cerrar panel expandido"
                data-testid="close-expanded-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="relative z-[1] h-full min-h-[620px] flex flex-col justify-center p-8 md:p-14 lg:p-20 max-w-3xl text-white"
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4 opacity-80">
                  {expanded.brandName}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading leading-tight">
                  {expanded.serviceTitle}
                </h3>

                <div className="space-y-5 mb-10 text-base md:text-lg opacity-90 leading-relaxed">
                  <p>{expanded.brandSummary}</p>
                  <p>{expanded.serviceDesc}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={expanded.moreHref} data-testid={`more-details-${expanded.key}`}>
                    <Button
                      size="lg"
                      className="bg-[#E31E24] hover:bg-[#FF0000] text-white transition-colors px-8 w-full sm:w-auto"
                    >
                      Ver más detalles <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setExpandedKey(null)}
                    className="bg-transparent border-white/60 text-white hover:bg-white hover:text-[#0D1B2A] transition-colors px-8 w-full sm:w-auto"
                    data-testid="close-expanded-btn-secondary"
                  >
                    Cerrar
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Large Card - Consilos (index 0) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="md:row-span-2"
              >
                <button
                  onClick={() => setExpandedKey(BRAND_SERVICES[0].key)}
                  className="relative group overflow-hidden rounded-3xl h-[300px] md:h-full w-full block text-left cursor-pointer border-0 p-0 bg-transparent"
                  data-testid={`service-card-${BRAND_SERVICES[0].key}`}
                >
                  <img
                    src={BRAND_SERVICES[0].image}
                    alt={BRAND_SERVICES[0].serviceTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{BRAND_SERVICES[0].serviceTitle}</h3>
                    <span className="text-sm font-medium opacity-80 uppercase tracking-widest">{BRAND_SERVICES[0].brandName}</span>
                  </div>
                </button>
              </motion.div>

              {/* Small Cards */}
              {BRAND_SERVICES.slice(1).map((sol, idx) => (
                <motion.div
                  key={sol.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                >
                  <button
                    onClick={() => setExpandedKey(sol.key)}
                    className="relative group overflow-hidden rounded-3xl h-[300px] w-full block text-left cursor-pointer border-0 p-0 bg-transparent"
                    data-testid={`service-card-${sol.key}`}
                  >
                    <img
                      src={sol.image}
                      alt={sol.serviceTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{sol.serviceTitle}</h3>
                      <span className="text-xs font-medium opacity-80 uppercase tracking-widest">{sol.brandName}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const News = () => {
  const news = [
    {
      title: "Éxito rotundo en la feria agropecuaria INNOVAR 2026",
      desc: "En cada edición Electrogrupo se hace presente para mostrar las novedades en tecnología para el campo paraguayo...",
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/innovar_-0661_xufmhs_wtl4kr.webp"
    },
    {
      title: "Silo completo para la Cooperativa Manduvi LTDA",
      desc: "Montaje completo de Silo en la ciudad de Naranjal de la marca CONSILOS, líder en soluciones de almacenamiento y conservación de granos...",
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904813/Edited3_qx1drj_s4hwyr.webp"
    },
    {
      title: "Riego de 758ha en Choré, San Pedro con Pivot Central",
      desc: "La hacienda Toro Hovy es un excelente caso de éxito de implementación de Pivot Central Western junto con la aplicación de manejo de riego de Electrogrupo...",
      image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Pi_Am_Li_02_1_ek45ij_byq8da.webp"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-gray-300 w-[73.6875px] h-[35px] flex items-center justify-center mx-auto" style={{ fontFamily: 'Arial' }}>Proyectos</Badge>
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-4 font-heading">Novedades de la empresa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos con marcas especializadas para cada etapa de su producción diseñados para mejorar la productividad, rendimiento y control operativo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <Link to="/proyectos" className="block">
                <div className="rounded-3xl overflow-hidden mb-6 aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {item.desc}
                </p>
                <Button variant="link" className="p-0 h-auto text-[#E31E24] gap-2 font-semibold">
                  Leer nota completa <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Photo_St_Alf-1_ojbd7j_szrfo6.webp" 
          alt="Sunset field" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10 text-center text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight font-heading px-4">
          Tu campo merece la mejor tecnología
        </h2>
        <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          30 años de experiencia en irrigación, almacenamiento y fertilización para el agro paraguayo.
        </p>
        <a href="https://tally.so/r/b584We" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-white text-[#0D1B2A] hover:bg-[#FF0000] hover:text-white transition-all rounded-full px-10 py-7 text-lg font-bold shadow-xl">
            Solicitar cotización
          </Button>
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/difxr700v/image/upload/v1775651672/EGWhite_cqzbep.svg" 
                alt="Electrogrupo Logo" 
                className="w-[185px] h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex gap-4">
              <a href="https://instagram.com/electrogrupo.saci" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/electrogrupo.saci" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-4 text-sm opacity-70">
              <p>Calle de servicio de la Ruta 6ta Tramo Norte - Barrio los Maizalez</p>
              <p>Santa Rita, Alto Paraná</p>
              <a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +595 983 130313
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nuestras marcas</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link to="/marca/western" className="hover:opacity-100 transition-opacity">Western</Link></li>
              <li><Link to="/marca/consilos" className="hover:opacity-100 transition-opacity">CONSILOS</Link></li>
              <li><Link to="/marca/ouropro" className="hover:opacity-100 transition-opacity">OuroPro</Link></li>
              <li><Link to="/marca/imbil" className="hover:opacity-100 transition-opacity">IMBIL</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Soluciones</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link to="/riego-por-pivot" className="hover:opacity-100 transition-opacity">Riego por Pivot</Link></li>
              <li><Link to="/sistema-de-bombeo" className="hover:opacity-100 transition-opacity">Sistema de bombeo</Link></li>
              <li><Link to="/fertirrigacion" className="hover:opacity-100 transition-opacity">Fertirrigación</Link></li>
              <li><Link to="/silos" className="hover:opacity-100 transition-opacity">Silos</Link></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Máquinas de limpieza</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Secadora de Granos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Transportadores</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link to="/sobre-nosotros" className="hover:opacity-100 transition-opacity">Sobre nosotros</Link></li>
              <li><a href="https://wa.me/595983130313" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Contactanos</a></li>
              <li><Link to="/proyectos" className="hover:opacity-100 transition-opacity">Proyectos</Link></li>
              <li><a href="https://tally.so/r/wL5qMz" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Trabaja con nosotros</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Soporte</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2026 Electrogrupo S.A. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function Home() {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const handleBrandClick = (key: string) => {
    setExpandedKey(key);
    // Wait for layout update then scroll to the expanded panel
    setTimeout(() => {
      solutionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <main>
      <Hero />
      <Brands onBrandClick={handleBrandClick} />
      <Mission />
      <Solutions sectionRef={solutionsRef} expandedKey={expandedKey} setExpandedKey={setExpandedKey} />
      <News />
      <CTA />
    </main>
  );
}

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#E31E24] text-white rounded-full shadow-lg hover:bg-[#0D1B2A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E31E24]"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen font-sans selection:bg-[#E31E24] selection:text-white flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/riego-por-pivot" element={<PivotIrrigation />} />
              <Route path="/proyectos" element={<ProjectsPage />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/marca/western" element={<WesternPage />} />
              <Route path="/marca/consilos" element={<ConsilosPage />} />
              <Route path="/marca/ouropro" element={<OuroProPage />} />
              <Route path="/marca/imbil" element={<ImbilPage />} />
              <Route path="/sistema-de-bombeo" element={<SistemaBombeoPage />} />
              <Route path="/fertirrigacion" element={<FertirrigacionPage />} />
              <Route path="/silos" element={<SilosPage />} />
            </Routes>
          </div>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}
