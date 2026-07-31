import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { Phone, ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Architectural Portfolio | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Explore luxury residential apartments, villas, and commercial developments by Anantha Builders including the RERA approved Tadepalligudem Project.",
      },
      { property: "og:title", content: "Projects Portfolio | Anantha Builders" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const PROJECTS = [
  {
    id: "tadepalligudem",
    badge: "RERA Approved",
    location: "Tadepalligudem, Andhra Pradesh",
    title: "Tadepalligudem Luxury Apartments",
    desc: "Earthquake-resistant RCC structure with teakwood joinery, V3F elevator technology, and full power generator backup.",
    img: "/assets/images/projects/hero/project1.png",
  },
  {
    id: "villas",
    badge: "Exclusive Villas",
    location: "Bhimavaram Prime",
    title: "Gated Villa Residences",
    desc: "Bespoke luxury 4BHK villas designed around private courtyards, landscapes, and high-performance UPVC window systems.",
    img: "/assets/images/projects/gallery/003.png",
  },
  {
    id: "commercial",
    badge: "Commercial Hub",
    location: "Park Street, Bhimavaram",
    title: "Park Street Commercial Hub",
    desc: "Multi-story commercial complex engineered for high footfall retail, corporate offices, and financial institutions.",
    img: "/assets/images/projects/hero/7.png",
  },
  {
    id: "residency",
    badge: "Upcoming Project",
    location: "Kodavali Road, Bhimavaram",
    title: "Anantha Residency",
    desc: "Upcoming 3BHK eco-friendly residential tower with solar common area lighting, EV vehicle charging, and modern amenities.",
    img: "/assets/images/projects/gallery/Scene 10.png",
  },
];

function ProjectsPage() {
  return (
    <div className="bg-white text-slate-900 pt-24 selection:bg-[#A68D5C] selection:text-white">
      
      {/* 1. PAGE HERO */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Landmark Portfolio
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Signature Real Estate & Architectural Projects
            </h1>
            <p className="mt-4 text-lg md:text-xl font-normal leading-relaxed text-slate-600">
              Explore our individual developments built with uncompromised engineering quality, RERA approvals, and modern architectural elegance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ALL PROJECTS SHOWCASE CARDS */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Project Portfolio
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Explore Individual Developments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col justify-between border border-slate-200 bg-white overflow-hidden rounded-[12px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-slate-950/85 text-[#E6B15A] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider border border-[#A68D5C]/40 rounded-[6px]">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68D5C] mb-2">
                      {proj.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <Link
                    to="/project-detail"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#A68D5C] hover:text-slate-900 transition-colors"
                  >
                    <span>View Full Project Specifications</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT CTA BANNER */}
      <section className="bg-white py-20 text-slate-900 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
            Personalized Presentation
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 md:text-6xl">
            Request Detailed Floor Plans & Pricing
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-slate-600 font-normal">
            Get in touch with our sales team for brochure downloads and site visit scheduling.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#A68D5C] px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#8e764a] shadow-md rounded-[8px]"
            >
              Schedule Site Visit
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
