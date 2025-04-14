/* empty css                                    */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, s as spreadAttributes } from '../../chunks/astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import { c as cn, b as $$HeaderText, d as $$Github, $ as $$Layout } from '../../chunks/Layout_CvSb7Y6k.mjs';
import { a as $$TitleText, $ as $$MainContainer } from '../../chunks/TitleText_BPdw235p.mjs';
import { p as projects, D as DirectionAwareHover } from '../../chunks/projects_DtDZbA6U.mjs';
import { A as AnimatedTooltip } from '../../chunks/animated-tooltip_BUmxtK65.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

function BxArrowBack(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z",
          className: "icon"
        }
      )
    }
  );
}

const $$Astro$5 = createAstro();
const $$BackArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BackArrow;
  const { className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cn(
    "flex max-w-fit cursor-pointer items-center gap-2 text-base text-neutral-500/80 transition-all hover:-translate-y-0.5 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white",
    className
  ), "class")}${addAttribute(`/projects#${id}`, "href")} data-astro-prefetch> ${renderComponent($$result, "BxArrowBack", BxArrowBack, { "className": "icon h-6 w-6 md:h-7 md:w-7" })}
Back
</a>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/BackArrow.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProjectHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectHeader;
  const { subTitle, title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "TitleText", $$TitleText, { "className": "text-sm font-medium uppercase tracking-wide md:text-base", "transitionName": `${title.split(" ")[0]}-descText` }, { "default": ($$result2) => renderTemplate`${subTitle}` })} ${renderComponent($$result, "HeaderText", $$HeaderText, { "className": "mb-2 text-2xl font-bold md:text-3xl", "transitionName": `${title.split(" ")[0]}-titleText` }, { "default": ($$result2) => renderTemplate`${title}` })} ${maybeRenderHead()}<div class="mb-2 h-1.5 w-1/5 bg-sky-700/80 dark:bg-sky-700"></div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/projects/project/ProjectHeader.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProjectIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectIcons;
  const { icons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-4 flex items-center gap-4"> ${icons.map((icon, idx) => renderTemplate`${renderComponent($$result, "AnimatedTooltip", AnimatedTooltip, { "items": {
    href: icon.href,
    src: icon.src,
    name: icon.alt,
    id: idx,
    darkSrc: icon.darkSrc
  }, "imgClassName": "h-6 w-6", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/animated-tooltip", "client:component-export": "AnimatedTooltip" })}`)} </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/projects/project/ProjectIcons.astro", void 0);

const $$Astro$2 = createAstro();
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/ExternalLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLinks;
  const { liveLink, sourceLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-20 flex items-center gap-6 text-sm md:text-base"> ${!!liveLink && renderTemplate`<a${addAttribute(liveLink, "href")}> <button role="link" class="flex items-center gap-2 rounded-md bg-zinc-700 px-4 py-2 tracking-wide text-gray-300/80  transition-all hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700 dark:hover:text-white"> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "class": "icon h-5 w-5" })}
Live
</button> </a>`} ${!!sourceLink && renderTemplate`<a${addAttribute(sourceLink, "href")}> <button role="link" class="flex items-center gap-2 rounded-md bg-zinc-700 px-4 py-2 tracking-wide text-gray-300/80  transition-all hover:-translate-y-1 hover:bg-zinc-600 hover:text-white dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700 dark:hover:text-white"> ${renderComponent($$result, "Github", $$Github, { "class": "icon h-5 w-5" })}
Source
</button> </a>`} </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/projects/project/ProjectLinks.astro", void 0);

const $$Astro = createAstro();
const getStaticPaths = () => {
  const paths = projects.map((project) => ({
    params: { slug: project.href.replace("/projects/", "") }
  }));
  return paths;
};
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const project = projects.find(
    (project2) => project2.href === `/projects/${slug}`
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContainer", $$MainContainer, { "className": "md:items-start" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-10"> ${renderComponent($$result3, "BackArrow", $$BackArrow, { "id": "projects" })} ${renderComponent($$result3, "DirectionAwareHover", DirectionAwareHover, { "imageUrl": project.projectImg, "className": "h-auto md:h-96", "imageClassName": "object-center object-fit w-full h-full scale-100", "transitionName": `${project.title.split(" ")[0]}-img`, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/direction-aware-hover", "client:component-export": "DirectionAwareHover" }, { "default": ($$result4) => renderTemplate` <p class="text-lg font-bold">${project.title}</p> <p class="!text-xs font-medium">${project.subTitle}</p> ` })} <div class="flex max-w-3xl flex-1 flex-col gap-2"> ${renderComponent($$result3, "ProjectHeader", $$ProjectHeader, { "title": project.title, "subTitle": project.subTitle })} ${renderComponent($$result3, "ProjectIcons", $$ProjectIcons, { "icons": project.icons })} <p class="mb-4 w-full text-xs leading-relaxed tracking-wide text-gray-600 md:w-[90%] md:text-sm dark:text-gray-300"> ${project.description} </p> ${renderComponent($$result3, "ProjectLinks", $$ProjectLinks, { "liveLink": project?.liveLink, "sourceLink": project?.sourceLink })} </div> </div> ` })} ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/projects/[slug].astro", void 0);

const $$file = "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
