import {hi} from './test'

function sum(a: number, b:number) {
  return a+ b
}
let c = sum(1,23)
console.log('c-----',c,hi)


let obj = {
  name: '小名',
  age: 18
}
obj.age = 24
console.log('obj-----',obj)


console.log(Promise)


const arrow = (a: number, b:number) => {
  return a+b
}
console.log('arrow',arrow)