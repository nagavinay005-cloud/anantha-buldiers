import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white/98 backdrop-blur-md text-slate-900 border-b border-slate-200/80 transition-all duration-300 max-h-[90px] h-[90px] flex items-center ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-[60px] h-full max-w-[1920px] mx-auto">
        
        {/* BRAND LOGO — Increased size by 35–40%, vertically centered & sharp */}
        <Link to="/" className="flex items-center shrink-0 my-auto">
          <img
            src={SITE.logo}
            alt={SITE.name}
            className="h-[64px] sm:h-[70px] md:h-[74px] lg:h-[78px] xl:h-[82px] w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* CENTERED DESKTOP NAVIGATION — Single horizontal row, 16px, 600 weight, 2px letter spacing, no line wrap */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-5 lg:space-x-7 xl:space-x-8 px-4 my-auto">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap text-[15px] xl:text-[16px] font-semibold uppercase tracking-[2px] no-underline hover:no-underline focus:no-underline transition-colors duration-200 hover:text-[#A68D5C] ${
                  active ? "text-[#A68D5C] font-bold" : "text-slate-800"
                }`}
                style={{ fontFamily: "sans-serif" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CALL BUTTON — Golden color call number, reduced height, 22px horizontal padding, 8px border-radius, premium hover */}
        <div className="hidden lg:flex items-center shrink-0 my-auto">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center bg-white text-[#A68D5C] border-2 border-[#A68D5C] hover:bg-[#A68D5C] hover:text-white text-[13px] font-bold uppercase tracking-[2px] px-[22px] py-2 rounded-[8px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "sans-serif" }}
          >
            Call <span className="font-bold ml-1.5">{SITE.phone}</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <div className="flex items-center gap-3 lg:hidden my-auto">
          <a
            href={SITE.phoneHref}
            className="sm:inline-flex hidden items-center justify-center bg-white text-[#A68D5C] border border-[#A68D5C] hover:bg-[#A68D5C] hover:text-white text-[11px] font-bold uppercase tracking-[1.5px] px-4 py-2 rounded-[8px] shadow-sm whitespace-nowrap"
          >
            Call {SITE.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-900 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="absolute top-[90px] left-0 w-full border-t border-slate-200 bg-white text-slate-900 shadow-xl lg:hidden z-50">
          <nav className="flex flex-col px-6 py-5 space-y-1">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`border-b border-slate-100 py-3 text-[14px] font-semibold uppercase tracking-[2px] no-underline hover:no-underline transition-colors ${
                    active ? "text-[#A68D5C] font-bold" : "text-slate-800 hover:text-[#A68D5C]"
                  }`}
                  style={{ fontFamily: "sans-serif" }}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-block bg-amber-700 hover:bg-amber-800 px-6 py-3 text-center text-[13px] font-bold uppercase tracking-[2px] text-white rounded-[8px] shadow-sm"
              style={{ fontFamily: "sans-serif" }}
            >
              Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
