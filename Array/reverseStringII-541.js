let s = "abcdefg";
let k = 2;

var reverseStr = function(s, k) {
    function reverse(s){
        var s = s.split('');
        let l=0;
        let r=s.length-1;
        while(l <= r){
            var temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
        return s.join('');
    }

    if(s.length<k){
        console.log(reverse(s));
    }
    if (k <= s.length && s.length < 2 * k) {
        console.log(reverse(s.slice(0, k)) + s.slice(k));
    }
    else{
        let res='';
        for (let i = 0; i < s.length; i += 2 * k) {
            const block = s.slice(i, i + 2 * k);
            res+=reverse(block.slice(0, k)) + block.slice(k);
        }
        console.log(res);
    }
};

reverseStr(s, k)