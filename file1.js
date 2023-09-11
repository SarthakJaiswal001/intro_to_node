const fs=require("fs");
let text=fs.readFileSync("hello.txt","utf-8");
console.log(text);
text=text.replace("billionaire","trillionaire");
console.log(text);
fs.writeFileSync("yoyo.txt",text);
//Synchronous mode means line by line execution of code
//in asynchoronous line by line execution is not guaranteed