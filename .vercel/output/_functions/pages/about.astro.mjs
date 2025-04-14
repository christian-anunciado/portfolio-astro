/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_GA0xh8xd.mjs';
import { $ as $$Layout, a as $$Avatar, b as $$HeaderText } from '../chunks/Layout_CvSb7Y6k.mjs';
import { $ as $$MainContainer, a as $$TitleText } from '../chunks/TitleText_BPdw235p.mjs';
import { $ as $$RichText } from '../chunks/RichText_BonIqqvP.mjs';
import { jsx } from 'react/jsx-runtime';
import { A as AnimatedTooltip } from '../chunks/animated-tooltip_BUmxtK65.mjs';
export { renderers } from '../renderers.mjs';

const programmer = new Proxy({"src":"/_astro/programmer.B3TzBilI.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/assets/images/programmer.png";
							}
							
							return target[name];
						}
					});

function Technology({ technologies }) {
  const isMedia = (value) => {
    return typeof value === "object" && value !== null && "url" in value;
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 place-items-center gap-8 md:grid-cols-8", children: technologies.map((tech, idx) => /* @__PURE__ */ jsx(
    AnimatedTooltip,
    {
      items: {
        href: isMedia(tech.default) ? tech.default.href : "",
        src: isMedia(tech.default) ? `http://localhost:3000${tech.default.url}` : "",
        name: isMedia(tech.default) ? tech.default.alt : "",
        darkSrc: isMedia(tech.darkMode ?? tech.default) ? (
          // @ts-ignore
          `http://localhost:3000${(tech.darkMode ?? tech.default).url}`
        ) : "",
        id: idx
      }
    },
    idx
  )) }) });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(`http://localhost:3000/api/pages?where[slug][equals]=about`);
  const data = await res.json();
  const technologies = data.docs[0].layout?.find((item) => item.blockType === "technology");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContainer", $$MainContainer, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex w-fit flex-col gap-5 pb-10 md:pb-0"> <div class="flex w-full items-center justify-center md:hidden"> ${renderComponent($$result3, "Avatar", $$Avatar, { "class": "block md:hidden" })} </div> ${renderComponent($$result3, "TitleText", $$TitleText, {}, { "default": async ($$result4) => renderTemplate`${data.docs[0].subheader}` })} ${renderComponent($$result3, "HeaderText", $$HeaderText, { "className": "flex items-center gap-5" }, { "default": async ($$result4) => renderTemplate`${data.docs[0].header}${renderComponent($$result4, "Image", $$Image, { "src": programmer, "alt": "Programmer", "class": "inline-flex" })} ` })} ${renderComponent($$result3, "RichText", $$RichText, { "data": data.docs[0].description })} ${renderComponent($$result3, "Technology", Technology, { "client:visible": true, "technologies": technologies?.technologies ?? [], "client:component-hydration": "visible", "client:component-path": "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/features/about/Technology", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/about/index.astro", void 0);

const $$file = "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
