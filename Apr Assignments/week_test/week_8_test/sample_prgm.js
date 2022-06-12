var arr1 = [,,,]; //3
var arr2 = new Array(3); //3
var arr3 = [1,2,3,4,5]; //5
var array = [ [1,2,3], [4,5,6]  ]; //2
var arr[0].length = [[1,2,3], [4,5,6]]; //syntax error
console.log(`A ${arr1.length}`) //3
console.log(`B ${arr2.length}`) //3
console.log(`C ${arr3.length}`) //5
console.log(`D ${array.length}`) //2
console.log(`E ${arr[0].length}`) //syntax error


