// A deep comparison of the two objects:
let person1 = {
    ["firstName"] : 'Nick',
    ["lastName" ]: 'Jackson'
}
let person2 = {
    ["firstName"] : 'Nick',
    ["lastName" ]: 'Jackson'
}
function checkSimilarity(object1, object2) {
    let arr1 = Object.keys(object1);
    let arr2 = Object.keys(object2);
    let message = "";
    if(arr1.length === arr2.length) {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] === arr2[i]) {
                message = 'They have same only attribute names.';
                if(object1[arr1[i]] === object2[arr2[i]]) {
                    message = 'They are equal.';                    
                }                                
            } else {
                message = "They are not equal.";
            }
        }
    }
    return message;            
}

let comapreResult = checkSimilarity(person1, person2);
console.log(comapreResult);
