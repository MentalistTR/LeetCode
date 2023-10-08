var commonChars = function(words) {
    let result = [];

    let words0 = words[0].split('');

    for(let i = 0;i < words0.length;i++) {
        let counter = 0
        for(let j = 0;j < words.length;j++) {
            if(words[j].includes(words0[i])) {
                words[j] = words[j].replace(new RegExp(words0[i]), '');
                counter +=1;
            }
        }
        if(counter === words.length) {
            result.push(words0[i])
        }
    }
      return result 
};

commonChars(["bella","label","roller"])