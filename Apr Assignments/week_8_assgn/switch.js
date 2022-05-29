//operate 2 numbers based on given operator using switch
let operator='*';
let result;
let num1=10 ,num2=20;
switch(operator){
    case '*':
        result=num1*num2;
        break;
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '/':
        result=num1/num2; 
        break;   
}
console.log(result);
