var myColors = new Array("Blue","Orange","Yellow");
myColors.forEach(function(item){
  console.log(item);
});
console.log('-----------');

var superHeros = ["Spidy","Baty","Naughty"];
function myFunction(myVar){
    console.log(myVar);
}
superHeros.forEach(myFunction);
console.log('-----------');

var anotherFunction = function(item){
  console.log(item);
};
myColors.forEach(anotherFunction);
console.log('-----------');

//same example as above but lets do the same with arrow function:
myColors.forEach(item=>console.log(item));



