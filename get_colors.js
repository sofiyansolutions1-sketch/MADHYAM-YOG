import { Jimp } from 'jimp';
import fs from 'fs';

const urls = [
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  "https://iili.io/CDYrhKX.png",
  "https://iili.io/CDYrZDQ.jpg",
  "https://iili.io/CDYcJfe.png",
  "https://iili.io/CDYgmas.png",
  "https://iili.io/CDY4o0X.jpg",
  "https://iili.io/CDYrzwQ.png",
  "https://iili.io/CDcWalp.png",
  "https://images.unsplash.com/photo-1593164842264-854604db2260",
  "https://iili.io/Ct1gBIt.png",
  "https://iili.io/CtXPv0N.png",
  "https://iili.io/Ct0tpGS.png"
];

async function main() {
  for (const url of urls) {
    try {
      // add w=800 to unsplash if missing
      const fullUrl = url.includes('unsplash.com') ? url + "?auto=format&fit=crop&q=80&w=800" : url;
      const img = await Jimp.read(fullUrl);
      img.resize({ w: 1, h: 1 });
      const int = img.getPixelColor(0, 0);
      const r = (int >> 24) & 255;
      const g = (int >> 16) & 255;
      const b = (int >> 8) & 255;
      console.log(`URL: ${url} -> R:${r} G:${g} B:${b}`);
    } catch(e) {
      console.log(`URL: ${url} -> Error`);
    }
  }
}
main();
