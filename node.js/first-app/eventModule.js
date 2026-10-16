const EventEmitter=require("events");
const emitter=new EventEmitter();
//listener kayıt edeceğiz
emitter.on("connection",(params1,params2)=>{
    console.log("connection established!",params1,params2);
});
emitter.on("logout",(args)=>{
    console.log("connection broken!",args);
});

//event'i tetikle
emitter.emit("connection",1213,"message:hi");
emitter.emit("logout",{id:1213,message:"message:hi"});
