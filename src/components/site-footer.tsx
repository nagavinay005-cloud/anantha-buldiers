import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white/70 pt-20 pb-8 border-t border-[#A68D5C]/20 selection:bg-[#A68D5C] selection:text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* EXACT ORIGINAL 4-COLUMN FOOTER GRID (2fr 1fr 1fr 1.5fr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-14 mb-16">
          
          {/* COLUMN 1: BRAND */}
          <div className="footer-brand">
            <Link to="/" className="inline-block mb-6">
              <img
                src={SITE.whiteLogo}
                alt={`${SITE.name} Logo`}
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-[0.95rem] leading-relaxed mb-6 font-normal max-w-md">
              Anantha Builders is a premier construction firm committed to crafting luxury residential and commercial landmarks with structural excellence in Bhimavaram.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-white text-[1.1rem] font-bold tracking-[0.05em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Upcoming Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="text-white text-[1.1rem] font-bold tracking-[0.05em] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Villas
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  UPVC Windows
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Civil Contracts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-[0.9rem] hover:text-[#A68D5C] transition-all hover:pl-1.5 inline-block"
                >
                  Interior Fit-Outs
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT OFFICE */}
          <div>
            <h4 className="text-white text-[1.1rem] font-bold tracking-[0.05em] mb-6">
              Contact Office
            </h4>
            <p className="text-white/60 text-[0.9rem] leading-relaxed mb-3">
              {SITE.address}
            </p>
            <p className="text-[#A68D5C] font-medium text-[0.9rem] mb-2">
              Phone:{" "}
              <a href={SITE.phoneHref} className="hover:underline">
                {SITE.phone}
              </a>{" "}
              |{" "}
              <a href={`tel:${SITE.phoneAlt.replace(/\s+/g, "")}`} className="hover:underline">
                {SITE.phoneAlt}
              </a>
            </p>
            <p className="text-white/60 text-[0.9rem]">
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-[#A68D5C] transition-colors">
                {SITE.email}
              </a>
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[0.85rem]">
          <div className="text-white font-medium">
            © {new Date().getFullYear()} Anantha Builders. All Rights Reserved. Designed with Luxury Craftsmanship.
          </div>
          <div className="text-[#A68D5C] font-medium">
            Lakshmi Ganapathi Enterprises Partner Firm
          </div>
        </div>

      </div>
    </footer>
  );
}
