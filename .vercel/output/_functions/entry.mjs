import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_VFUEmVsm.mjs';
import { manifest } from './manifest_DTZItSXe.mjs';
import { createExports } from '@astrojs/vercel/entrypoint';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/projects/_slug_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["../../node_modules/.pnpm/astro@4.16.18_@types+node@22.5.4_rollup@4.40.0_sass@1.77.4_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/projects/[slug].astro", _page2],
    ["src/pages/projects/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
