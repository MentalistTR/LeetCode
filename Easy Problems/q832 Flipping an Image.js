var flipAndInvertImage = function(image) {

    for(let i = 0;i <image.length;i++) {
        image[i] = image[i].reverse();
    }

    for(let j =0;j <image.length;j++) {
        for(let k =0;k <image[j].length;k++){
            if(image[j][k] === 0) {
                image[j][k] = 1 
            } 
            else {
                image[j][k] = 0
            }
        }
    }

    return image 
    
};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])