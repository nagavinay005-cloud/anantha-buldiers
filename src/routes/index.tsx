import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  SITE,
} from "@/lib/site-data";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { HomeGallery } from "@/components/home-gallery";
import { Phone, ArrowRight, Building2, Home as HomeIcon, Compass, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Anantha Builders delivers premier luxury real estate landmarks, apartments, and villas combining innovative design, structural precision, and uncompromised quality in Bhimavaram.",
      },
      { property: "og:title", content: "Anantha Builders | Luxury Construction & Real Estate" },
      {
        property: "og:description",
        content:
          "Redefining luxury living in Bhimavaram with earthquake-resistant structures, teakwood joinery, and UPVC innovations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HEADER (Rendered via SiteHeader in Root Layout)
          SECTION 2: HERO BANNER (Uncropped Hero Image)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-white pt-[65px] sm:pt-[75px] lg:pt-[85px]">
        <div className="w-full relative overflow-hidden flex items-center justify-center bg-white">
          <img
            src="/assets/images/home/hero/main.png"
            alt="Anantha Homes Building & Director Shanmukh Kumar"
            className="w-full h-auto block object-contain select-none"
            style={{
              objectFit: "contain",
              objectPosition: "center top",
            }}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: WELCOME TO ANANTHA BUILDERS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Featured Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] border border-slate-200 shadow-md">
                <img
                  src="/assets/images/home/gallery/im.jpeg"
                  alt="Ark The Pride Exterior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#A68D5C] px-3.5 py-1.5 text-xs uppercase tracking-[0.25em] text-white font-bold rounded-[6px] shadow-sm">
                  Featured Landmark
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-[#A68D5C]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                  BE THE PROUD OWNER
                </span>
              </div>

              <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl font-bold">
                Welcome to <span className="italic text-[#A68D5C]">Anantha Builders</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg font-normal">
                Anantha Builders Company has established itself as a trusted name in the construction industry through quality workmanship, innovative design, and an unwavering commitment to customer satisfaction. With over two decades of expertise in residential, commercial, and large-scale infrastructure development, our team has successfully delivered projects that stand as landmarks of excellence. We prioritize safety, sustainability, and timely delivery in every blueprint we execute.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/upcoming"
                  className="group inline-flex items-center gap-3 bg-[#A68D5C] hover:bg-[#8e764a] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white transition-all rounded-[8px] shadow-md"
                >
                  <span>Booking Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-3 border border-[#A68D5C] bg-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C] hover:bg-[#A68D5C] hover:text-white transition-all rounded-[8px]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {SITE.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTIONS 4 & 5: DUAL 2-COLUMN ABOUT GRID (PERFECTLY ALIGNED)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-stretch">
            
            {/* COLUMN 1: ABOUT ANANTHA BUILDERS */}
            <div className="flex flex-col items-center justify-start text-center lg:pr-12 lg:border-r lg:border-slate-200">
              <div className="w-full flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <span className="h-px w-10 bg-[#A68D5C]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                    About Anantha Builders
                  </span>
                  <span className="h-px w-10 bg-[#A68D5C]" />
                </div>
                <div className="mb-6 h-36 w-full flex items-center justify-center">
                  <img
                    src="/image/logo2.png"
                    alt="Anantha Builders"
                    className="h-32 md:h-36 w-auto object-contain max-h-36"
                  />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-800 text-center">
                  Anantha Builders Company has established itself as a trusted name in the construction industry through quality workmanship, innovative design, and an unwavering commitment to customer satisfaction. With over two decades of expertise in residential, commercial, and large-scale infrastructure development, our team has successfully delivered projects that stand as landmarks of excellence. We prioritize safety, sustainability, and timely delivery in every blueprint we execute.
                </p>
              </div>
            </div>

            {/* COLUMN 2: ABOUT LAKSHMI GANAPATHI ENTERPRISES */}
            <div className="flex flex-col items-center justify-start text-center">
              <div className="w-full flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <span className="h-px w-10 bg-[#A68D5C]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                    About Lakshmi Ganapathi Enterprises
                  </span>
                  <span className="h-px w-10 bg-[#A68D5C]" />
                </div>
                <div className="mb-6 h-36 w-full flex items-center justify-center">
                  <img
                    src="/assets/images/about/company/lakshmi.png"
                    alt="Lakshmi Ganapathi Enterprises"
                    className="h-32 md:h-36 w-auto object-contain max-h-36"
                  />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-800 text-center">
                  Lakshmi Ganapathi Enterprises is a premier provider of high-performance UPVC windows and doors, dedicated to delivering innovative solutions that blend durability with modern aesthetics. By leveraging advanced manufacturing technology and precision engineering, we ensure that every product we install offers superior energy efficiency and sound insulation. Our reputation is built on years of craftsmanship and a deep-seated commitment to transforming spaces into secure, comfortable, and elegant environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: EXACT REFERENCE IMAGE SERVICES HIGHLIGHTS BAR (ENLARGED ICONS)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between">
            
            {/* 1. Apartments Construction Services */}
            <div className="group flex items-center gap-6 transition-transform duration-300 hover:translate-x-1">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 36 36" fill="none" stroke="#A68D5C" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="14" width="9" height="18" rx="0.5" />
                  <rect x="6.5" y="17.5" width="2" height="2" />
                  <rect x="6.5" y="21.5" width="2" height="2" />
                  <rect x="6.5" y="25.5" width="2" height="2" />
                  <rect x="14" y="6" width="16" height="26" rx="0.5" />
                  <rect x="17.5" y="10" width="2" height="2" />
                  <rect x="23.5" y="10" width="2" height="2" />
                  <rect x="17.5" y="15" width="2" height="2" />
                  <rect x="23.5" y="15" width="2" height="2" />
                  <rect x="17.5" y="20" width="2" height="2" />
                  <rect x="23.5" y="20" width="2" height="2" />
                  <rect x="17.5" y="25" width="2" height="2" />
                  <rect x="23.5" y="25" width="2" height="2" />
                </svg>
              </div>
              <div className="text-base md:text-lg font-bold leading-tight tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-[#A68D5C]">
                <div>Apartments</div>
                <div>Construction</div>
                <div>Services</div>
              </div>
            </div>

            {/* 2. Premium Villas Construction */}
            <div className="group flex items-center gap-6 transition-transform duration-300 hover:translate-x-1">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 36 36" fill="none" stroke="#A68D5C" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 4 C 8 12, 6 22, 18 32 C 30 22, 28 12, 18 4 Z" />
                  <path d="M18 8 V 28" />
                  <path d="M18 14 C 14 16, 12 18, 10 20" />
                  <path d="M18 20 C 15 22, 13 24, 12 25" />
                  <path d="M18 16 C 21 18, 23 20, 25 22" />
                </svg>
              </div>
              <div className="text-base md:text-lg font-bold leading-tight tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-[#A68D5C]">
                <div>Premium</div>
                <div>Villas</div>
                <div>Construction</div>
              </div>
            </div>

            {/* 3. Expert Layouts & Planning */}
            <div className="group flex items-center gap-6 transition-transform duration-300 hover:translate-x-1">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 36 36" fill="none" stroke="#A68D5C" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="18,2 22,12 32,12 24,18 28,28 18,22 8,28 12,18 4,12 14,12" />
                  <polygon points="18,8 22,18 18,28 14,18" />
                </svg>
              </div>
              <div className="text-base md:text-lg font-bold leading-tight tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-[#A68D5C]">
                <div>Expert</div>
                <div>Layouts &</div>
                <div>Planning</div>
              </div>
            </div>

            {/* 4. Luxury Interior Fit-Outs */}
            <div className="group flex items-center gap-6 transition-transform duration-300 hover:translate-x-1">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 36 36" fill="none" stroke="#A68D5C" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 16 L18 6 L30 16 V30 H6 Z" />
                  <rect x="15" y="22" width="6" height="8" />
                  <path d="M10 11 C 9 8, 12 7, 14 9" />
                </svg>
              </div>
              <div className="text-base md:text-lg font-bold leading-tight tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-[#A68D5C]">
                <div>Luxury</div>
                <div>Interior</div>
                <div>Fit-Outs</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: GALLERY (PREMIUM LUXURY GRID & LIGHTBOX)
         ───────────────────────────────────────────────────────────── */}
      <HomeGallery />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: OUR CLIENTS / TESTIMONIALS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 font-bold">
            Our Clients
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            Hear what our valued clients have to say about their experience.
          </p>
        </div>

        <TestimonialCarousel />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: FOOTER (Rendered via SiteFooter in Root Layout)
         ───────────────────────────────────────────────────────────── */}
    </div>
  );
}
