if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const s=e=>c(e,n),o={module:{uri:n},exports:t,require:s};i[n]=Promise.all(d.map((e=>o[e]||s(e)))).then((e=>(r(...e),t)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dist/index.html",revision:"cc7cbacc3c88e926442341b443f60a92"},{url:"dist/main.js",revision:"83d5693fb61238922e2195f958b9b776"},{url:"dist/public/chip4.mp4",revision:"065d87b88939a9aae02d86cf3ecde03c"},{url:"dist/public/tv.png",revision:"06b18891fe79f099c99dddc55484c2af"},{url:"dist/public/tv1.png",revision:"b2d9c997d9307fdb8339bb7eb93a57db"},{url:"dist/service-worker.js",revision:"adba11cce3a06a43a9c54c8681922ef3"},{url:"dist/workbox-9a84fccb.js",revision:"048fb17a907632fcdb66da7b4c786fa2"},{url:"index.html",revision:"77070614468dc4d298cb178cbb1d5256"},{url:"main.js",revision:"dd4532742d2c0e25e40e8ee8a0c3ee01"},{url:"public/chip4.mp4",revision:"065d87b88939a9aae02d86cf3ecde03c"},{url:"public/tv.png",revision:"06b18891fe79f099c99dddc55484c2af"},{url:"public/tv1.png",revision:"b2d9c997d9307fdb8339bb7eb93a57db"}],{})}));