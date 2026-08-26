const fs = require('fs');
console.log("Checking file size of test.jpg (1593164842264):", fs.statSync('test.jpg').size);
console.log("Checking file size of test1.jpg (1599901860904):", fs.statSync('test1.jpg').size);
console.log("Checking file size of test2.jpg (1544367567):", fs.statSync('test2.jpg').size);
