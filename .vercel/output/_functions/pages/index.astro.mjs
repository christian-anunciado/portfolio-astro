/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate, d as addAttribute, f as renderTransition, r as renderComponent } from '../chunks/astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, b as $$HeaderText, $ as $$Layout } from '../chunks/Layout_CvSb7Y6k.mjs';
import { $ as $$MainContainer, a as $$TitleText } from '../chunks/TitleText_BPdw235p.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
/* empty css                                 */
import { $ as $$RichText } from '../chunks/RichText_BonIqqvP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$WavingHand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WavingHand;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"${spreadAttributes(props)}> <path fill="#ffca28" d="M17.57 62.68c-2.79-4.01-3.91-7.79-1.18-10.08c2.31-1.94 5.71-2.31 9.91 2.54c0 0 12.55 14.58 16.87 18.63c.98.91 2.2 1.05 3.31-.1c.94-.98.6-1.83-.2-3c0 0-17.69-26.3-20.01-29.51c-3.87-5.37-2.38-8.84-.59-10.49c2.49-2.31 6.87-2.77 10.94 2.81l21.42 28.67c.65.69 1.7.79 2.47.25l.3-.21c.79-.56 1.02-1.63.54-2.47c-3.75-6.53-18.67-32.55-20.86-37.29c-2.52-5.47-1.44-8.25 1.23-9.86c3.17-1.91 6.15-1.77 9.71 3.52c3.86 5.76 18.85 30.01 22.66 36.53c.5.85 1.57 1.17 2.45.74c.01-.01.03-.01.04-.02c.84-.41 1.6-1.24 1.25-2.42c-2.08-6.86-12.29-28.22-14.43-33.13c-2.93-6.71-1.5-8.99 1.53-10.53c3.18-1.61 6.49-.34 8.74 4.14c1.52 3.04 28.21 51.61 28.21 51.61c-.39-7.24 1.44-12.37 3-17.52c2.84-9.37 9.71-14.24 14.69-12.05c2.59 1.14 3.06 3.41 2.78 5.15c-.56 3.38-2.94 13.85-3.4 22.05c-1.08 19.22 4.73 41.37-16.92 55.29c-14.49 9.32-30.02 7.68-40.28.51c-12.44-8.69-41.9-50.48-44.18-53.76"></path> <path fill="#eda600" d="M117.68 51.77c-1.81 7.61-2.05 16.95-1.99 20.93c.24 15.51.16 28.93-15.39 41.19c-1.91 1.51-7.9 5.19-14.87 7.11c-2.24.61-1.39 1.33-.01 1.17c7.61-.88 13.38-4.16 16.59-6.23c21.64-13.92 16.32-35.92 17.4-55.14c.46-8.2 2.96-21.1 2.92-22.21c-.05-1.11-2.84 5.57-4.65 13.18m-40.15.8s-1.55.01-3.02-2.04C70.1 44.4 56.27 21.25 52.29 15.57c-4.54-6.48-8.77-4-9.73-3.48c0 0 3.48.12 5.4 2.97c3.92 5.81 18.78 31.85 23.47 37.44c3.03 3.61 6.1.07 6.1.07m-54.82 1.97c1.36 1.46 13.3 15.63 17.7 19.58c3.78 3.39 6.6-.93 6.6-.93s-1.39.19-3.29-1.24C39 68.38 27.82 55.65 25.3 52.97c-3.74-3.98-7.22-1.49-7.96-1.04c.01 0 2.15-.83 5.37 2.61m38.88 6.72s-1.28.93-3.63-1.82c-1.71-2.01-21.34-25.96-21.34-25.96c-4.92-6.01-8.79-4.22-9.59-3.76c0 0 2.47-.13 5.36 3.2c1.32 1.52 22.27 28.23 23.11 29.14c3.07 3.35 5.91.47 6.09-.8"></path> <path fill="#eda600" d="M101.8 57.83S75.79 14.22 74.13 11.25c-3.69-6.59-7.98-4.57-8.71-4.24c0 0 2.39-.68 5.2 4.1c1.5 2.54 20.61 36.9 26.71 47.88c.48 2.05.44 4.72-1.1 6.44c-5.52 6.19-12.56 12.51-10.49 28.18c.52 3.97 1.99 7.73 3.08 9.54c1.38 2.27 2.97 1.41 2.27-.29c-.47-1.15-1.22-3.86-1.37-5.02c-.7-5.4-3.06-14.84 7.52-26.16c1.79-1.89 6.34-7.6 4.56-13.85"></path> <path fill="#b0bec5" d="M103.49 30.96c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2s1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.23.32-1.65-.63-1.79-1.11m-6.8 5.29c-1.39-4.93-3.55-9.45-6.35-13.37c-2.52-3.53-5.57-6.57-9.05-9.01c-.44-.31-1-1.27-.52-2.2c.48-.94 1.52-.81 1.91-.65c4.35 1.79 7.91 4.88 10.85 9.12c3.49 5.04 5.22 9.79 6.11 15.1c.1.58.08 1.8-1.16 2.12c-1.22.32-1.65-.62-1.79-1.11M8.56 77.46c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.4 1.71.51 1.88.98m6.43-5.73c1.72 4.83 4.17 9.19 7.22 12.92c2.75 3.35 5.99 6.19 9.62 8.4c.46.28 1.08 1.2.66 2.16c-.42.97-1.46.91-1.87.78c-4.46-1.5-8.22-4.35-11.43-8.39c-3.81-4.8-5.86-9.42-7.1-14.66c-.14-.58-.2-1.79 1.02-2.19c1.22-.41 1.71.51 1.88.98"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/WavingHand.astro", void 0);

const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className
      ),
      children: items.map((item, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative  block h-full w-full p-2",
          onMouseEnter: () => setHoveredIndex(idx),
          onMouseLeave: () => setHoveredIndex(null),
          children: [
            /* @__PURE__ */ jsx(AnimatePresence, { children: hoveredIndex === idx && /* @__PURE__ */ jsx(
              motion.span,
              {
                className: "absolute inset-0 block h-full w-full rounded-3xl bg-sky-400  dark:bg-sky-800",
                layoutId: "hoverBackground",
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.15 }
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }
              }
            ) }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(
                CardTitle,
                {
                  className: cn(
                    "font-bold",
                    item.itemType === "text" ? "text-2xl" : "text-4xl"
                  ),
                  children: item.title
                }
              ),
              /* @__PURE__ */ jsx(CardDescription, { children: item.description })
            ] })
          ]
        },
        item?.title
      ))
    }
  );
};
const Card = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-zinc-900 p-4 group-hover:border-slate-700 dark:border-white/[0.2] dark:bg-zinc-950",
        className
      ),
      children: /* @__PURE__ */ jsx("div", { className: "relative z-50 h-full", children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-col items-center justify-center gap-3 p-4", children }) })
    }
  );
};
const CardTitle = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("h4", { className: cn("font-bold tracking-wide text-zinc-100", className), children });
};
const CardDescription = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "text-sm leading-relaxed tracking-wide text-zinc-400",
        className
      ),
      children
    }
  );
};

function CardHoverEffectDemo() {
  return /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(HoverEffect, { items: projects }) });
}
const projects = [
  {
    title: "5+",
    description: "Completed Projects"
  },
  {
    title: "4+",
    description: "Satisfied Clients"
  },
  {
    title: "Typescript",
    description: "Main Stack",
    itemType: "text"
  },
  {
    title: "2+",
    description: "Developer Experience"
  },
  {
    title: "GoLang",
    description: "Currently Learning",
    itemType: "text"
  }
];

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-5"> <a href="/projects" class="hidden w-fit"> <button class="w-fit rounded-md border border-sky-800 bg-transparent px-5 py-2.5 text-sm text-sky-800 transition-all hover:-translate-y-1 hover:bg-sky-600 hover:text-white md:text-base dark:border-gray-300 dark:text-gray-200 dark:hover:bg-sky-700" role="link"${addAttribute(renderTransition($$result, "inpkergi", "", "project-header"), "data-astro-transition-scope")}>
Resume
</button> </a> <a href="/projects" class="w-fit"> <button class="w-fit rounded-md bg-sky-700 px-5 py-2.5 text-sm text-gray-50 transition-all hover:-translate-y-1 hover:bg-sky-600 hover:text-white md:text-base dark:bg-sky-800 dark:text-gray-200 dark:hover:bg-sky-700" role="link"${addAttribute(renderTransition($$result, "6ulr5j2e", "", "project-header"), "data-astro-transition-scope")}>
See my Work
</button> </a> </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/home/Links.astro", "self");

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(`http://localhost:3000/api/pages?where[slug][equals]=home`);
  const data = await res.json();
  console.log("\u{1F680} ~ data:", data);
  return renderTemplate`${renderComponent($$result, "MainContainer", $$MainContainer, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-5 pb-10 md:pb-0"> ${renderComponent($$result2, "TitleText", $$TitleText, {}, { "default": async ($$result3) => renderTemplate`${data.docs[0].subheader}` })} ${renderComponent($$result2, "HeaderText", $$HeaderText, {}, { "default": async ($$result3) => renderTemplate`${data.docs[0].header}${renderComponent($$result3, "WavingHand", $$WavingHand, { "class": "ml-1 inline-flex" })} ` })} ${renderComponent($$result2, "RichText", $$RichText, { "data": data.docs[0].description })} ${renderComponent($$result2, "Links", $$Links, {})} ${renderComponent($$result2, "CardHoverEffectDemo", CardHoverEffectDemo, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/home/Cards.tsx", "client:component-export": "CardHoverEffectDemo", "data-astro-transition-scope": renderTransition($$result2, "4zj3nymk", "", "objectTest") })} </div> ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/home/Hero.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/index.astro", void 0);

const $$file = "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
