import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as renderTransition, s as spreadAttributes, u as unescapeHTML, g as createTransitionScope, h as renderHead } from './astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_GA0xh8xd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { DateTime } from 'luxon';

const avatar_image = new Proxy({"src":"/_astro/avatar_image.tFF38Kbh.jpg","width":2736,"height":2969,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/avatar_image.jpg";
							}
							
							return target[name];
						}
					});

const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": avatar_image, "alt": "Christian Anunciado", "height": 150, "width": 150, "class": "blob h-full w-full object-cover object-center shadow-[0_5px_5px_5px_rgba(13,110,253,0.5)] dark:shadow-[0_3px_3px_4px_rgba(13,110,253,0.6)]", "quality": 100, "data-astro-cid-vjqwbl62": true })} `;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/Avatar.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$i = createAstro();
const $$HeaderText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HeaderText;
  const { className, transitionName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(cn(
    "text-4xl font-bold tracking-wide md:text-5xl text-slate-800 dark:text-white",
    className
  ), "class")}${addAttribute(renderTransition($$result, "be5s74wg", "", transitionName || "headerText"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/HeaderText.astro", "self");

const $$Astro$h = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$g = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$f = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$e = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$d = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$c = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$b = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$a = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.5.3_typescript@5.7.3/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$9 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/node_modules/.pnpm/astro@4.16.18_@types+node@22.5.4_rollup@4.40.0_sass@1.77.4_typescript@5.7.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const OgImage = new Proxy({"src":"/_astro/og_image.rkHorQi0.jpg","width":1200,"height":630,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/public/og_image.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro();
const $$Coffee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Coffee;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"> <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></animate> </path> <path stroke-dasharray="14" stroke-dashoffset="14" d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"> <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;28"></animate> </path> </g> <mask id="lineMdCoffeeLoop0"> <path fill="none" stroke="#fff" stroke-width="2" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"> <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></animateMotion> </path> </mask> <rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeLoop0)"> <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></animate> <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></animate> </rect> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Coffee.astro", void 0);

const $$Astro$7 = createAstro();
const $$Laptop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Laptop;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path stroke-dasharray="50" stroke-dashoffset="50" d="M12 17H5V7H19V17Z"> <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="50;0"></animate> </path> <path stroke-dasharray="20" stroke-dashoffset="20" d="M3 19H21"> <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="20;0"></animate> </path> </g> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Laptop.astro", void 0);

const $$Astro$6 = createAstro();
const $$Person = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Person;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z"> <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></animate> </path> <path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z" opacity="0"> <set attributeName="opacity" begin="0.5s" to="1"></set> <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="36;0"></animate> </path> </g> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Person.astro", void 0);

const APP_STATIC_LINKS = {
  home: "/",
  about: "/about",
  projects: "/projects"
};
const NAV_LINKS = [
  {
    href: APP_STATIC_LINKS.home,
    label: "Home"
  },
  {
    href: APP_STATIC_LINKS.about,
    label: "About"
  },
  {
    href: APP_STATIC_LINKS.projects,
    label: "Projects"
  }
];
const CONTACT_LINKS = {
  github: "https://github.com/christian-anunciado",
  linkedin: "https://www.linkedin.com/in/christiananunciado/",
  email: "christianjay.anunciado@gmail.com"
};
const ICONS = {
  Python: {
    href: "https://www.python.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    alt: "Python"
  },
  TypeScript: {
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    alt: "TypeScript"
  },
  HTML5: {
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    alt: "HTML5"
  },
  CSS3: {
    href: "https://www.w3.org/TR/CSS/#css",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    alt: "CSS3"
  },
  React: {
    href: "https://reactjs.org/",
    src: "https://cdn.simpleicons.org/react",
    darkSrc: "https://cdn.simpleicons.org/react/087ea4",
    alt: "React"
  },
  NextJs: {
    href: "https://nextjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
    darkSrc: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
    alt: "NextJs"
  },
  TailwindCSS: {
    href: "https://tailwindcss.com/",
    src: "https://cdn.simpleicons.org/tailwindcss",
    alt: "TailwindCSS"
  },
  ChakraUI: {
    href: "https://chakra-ui.com/",
    src: "https://cdn.simpleicons.org/chakraui",
    alt: "ChakraUI"
  },
  ShadCN: {
    href: "https://ui.shadcn.com/",
    src: "https://cdn.simpleicons.org/shadcnui/black/white",
    darkSrc: "https://cdn.simpleicons.org/shadcnui/white/black",
    alt: "Shadcn UI"
  },
  OpenAi: {
    href: "https://platform.openai.com/docs/introduction",
    src: "https://cdn.simpleicons.org/openai",
    alt: "OpenAi"
  },
  MantineUI: {
    href: "https://mantine.dev/",
    src: "https://cdn.simpleicons.org/mantine",
    alt: "MantineUI"
  },
  Go: {
    href: "https://go.dev/",
    src: "https://cdn.simpleicons.org/go",
    alt: "Go"
  },
  PayloadCMS: {
    href: "https://payloadcms.com/",
    src: "https://cdn.simpleicons.org/payloadcms/white",
    alt: "PayloadCMS"
  },
  Strapi: {
    href: "https://strapi.io/",
    src: "https://cdn.simpleicons.org/strapi/",
    alt: "Strapi"
  },
  MaterialUI: {
    href: "https://mui.com/",
    src: "https://cdn.simpleicons.org/mui",
    alt: "MaterialUI"
  }
};

function LineMdSunnyOutlineToMoonLoopTransition(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: [
        /* @__PURE__ */ jsxs("g", { fill: "currentColor", fillOpacity: 0, children: [
          /* @__PURE__ */ jsx("path", { d: "M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z", children: /* @__PURE__ */ jsx(
            "animate",
            {
              fill: "freeze",
              attributeName: "fill-opacity",
              begin: "0.7s",
              dur: "0.4s",
              values: "0;1"
            }
          ) }),
          /* @__PURE__ */ jsx("path", { d: "M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z", children: /* @__PURE__ */ jsx(
            "animate",
            {
              fill: "freeze",
              attributeName: "fill-opacity",
              begin: "1.1s",
              dur: "0.4s",
              values: "0;1"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            strokeDasharray: 56,
            strokeDashoffset: 56,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.6s",
                values: "56;0"
              }
            )
          }
        )
      ]
    }
  );
}

function LineMdSunnyOutlineLoop(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeDasharray: 34,
                strokeDashoffset: 34,
                d: "M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7",
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.4s",
                    values: "34;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("g", { strokeDasharray: 2, strokeDashoffset: 2, children: [
              /* @__PURE__ */ jsxs("path", { d: "M0 0", children: [
                /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "d",
                    begin: "0.5s",
                    dur: "0.2s",
                    values: "M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "0.5s",
                    dur: "0.2s",
                    values: "2;0"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("path", { d: "M0 0", children: [
                /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "d",
                    begin: "0.7s",
                    dur: "0.2s",
                    values: "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "0.7s",
                    dur: "0.2s",
                    values: "2;0"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "animateTransform",
                {
                  attributeName: "transform",
                  dur: "30s",
                  repeatCount: "indefinite",
                  type: "rotate",
                  values: "0 12 12;360 12 12"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}

function ToggleThemeButton$1({}) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setTheme(isDarkMode ? "dark" : "light");
  }, []);
  const handleClicked = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    window.dispatchEvent(new Event("storage"));
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "hidden items-center gap-5 text-gray-600 transition-all hover:scale-105 hover:font-medium hover:text-gray-900 md:flex dark:text-gray-300 dark:hover:text-white",
      onClick: handleClicked,
      children: [
        theme === "dark" ? /* @__PURE__ */ jsx(LineMdSunnyOutlineLoop, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(LineMdSunnyOutlineToMoonLoopTransition, { className: "h-6 w-6" }),
        theme === "dark" ? "Light Mode" : "Dark Mode"
      ]
    }
  );
}

const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="mt-20 flex w-full flex-col items-start justify-center gap-10"${addAttribute(createTransitionScope($$result, "w24prw27"), "data-astro-transition-persist")}> ${NAV_LINKS.map((link, index) => renderTemplate`<li class="flex items-center gap-5 text-gray-600 transition-all hover:scale-105 hover:font-medium hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"> ${index === 0 && renderTemplate`${renderComponent($$result, "Coffee", $$Coffee, { "class": "h-6 w-6" })}`} ${index === 1 && renderTemplate`${renderComponent($$result, "Person", $$Person, { "class": "h-6 w-6" })}`} ${index === 2 && renderTemplate`${renderComponent($$result, "Laptop", $$Laptop, { "class": "h-6 w-6" })}`} <a${addAttribute(link.href, "href")}>${link.label}</a> </li>`)} <li> ${renderComponent($$result, "ToggleThemeButton", ToggleThemeButton$1, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/ToggleThemeButton", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "x32wrt5h") })} </li> </ul>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/NavLinks.astro", "self");

const $$Astro$5 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Github;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" class="icon"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Github.astro", void 0);

const $$Astro$4 = createAstro();
const $$Gmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Gmail;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Gmail.astro", void 0);

const $$Astro$3 = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/Linkedin.astro", void 0);

const $$Astro$2 = createAstro();
const $$PointDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PointDown;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"${spreadAttributes(props)}> <path fill="#ffe500" d="M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6"></path> <path fill="#fff48c" d="M39 26.28a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v3.89A7.6 7.6 0 0 1 18.85 9H23a12.54 12.54 0 0 1 6.75 2c5.5 3.47 3.5 6.26 9.25 15.28"></path> <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6m8.17 0v-2.09m5.56 2.09v-2.09m4.84-3.96v-1.86"></path> <path fill="#45413c" d="M13 45.5a11 1.5 0 1 0 22 0a11 1.5 0 1 0-22 0" opacity="0.15"></path> </svg>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/icons/PointDown.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="text-base font-semibold text-gray-600 underline underline-offset-4 transition-all hover:scale-150 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/ContactItem.astro", void 0);

const $$BottomNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-auto flex w-full flex-col items-start justify-center text-gray-600 dark:text-gray-300"> <span class="text-base font-semibold underline underline-offset-4">
Contact Me
${renderComponent($$result, "PointDown", $$PointDown, { "class": "ml-1 inline-flex h-6 w-6" })} </span> <ul class="mt-4 flex w-fit gap-6"> ${renderComponent($$result, "ContactItem", $$ContactItem, { "href": `mailto:${CONTACT_LINKS.email}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Gmail", $$Gmail, { "class": "h-7 w-7 hover:scale-105" })} ` })} ${renderComponent($$result, "ContactItem", $$ContactItem, { "href": CONTACT_LINKS.github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Github", $$Github, { "class": "h-7 w-7 hover:scale-105" })} ` })} ${renderComponent($$result, "ContactItem", $$ContactItem, { "href": CONTACT_LINKS.linkedin }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Linkedin", $$Linkedin, { "class": "h-7 w-7 hover:scale-105" })} ` })} </ul> </div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/BottomNav.astro", void 0);

const $$LeftNavbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky left-0 top-0 hidden max-w-md flex-col bg-white px-24 py-14 md:flex dark:bg-zinc-950"${addAttribute(createTransitionScope($$result, "d7d3geqq"), "data-astro-transition-persist")}> <div class="flex flex-col items-center"> ${renderComponent($$result, "Avatar", $$Avatar, { "data-astro-transition-persist": createTransitionScope($$result, "ya7k44s5") })} <a href="/" class="flex flex-col items-center"> <h1 class="text-2xl font-bold tracking-wide text-slate-800 dark:text-white">
Christian.dev
</h1> <p class="text-sm font-light text-slate-600 dark:text-slate-300">
Web Developer
</p> </a> </div> ${renderComponent($$result, "NavLinks", $$NavLinks, {})} ${renderComponent($$result, "BottomNav", $$BottomNav, {})} </nav>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/LeftNavbar.astro", "self");

function ToggleThemeButton({}) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setTheme(isDarkMode ? "dark" : "light");
  }, []);
  const handleClicked = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    window.dispatchEvent(new Event("storage"));
  };
  return /* @__PURE__ */ jsx("button", { onClick: handleClicked, children: theme === "dark" ? /* @__PURE__ */ jsx(LineMdSunnyOutlineLoop, { className: "h-7 w-7" }) : /* @__PURE__ */ jsx(LineMdSunnyOutlineToMoonLoopTransition, { className: "h-7 w-7" }) });
}

function LineMdCoffeeLoop(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeDasharray: 48,
                strokeDashoffset: 48,
                d: "M17 4v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4z",
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "0.4s",
                    dur: "0.6s",
                    values: "48;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeDasharray: 14,
                strokeDashoffset: 14,
                d: "M17 9H20C20.55 9 21 8.55 21 8V5C21 4.45 20.55 4 20 4H17",
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "1s",
                    dur: "0.2s",
                    values: "14;28"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("path", { strokeDasharray: 10, strokeDashoffset: 10, d: "M11 20h8M11 20h-8", children: /* @__PURE__ */ jsx(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.3s",
                values: "10;0"
              }
            ) })
          ]
        }
      )
    }
  );
}

function GitHub(props) {
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
          d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        }
      )
    }
  );
}

function Gmail(props) {
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
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
        }
      )
    }
  );
}

function LineMdLaptop(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ jsx("path", { strokeDasharray: 50, strokeDashoffset: 50, d: "M12 17H5V7H19V17Z", children: /* @__PURE__ */ jsx(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                begin: "0.8s",
                dur: "0.6s",
                values: "50;0"
              }
            ) }),
            /* @__PURE__ */ jsx("path", { strokeDasharray: 20, strokeDashoffset: 20, d: "M3 19H21", children: /* @__PURE__ */ jsx(
              "animate",
              {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                begin: "1.2s",
                dur: "0.3s",
                values: "20;0"
              }
            ) })
          ]
        }
      )
    }
  );
}

function LinkedIn(props) {
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
          d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        }
      )
    }
  );
}

function LineMdPerson(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeDasharray: 20,
                strokeDashoffset: 20,
                d: "M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z",
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    dur: "0.4s",
                    values: "20;0"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                strokeDasharray: 36,
                strokeDashoffset: 36,
                d: "M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z",
                opacity: 1,
                children: /* @__PURE__ */ jsx(
                  "animate",
                  {
                    fill: "freeze",
                    attributeName: "stroke-dashoffset",
                    begin: "0.7s",
                    dur: "0.4s",
                    values: "36;0"
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}

function PointingDown(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ffe500",
            d: "M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff48c",
            d: "M39 26.28a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v3.89A7.6 7.6 0 0 1 18.85 9H23a12.54 12.54 0 0 1 6.75 2c5.5 3.47 3.5 6.26 9.25 15.28"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "none",
            stroke: "#45413c",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6m8.17 0v-2.09m5.56 2.09v-2.09m4.84-3.96v-1.86"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#45413c",
            d: "M13 45.5a11 1.5 0 1 0 22 0a11 1.5 0 1 0-22 0",
            opacity: 0.15
          }
        )
      ]
    }
  );
}

const BackgroundBeams = ({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
    "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
    "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
    "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
    "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
    "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
    "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
    "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
    "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
    "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
    "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
    "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
    "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
    "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
    "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
    "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
    "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
    "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
    "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
    "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
    "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
    "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
    "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
    "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
    "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
    "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
    "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
    "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
    "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483"
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute  inset-0 flex h-full  w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
        className
      ),
      children: /* @__PURE__ */ jsxs(
        "svg",
        {
          className: " pointer-events-none absolute z-0 h-full w-full ",
          width: "100%",
          height: "100%",
          viewBox: "0 0 696 316",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M-9 -613C-9 -613 59 -208 523 -81C987 46 1055 451 1055 451M-2 -621C-2 -621 66 -216 530 -89C994 38 1062 443 1062 443M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427M19 -645C19 -645 87 -240 551 -113C1015 14 1083 419 1083 419",
                stroke: "url(#paint0_radial_242_278)",
                strokeOpacity: "0.05",
                strokeWidth: "0.5"
              }
            ),
            paths.map((path, index) => /* @__PURE__ */ jsx(
              motion.path,
              {
                d: path,
                stroke: `url(#linearGradient-${index})`,
                strokeOpacity: "0.4",
                strokeWidth: "0.5"
              },
              index
            )),
            /* @__PURE__ */ jsxs("defs", { children: [
              paths.map((_, index) => /* @__PURE__ */ jsxs(
                motion.linearGradient,
                {
                  id: `linearGradient-${index}`,
                  x1: "100%",
                  x2: "100%",
                  y1: "100%",
                  y2: "100%",
                  animate: {
                    x1: ["0%", "100%"],
                    x2: ["0%", "95%"],
                    y1: ["0%", "100%"],
                    y2: ["0%", `${93 + Math.random() * 1}%`]
                  },
                  transition: {
                    duration: Math.random() * 3 + 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: Math.random() * 10
                  },
                  children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
                    /* @__PURE__ */ jsx("stop", { stopColor: "#18CCFC" }),
                    /* @__PURE__ */ jsx("stop", { offset: "32.5%", stopColor: "#6344F5" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#AE48FF", stopOpacity: "0" })
                  ]
                },
                `gradient-${index}`
              )),
              /* @__PURE__ */ jsxs(
                "radialGradient",
                {
                  id: "paint0_radial_242_278",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform: "translate(352 34) rotate(90) scale(555 1560.62)",
                  children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0.0666667", stopColor: "var(--neutral-300)" }),
                    /* @__PURE__ */ jsx("stop", { offset: "0.243243", stopColor: "var(--neutral-300)" }),
                    /* @__PURE__ */ jsx("stop", { offset: "0.43594", stopColor: "white", stopOpacity: "0" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
};

function Hamburger({}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };
  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };
  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "block md:hidden", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "relative z-50 flex h-6 w-7 flex-col justify-between",
        onClick: () => setOpen((prev) => !prev),
        title: "Open Menu",
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: topVariants,
              animate: open ? "opened" : "closed",
              className: "h-1 w-7 origin-left rounded bg-slate-50"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: centerVariants,
              animate: open ? "opened" : "closed",
              className: "h-1 w-7 rounded bg-slate-50"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: bottomVariants,
              animate: open ? "opened" : "closed",
              className: "h-1 w-7 origin-left rounded bg-slate-50"
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: listVariants,
        initial: "closed",
        animate: "opened",
        className: "fixed left-0 top-0 z-40 flex h-[100svh] w-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-800 to-zinc-950 pb-10 text-4xl text-white",
        children: [
          /* @__PURE__ */ jsx("div", { className: "z-50 flex flex-1 flex-col items-center justify-center gap-10", children: NAV_LINKS.map((link, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: listItemVariants,
              className: "",
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: link.href,
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    index === 0 && /* @__PURE__ */ jsx(LineMdCoffeeLoop, { className: "h-7 w-7" }),
                    index === 1 && /* @__PURE__ */ jsx(LineMdPerson, { className: "h-7 w-7" }),
                    index === 2 && /* @__PURE__ */ jsx(LineMdLaptop, { className: "h-7 w-7" }),
                    link.label
                  ]
                }
              )
            },
            link.label
          )) }),
          /* @__PURE__ */ jsxs(motion.div, { variants: listItemVariants, className: "z-50 mt-auto", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xl underline underline-offset-4", children: [
              "Contact Me ",
              /* @__PURE__ */ jsx(PointingDown, { className: "inline-flex h-7 w-7" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-around", children: [
              /* @__PURE__ */ jsx("a", { href: `mailto: ${CONTACT_LINKS.email}`, title: "Email Me", children: /* @__PURE__ */ jsx(Gmail, { className: "h-7 w-7" }) }),
              /* @__PURE__ */ jsx("a", { href: CONTACT_LINKS.github, title: "Github", children: /* @__PURE__ */ jsx(GitHub, { className: "h-7 w-7" }) }),
              /* @__PURE__ */ jsx("a", { href: CONTACT_LINKS.linkedin, title: "Linkedin", children: /* @__PURE__ */ jsx(LinkedIn, { className: "h-7 w-7" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx(BackgroundBeams, {})
        ]
      }
    )
  ] });
}

const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky left-0 top-[1.75rem] z-50 flex w-full items-center justify-between bg-gradient-to-b from-zinc-800 to-zinc-900 px-6 py-4 shadow-md md:hidden"> <a href="/"> <h1 class="text-lg font-bold">Christian.dev</h1> </a> <div class="flex items-center gap-4"> ${renderComponent($$result, "MobileToggleThemeButton", ToggleThemeButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/MobileToggleThemeButton", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "5vmhdr7x") })} ${renderComponent($$result, "Hamburger", Hamburger, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/hamburger", "client:component-export": "default" })} </div> </nav>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/nav/MobileNav.astro", "self");

function getCurrentTime() {
  const [phTime, setPhTime] = useState(
    DateTime.local().setZone("UTC+8").toLocaleString(DateTime.TIME_WITH_SECONDS)
  );
  useEffect(() => {
    const updatePhTime = () => {
      const phTime2 = DateTime.local().setZone("UTC+8").toLocaleString(DateTime.TIME_WITH_SECONDS);
      setPhTime(phTime2);
    };
    updatePhTime();
    const interval = setInterval(updatePhTime, 1e3);
    return () => clearInterval(interval);
  }, []);
  return { phTime };
}

function CurrentTimeHeader() {
  const { phTime } = getCurrentTime();
  return /* @__PURE__ */ jsx("div", { className: "sticky left-0 top-0 z-40 max-h-[30px] w-full bg-sky-200 py-1.5 text-xs text-black/80 dark:bg-sky-50 dark:text-black", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-center", children: [
    "Hello, it's currently ",
    /* @__PURE__ */ jsx("span", { className: "mx-1 font-medium", children: phTime }),
    " ",
    "in my timezone."
  ] }) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const MEASUREMENT_ID = undefined                                 ;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="generator"', ">", '<!-- Google tag (gtag.js) --><script type="text/partytown" async', '></script><script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", MEASUREMENT_ID);\n    </script>', '<script>\n      function setDarkMode(document) {\n        const parent = document.documentElement;\n        if (localStorage.theme === undefined) {\n          let theme = window.matchMedia("(prefers-color-scheme: dark)")\n            ? "dark"\n            : "light";\n\n          localStorage.setItem("theme", theme);\n        }\n\n        if (localStorage.theme === "dark") {\n          parent.classList.add("dark");\n        }\n\n        if (localStorage.theme === "light") {\n          parent.classList.remove("dark");\n        }\n      }\n\n      setDarkMode(document);\n\n      document.addEventListener("astro:before-swap", (ev) => {\n        // Pass the incoming document to set the theme on it\n        setDarkMode(ev.newDocument);\n      });\n    </script>', '</head> <body class="flex h-screen flex-col bg-gradient-to-b from-zinc-50 to-zinc-300 text-slate-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 md:flex-row"> ', ' <main class="relative h-[100svh] w-full overflow-y-auto bg-dot-black/15 dark:bg-dot-black/[0.8]"> ', " ", " ", " </main> </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": "Christian Anunciado | Web Developer", "description": "I build well-crafted websites that look good and work well.", "openGraph": {
    basic: {
      title: "Christian Anunciado | Web Developer",
      image: OgImage.src,
      type: "website"
    },
    optional: {
      description: "I build well-crafted websites that look good and work well."
    }
  } }), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`, "src"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "LeftNavbar", $$LeftNavbar, { "data-astro-transition-persist": createTransitionScope($$result, "doctkgqq") }), renderComponent($$result, "CurrentTimeHeader", CurrentTimeHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/tsx/current-time-header", "client:component-export": "default" }), renderComponent($$result, "MobileNav", $$MobileNav, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/layouts/Layout.astro", "self");

export { $$Layout as $, ICONS as I, $$Avatar as a, $$HeaderText as b, cn as c, $$Github as d };
