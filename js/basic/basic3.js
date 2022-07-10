class Fruit{
    constructor(title, color, price){
        this.title = title
        this.color = color
        this.price = price
    }

    list(){
        document.write(
            `
            <p>${this.type}: ${this.title}: ${this.price}won</p>
            `
        )
    }
}

const my = [new Fruit('apple','red','1000'),
            new Fruit('banana','yellow','2000'),
            new Fruit('grape','violet','3000')

]
for(let item of my){
    item.list();
}