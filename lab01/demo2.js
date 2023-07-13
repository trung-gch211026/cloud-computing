//conditional statements
//1 posible case: if
//2 posible cases: if + else
//more than 2 possbile if + else if + else
grade = 10
if (grade >= 5){
console.log("Your grade is: "+grade)
console.log("Passed")
}else
console.log("Your grade is: "+grade)
console.log("Failed")

a = 3
b = 5
c = 4

if(a>=b && a >=c){
    console.log(a + " is max")
}else if(b>=a && b>=c){
    console.log(b + " is max")
}else{
    console.log(c + " is max")
}


choice = 3
switch(choice){
    case 1:
        console.log('Line 1 is turned on')
        break;
    case 2:
        console.log('Line 2 is turned on')
        break;
    case 3:
        console.log('Line 3 is turned on')
        break;
    default:
        console.log('Invalid choice')
}