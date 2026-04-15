import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const newsArticles = [
  {
    id: "innovar-2026",
    title: "Éxito rotundo en la feria agropecuaria INNOVAR 2026",
    desc: "En cada edición Electrogrupo se hace presente para mostrar las novedades en tecnología para el campo paraguayo. Este año, presentamos soluciones innovadoras en riego y almacenamiento que captaron la atención de cientos de productores.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904814/innovar_-0661_xufmhs_wtl4kr.webp",
    date: "24 de Junio, 2026",
    author: "Electrogrupo",
    category: "Eventos"
  },
  {
    id: "silo-manduvi",
    title: "Silo completo para la Cooperativa Manduvi LTDA",
    desc: "Montaje completo de Silo en la ciudad de Naranjal de la marca CONSILOS, líder en soluciones de almacenamiento y conservación de granos. Este proyecto representa un avance significativo en la capacidad de acopio de la región.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904813/Edited3_qx1drj_s4hwyr.webp",
    date: "15 de Mayo, 2026",
    author: "Electrogrupo",
    category: "Proyectos"
  },
  {
    id: "riego-chore",
    title: "Riego de 758ha en Choré, San Pedro con Pivot Central",
    desc: "La hacienda Toro Hovy es un excelente caso de éxito de implementación de Pivot Central Western junto con la aplicación de manejo de riego de Electrogrupo. Un proyecto que demuestra nuestro compromiso con la eficiencia hídrica.",
    image: "https://res.cloudinary.com/difxr700v/image/upload/v1775904817/Pi_Am_Li_02_1_ek45ij_byq8da.webp",
    date: "02 de Abril, 2026",
    author: "Electrogrupo",
    category: "Casos de Éxito"
  }
];

export default function NewsPage() {
  const mainArticle = newsArticles[0];
  const relatedArticles = newsArticles.slice(1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <Helmet>
        <title>Noticias | Electrogrupo</title>
        <meta name="description" content="Últimas noticias y novedades de Electrogrupo." />
      </Helmet>

      <div className="container mx-auto px-6 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E31E24] transition-colors mb-12 font-medium">
          <ArrowLeft className="w-5 h-5" /> Volver al Inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6 font-heading leading-tight">
                {mainArticle.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                <span className="font-medium text-gray-900">{mainArticle.author}</span>
                <span>•</span>
                <span>{mainArticle.category}</span>
                <span>•</span>
                <span>{mainArticle.date}</span>
              </div>

              <div className="rounded-3xl overflow-hidden mb-10">
                <img 
                  src={mainArticle.image} 
                  alt={mainArticle.title} 
                  className="w-full h-auto object-cover max-h-[600px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-xl font-medium text-gray-800 mb-6 leading-relaxed">
                  {mainArticle.desc}
                </p>
                <p>
                  Electrogrupo continúa consolidando su presencia en el sector agropecuario paraguayo. 
                  Nuestra participación en eventos clave y el desarrollo de proyectos de gran envergadura 
                  reflejan nuestro compromiso con la innovación y el desarrollo sostenible del campo.
                </p>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mt-10 mb-4">Un enfoque en el futuro</h3>
                <p>
                  Seguimos trabajando de la mano con los productores, ofreciendo tecnología de punta 
                  en sistemas de riego, almacenamiento de granos y soluciones integrales que optimizan 
                  los recursos y maximizan los rendimientos.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Related Articles */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8 font-heading border-b pb-4">Artículos Relacionados</h3>
              
              <div className="flex flex-col gap-8">
                {relatedArticles.map((article, idx) => (
                  <motion.div 
                    key={article.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                    className="group cursor-pointer grid grid-cols-3 gap-4 items-start"
                  >
                    <div className="col-span-1 rounded-xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="col-span-2">
                      <h4 className="text-base font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors line-clamp-3 leading-snug">
                        {article.title}
                      </h4>
                      <div className="text-xs text-gray-500">
                        {article.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
