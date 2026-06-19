let str = 'My name is Aaromal Anil';

function camelCase(str){
    const result = str.split(" ").map((word,index)=>index===0?word.toLowerCase():word[0].toUpperCase()+word.slice(1)).join('')
    return result
}

console.log( camelCase(str));