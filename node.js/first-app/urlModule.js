const url =require("url");
const adress="http://sadikturan.com/kurslar?year=2019&month=nisan";
let result=url.parse(adress,true);
console.log(result);