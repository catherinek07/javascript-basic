// fetch('https://www.google.com')
// .then((response)=>response.text())
// .then(result=>{console.log(result)})


fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => response.json())
  .then(response => response.json())
  .then(json => console.log(json))