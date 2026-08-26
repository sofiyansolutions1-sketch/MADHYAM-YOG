import { Jimp } from 'jimp';

const urls = [
  "https://iili.io/CDYrhKX.png",
  "https://iili.io/CDYrZDQ.jpg",
  "https://iili.io/CDYcJfe.png",
  "https://iili.io/CDYgmas.png",
  "https://iili.io/CDY4o0X.jpg",
  "https://iili.io/CDYrzwQ.png",
  "https://iili.io/CDcWalp.png",
  "https://iili.io/Ct1gBIt.png",
  "https://iili.io/CtXPv0N.png",
  "https://iili.io/Ct0tpGS.png"
];

async function main() {
  for (const url of urls) {
    try {
      const img = await Jimp.read(url);
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
