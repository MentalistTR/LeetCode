var sumBase = function(n, k) {
    let sum = 0
let num = n.toString(k)
for(let i = 0; i < num.length;i++) {
      sum += Number(num[i])
}
return sum
};
sumBase (34,6)