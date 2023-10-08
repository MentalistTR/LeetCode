var toHex = function(num) {

  arr = { 0:'0', 1:'1', 2:'2', 3:'3', 
  4:'4', 5:'5', 6:'6', 7:'7', 
  8:'8', 9:'9', 10:'a', 11:'b', 
  12:'c', 13:'d', 14:'e', 15:'f' }

  let result = [];

  if ( num == 0) return arr[0]
  if(num < 0) num += Math.pow(2,32);

  while(num > 0) {
    rest = num % 16
    result.unshift(arr[rest])
    num = Math.floor(num / 16)
  }
 
  return result.join('');

};

toHex(-2)





// 2. YÖNTEM 2. YÖNTEM 2.YÖNTEM 2.YÖNTEM



// var toHex = function(num) {
//   if(num < 0) {
 
//   num = 0xFFFFFFFF + num + 1;
//   }
//   num= num.toString(16);
//   return num;

// };





