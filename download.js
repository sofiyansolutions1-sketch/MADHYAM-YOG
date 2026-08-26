import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  await download("https://iili.io/CDlBQcB.png", "img1.png");
  await download("https://iili.io/CDlnSLb.png", "img2.png");
  console.log("Downloaded");
}
main();
