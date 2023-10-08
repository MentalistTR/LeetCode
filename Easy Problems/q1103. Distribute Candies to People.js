var distributeCandies = function(candies, num_people) {
let arr = new Array(num_people)
for(let j= 0;j<arr.length;j++) {
    arr[j] = 0
}

let i = 0;
let loops = 0

while(candies > 0) {

    if(i === num_people) {
        i = 0;
        loops++;
    }
    
    let current_candy = (loops * num_people) + (i + 1);

    if(candies - current_candy < 0) {
        arr[i] += candies
    } else {
        arr[i] += current_candy
    }
    i++;
    candies -= current_candy;
}
console.log(arr)
return arr
};

distributeCandies(7,4)