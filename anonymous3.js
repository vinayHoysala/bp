//Returning a function from a function
var doSomething = function() {
    return function(){
        console.log("doing something");
    }  
}

//Here we are treating the fucntion itself as value
//so when we call doSomething() it returns the 
//inner function
var innerFunction = doSomething();
//now we can call innrer fuction using the variable
//innerFunction() which contains a console.log statemet

innerFunction();
doSomething()();








