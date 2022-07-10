import num from './export01'
// import {ram,color} from './export02'
//import {ram,color as main} from './export02'
import * as main from './export02'

num('string');
main.ram(100);
console.log(main.color.name)
console.log(main.default)

// git add . 
// git commit -m "name"
// git push origin master