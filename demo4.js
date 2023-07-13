//Function
//1. Function without parameter and no return
function sayHello(){
    console.log("Hello world")
}
sayHello()  //Function call

//2. Function without parameter but has "return" 
function greenwich(){
    return"Greenwich Vietnam"
}
console.log("Hello "+greenwich())

//3. Function with parameter and no return
function calculateSum(a, b){
    c = a + b
    console.log("Total: "+c)
    //console.log("Total: "+ (a+b))     /without variable c
}
calculateSum(10, 15)

//4. function with parameter and return
function sayHi(name){
    return name
}
console.log("Welcome "+sayHi("Xuan Trung") + " to Greenwich Vietnam")