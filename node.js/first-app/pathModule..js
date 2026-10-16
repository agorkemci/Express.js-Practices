const { log } = require("console");
const path=require("path");
//dosya uzantısı veya yoluna bakmak gibi işlemleri bu modül vasıtasıyla yapıyoruz
let result=path.resolve("pathModule.js");//bu dosyanın tam yolu nedir?
console.log(result);
result=path.extname("pathModule.js");//dosyanın uzantısı için
console.log(result);
/*
C:\Users\ACER\Desktop\node.js\first-app\pathModule.js
.js
*/

result=path.parse(__filename);
console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);
/*
C:\
C:\Users\ACER\Desktop\node.js\first-app
pathModule..js
.js
pathModule.
*/