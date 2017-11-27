let a=b=value= 0.0;

a = prompt("a:");
b = prompt("b:");

value = (a*a)-(2*a*b)+(b*b);
console.log('The value of (a*a)-(2*a*b)+(b*b) is ' + value);

if(value < 0){
    console.log("Negative value")
}else if(value === 0){
    console.log("Value equals zero")
}else{
    console.log("Positive value")
}