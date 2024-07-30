import { useRef, useEffect } from "react";

export default function Marquee({ children, id }) {
  const marquee = useRef(null);

  useEffect(() => {
    if (!id) return;
    const checkIfMarqueeIsOffScreen = (marqueeRef) => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const firstSpan = marquee.querySelector("div");
        if (firstSpan) {
          const rect = firstSpan.getBoundingClientRect();
          if (rect.left <= 0) {
            marquee.style.transform = "translateX(0)";
            marquee.style.animation = `marquee 60s linear infinite`;
          }
        }
      }
    };

    const interval = setInterval(() => checkIfMarqueeIsOffScreen(marquee), 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee__inner-wrap">
        <div ref={marquee} className={id}>
          {children}
        </div>
      </div>
    </div>
  );
}
