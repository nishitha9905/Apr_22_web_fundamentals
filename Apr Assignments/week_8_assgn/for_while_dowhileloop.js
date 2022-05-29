//check for even numbers using for loop /while 
let i;
for(i=2;i<=20;i+=2){
    console.log(i,"is an even number");
}
for(i=1;i<=20;i+=1){
    if(i%2==0){
        console.log(i,"is an even number");
    }
    else {
        console.log(i,"is an odd number");
    }
}
//whileloop
let n=2;
while(n<=20){
    console.log(n,"is an even number");
    n+=2;
}
//using if condition in while loop
let num=1;
while(num<=20){
    if(num%2==0){
    console.log(num,"is an even number");
    num+=1;
    }
    else{
        console.log(num,"is an odd number");
        num+=1;
    }
}