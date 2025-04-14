import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useMotionValue, useSpring, useTransform, AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { c as cn } from './Layout_CvSb7Y6k.mjs';

const AnimatedTooltip = ({
  items,
  imgClassName,
  imgWidth,
  imgHeight
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("theme") === "dark");
    const handleStorage = () => {
      if (localStorage.getItem("theme") === "dark") {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative",
      onMouseEnter: () => setHoveredIndex(items.id),
      onMouseLeave: () => setHoveredIndex(null),
      children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: hoveredIndex === items.id && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 0, scale: 0.6 },
            animate: {
              opacity: 1,
              y: 25,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10
              }
            },
            exit: { opacity: 0, y: 0, scale: 0.6 },
            style: {
              translateX,
              rotate,
              whiteSpace: "nowrap"
            },
            className: "absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-x-1/2 bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-px left-1/4 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-white", children: items.name })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("a", { href: items.href, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsx(
          "img",
          {
            onMouseMove: handleMouseMove,
            height: imgHeight ?? 36,
            width: imgWidth ?? 36,
            src: isDarkTheme ? items.src : items.darkSrc ?? items.src,
            alt: items.name,
            className: cn(
              "relative !m-0 h-[2.25rem] w-[2.25rem] object-cover object-center !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105",
              imgClassName
            )
          }
        ) })
      ]
    },
    items.name
  ) });
};

export { AnimatedTooltip as A };
