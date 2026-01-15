
// Find number of unique elements inside a duplicated array which have elements in non-decreasing order sorted.

var duplicatedArray = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7];
var x = 0;

function removeDuplicates(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x+1;
            arr[x] = arr[i];
        }
    }
    return x+1;
}
console.log(removeDuplicates(duplicatedArray))
