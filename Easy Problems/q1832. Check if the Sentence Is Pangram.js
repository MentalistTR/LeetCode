var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false 
 
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
     for(let i=0; i<alpha.length; i++){
        if(sentence.indexOf(alpha[i]) === -1){
            return false;
        }
    }
    return true;
 
};