console.log(__filename);//tam yol
console.log(__dirname);//o anki dosyanın klasör yolu
var firstName="Ali";//public
var age=32;//private
//public
var logger=function(a){
    console.log(a);
}

//dışarıya aktarmak için IIEF dışında başka bir yöntem
exports={
    firstName,
    logger
}


//yada
/*

module.
    
*/