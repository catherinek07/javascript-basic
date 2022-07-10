const{a1,a2,a3} = {
    a1: 10,
    a2: 20,
    a3: 30
}

console.log(a1)

const book = {
    type:'it',
    title:'html',
    price:'20,000'
    //level:'main'
    //this takes priority
}
const {type,title,price,level=0} = book
console.log(type)
console.log(level)

const welcome = type
console.log(type)

const graphic = {
    some: 'paint',
    bookname: 'painter'
}
const{some:subtitle,bookname} = graphic