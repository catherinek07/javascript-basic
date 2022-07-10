class Book{
    constructor(type,title){
        this.type = type
        this.title = title
    }
    list(){
        document.write(
            `
            <p>${this.title}: ${this.type}</p>
            `
        )
    }
}

const myBook = new Book('developer','front-end')
myBook.list();

class Graphic extends Book{
    constructor(type,title,level){
        super(type,title)
        this.level = level
    }
    action(){
        document.write(
            `
            <p>${this.title} title : ${this.level} : ${this.type}</p>
            `
        )
    }
}

const myGraphic = new Graphic('photoediting', 'photoshop', 1)
myGraphic.action();