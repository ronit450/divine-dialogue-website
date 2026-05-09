import React, { useRef, useState, useEffect } from 'react';

export default function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { setShown(true); io.unobserve(el); }
        });
      },
      { rootMargin: '-10% 0px -5% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 900ms cubic-bezier(.2,.6,.2,1) ${delay}ms, transform 900ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
      willChange: 'opacity, transform',
      ...style,
    }}>
      {children}
    </div>
  );
}
