import data from './data01.json'

console.log(data)
console.log(data.array)
console.log(data.null)
console.log(data.object.a)

// JSON derulo --> stringify(), parse()

const color = {
    title:'red',
    sample: 'apple',
    no:100
}
const str = JSON.stringify(color)
console.log(str)

const obj = JSON.parse(str)
console.log(obj)