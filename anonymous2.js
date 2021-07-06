//passing an anonymous function as arugment
//to another function

function x(a){
    a();
}


x(function() {
    console.log("Yo Yo");
});



