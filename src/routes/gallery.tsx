import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { GALLERY_PAGE_DATA } from "@/lib/site-data";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery | Anantha Builders | Luxury Construction & Real Estate" },
      {
        name: "description",
        content:
          "Explore our completed projects, premium apartments, villas, commercial buildings, interiors, and architectural highlights.",
      },
      { property: "og:title", content: "Gallery | Anantha Builders" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_PAGE_DATA.items;

  // Lightbox Keyboard Navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : null
        );
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-[#FFFFFF] text-[#2B2B2B] pt-28 pb-20 selection:bg-[#C89B3C] selection:text-white min-h-screen">
      
      {/* 1. PAGE HEADER */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#C89B3C] tracking-tight">
            Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#666666] font-normal max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects, premium apartments, villas, commercial buildings, interiors, and architectural highlights.
          </p>
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-6">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative overflow-hidden bg-slate-100 rounded-none cursor-pointer aspect-[4/3] w-full"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Gold Plus Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full border-2 border-[#C89B3C] bg-black/30 flex items-center justify-center text-[#C89B3C] transform scale-90 group-hover:scale-100 transition-transform duration-350">
                    <Plus className="h-6 w-6 text-[#C89B3C]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] border-t border-slate-100 mt-16 text-center">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our completed works and discover the quality craftsmanship that defines every Anantha Builders project.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#C89B3C] hover:bg-[#b0852e] text-white px-9 py-4 rounded-[8px] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev > 0 ? prev - 1 : filteredItems.length - 1) : null
              );
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev !== null ? (prev < filteredItems.length - 1 ? prev + 1 : 0) : null
              );
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main Image Container & Counter */}
          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.title}
              className="w-full h-full object-contain max-h-[80vh] shadow-2xl"
            />
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C89B3C]">
              {lightboxIndex + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
