const color = [ 'red', 'green', 'yellow']
const [a,b,c,d=1] = color
console.log(a,b,c,d)


//deconstruction
const word = ['moon','flower','cat','dog']
const[,no01,,no02] = word 
console.log(no01)