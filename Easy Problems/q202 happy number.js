var isHappy = function(n) {

    let arr = [];

    while(true) {
        let num = n.toString();
        n =0;

        for (let i =0;i < num.length;i++) {
            n += Math.pow(num[i],2);

        }

        if(arr.includes(n) > 0) return false;
        else if(n == 1) return true;

       arr.push(n);
    }

 


}

