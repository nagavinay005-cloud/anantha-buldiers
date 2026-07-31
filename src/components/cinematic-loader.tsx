import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CinematicLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeenLoader = sessionStorage.getItem("anantha_loader_seen");
      if (!hasSeenLoader) {
        setShouldRender(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!shouldRender || !containerRef.current) return;

    // 1. Initial State Setup for 60 FPS Hardware Acceleration
    // Black background active (#000000)
    gsap.set(logoWrapperRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 0,
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", // Hidden in darkness initially
      willChange: "transform, opacity, clip-path",
    });

    gsap.set(ribbonRef.current, {
      xPercent: -140,
      opacity: 0,
      willChange: "transform, opacity",
    });

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.8,
      willChange: "transform, opacity",
    });

    gsap.set(shineRef.current, {
      xPercent: -150,
      willChange: "transform",
    });

    const masterTl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        try {
          sessionStorage.setItem("anantha_loader_seen", "true");
        } catch {
          // Storage fallback
        }
        setShouldRender(false);
      },
    });

    // ──────────────────────────────────────────
    // STEP 1 & 2 (0.0s – 0.9s): Golden Light Ribbon Travels & Logo Emerges from Darkness
    // ──────────────────────────────────────────
    masterTl.to(
      ribbonRef.current,
      {
        opacity: 0.9,
        duration: 0.2,
        ease: "power2.out",
      },
      0.0,
    );

    // Light ribbon sweeps across screen horizontally
    masterTl.to(
      ribbonRef.current,
      {
        xPercent: 220,
        duration: 0.9,
        ease: "power4.inOut",
      },
      0.0,
    );

    // Logo gradually emerges as light ribbon passes
    masterTl.to(
      logoWrapperRef.current,
      {
        opacity: 1,
        scale: 1.0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Unveils fully
        duration: 0.85,
        ease: "power4.inOut",
      },
      0.05,
    );

    // ──────────────────────────────────────────
    // STEP 3 (0.9s – 1.5s): Metallic Shine Sweep & Soft Background Glow
    // ──────────────────────────────────────────
    masterTl.to(
      glowRef.current,
      {
        opacity: 0.7,
        scale: 1.0,
        duration: 0.6,
        ease: "power3.out",
      },
      0.85,
    );

    // Metallic shine sweeps diagonally across revealed logo
    masterTl.to(
      shineRef.current,
      {
        xPercent: 250,
        duration: 0.65,
        ease: "power4.inOut",
      },
      0.9,
    );

    // Soft glow gently settles
    masterTl.to(
      glowRef.current,
      {
        opacity: 0.3,
        duration: 0.5,
        ease: "power2.out",
      },
      1.35,
    );

    // ──────────────────────────────────────────
    // STEP 4 (1.5s – 2.5s): 1.0-Second Centered Pause
    // ──────────────────────────────────────────
    masterTl.to({}, { duration: 1.0 });

    // ──────────────────────────────────────────
    // STEP 5 (2.5s – 2.8s): Navbar Shrink Transition into Header
    // ──────────────────────────────────────────
    // Entire black background overlay fades out smoothly
    masterTl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      },
      2.45,
    );

    // Logo shrinks naturally towards navbar header position
    masterTl.to(
      logoWrapperRef.current,
      {
        scale: 0.35,
        y: -220,
        duration: 0.35,
        ease: "power3.inOut",
      },
      2.45,
    );

    return () => {
      masterTl.kill();
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
      style={{ backgroundColor: "#000000", willChange: "opacity, transform" }}
    >
      {/* Golden Soft Light Ribbon Beam Travelling Across Screen */}
      <div
        ref={ribbonRef}
        className="absolute inset-y-0 w-48 sm:w-80 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(166, 141, 92, 0.25) 25%, rgba(243, 229, 171, 0.95) 50%, rgba(212, 175, 55, 0.3) 75%, transparent 100%)",
          filter: "blur(12px)",
          transform: "skewX(-15deg)",
        }}
      />

      {/* Soft Radial Gold Glow Behind Logo */}
      <div
        ref={glowRef}
        className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(166, 141, 92, 0.45) 0%, rgba(166, 141, 92, 0.1) 50%, rgba(0, 0, 0, 0) 75%)",
          filter: "blur(35px)",
        }}
      />

      {/* Official Anantha Builders Logo - Emerges from Darkness */}
      <div
        ref={logoWrapperRef}
        className="relative z-10 flex items-center justify-center overflow-hidden p-6 rounded-2xl"
      >
        {/* Metallic Gold Shine Sweep Across Logo */}
        <div
          ref={shineRef}
          className="absolute inset-y-0 w-36 pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(115deg, transparent 0%, rgba(212, 175, 55, 0.2) 20%, rgba(255, 255, 255, 0.95) 50%, rgba(212, 175, 55, 0.2) 80%, transparent 100%)",
            transform: "skewX(-25deg)",
          }}
        />

        {/* High Resolution Official Logo Only */}
        <img
          ref={logoImageRef}
          src="/image/logo2.png"
          alt="Anantha Builders"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(166,141,92,0.35)]"
        />
      </div>
    </div>
  );
}
