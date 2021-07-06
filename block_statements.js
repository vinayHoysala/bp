//blocks
//whatever we specify in flower braces is called as 
//block of statement
var i=0;
while(i<10){
    console.log(i++);
}
//independent blocks of statements
{
    console.log(i);
    console.log("Hi");
    var j = "Yo Yo";
}

{
    console.log(j); //j is accessable
}