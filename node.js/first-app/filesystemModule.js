const { error } = require("console");
const fs=require("fs");
//uyg. içindeki dosya içeriğini yönetmek için kullanılır(açma yazma silme....)


const files=fs.readdir("./",function(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

const data=fs.readFile("./scriptC.js","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

fs.writeFile("./newfile.txt","Hello node.js world","utf-8",(error)=>{

    if(error){
        console.log(error);
    }
    
});

fs.appendFile("./newfile.txt","\ndenemeeeee","utf-8",(error)=>{

    if(error){
        console.log(error);
    }
    else
        console.log("Data added")
    
});
fs.rename("newfile.txt","deneme.txt",(error)=>{
    if(error)
        console.log(error);
    else
        console.log("The name of file has been changed.");
})