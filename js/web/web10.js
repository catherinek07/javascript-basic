// fetch('https://jsonplaceholder.typicode.com/todos/3')
// .then((response => response.text()))
// .then((result) => console.log(result))
async function fetchStr(){
    console.log('no10')
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    console.log('no11')
    const result = await response.text()
    console.log('no12')
    console.log(result)
    console.log('no13')
}

console.log('no01')
fetchStr();
console.log('no02')
console.log('no03')
console.log('no04')
console.log('no05')
console.log('no06')
console.log('no07')
console.log('no08')
console.log('no09')