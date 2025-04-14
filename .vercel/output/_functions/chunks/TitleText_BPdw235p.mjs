import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, f as renderTransition } from './astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn } from './Layout_CvSb7Y6k.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$MainContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainContainer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "flex h-[calc(100%-30px)] w-full items-start justify-center p-14 md:items-center",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/MainContainer.astro", void 0);

const $$Astro = createAstro();
const $$TitleText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleText;
  const { className, transitionName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(cn(
    "text-lg font-medium tracking-widest text-sky-600 dark:text-sky-500",
    className
  ), "class")}${addAttribute(renderTransition($$result, "4gklvpda", "", transitionName || "titleText"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/TitleText.astro", "self");

export { $$MainContainer as $, $$TitleText as a };
