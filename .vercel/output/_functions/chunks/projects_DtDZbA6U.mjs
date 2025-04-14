import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { c as cn, I as ICONS } from './Layout_CvSb7Y6k.mjs';

const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  transitionName
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const handleMouseEnter = (event) => {
    if (!ref.current) return;
    const direction2 = getDirection(event, ref.current);
    switch (direction2) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };
  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - w / 2 * (w > h ? h / w : 1);
    const y = ev.clientY - top - h / 2 * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      onMouseEnter: handleMouseEnter,
      ref,
      className: cn(
        "group/card relative h-44 w-auto overflow-hidden rounded-lg bg-transparent ",
        className
      ),
      children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative h-full w-full",
          initial: "initial",
          whileHover: direction,
          exit: "exit",
          style: {
            viewTransitionName: transitionName
          },
          children: [
            /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                variants,
                className: "relative h-full w-full bg-black/80 dark:bg-black",
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    alt: "image",
                    className: cn(
                      "h-full w-full object-scale-down object-center",
                      imageClassName
                    ),
                    src: imageUrl
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: textVariants,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                },
                className: cn(
                  "absolute bottom-4 left-4 z-40 text-white",
                  childrenClassName
                ),
                children
              }
            )
          ]
        }
      ) })
    }
  );
};
const variants = {
  initial: {
    x: 0
  },
  exit: {
    x: 0,
    y: 0
  },
  top: {
    y: 20
  },
  bottom: {
    y: -20
  },
  left: {
    x: 20
  },
  right: {
    x: -20
  }
};
const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0
  },
  top: {
    y: -20,
    opacity: 1
  },
  bottom: {
    y: 2,
    opacity: 1
  },
  left: {
    x: -2,
    opacity: 1
  },
  right: {
    x: 20,
    opacity: 1
  }
};

const Dexe = new Proxy({"src":"/_astro/dexe.BFa5dl7A.png","width":1999,"height":1201,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/dexe.png";
							}
							
							return target[name];
						}
					});

const GreatVet = new Proxy({"src":"/_astro/greatvet.bB7haKaD.png","width":1890,"height":1090,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/greatvet.png";
							}
							
							return target[name];
						}
					});

const HustleWing = new Proxy({"src":"/_astro/hustlewing.BudInPVh.png","width":1999,"height":1273,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/hustlewing.png";
							}
							
							return target[name];
						}
					});

const Mynth = new Proxy({"src":"/_astro/mynth.DyO0Jy1I.png","width":1991,"height":1144,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/mynth.png";
							}
							
							return target[name];
						}
					});

const NinjaStore = new Proxy({"src":"/_astro/ninja_store.CO2f05WZ.png","width":1757,"height":931,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/ninja_store.png";
							}
							
							return target[name];
						}
					});

const SubscriptionApp = new Proxy({"src":"/_astro/subscription_app.BikRvP9r.png","width":1757,"height":954,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/subscription_app.png";
							}
							
							return target[name];
						}
					});

const TeknoPlat = new Proxy({"src":"/_astro/teknoplat.CT6Ge0gp.png","width":1790,"height":1277,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/teknoplat.png";
							}
							
							return target[name];
						}
					});

const Tina = new Proxy({"src":"/_astro/tina.B4LvbiQI.png","width":1757,"height":948,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/tina.png";
							}
							
							return target[name];
						}
					});

const PROJECTS_THUMBNAILS = {
  dexe: Dexe.src,
  greatvet: GreatVet.src,
  hustlewing: HustleWing.src,
  mynth: Mynth.src,
  ninjaStore: NinjaStore.src,
  subscriptionApp: SubscriptionApp.src,
  teknoplat: TeknoPlat.src,
  tina: Tina.src
};
const projects = [
  {
    title: "Dexe",
    description: "Led the development of the entire front-end web application for Dexe, an online platform tailored for discovering talented designers. Our primary objective was to empower designers to showcase their portfolios through personalized feeds, facilitating visibility and recognition from their dream companies.",
    projectImg: PROJECTS_THUMBNAILS.dexe,
    href: "/projects/dexe",
    subTitle: "Discover Designers",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.ShadCN,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.NextJs
    ],
    liveLink: "https://join.dexe.club/",
    sourceLink: ""
  },
  {
    title: "GreatVet",
    description: "Led the development of the entire front-end web applications for GreatVet, an exclusive online platform that connects pet owners with the best veterinarians in their area.",
    projectImg: PROJECTS_THUMBNAILS.greatvet,
    href: "/projects/greatvet",
    subTitle: "Vet Finder",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.MantineUI,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.NextJs
    ],
    liveLink: "https://greatvet.vercel.app/",
    sourceLink: ""
  },
  {
    title: "HustleWing",
    description: "One of the front-end developers at HustleWing, an online platform for professionals to discover rewarding side hustles alongside their main job.",
    projectImg: PROJECTS_THUMBNAILS.hustlewing,
    href: "/projects/hustlewing",
    subTitle: "Discover Side Hustles",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.ShadCN,
      ICONS.TypeScript,
      ICONS.Go,
      ICONS.React,
      ICONS.NextJs
    ],
    liveLink: "https://hustlewing.com/",
    sourceLink: ""
  },
  {
    title: "Mynth",
    description: "One of the full-stack developers at Mynth, an online platform that facilitates cross-chain swaps between Cardano and other blockchains, enhancing asset conversion and enabling easy arbitrage",
    projectImg: PROJECTS_THUMBNAILS.mynth,
    href: "/projects/mynth",
    subTitle: "Cross-chain Swaps",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.PayloadCMS,
      ICONS.React,
      ICONS.NextJs
    ],
    liveLink: "https://www.mynth.ai/",
    sourceLink: ""
  },
  {
    title: "Tina 2.0.",
    description: "Led the entire development for TINA 2.0., an OpenAI-powered chatbot for Cebu Institute of Technology University, providing fast, reliable answers to latest inquiries related to the university.",
    projectImg: PROJECTS_THUMBNAILS.tina,
    href: "/projects/tina-2-0",
    subTitle: "OpenAI Chatbot",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.OpenAi
    ],
    liveLink: "https://tina-2-0.vercel.app/",
    sourceLink: "https://github.com/christian-anunciado/TINA2.0"
  },
  {
    title: "Ninja Store",
    description: "An online shopping platform that offers a wide range of fashionable and stylish products.",
    projectImg: PROJECTS_THUMBNAILS.ninjaStore,
    href: "/projects/ninja-store",
    subTitle: "Online Shopping",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Strapi,
      ICONS.React
    ],
    liveLink: "https://ninja-store.vercel.app/",
    sourceLink: "https://github.com/christian-anunciado/ninja-store"
  },
  {
    title: "Subscription App",
    description: "Effortlessly track and manage client subscriptions with the app. Never miss a renewal deadline again.",
    projectImg: PROJECTS_THUMBNAILS.subscriptionApp,
    href: "/projects/subscription-app",
    subTitle: "Manage Subscriptions",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.ChakraUI,
      ICONS.React,
      ICONS.NextJs
    ],
    liveLink: "",
    sourceLink: "https://github.com/jerichonaces/subscription-monitoring-app"
  },
  {
    title: "TeknoPlat",
    description: "Led the entire development of TeknoPlat, a video conference app where pitches are validated and scored according to their authenticity.",
    projectImg: PROJECTS_THUMBNAILS.teknoplat,
    href: "/projects/teknoplat",
    subTitle: "Video Conference",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.MaterialUI,
      ICONS.TypeScript,
      ICONS.React
    ],
    liveLink: "",
    sourceLink: "https://github.com/christian-anunciado/TeknoPlat"
  }
];

export { DirectionAwareHover as D, projects as p };
