import { c as createComponent, b as createAstro, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BZJux2vF.mjs';
import 'kleur/colors';
import 'clsx';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';

const $$Astro = createAstro();
const $$RichText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RichText;
  const { data } = Astro2.props;
  const html = convertLexicalToHTML({ data });
  return renderTemplate`${maybeRenderHead()}<div class="prose max-w-3xl dark:prose-invert prose-default prose-base prose-h1:text-4xl prose-h1:font-bold prose-strong:tracking-widest prose-lead:text-red-400">${unescapeHTML(html)}</div>`;
}, "/Users/christianjayanunciado/Self/legendary-portfolio/app/astro/src/components/RichText.astro", void 0);

export { $$RichText as $ };
