const fruit = ['apple','orange','banana']
//const toOb = function(a,b,c){
//     return{a,b,c}
// }
const toOb = (a,b,c) => ({a,b,c})

console.log(toOb(...fruit))

const word = ['red','blue','green','orange']
const myWord = (a,b,...c) => ({a,b,c})
console.log(myWord(...word))