//declare variable
//Sử dụng let để khai báo biến cục bộ
let x = "Hanoi"
let y = "Vietnam"
console.log(x + " is the capital of "+y)

//Sử dụng var để khai báo biến toàn cục
var a = 3
var b = 5
var c = a + b
console.log(c)

function findAvarage(){
    let a = 5;
    let b = 7; 
    let c = 12;
    return ((a+b+c)/3)
}
console.log("Average: "+ findAvarage())
console.log(a)

//declare constant
const pi = 3.14
console.log(pi)