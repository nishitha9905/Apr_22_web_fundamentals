let num=1, count=0, i,n=5;
function IsPrime(n){  
while(count<n){
    num=num+1;
    for(i=2;i<=num;i++){
        if(num%i==0){
            break;
        }
    }
        if(i==num){
            count++;
        }
    }

console.log(`${num} is the ${n}th prime number`);  
}
IsPrime(n);