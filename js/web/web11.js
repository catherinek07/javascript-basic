//async function name (){}
//const func = async function (){}

const func = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    const result = await response.text()
    console.log(result)
    }
    catch(err){console.log('error')}
}
