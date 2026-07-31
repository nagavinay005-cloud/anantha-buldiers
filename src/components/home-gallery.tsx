import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { GALLERY_PAGE_DATA } from "@/lib/site-data";
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowRight } from "lucide-react";

export function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Original gallery items from Anantha Builders website
  const originalItems = GALLERY_PAGE_DATA.items;

  // Duplicate items twice for seamless 100% infinite marquee loop without jump/flicker
  const marqueeItems = [...originalItems, ...originalItems];

  // Width variations for editorial look
  const widthClasses = [
    "w-[300px] sm:w-[380px] md:w-[440px]",
    "w-[380px] sm:w-[460px] md:w-[540px]",
    "w-[320px] sm:w-[400px] md:w-[460px]",
    "w-[420px] sm:w-[500px] md:w-[580px]",
    "w-[340px] sm:w-[420px] md:w-[480px]",
  ];

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? originalItems.length - 1 : (prev as number) - 1));
  }, [selectedIndex, originalItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === originalItems.length - 1 ? 0 : (prev as number) + 1));
  }, [selectedIndex, originalItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section className="relative w-full bg-white py-20 md:py-28 border-b border-slate-200/80 overflow-hidden text-slate-900">
      
      {/* CENTERED HEADING */}
      <div className="mx-auto max-w-4xl px-6 text-center mb-12 md:mb-16">
        {/* Heading: "Gallery" in Gold (#A68D5C) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#A68D5C] mb-4" style={{ fontFamily: "sans-serif" }}>
          Gallery
        </h2>

        {/* Subtitle in #666666 */}
        <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#666666] max-w-2xl mx-auto">
          Explore our latest projects, interiors, architecture and design highlights.
        </p>
      </div>

      {/* FULL-WIDTH 100VW CONTINUOUS HORIZONTAL GALLERY STRIP (EXTENDS BEYOND VIEWPORT EDGES) */}
      <div 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden cursor-grab active:cursor-grabbing py-4"
      >
        <div 
          className="flex gap-5 md:gap-6 w-max animate-marquee transition-all duration-300"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {marqueeItems.map((item, index) => {
            const originalIndex = index % originalItems.length;

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedIndex(originalIndex)}
                className="group relative shrink-0 cursor-pointer transition-all duration-300"
              >
                {/* Full uncropped image displayed completely */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-[260px] sm:h-[340px] md:h-[420px] lg:h-[450px] w-auto max-w-none block object-contain shadow-md transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* PREMIUM LIGHTBOX MODAL WITH PREV / NEXT CONTROLS & TOUCH SWIPE */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 sm:p-6 md:p-10 backdrop-blur-md"
          onTouchStart={(e) => {
            const touch = e.touches[0];
            (window as any)._touchStartX = touch.clientX;
          }}
          onTouchEnd={(e) => {
            const touchStartX = (window as any)._touchStartX;
            if (typeof touchStartX === "number") {
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchStartX - touchEndX;
              if (diff > 50) handleNext();
              if (diff < -50) handlePrev();
            }
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors border border-white/10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 z-50 bg-slate-900/80 p-3 text-white hover:bg-[#A68D5C] transition-all rounded-full border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 z-50 bg-slate-900/80 p-3 text-white hover:bg-[#A68D5C] transition-all rounded-full border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Active Image Frame */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={originalItems[selectedIndex].src}
              alt={originalItems[selectedIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-lg border border-[#A68D5C]/40 shadow-2xl"
            />

            {/* Lightbox Caption & Info */}
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A68D5C] border border-[#A68D5C]/40 px-3 py-1 inline-block rounded-md mb-2">
                {originalItems[selectedIndex].category}
              </span>
              <h3 className="font-bold text-xl text-white">
                {originalItems[selectedIndex].title}
              </h3>
              <p className="mt-1 text-sm text-slate-300 line-clamp-2">
                {originalItems[selectedIndex].desc}
              </p>

              <div className="mt-3 text-xs font-bold text-[#A68D5C] uppercase tracking-widest">
                Image {selectedIndex + 1} of {originalItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
