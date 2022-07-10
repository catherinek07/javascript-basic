class Book {
    constructor(type, title){
        this.type = type
        this.title = title
    }

    action(){
        document.write(
            `
            <p>
            ${this.type} : ${this.title}
            </p>
            `
        )

    }
}

const my = [new Book('graphic','photoshop'),
            new Book('novel','1984'),
            new Book('children','matilda')]

my[0].action();
my[0].action();
my[0].action();
