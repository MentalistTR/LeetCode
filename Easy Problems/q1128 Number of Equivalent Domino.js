var numEquivDominoPairs = function(dominoes) {
    let count=0;

    for(let i=0; i< dominoes.length; i++){
        for(let j=i+1; j<dominoes.length; j++){
            let [a, b] = dominoes[i];
            let [c, d] = dominoes[j];
            if((a === c) &&(b === d) || (a === d) && (b === c)) count++;
        }
    }


    return count; 
};