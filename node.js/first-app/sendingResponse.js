const http =require("http");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
    //res.setHeader("Content-Type","text/plain");
    //res.setHeader("Content-Type","application/json");
    res.setHeader("Content-Type","text/html");
    res.statusCod=200;
    res.statusMessage="Ok";
    //res.write("hello world");
    //res.write(JSON.stringfy({name:"Samsung S8",price:3000}));
    res.write("<html");
    res.write("<head><title>My First Page</title></head>")
    res.write("<body><h1>Hello from Nodejs Server </h1></body>");
    res.write("</html>");
    res.end();
})