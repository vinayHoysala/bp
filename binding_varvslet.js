console.log(10); //memory for 10 is allocated
//and desposed immediatly
var x = 10;
//x is bind to memory location where 10 is stored
let i = 100;
//i is bind to memory location where 100 is stored

//difference between var & let
var myVar1 = 100;
var myVar1 = 1000; //myVar1 in previous statemet is 
//disposed

let myColor = "Orange";
//let myColor = "Blue"; //not possible to recreate a variable
myColor = "Blue"; //but possible to change the value
    