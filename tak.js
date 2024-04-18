//let bab = 1;
//let n = 7;
//while (n > 1) {
//   bab *= n;
//   n--;
//}
/** 

let bab = 1;
function factorial(n) {
    
    while (n > 1) {
        bab *= n;
        n--;
        
        
    }
    return bab;
}
*/

function factorial(num) {
    let result = 1;
    recursive(num);
    function recursive(num) {
        result *= num;
        num--;
      
      
      
        if (num < 1) {
            
        } else {
            console.log(result + " result in else");
            console.log(num + " in else");
            recursive(num);
        }
        
    }
    return result;
}






console.log(factorial(7));