var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);

    let res = 0;
    let currChild = 0;

    for(let i = 0; i < s.length;i++) {
        if (g[currChild] <= s[i]) {
            res++;
            currChild++
        }
    }

    return res 
};

// soruyu baska türlü anlayıp çözümü.

var findContentChildren = function(g, s) {

    if(s.length === 0) {
        return 0
    }
    let gsum =0
    let ssum= 0
  
    for(let i = 0; i < g.length;i++) {
        gsum += g[i];
    }
    for(let j = 0; j < s.length;j++) {
        ssum += Number(s[j]);
      
    }
  
   
    if(ssum >= gsum) {
        console.log(g[g.length -1])
        return g[g.length -1]
    }
  
    if(ssum < gsum) {
        for(let k = 0; k < g.length;k++) {
            ssum -= g[k];
           
            if(ssum < 0) {
                console.log(g[k-1])
                return g[k-1]
            }
        }
    }
 
};

findContentChildren([1,2,3],[3])