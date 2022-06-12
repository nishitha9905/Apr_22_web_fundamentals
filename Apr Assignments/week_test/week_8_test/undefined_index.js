let arr = [1,2,3,4,5];
for(let i=0;i<=arr.length;i++){ //here arr[arr.length] value is undefined which is not defined in an array.
    console.log(arr[i]);
    if(i==arr.length){
    console.log(`value of ${[arr.length]}th index is ${arr[arr.length]}`)
    }
}