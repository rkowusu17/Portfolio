// src/components/TechStack.jsx
import { delay, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { skills, skillsIcon } from "../assets/assets";

export const icons = Object.entries(skills).map(([key, label]) => [
  skillsIcon[key],
  label,
]);

// console.log(icons);

export default function TechStack() {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();
  const controlsRow3 = useAnimation();
  const controlsRow4 = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const animations = [
    {
      control: controlsRow1,
      x: ["0%", "-50%"], // move left slower
      duration: 10,
    },
    {
      control: controlsRow2,
      x: ["0%", "-50%"], // move left slower
      duration: 10,
    },
    {
      control: controlsRow3,
      x: ["-50%", "0%"], // move right
      duration: 10,
    },
    {
      control: controlsRow4,
      x: ["-50%", "0%"], // move right
      duration: 12,
    },
  ];

  useEffect(() => {
    animations.forEach(({ control, x, duration }) => {
      if (!isPaused) {
        control.start({
          x,
          transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
          },
        });
      } else {
        control.stop();
      }
    });
  }, [isPaused]);

  // Helper to render each row with duplicated icons
  const renderRow = (control, indexMultiplier) => (
    <motion.div
      animate={control}
      className="flex shrink-0 min-w-full"
      style={{ display: "flex" }}
    >
      {[...icons, ...icons].map(([imgSrc, label], i) => (
        <div
          key={`${indexMultiplier}-${i}`}
          className="flex flex-col text-center items-center justify-center min-w-[160px] h-[4rem] bg-slate-100/50 dark:bg-slate-700/70 p-4 mx-2 rounded-md shadow-md"
        >
          <img src={imgSrc} alt="stack-pic" className="h-full" />
          <p className="text-base font-semibold">{label}</p>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className="relative w-full h-[20rem] overflow-hidden rounded-lg dark:bg-gray-900/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute flex flex-col gap-4 items-center justify-center">
        {/* Row 1 */}
        <div className="overflow-hidden w-full">
          <div className="flex w-fit">{renderRow(controlsRow1, 1)}</div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden w-">
          <div className="flex w-fit">{renderRow(controlsRow3, 2)}</div>
        </div>

        {/* Row 3*/}
        <div className="overflow-hidden w-full">
          <div className="flex w-fit">{renderRow(controlsRow2, 1)}</div>
        </div>

        {/* Row 4 */}
        <div className="overflow-hidden w-full">
          <div className="flex w-fit">{renderRow(controlsRow4, 3)}</div>
        </div>
      </div>
    </div>
  );
}
