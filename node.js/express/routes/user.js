const express=require("express");
const router=express.Router();
const path=require("path");


router.get("/",(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"../","views","index.html"));
    const products = [
        { name:"samsung",price:4000,image: "/images/1.jpg", description:"idare eder" },
        { name:"samsung",price:4000,image: "/images/1.jpg", description:"idare eder" },
        { name:"samsung",price:4000,image: "/images/1.jpg", description:"idare eder" },
        { name:"samsung",price:4000,image: "/images/1.jpg", description:"idare eder" }
    ]
    res.render("index",{title:"Home",products:products});
});

module.exports=router;