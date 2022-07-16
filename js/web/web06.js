fetch('https://jsonplaceholder.typicode.com/todos/3',
    {method:'DELETE',
    body:JSON.stringify(people)})
.then((response) => response.text())
.then((result) => {console.log(result)})