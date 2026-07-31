import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Construction Services & Engineering | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Explore construction services by Anantha Builders including apartment construction, villa development, UPVC installations, and turnkey project management.",
      },
      { property: "og:title", content: "Construction Services | Anantha Builders" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES_GRID = [
  {
    num: "SHEET 01",
    title: "Apartments Construction",
    desc: "Multi-unit residential blocks built from foundation to finishing with earthquake-resistant RCC frameworks and modern elevators.",
    img: "/assets/images/services/services/002.png",
  },
  {
    num: "SHEET 02",
    title: "Villas Construction",
    desc: "Independent luxury villas delivered as complete turnkey contracts with custom architectural layouts and private landscapes.",
    img: "/assets/images/services/services/im.jpeg",
  },
  {
    num: "SHEET 03",
    title: "Interior Fit-Outs",
    desc: "Bespoke interiors planned around spatial ergonomics, gypsum false ceilings, polished teak wood joinery, and ambient lighting.",
    img: "/assets/images/services/services/7.png",
  },
  {
    num: "SHEET 04",
    title: "UPVC Windows & Doors",
    desc: "High-performance, weatherproof UPVC window systems manufactured by sister firm Lakshmi Ganapathi Enterprises.",
    img: "/assets/images/services/icons/lakshmi.png",
    isLogo: true,
  },
  {
    num: "SHEET 05",
    title: "Landscapes & Greenery",
    desc: "Outdoor residential landscapes graded, planted, and paved for maximum durability, drainage efficiency, and aesthetic elegance.",
    img: "/assets/images/services/services/Scene 4.png",
  },
  {
    num: "SHEET 06",
    title: "Master Site Planning",
    desc: "Comprehensive site development layouts resolving vehicular circulation, utility pipelines, rainwater harvesting, and solar orientation.",
    img: "/assets/images/services/services/Scene 3.png",
  },
  {
    num: "SHEET 07",
    title: "Civil Execution & Site Management",
    desc: "On-site structural masonry execution, foundation pouring, steel binding, and quality assurance auditing.",
    img: "/assets/images/services/services/Scene 10.png",
  },
  {
    num: "SHEET 08",
    title: "Material Contracts & Finishing",
    desc: "Direct sourcing of red bricks, certified steel, Finolex wiring, RAK tiles, and high-grade sand contracts.",
    img: "/assets/images/services/services/Scene 8.png",
  },
];

const ADVANTAGES = [
  {
    num: "01",
    title: "Red Brick Masonry",
    desc: 'We strictly utilize high-density kiln red bricks (9" external, 4" internal) for superior thermal insulation and structural durability.',
  },
  {
    num: "02",
    title: "Teak Wood & UPVC Joinery",
    desc: "Main entrances feature polished solid teak wood, while windows incorporate UV-resistant sliding UPVC frames.",
  },
  {
    num: "03",
    title: "ISI Certified Electrics",
    desc: "Concealed wiring using Finolex / Havells copper cables with modular switches for fire safety and durability.",
  },
];

function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 pt-24 selection:bg-[#A68D5C] selection:text-white">
      
      {/* 1. PAGE HERO */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              End-To-End Capabilities
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Comprehensive Architectural & Civil Engineering Services
            </h1>
            <p className="mt-4 text-lg md:text-xl font-normal leading-relaxed text-slate-600">
              From master layout drafting and foundation masonry to high-performance UPVC fitting and turnkey project handovers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SERVICES GRID */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Expertise Spectrum
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              What We Build & Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_GRID.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between border border-slate-200 bg-white p-7 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-slate-50 border border-slate-200 mb-6 flex items-center justify-center rounded-[8px]">
                    {item.isLogo ? (
                      <img src={item.img} alt={item.title} className="max-h-20 w-auto object-contain" />
                    ) : (
                      <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A68D5C] mb-2">
                    {item.num}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADVANTAGES OF ANANTHA BUILDERS */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Engineering Superiority
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Why Our Construction Quality Leads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="border border-slate-200 bg-white p-8 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A68D5C] mb-2">
                  {adv.num}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {adv.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA BANNER */}
      <section className="bg-white py-20 text-slate-900 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
            Contractual Estimates
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 md:text-6xl">
            Have a Construction Project <span className="italic text-[#A68D5C]">In Mind?</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-slate-600 font-normal">
            Consult with our chief engineers for bill-of-quantities (BOQ) and cost estimations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#A68D5C] px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#8e764a] shadow-md rounded-[8px]"
            >
              Get Project Estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 border border-[#A68D5C] bg-white px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C] hover:bg-[#A68D5C] hover:text-white transition-all rounded-[8px]"
            >
              <Phone className="h-4 w-4" />
              <span>Call {SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
