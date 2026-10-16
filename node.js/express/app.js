const express=require("express");
const app=express();
const bodyparser=require("body-parser");

const adminRoutes=require("./routes/admin")    
const userRoutes=require("./routes/user");
app.use(bodyparser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(userRoutes);






app.listen(3000,()=>{
    console.log("listening on port 3000");
});