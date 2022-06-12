let arr = [3,5,1,2,7,4,9,6,8];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
     if(arr[i]>arr[j]){
        let a = arr[j];
        arr[j] = arr[i];
        arr[i] = a;
     }
    }
}
console.log(`${arr.length}th largest element in a sorted array is ${arr[arr.length-1]}`);
console.log(`sorted array ${arr}`);
