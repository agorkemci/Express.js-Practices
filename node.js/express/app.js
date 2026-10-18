const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const path=require("path")
const adminRoutes=require("./routes/admin")    
const userRoutes=require("./routes/user");
const { title } = require("process");
//pug'ın çalışması için gerekli
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRoutes);
app.use(userRoutes);
app.use((req,res)=>{
    res.status(404).render("notfound",{title:"Not Found"})
})



app.listen(3000,()=>{
    console.log("listening on port 3000");
});