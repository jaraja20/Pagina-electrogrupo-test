# Electrogrupo Website - PRD

## Original Problem Statement
1. Clone and rebuild repository Pagina-electrogrupo-test
2. Create dedicated brand pages (Western, CONSILOS, OuroPro, IMBIL) and service pages
3. Update all content with real information from company PDFs

## Architecture
- Frontend: Vite 6 + React 19 + TypeScript + Tailwind CSS v4 + @base-ui/react (shadcn base-nova)
- Backend: Minimal FastAPI (health check only)
- Animations: motion/react | Routing: react-router-dom v7

## Site Map
```
/ (Homepage - carousel, brands, mission, solutions, news, CTA)
├── /marca/western → /riego-por-pivot (25,000+ pivots, 80 countries, CP600, iControl)
├── /marca/consilos → /silos (ISO 9001, silos planos/elevados/expedición)
├── /marca/ouropro → /fertirrigacion (precision fertigation)
├── /marca/imbil → /sistema-de-bombeo (high performance pumps)
├── /sobre-nosotros (timeline 1990-2026, locations, stats, brands)
└── /proyectos (news/blog)
```

## Real Data Integrated (from PDFs)
### Electrogrupo Presentation
- Founded 1990, 30+ years, 60+ collaborators, 20+ vehicles, 5,700m² plant
- HQ: Santa Rita, Alto Paraná | Branch: Katueté, Canindeyú
- President: Gledson Barcelo | Contact: +595 983 130 313
- Timeline: 1990→Eléctrica, 2010→Irrigación, 2017→Sede, 2022→Western, 2024→IMBIL, 2025→CONSILOS, 2026→OuroPro

### Western Product Catalogue
- Products: CP600, Small Field, Corner (GPS <2.5cm), Linear, Permapipe™
- iControl: Basic, Standard, EvoTouch (7" Siemens), Remote, Pump, Total
- Stats: 25,000+ pivots, 80 countries, 15,000h anti-corrosion, 95% motor efficiency
- Specs: Pipes 5"/6⅝"/8⅝", spans 38-62m, overhangs 1.8-25.6m

## What's Been Implemented
### Session 1 - Repository setup and migration
### Session 2 - Brand/service pages + navigation restructuring (100% tests)
### Session 3 - Real content from PDFs (100% tests)

## Prioritized Backlog
### P1 - User will provide images and panfletos per brand
### P2 - Remaining pages: Máquinas de limpieza, Secadora, Transportadoras, Contacto, Soporte
