let question = [5, 3, 3, 4, 2, 6, 7, 2, 8, 3, 9, 0, 9, 4, 1];
let element = 3;
let x = 0;

function removeElement(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] != element){
            arr[x]=arr[i];
            x += 1;
        }
    }
    return x
}

console.log(removeElement(question));