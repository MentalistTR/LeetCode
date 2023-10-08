var licenseKeyFormatting = function(s, k) {

    s = s.replaceAll('-', '').toUpperCase().split('');
    
   for(let i = s.length-1 - k; i >= 0; i -=k) {
    s[i] = s[i] + '-'
   }

   return s.join('')
    
};

licenseKeyFormatting("5F3Z-2e-9-w",4)