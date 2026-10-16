const express=require("express");
const router=express.Router();
router.get("/add-product",(req,res,next)=>{
    res.send(`<html>
                <head>
                    <h1>Add Product</h1>
                </head>
                <body>
                    <form action="/add-products" method="POST">
                        <input type="text" name="nameofproduct" placeholder="Enter the name of product"></input>
                        <input type="submit" value="Save"></input>
                    </form>
                </body>
            </html>`)
        });
router.post("/add-products",(req,res,next)=>{
    console.log(req.body);//db kayıt dahi olabilir
    res.redirect("/");//kayıt işlemi bitti index.html e geri dönüş..
});

module.exports=router;
