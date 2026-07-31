import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";
import { MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Contact Anantha Builders in Bhimavaram. Call +91 93483 88888, email ananthabuildersbvrm@gmail.com, or visit Park Street, Narasagraharam, Bhimavaram.",
      },
      { property: "og:title", content: "Contact Us | Anantha Builders" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#2B2B2B] pt-28 pb-20 selection:bg-[#C89B3C] selection:text-white min-h-screen">
      
      {/* 1. CENTER HEADING */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#2B2B2B] tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto">
            We're here to help you build your dream home.
          </p>
        </div>
      </section>

      {/* 2. THREE CONTACT INFORMATION CARDS */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Location */}
            <div className="bg-[#FFFFFF] rounded-[12px] border border-slate-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-[#C89B3C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C89B3C] mb-1">
                  LOCATION
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-medium">
                  ANANTHA BUILDERS,<br />
                  Park Street, Market Yard Back Side,<br />
                  Kodavali Road, Narasagraharam,<br />
                  Bhimavaram.
                </p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-[#FFFFFF] rounded-[12px] border border-slate-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-[#C89B3C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C89B3C] mb-1">
                  EMAIL ADDRESS
                </h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-xs sm:text-sm text-[#2B2B2B] font-semibold hover:text-[#C89B3C] transition-colors break-all block"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* Card 3: Contact No */}
            <div className="bg-[#FFFFFF] rounded-[12px] border border-slate-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-[#C89B3C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#C89B3C] mb-1">
                  CONTACT NO.
                </h3>
                <div className="space-y-1">
                  <a
                    href="tel:+919348388888"
                    className="block text-xs sm:text-sm text-[#2B2B2B] font-semibold hover:text-[#C89B3C] transition-colors"
                  >
                    +91 93483 88888
                  </a>
                  <a
                    href="tel:+919153234567"
                    className="block text-xs sm:text-sm text-[#2B2B2B] font-semibold hover:text-[#C89B3C] transition-colors"
                  >
                    +91 91532 34567
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAP SECTION */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="w-full overflow-hidden rounded-[18px] border border-slate-200 shadow-xl">
            <iframe
              title="Anantha Builders Location Map"
              className="w-full h-[320px] md:h-[420px] lg:h-[600px] border-0"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Anantha+Builders+Park+Street+Narasagraharam+Bhimavaram&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CALL-TO-ACTION */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-t border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Contact our team today for project details, site visits, pricing, and personalized assistance.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-[#C89B3C] hover:bg-[#b0852e] text-white px-10 py-4 rounded-[8px] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW (+91 93483 88888)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
