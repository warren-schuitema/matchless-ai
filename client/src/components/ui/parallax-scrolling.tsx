import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.5, className = '' }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!layerRef.current) return;

    const layer = layerRef.current;
    
    gsap.to(layer, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: layer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxContainer({ children, className = '' }: ParallaxContainerProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className={className}>{children}</div>;
}
