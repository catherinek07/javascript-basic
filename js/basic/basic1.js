function Book(type){
this.type = type
this.title = this.title
this.action = function(){

}
}
Book.prototype.action = function(){
    console.log(`${this.type}: ${this.title}`)

}
const photoshop = new Book('graphic','photo')
const script = new Book('it','javascript')
const html = new Book('it','html5')
photoshop.action()
script.action()
html.action()

const it = [
    new Book('graphic', 'photo'),
    new Book('it','javascript'),
    new Book('it','html5')
]

let num = it.length
console.log(num)

for(let i =0; i <= num-1; i++){
    it[i].action()
}

/*for (let index in it){
    it index.action()
}
*/
for (let item of it){
    item.action()
}
