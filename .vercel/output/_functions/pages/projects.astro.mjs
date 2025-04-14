/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent, f as renderTransition } from '../chunks/astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, b as $$HeaderText, $ as $$Layout } from '../chunks/Layout_CvSb7Y6k.mjs';
import { D as DirectionAwareHover, p as projects } from '../chunks/projects_DtDZbA6U.mjs';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import React from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BentoGrid;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "mx-auto grid max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/BentoGrid.astro", void 0);

const $$Astro$1 = createAstro();
const $$BentoText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BentoText;
  const { description, title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "HeaderText", $$HeaderText, { "className": "mb-3 text-base text-neutral-200 md:text-base", "transitionName": `${title.split(" ")[0]}-titleText` }, { "default": ($$result2) => renderTemplate`${title}` })} ${maybeRenderHead()}<div class="font-sans text-xs font-normal text-neutral-300"${addAttribute(renderTransition($$result, "bntpxu3j", "", `${title.split(" ")[0]}-descText`), "data-astro-transition-scope")}> ${description} </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/BentoText.astro", "self");

const $$Astro = createAstro();
const $$BentoGridItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoGridItem;
  const { className, title, description, projectImg, icon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cn(
    "group/bento shadow-input row-span-1 flex cursor-pointer flex-col justify-start space-y-4 rounded-xl border  p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-zinc-900 dark:bg-zinc-950 shadow-none",
    className
  ), "class")}${addAttribute(href, "href")}${addAttribute(title.split(" ")[0], "id")}> ${renderComponent($$result, "DirectionAwareHover", DirectionAwareHover, { "imageUrl": projectImg, "transitionName": `${title.split(" ")[0]}-img`, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/direction-aware-hover", "client:component-export": "DirectionAwareHover" }, { "default": ($$result2) => renderTemplate` <p class="text-lg font-bold">${title}</p> <p class="!text-xs font-medium">Click to Learn More</p> ` })} <div class="transition duration-200 group-hover/bento:translate-x-2"> ${icon} ${renderComponent($$result, "BentoText", $$BentoText, { "title": title, "description": description })} </div> </a>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/BentoGridItem.astro", void 0);

const $$ProjectBento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BentoGrid", $$BentoGrid, { "className": "mx-auto max-w-5xl pb-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="mb-5 scroll-my-32 self-start text-3xl font-bold tracking-wide text-sky-600 md:col-span-3 md:scroll-my-16 md:text-4xl dark:text-sky-500" id="projects"${addAttribute(renderTransition($$result2, "vxpjkys3", "", "project-header"), "data-astro-transition-scope")}>
Projects
</span> ${projects.map((item, i) => renderTemplate`${renderComponent($$result2, "BentoGridItem", $$BentoGridItem, { "title": item.title, "description": item.subTitle, "projectImg": item.projectImg, "className": i === 3 || i === 6 ? "md:col-span-2" : "", "href": item.href })}`)}` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/projects/ProjectBento.astro", "self");

const $$HeroHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative left-0 top-0 mx-auto w-full max-w-7xl p-20 md:p-40"> ${renderComponent($$result, "HeaderText", $$HeaderText, { "className": "text-slate-800 dark:text-white" }, { "default": ($$result2) => renderTemplate`
Featured <br> works <span class="text-sky-600 dark:text-sky-500"${addAttribute(renderTransition($$result2, "fil2zm2z", "", "titleText"), "data-astro-transition-scope")}>/ projects</span> ` })} <p class="mt-8 max-w-2xl text-sm leading-9 tracking-wide text-gray-600 md:text-base dark:text-white"${addAttribute(renderTransition($$result, "hsoudwx3", "", "descriptionText"), "data-astro-transition-scope")}>
These are the amazing products that I have worked on the past few years.
<br> Check them out below to see what I'm up to, and get in touch if you want
    to collaborate!
</p> </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/HeroHeader.astro", "self");

const HeroParallax = ({
  products,
  children
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1e3]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1e3]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "relative flex h-auto  flex-col self-auto overflow-hidden pt-40 antialiased [perspective:750px] [transform-style:preserve-3d]",
      children: [
        children,
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            style: {
              rotateX,
              rotateZ,
              translateY,
              opacity
            },
            className: "",
            children: [
              /* @__PURE__ */ jsx(motion.div, { className: "mb-20 flex flex-row-reverse space-x-20 space-x-reverse", children: firstRow.map((product) => /* @__PURE__ */ jsx(
                ProductCard,
                {
                  product,
                  translate: translateX
                },
                product.title
              )) }),
              /* @__PURE__ */ jsx(motion.div, { className: "mb-20 flex  flex-row space-x-20 ", children: secondRow.map((product) => /* @__PURE__ */ jsx(
                ProductCard,
                {
                  product,
                  translate: translateXReverse
                },
                product.title
              )) }),
              /* @__PURE__ */ jsx(motion.div, { className: "flex flex-row-reverse space-x-20 space-x-reverse", children: thirdRow.map((product) => /* @__PURE__ */ jsx(
                ProductCard,
                {
                  product,
                  translate: translateX
                },
                product.title
              )) })
            ]
          }
        )
      ]
    }
  );
};
const ProductCard = ({
  product,
  translate
}) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      style: {
        x: translate
      },
      whileHover: {
        y: -20
      },
      className: "group/product relative h-96 w-[30rem] flex-shrink-0",
      children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: product.href + "/?parallax=true",
            className: "block group-hover/product:shadow-2xl ",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: product.projectImg,
                height: "600",
                width: "600",
                className: "absolute inset-0 h-full w-full object-cover object-left-top",
                alt: product.title
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80" }),
        /* @__PURE__ */ jsx("h2", { className: "absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100", children: product.title })
      ]
    },
    product.title
  );
};

const $$ProjectHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HeroParallax", HeroParallax, { "products": projects, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/hero-parallax", "client:component-export": "HeroParallax" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroHeader", $$HeroHeader, {})} ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/projects/ProjectHero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectHero", $$ProjectHero, {})} ${renderComponent($$result2, "ProjectBento", $$ProjectBento, {})} ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/projects/index.astro", void 0);

const $$file = "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
