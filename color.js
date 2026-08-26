import { Jimp } from 'jimp';
async function main() {
    const img1 = await Jimp.read('test.jpg'); // 1593164842264-854604db2260
    console.log("Width:", img1.bitmap.width, "Height:", img1.bitmap.height);
}
main();
