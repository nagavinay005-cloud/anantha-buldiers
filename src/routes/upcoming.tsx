import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import {
  Building,
  MapPin,
  Compass,
  ShieldCheck,
  FileText,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/upcoming")({
  component: UpcomingProjectsPage,
  head: () => ({
    meta: [
      { title: "Upcoming Projects | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "View complete technical specifications, floor plans, brochure downloads, and location details for Anantha Builders developments.",
      },
      { property: "og:title", content: "Upcoming Projects | Anantha Builders" },
      { property: "og:url", content: "/upcoming" },
    ],
    links: [{ rel: "canonical", href: "/upcoming" }],
  }),
});

function UpcomingProjectsPage() {
  return (
    <div className="bg-white text-slate-900 pt-24 min-h-screen selection:bg-[#A68D5C] selection:text-white">
      
      {/* MAIN TWO-COLUMN LAYOUT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ============================================================
                LEFT COLUMN (Approximately 70% / 8 Cols)
               ============================================================ */}
            <div className="lg:col-span-8">
              
              {/* Project Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Anantha Residency & Tadepalligudem Project
              </h1>
              
              {/* Project Description */}
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
                <p>
                  Anantha Builders presents luxury residential apartments at Tadepalligudem and Bhimavaram, crafted with uncompromised engineering quality, RERA approvals, and modern architectural elegance.
                </p>
                <p>
                  Engineered with earthquake-resistant RCC frame technology, high-density kiln-fired red brick masonry, and high-performance UPVC window systems manufactured by sister firm Lakshmi Ganapathi Enterprises.
                </p>
              </div>

              {/* Horizontal Divider */}
              <div className="border-b border-slate-200 my-8" />

              {/* Two Project Images Displayed Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                {/* Building Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 rounded-[12px] border border-slate-200 shadow-sm">
                  <img
                    src="/assets/images/projects/hero/project1.png"
                    alt="Building Render Elevation"
                    className="h-full w-full object-cover"
                  />
                  <div className="p-3 bg-white text-center border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Building Elevation</span>
                  </div>
                </div>

                {/* Floor Plan Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 rounded-[12px] border border-slate-200 shadow-sm">
                  <img
                    src="/assets/images/projects/gallery/003.png"
                    alt="Floor Plan Layout"
                    className="h-full w-full object-cover"
                  />
                  <div className="p-3 bg-white text-center border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">Floor Plan Layout</span>
                  </div>
                </div>
              </div>

              {/* Large Specifications Section Below */}
              <div className="bg-white p-8 md:p-10 rounded-[12px] border border-slate-200 shadow-sm mt-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Technical Specifications
                </h2>
                
                {/* Gold Section Divider */}
                <div className="h-0.5 w-16 bg-[#A68D5C] mt-2 mb-8" />

                {/* Two-Column Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base">
                  
                  {/* Category 1: Structure & Masonry */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Structure & Masonry
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Earthquake Resistant RCC Framed Structure designed for seismic forces.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Certified Kiln Red Bricks (9" external walls, 4" internal partition walls).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Smooth cement plastering finish for interior and exterior walls.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Doors & Windows */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Doors & Windows
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Main Door: Polished Natural Teak Wood frame & shutter with brass fittings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Internal Doors: Teak wood frames with flush shutters.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Windows: Sliding UPVC frames with float glass by Lakshmi Ganapathi Enterprises.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3: Flooring & Tiles */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Flooring & Tile Work
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>RAK / Johnson 2'x2' Vitrified tiles for living, dining & bedrooms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Anti-skid ceramic tile flooring for balconies and bathrooms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Glazed ceramic tile dado up to 7' height in all toilets.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 4: Electrical & Plumbing */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Electrical & Plumbing
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Concealed copper wiring with Finolex / Havells ISI cables.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Modular switches with adequate power points in all rooms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>CPVC sanitary piping with Jaguar / Hindware sanitary fittings.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 5: Painting & Finishes */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Painting & Finishes
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>Internal: Asian Paints premium emulsion over smooth putty finish.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>External: Weather-shield exterior apex paint for rain protection.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 6: Elevators & Backup */}
                  <div>
                    <h3 className="font-bold text-[#A68D5C] text-lg uppercase tracking-wider mb-3">
                      Elevators & Power Backup
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>6-Passenger V3F automatic lift with smooth-stop technology.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A68D5C] font-bold">•</span>
                        <span>100% Generator backup for lift, water pump & common lighting.</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Disclaimer at Bottom */}
                <div className="text-xs text-slate-500 italic mt-10 pt-6 border-t border-slate-200">
                  Disclaimer: The furniture, floor plans, fixtures, and visual renders shown are indicative for representation purposes. Anantha Builders reserves the right to make minor modifications as per engineering requirements and RERA guidelines.
                </div>
              </div>

            </div>

            {/* ============================================================
                RIGHT COLUMN (Approximately 30% / 4 Cols)
               ============================================================ */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Stacked Card 1: Project Type */}
              <div className="bg-white rounded-[12px] p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#A68D5C]/10 text-[#A68D5C] flex items-center justify-center shrink-0">
                  <Building className="h-5 w-5 text-[#A68D5C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Project Type</h4>
                  <p className="text-base text-slate-600 mt-1 font-semibold">Luxury Apartments</p>
                </div>
              </div>

              {/* Stacked Card 2: Location */}
              <div className="bg-white rounded-[12px] p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#A68D5C]/10 text-[#A68D5C] flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#A68D5C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Location</h4>
                  <p className="text-base text-slate-600 mt-1 font-semibold">Tadepalligudem / Bhimavaram</p>
                </div>
              </div>

              {/* Stacked Card 3: Configuration */}
              <div className="bg-white rounded-[12px] p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#A68D5C]/10 text-[#A68D5C] flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5 text-[#A68D5C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Configuration</h4>
                  <p className="text-base text-slate-600 mt-1 font-semibold">2 BHK & 3 BHK Luxury Units</p>
                </div>
              </div>

              {/* Stacked Card 4: Status */}
              <div className="bg-white rounded-[12px] p-6 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#A68D5C]/10 text-[#A68D5C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#A68D5C]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Status</h4>
                  <p className="text-base text-[#A68D5C] mt-1 font-bold">RERA Approved</p>
                </div>
              </div>

              {/* Stacked Card 5: Project Brochure */}
              <div className="bg-white rounded-[12px] p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-5 w-5 text-[#A68D5C]" />
                  <h4 className="text-lg font-bold text-slate-900">Project Brochure</h4>
                </div>
                <p className="text-sm text-slate-600 mb-5">
                  Specifications, floor plan & more
                </p>
                <a
                  href="https://www.ananthabuilders.com/brochure/TADEPALLIGUDEM_BROCHURE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#A68D5C] text-white font-bold uppercase tracking-wider py-3.5 px-4 rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#8e764a] transition-all text-xs sm:text-sm shadow-md"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download PDF Brochure</span>
                </a>
              </div>

              {/* Stacked Card 6: Contact Information Card */}
              <div className="bg-white border-2 border-[#A68D5C] text-center p-8 rounded-[12px] shadow-md">
                <div className="h-14 w-14 rounded-full bg-[#A68D5C]/10 border border-[#A68D5C] text-[#A68D5C] flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  Need More Information?
                </h4>
                <div className="mt-3 text-2xl font-bold text-[#A68D5C]">
                  +91 93483 88888
                </div>
                <p className="text-xs text-slate-600 mt-2 mb-6">
                  Speak directly with Chairman Shanmukh Kumar & engineering team.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="inline-block bg-[#A68D5C] text-white font-bold uppercase tracking-wider px-6 py-3 rounded-[8px] text-xs hover:bg-[#8e764a] transition-all shadow-sm"
                >
                  Call Us Now
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
