const arr = [1,2,3,4,5,6,7,8,9,10];

var a = arr.filter(function(item){ //filter is use with array. it automatically runs the loop. Using Filter you can your own Conditions to filter the result.
    return item % 2 == 0;
})

console.log(a);