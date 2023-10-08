var destCity = function(paths) {
    let hashMap = new Map()
   for(let i = 0; i < paths.length; i++){
       hashMap.set(paths[i][0], paths[i][1])
   }

   for(const city of hashMap.values()){
       if(!hashMap.has(city)){
           return city
       }
   }
};
   
