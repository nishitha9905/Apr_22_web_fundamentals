const input = [ 1, -5, 2, 10, -30, 29, 50];
var sum=0;
var sumOfArray = input.filter(function(element){
    if(element>0){
        return sum=sum+element;
    }
})
console.log(`positive numbers in the given array ${sumOfArray} sum of these positive numbers is ${sum}`);