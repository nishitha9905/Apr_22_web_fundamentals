let sum=0,i,n=5,odd_num=1;
function odd_number(n){
for(i=1;i<=n;i++){
    if(odd_num%2 == 1){
    sum=sum+odd_num;
    odd_num=odd_num+2;
    }
}
console.log(`sum of ${n} odd numbers is ${sum}`);
}
odd_number(n);

