var constructRectangle = function(area) {

    let divides = [];

    for(let i = 1;i <=area;i++) {
        if( (area % i === 0)) {
            divides.push(i);
        }
       
    }

    for(let i = 0;i < divides.length;i++) {
        for(let j =0;j < divides.length;j++) {
            if(divides[i] * divides[j] == area && i >= j) {
                console.log(i,j)
                return [divides[i],divides[j]]
            }
        }
    }
    
    
};

constructRectangle(37)