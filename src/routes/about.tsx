import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE, STATS } from "@/lib/site-data";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Learn about Anantha Builders, Chairman Koppuravuri Shanmukh Kumar, our mission, vision, core values, and sister company Lakshmi Ganapathi Enterprises.",
      },
      { property: "og:title", content: "About Us | Anantha Builders" },
      {
        property: "og:description",
        content:
          "Two decades of crafting luxury architectural landmarks in Bhimavaram and across Andhra Pradesh.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div className="bg-white text-slate-900 pt-24 selection:bg-[#A68D5C] selection:text-white">
      
      {/* 1. PAGE HERO */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              About Anantha Builders
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Two Decades of Crafting Iconic Landmarks
            </h1>
            <p className="mt-4 text-lg md:text-xl font-normal leading-relaxed text-slate-600">
              Established with a vision to revolutionize urban living in Bhimavaram, 
              Anantha Builders stands as a symbol of architectural excellence, structural integrity, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS COUNTER GRID */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div key={idx} className="border-r border-slate-200 last:border-0 pr-4 text-center md:text-left">
                <div className="font-display text-4xl font-bold text-[#A68D5C] md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPANY STORY & LEADERSHIP */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Chairman Image & Quote Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden border border-slate-200 shadow-xl rounded-[12px]">
                <img
                  src="/assets/images/about/team/main.png"
                  alt="Chairman Koppuravuri Shanmukh Kumar"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[#A68D5C] bg-white/95 p-5 backdrop-blur-md shadow-lg rounded-r-[8px]">
                  <p className="text-sm md:text-base font-display italic text-slate-900">
                    "Every structure we build is a promise of quality, trust, and lasting value for generations."
                  </p>
                  <div className="mt-3 font-semibold text-slate-900 text-sm">
                    Koppuravuri Shanmukh Kumar
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A68D5C]">
                    Chairman & Founder
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Message Content */}
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                Leadership Message
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                A Philosophy Grounded in Excellence
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600">
                Anantha Builders was established to set new benchmarks in construction quality and design elegance. 
                Under the visionary leadership of Chairman <strong className="text-slate-900">Koppuravuri Shanmukh Kumar</strong>, our firm has 
                transformed from a pioneer builder into Bhimavaram's most trusted luxury developer.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                We believe a home is not merely a physical structure, but an enduring sanctuary for families. 
                By fusing traditional craftsmanship with cutting-edge civil engineering, we deliver spaces 
                that stand the test of time.
              </p>
              <div className="mt-6">
                <img
                  src="/assets/images/about/team/signatures-download-clipart-29-e1743574209464.png"
                  alt="Chairman Signature"
                  className="h-14 w-auto object-contain grayscale"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Mission */}
            <div className="border border-slate-200 bg-white p-8 md:p-10 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                01
              </div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                To design and construct world-class residential and commercial spaces that blend aesthetic sophistication, uncompromised structural quality, and environmental sustainability.
              </p>
            </div>

            {/* Vision */}
            <div className="border border-slate-200 bg-white p-8 md:p-10 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
                02
              </div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                To be recognized as Andhra Pradesh's premier luxury builder, celebrated for setting international benchmarks in real estate architecture and customer trust.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DUAL BRANDING: ANANTHA BUILDERS & LAKSHMI GANAPATHI ENTERPRISES */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Enterprise Strength
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Integrated Engineering Synergies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Anantha Builders */}
            <div className="border border-slate-200 bg-white p-8 md:p-10 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all">
              <img
                src="/assets/images/about/company/logo.png"
                alt="Anantha Builders Logo"
                className="h-14 w-auto object-contain mb-6"
              />
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Anantha Builders
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Specializing in high-end residential apartments, gated villas, commercial complexes, and master-planned layouts. 
                Known for premium RCC structures, teak wood joinery, and RERA-approved developments across Andhra Pradesh.
              </p>
            </div>

            {/* Lakshmi Ganapathi Enterprises */}
            <div className="border border-slate-200 bg-white p-8 md:p-10 shadow-sm rounded-[12px] hover:border-[#A68D5C]/60 hover:shadow-md transition-all">
              <img
                src="/assets/images/about/company/lakshmi.png"
                alt="Lakshmi Ganapathi Enterprises Logo"
                className="h-14 w-auto object-contain mb-6"
              />
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Lakshmi Ganapathi Enterprises
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our dedicated division producing high-performance UPVC window systems and doors. 
                Leveraging precision engineering to deliver superior acoustic insulation, weatherproofing, and energy efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CLIENT REVIEWS TRUST BADGES */}
      <section className="border-b border-slate-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
              Proven Reputation
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Endorsed by Over 1000+ Families
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Real reviews and feedback from homeowners across our delivered projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="border border-slate-200 bg-white p-6 text-center rounded-[12px] shadow-sm hover:border-[#A68D5C] hover:shadow-md transition-all">
              <img
                src="/assets/images/about/team/1.jpeg"
                alt="Reviewer 1"
                className="h-16 w-16 rounded-full object-cover border-2 border-[#A68D5C] mx-auto mb-4"
              />
              <h4 className="font-bold text-slate-900 text-lg mb-1">Quality Construction</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic">
                "Flawless RCC foundation & teak wood joinery."
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 text-center rounded-[12px] shadow-sm hover:border-[#A68D5C] hover:shadow-md transition-all">
              <img
                src="/assets/images/about/team/2.jpeg"
                alt="Reviewer 2"
                className="h-16 w-16 rounded-full object-cover border-2 border-[#A68D5C] mx-auto mb-4"
              />
              <h4 className="font-bold text-slate-900 text-lg mb-1">On-Time Delivery</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic">
                "Handed over ahead of scheduled date."
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 text-center rounded-[12px] shadow-sm hover:border-[#A68D5C] hover:shadow-md transition-all">
              <img
                src="/assets/images/about/team/3.jpeg"
                alt="Reviewer 3"
                className="h-16 w-16 rounded-full object-cover border-2 border-[#A68D5C] mx-auto mb-4"
              />
              <h4 className="font-bold text-slate-900 text-lg mb-1">UPVC Efficiency</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic">
                "Superb sound & heat insulation."
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-6 text-center rounded-[12px] shadow-sm hover:border-[#A68D5C] hover:shadow-md transition-all">
              <img
                src="/assets/images/about/team/4.jpeg"
                alt="Reviewer 4"
                className="h-16 w-16 rounded-full object-cover border-2 border-[#A68D5C] mx-auto mb-4"
              />
              <h4 className="font-bold text-slate-900 text-lg mb-1">Transparent Pricing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif italic">
                "No hidden charges, clear RERA docs."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA BANNER */}
      <section className="bg-white py-20 text-slate-900 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#A68D5C]">
            Consult With Experts
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 md:text-6xl">
            Build Your Dream Residence <span className="italic text-[#A68D5C]">With Us</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-slate-600 font-normal">
            Reach out to Chairman Shanmukh Kumar and our engineering team today at our Bhimavaram office.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#A68D5C] px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#8e764a] shadow-md rounded-[8px]"
            >
              Schedule Consultation
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
