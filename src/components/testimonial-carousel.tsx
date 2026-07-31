import { useState, useEffect, useRef, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/site-data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  // Responsive Items Per Page:
  // Desktop (≥1600px): 5 cards
  // Laptop (1200–1599px): 4 cards
  // Tablet (768–1199px): 2 cards
  // Mobile (<768px): 1 card
  const updateItemsPerPage = useCallback(() => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width < 768) {
      setItemsPerPage(1);
    } else if (width < 1200) {
      setItemsPerPage(2);
    } else if (width < 1600) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(5);
    }
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const maxIndex = Math.max(0, total - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 60) {
      handleNext();
      isDragging.current = false;
    } else if (diff < -60) {
      handlePrev();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    dragStartX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[90px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Container with Navigation Arrows */}
      <div className="relative flex items-center justify-between">
        
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Previous testimonial"
          className="absolute -left-2 sm:-left-3 lg:-left-5 top-[calc(50%-20px)] -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#E6B15A] bg-white text-slate-800 shadow-md transition-all duration-300 hover:bg-[#E6B15A] hover:text-white hover:border-[#E6B15A] active:scale-95 transform hover:-translate-y-1/2"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Carousel Window (100% available screen width with 20-30px side padding) */}
        <div
          className="w-full overflow-hidden py-4 sm:py-6 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {TESTIMONIALS.map((review, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`shrink-0 px-2 sm:px-3 flex justify-center ${
                    itemsPerPage === 1
                      ? "w-full"
                      : itemsPerPage === 2
                      ? "w-1/2"
                      : itemsPerPage === 4
                      ? "w-1/4"
                      : "w-1/5"
                  }`}
                >
                  {/* Card Container: Centered Content, Equal Width & Height, 16px Radius, Gold Border */}
                  <div
                    className={`group flex h-[380px] sm:h-[400px] md:h-[420px] w-full flex-col items-center justify-between text-center rounded-[16px] border bg-white p-6 lg:p-7 shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                      isActive
                        ? "border-2 border-[#E6B15A] shadow-xl ring-1 ring-[#E6B15A]/30 scale-[1.01]"
                        : "border-[#E6B15A]/60 hover:border-[#E6B15A] hover:shadow-lg"
                    }`}
                  >
                    {/* Top Area: Gold Stars & Quote Icon */}
                    <div className="w-full flex flex-col items-center">
                      <div className="flex items-center justify-center gap-1 mb-3 text-[#E6B15A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#E6B15A] text-[#E6B15A]" />
                        ))}
                      </div>

                      <Quote className="h-7 w-7 text-[#E6B15A] mb-3 group-hover:scale-105 transition-transform duration-300" />

                      {/* Review Quote Text */}
                      <p className="font-serif text-sm sm:text-base italic leading-relaxed text-slate-700 line-clamp-5 text-center">
                        "{review.quote}"
                      </p>
                    </div>

                    {/* Bottom Area: Centered Profile with Thin Gold Divider */}
                    <div className="mt-4 pt-4 border-t border-[#E6B15A]/20 w-full flex flex-col items-center text-center shrink-0">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-[#E6B15A]/40 shadow-sm mb-1.5 transition-transform duration-300 group-hover:scale-105"
                      />
                      <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {review.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E6B15A] mt-0.5">
                        {review.role}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Next testimonial"
          className="absolute -right-2 sm:-right-3 lg:-right-5 top-[calc(50%-20px)] -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#E6B15A] bg-white text-slate-800 shadow-md transition-all duration-300 hover:bg-[#E6B15A] hover:text-white hover:border-[#E6B15A] active:scale-95 transform hover:-translate-y-1/2"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

      </div>

      {/* Pagination Dot Indicators (Centered below cards) */}
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-[#E6B15A] shadow-sm"
                : "w-2.5 bg-slate-300 hover:bg-[#E6B15A]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
