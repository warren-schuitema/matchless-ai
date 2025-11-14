import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MatrixBackgroundProps {
  glowOpacity?: number;
  speedRanges?: {
    base: number;
    overlay: number;
  };
}

export default function MatrixBackground({ 
  glowOpacity = 0.1, 
  speedRanges = { base: 0.2, overlay: 0.35 } 
}: MatrixBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseLayerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !baseLayerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          gsap.to(baseLayerRef.current, {
            yPercent: -30 * speedRanges.base,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        },
        "(max-width: 767px)": function() {
          gsap.to(baseLayerRef.current, {
            yPercent: -15 * speedRanges.base,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [speedRanges.base, speedRanges.overlay]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      data-testid="matrix-background"
    >
      <div
        ref={baseLayerRef}
        className="matrix-bg matrix-glow absolute inset-0"
        style={{
          opacity: glowOpacity,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              hsl(var(--primary) / 0.05) 2px,
              hsl(var(--primary) / 0.05) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              hsl(var(--primary) / 0.05) 2px,
              hsl(var(--primary) / 0.05) 4px
            )
          `,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
