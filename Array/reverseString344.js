var duplicatedArray = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7];

var reverseString = function(s) {
    let l=0;
    let r=s.length-1;

    while(l <= r){
        var temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
    
    return s;
};

console.log(reverseString(duplicatedArray));