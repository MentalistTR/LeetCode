var maxNumberOfBalloons = function(text) {
    let countb = 0
    let counta = 0
    let countl = 0
    let counto = 0
    let countn = 0

    let result = 0

   

    for(let i = 0;i < text.length;i++) {
        if(text[i] == 'b') {
            countb++
        }
        if(text[i] == 'a') {
            counta++
        }
        if(text[i] == 'l') {
            countl++
        }
        if(text[i] == 'o') {
            counto++
        }
        if(text[i] == 'n') {
            countn++
        }
    }
    console.log(countb)
            console.log(counta)
            console.log(countl)
            console.log(counto)
            console.log(countn)
   

    for(let j = 0;j < 10;j++) {
        if(countb >=1 && counta >=1 && countl >=2 && counto >=2 && countn >=1) {
    
            result++
            countb--
            counta--
            countl -= 2
            counto -= 2
            countn--
        
        }

        else if(countb === 0 || counta === 0 || countl === 0 || counto === 0 || countn === 0 ) {
            break
        }

    }

return result 
    
};

maxNumberOfBalloons("mbetypbpefxvviadqaodrbjeoacfomepmzymiudltgnvnpbowwmjgpzzhtiismearuwocsgbiimiqqzaozgeizikrlxmupfzjzmlfttqqbpfblqfkecsdfbsceqjhubfxksivrfwvukapxmuciybfhzlmpeamdxziptxregymqtmgcsujmugissgnlbhxbcxxeoumcqyulvahuianbaaxgzrtmshjguqdaxvxndzoqvwmcjfhpevavnrciqbymnlylbrfkkiceienoarfrzzxtuaqapaeqeqolozadmtgjyhfqzpuaskjuawxqkdqyjqcmbxtvshzrquvegcuyuckznspmrxvqdassidcmrajedsnuuumfwqzvasljlyvfefktiqgvzvdzojtjegsyhbepdkuwvgrfscezvswywmdavpxlekbrlkfnbyvlobazmvgulxrfdranuhomkrlpbfeagfxxxuhjuqhbkhznixquxrxngwimdxdhqbdaouitsvcdmbwxbbaomkgxsqwnexbjjyhtxvkjfqkrrxjghvzqsattubphryqxxdyjkihfnzvjhohnhdlfwoqiwtmwzfgcyhyqtcketvgnbchcxvnhcsoosirfqgdgcsitegzlxdfijzmxnvhrulmgvoqfpzesootscnxenokmmozmoxpaverydbsnimwacjqhrtxkqtvghjyushoctxphxzztukgmnoeycqaeukymvwxcsyvvctflqjhtcvjtxncuvhkptkjnzaetwbzkwnseovewuhpkaxiphdicgacszzdturzgjkzwgkmzzavykancvvzaafgzjhcyicorrblmhsnnkhfkujttbkuuedhwguuaapojmnjdfytdhrepjwcddzsoeutlbbljlikghxefgbqenwamanikmynjcupqpdjnhldaixwygcvsgdkzszmsptqqnroflgozblygtiyaxudwmooiviqcosjfksnevultr")