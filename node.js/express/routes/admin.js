const express=require("express");
const router=express.Router();
const path=require("path");
router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
    
});
router.post("/add-product",(req,res,next)=>{
    console.log(req.body);//db kayıt dahi olabilir
     res.sendFile(path.join(__dirname,"../","views","index.html"));;//kayıt işlemi bitti index.html e geri dönüş..
});

module.exports=router;
