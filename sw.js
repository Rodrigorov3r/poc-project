if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>r(e,t),c={module:{uri:t},exports:d,require:o};i[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(s(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DhkrAKP1.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"64c9dcd157f2eafe82f2d28388a85dd1"},{url:"registerSW.js",revision:"d43864c996a71137caa019ca49b31398"},{url:"service-worker.js",revision:"b1a2cf8fb38672a2120a1cfa767c5704"},{url:"mi_andreani_192.png",revision:"742da7ed901bbc8d667b96f1d4f2e6fa"},{url:"mi_andreani_512.png",revision:"4648ad7e76d43259165973207fa0bad8"},{url:"manifest.webmanifest",revision:"2409464ccf1908ce14631b787b34d2e2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
