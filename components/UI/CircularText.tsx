"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type HoverEffect = "slowDown" | "speedUp" | "pause" | "goBonkers" | null;

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: HoverEffect;
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: CircularTextProps) => {
  const letters = Array.from(text);
  const controls: any = useAnimation();
  const [currentRotation, setCurrentRotation] = useState<number>(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    const multiplier = {
      slowDown: 2,
      speedUp: 0.15,
      pause: 0,
      goBonkers: 0.05,
    }[onHover];

    if (onHover === "pause") {
      controls.start({
        rotate: currentRotation,
        scale: 1,
        transition: {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        },
      });
    } else {
      controls.start({
        rotate: currentRotation + 360,
        scale: onHover === "goBonkers" ? 0.8 : 1,
        transition: getTransition(spinDuration * multiplier, currentRotation),
      });
    }
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  };

  return (
    <div
      className={`circular-text z-50 h-32 w-32 hidden lg:flex rounded-full bg-center bg-[url('/areida.png')] bg-contain bg-no-repeat  items-center justify-center cursor-pointer ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={controls}
        onUpdate={(latest: any) => {
          if (typeof latest.rotate === "number") {
            setCurrentRotation(latest.rotate);
          }
        }}
        className="relative w-full h-full"
      >
        {letters.map((letter, i) => {
          const angle = (360 / letters.length) * i;
          const radius = 90;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

          return (
            <span
              key={i}
              style={{
                transform,
                transformOrigin: "center",
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;
