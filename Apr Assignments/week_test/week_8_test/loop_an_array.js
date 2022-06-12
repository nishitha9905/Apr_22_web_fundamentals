//there are 6 ways to loop through an array 
//1. for loop (syntax)
// for(let i=0;i<5;i++){ //intialization conditional increment
    //execute some block of code
// }
//forloop example
let arr=['john','smith','joe','joy']
console.log("for loop")
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//2. for (of loop) (syntax)
// for (let variable of i) {
    // code block to be executed
    //variable - variable which is defined to assign the iterated array
    //iterator -i - array to be iterator
// }
//for (of loop) example
console.log("for of loop")
for (let name of arr){
    console.log(name);
}
//3. for each()- (syntax)
// array.forEach(callback(currentValue [, index [, array]])[, thisArg])
//for each example
let index;
let array =[{name:'john'},{name:'smith'},{name:'joe'},{name:'sita'}]
console.log("for each loop")
array.forEach(function(profile,index,arr)  {
    console.log(`Index: ${index}, Name: ${profile.name}`);
});
//4.while loop (syntax)
// while (condition) {
    // code block to be executed
// }
//while loop example
let j=0;
let wArray = ['HTML','CSS','JAVASCRIPT','React JS']
console.log("While Loop")
while(j<wArray.length){
    console.log(wArray[j]);
    j++;
}
//5.do while loop (syntax)
// do {
    // code block to be executed
// } while (condition)
let k=0;
let dWArray = ['wake up','fresh up','do work','eat','sleep']
console.log("Do While Loop");
do{
    console.log(dWArray[k]);
    k++;
}while(k<dWArray.length-1)

//6.map() -syntax
// var new_array = array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
// }[, thisArg])
// map()-example
var myArray = [
    {id: 1, firstName: 'John', lastName: 'Smith', age: 12},
    {id: 2, firstName: 'Jane', lastName: 'Brown', age: 14},
    {id: 3, firstName: 'Martin', lastName: 'Johnson', age: 13},
    {id: 4, firstName: 'Katie', lastName: 'Miller', age: 17},
    {id: 5, firstName: 'Louis', lastName: 'Wilson', age: 11}
];

var newArray = myArray.map(function(profile, index, myArr) {
    var newProfile = {
        'id': index + 1,
        'fullName': profile.firstName + ' ' + profile.lastName,
        'age': profile.age
    }

    return newProfile
})
console.log("map() function");
newArray.forEach(function(profile, index, myArr) {
    console.log(profile.fullName)
});