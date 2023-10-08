var canConstruct = function(ransomNote, magazine) {
    let ransomNoteArray = ransomNote.split("");
    let magazineArray = magazine.split("");

    for(let i =0; i < ransomNote.length;i++) {
        if(magazineArray.includes(ransomNoteArray[i])) {
            delete magazineArray[magazineArray.indexOf(ransomNoteArray[i])] 
        } else {
            return false 
        }
    }
        return true;
};
canConstruct("ba","ab")