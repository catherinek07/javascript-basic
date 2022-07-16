fetch('https://jsonplaceholder.typicode.com/todos/3')
.then((response) => response.text())
.then((result) => {
    console.log(result)
    console.log('welcome')
    throw new Error('test')
})

.catch((error) => console.log(error))