let arr = [];
let i = 0;
b = 0;
while (b < 999999999) {//i,b никак не пояснены. "нипаняиный" код
    function fibi(i) {
        if (i === 0 || i === 1) {
            return arr[i] = i;
        } else {
            return fibi(i - 1) + fibi(i - 2)
        }
    }
    b = fibi(i);
    arr[i] = b;
    i++;
}
console.log(arr);
