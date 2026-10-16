//IIFE

var controllerA=(function(){
    //scopeA
    var firstName="Ahmet";
    var log=function(a){
        console.log(a)
    }

    //return vasıtasıyla module içindeki değeri
    //dışarıya aktarmaya sağlıyor 
    //yani bir nevi public hale getiriyoruz 
    return{
        firstName,
        log
    }
})();