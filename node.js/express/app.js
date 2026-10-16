const express=require("express");
const app=express();


app.use("/api/products",(req,res,next)=>{
    res.send(<html>
        <head>
            <h1>Add Product</h1>
        </head>
        <body>
            <form action="/product" method="POST">
                <input type="text" name="nameofproduct">Enter the value</input>
                <button type="submit" value="Save"></button>
            </form>
        </body>
    </html>)//hem res content içerir hemde res sonlandırır.
});
app.use("/product",(req,res,next)=>{
    console.log(req.body());//db kayıt dahi olabilir
    res.redirect("/");//kayıt işlemi bitti index.html e geri dönüş..
});
app.use("/",(req,res,next)=>{
    res.send("hello world");
    next();
})

app.use("/api/products",(req,res)=>{
    res.send("<h1>list of products</h1>");

})



app.listen(3000,()=>{
    console.log("listening on port 3000");
});