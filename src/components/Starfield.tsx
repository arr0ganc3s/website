"use client";

import { useEffect, useState } from "react";

type Star = {
  id: string;
  top: string;
  left: string;
  size: number;
  twinkleMin: number;
  twinkleMax: number;
  duration: string;
  delay: string;
};

const getStarCount = (width: number) => {
  if (width < 640) return 22;
  if (width < 1024) return 34;
  return 48;
};

const buildStars = (count: number) => {
  return Array.from({ length: count }, (_, index) => {
    const sizeRoll = Math.random();
    const size = sizeRoll > 0.85 ? 3 : sizeRoll > 0.5 ? 2 : 1;
    const twinkleMin = 0.15 + Math.random() * 0.25;
    const twinkleMax = Math.min(1, twinkleMin + 0.4 + Math.random() * 0.35);
    const duration = 4 + Math.random() * 6;
    const delay = Math.random() * 8;

    return {
      id: `star-${index}-${Math.random().toString(36).slice(2, 7)}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      twinkleMin,
      twinkleMax,
      duration: `${duration.toFixed(2)}s`,
      delay: `${delay.toFixed(2)}s`,
    } satisfies Star;
  });
};

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const updateStars = () => {
      const count = getStarCount(window.innerWidth);
      setStars((prev) => (prev.length === count ? prev : buildStars(count)));
    };

    updateStars();
    window.addEventListener("resize", updateStars);
    return () => window.removeEventListener("resize", updateStars);
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            ["--twinkle-min" as string]: star.twinkleMin.toFixed(2),
            ["--twinkle-max" as string]: star.twinkleMax.toFixed(2),
            ["--twinkle-duration" as string]: star.duration,
            ["--twinkle-delay" as string]: star.delay,
          }}
        />
      ))}
    </div>
  );
}
