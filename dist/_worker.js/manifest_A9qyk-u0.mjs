globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_DOo1hSJ6.mjs';
import './chunks/astro-designed-error-pages_COjg8n66.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CCRqmbjg.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/","cacheDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/node_modules/.astro/","outDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/dist/","srcDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/src/","publicDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/public/","buildClientDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/dist/","buildServerDir":"file:///Users/nabeeleledroos/Documents/workspace/nabeel-personal/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nabeeleledroos/Documents/workspace/nabeel-personal/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_A9qyk-u0.mjs","/Users/nabeeleledroos/Documents/workspace/nabeel-personal/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/nabeeleledroos/Documents/workspace/nabeel-personal/src/components/GridBackground.astro?astro&type=script&index=0&lang.ts":"_astro/GridBackground.astro_astro_type_script_index_0_lang.DK5bsWG1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/nabeeleledroos/Documents/workspace/nabeel-personal/src/components/GridBackground.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"grid-canvas\"),t=e.getContext(\"2d\");let b=-1e3,f=-1e3;const w=40,m=120,S=35;function y(){e.width=window.innerWidth,e.height=window.innerHeight}function u(o,h){const d=Math.sqrt((o-b)**2+(h-f)**2);if(d>m||d===0)return{dx:0,dy:0};const a=1-d/m,g=a*a*S;return{dx:(o-b)/d*g,dy:(h-f)/d*g}}function v(o,h,d,a){const g=u(o,h),n=o+g.dx,l=h+g.dy;t.save(),t.globalAlpha=a,t.fillStyle=\"rgba(255, 240, 245, 0.9)\",t.beginPath();const i=d*.15;for(let s=0;s<4;s++){const r=s*Math.PI/2,c=(s+.5)*Math.PI/2;t.lineTo(n+Math.cos(r)*d,l+Math.sin(r)*d),t.lineTo(n+Math.cos(c)*i,l+Math.sin(c)*i)}t.closePath(),t.fill(),t.restore()}function x(){t.clearRect(0,0,e.width,e.height);const o=t.createLinearGradient(0,0,e.width,e.height);o.addColorStop(0,\"rgba(200, 150, 220, 0.6)\"),o.addColorStop(.3,\"rgba(150, 130, 220, 0.6)\"),o.addColorStop(.7,\"rgba(130, 150, 230, 0.6)\"),o.addColorStop(1,\"rgba(200, 150, 220, 0.6)\"),t.fillStyle=o,t.fillRect(0,0,e.width,e.height),t.strokeStyle=\"rgba(255, 220, 240, 0.4)\",t.lineWidth=1;const h=Math.ceil(e.width/w)+1,d=Math.ceil(e.height/w)+1,a=20;for(let n=0;n<=h;n++){const l=n*w;t.beginPath();for(let i=0;i<=a;i++){const s=i/a*e.height,r=u(l,s),c=l+r.dx;i===0?t.moveTo(c,s+r.dy):t.lineTo(c,s+r.dy)}t.stroke()}for(let n=0;n<=d;n++){const l=n*w;t.beginPath();for(let i=0;i<=a;i++){const s=i/a*e.width,r=u(s,l),c=l+r.dy;i===0?t.moveTo(s+r.dx,c):t.lineTo(s+r.dx,c)}t.stroke()}const g=[[.05,.08],[.92,.06],[.15,.35],[.85,.32],[.5,.15],[.08,.7],[.93,.68],[.25,.85],[.75,.88],[.5,.55]];for(const[n,l]of g)v(n*e.width,l*e.height,14,.7);requestAnimationFrame(x)}window.addEventListener(\"resize\",y);window.addEventListener(\"mousemove\",o=>{b=o.clientX,f=o.clientY});window.addEventListener(\"mouseleave\",()=>{b=-1e3,f=-1e3});y();x();"]],"assets":["/_astro/kabisat_demo-italictall-webfont.D43au7Am.woff2","/_astro/background.BPKAcmfN.svg","/_astro/kabisat_demo-italictall-webfont.BGbAA_lK.woff","/favicon.svg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_astro/background.BPKAcmfN.svg","/_worker.js/_astro/kabisat_demo-italictall-webfont.BGbAA_lK.woff","/_worker.js/_astro/kabisat_demo-italictall-webfont.D43au7Am.woff2","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_DiOeKL66.mjs","/_worker.js/chunks/astro-designed-error-pages_COjg8n66.mjs","/_worker.js/chunks/astro_X7Yj69DN.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_zRmD81ip.mjs","/_worker.js/chunks/noop-middleware_CCRqmbjg.mjs","/_worker.js/chunks/astro/server_DOo1hSJ6.mjs","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Dut0UuajL5YTZfc3tlRg5D7xrZVliL6xs6U5ZZvXHoo=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
