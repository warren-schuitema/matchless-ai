import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ 
  value, 
  duration = 2, 
  className = "" 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    // Parse the value to determine format
    const hasPlus = value.includes("+");
    const hasRange = value.includes("-");
    
    if (hasRange) {
      // Handle ranges like "8-10"
      const [start, end] = value.split("-").map(Number);
      let current = start;
      
      const controls = animate(start, end, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            current = Math.floor(v);
            ref.current.textContent = `${start}-${current}`;
          }
        }
      });

      return () => controls.stop();
    } else {
      // Handle numbers with + or plain numbers
      const numericValue = parseInt(value.replace(/\D/g, ""), 10);
      
      const controls = animate(0, numericValue, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            const rounded = Math.floor(v);
            ref.current.textContent = hasPlus 
              ? `${rounded.toLocaleString()}+` 
              : rounded.toLocaleString();
          }
        }
      });

      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref} className={className}>0</span>;
}
