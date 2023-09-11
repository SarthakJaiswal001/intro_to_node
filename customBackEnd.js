const fs=require('fs');
const http=require('http');
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('./home.html');
const about=fs.readFileSync('./about.html');
const services=fs.readFileSync('./services.html');
const contact=fs.readFileSync('./contact.html');
const server=http.createServer((req,res)=>{
    console.log(req.url);
url=req.url;

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='/'){
        res.end(home);
    }
    else if(url=='/about.html'){
        res.end(about);
    }
    else if(url=='/services.html'){
        res.end(services);
    }
    else if(url=='/contact.html'){
        res.end(contact);
    }
    else{
        res.statusCode=404
        res.end('404 not found');
    }



})
const listener=async ()=>{
    try{
        server.listen(port,hostname,()=>{
        console.log('hello world');
    })}
    catch(error){
        console.log(error);
    }
    }
let k=Math.random();
console.log(k);