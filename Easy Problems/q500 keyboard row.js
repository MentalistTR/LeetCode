var findWords = function (words) {
    let f = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let s = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let t = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let arr1 = [];
    for (let i = 0; i < words.length; i++) {
        let arr = [...words[i].split('')];
        let flag = 0;
        let match = [];
        for (let j = 0; j < arr.length; j++) {
            if (j === 0) {
                if (f.includes(arr[j].toLowerCase())) {
                    match = [...f];
                } else if (s.includes(arr[j].toLowerCase())) {
                    match = [...s];
                } else if (t.includes(arr[j].toLowerCase())) {
                    match = [...t];
                }
            } else if (!match.includes(arr[j].toLowerCase())) {
                flag = 1;
            }
        }
        if (flag === 0) {
            arr1.push(words[i]);
        }
        
    }
    return arr1;
};