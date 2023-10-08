var reverseWords = function(s) {
    let words = s.split(' ');

    for(let w = 0;w<words.length;w++) {
        let letters = words[w].split('');
        for(let i =0, j =letters.length-1; i<j;) {
            [letters[i],letters[j]] = [letters[j],letters[i]];
            i++;
            j--;
            
        }
        words[w] = letters.join('')
    }


        return words.join(' ');

        
};