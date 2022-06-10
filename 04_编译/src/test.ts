// export const b  = 'hello'
let b : boolean;
b = false
console.log('b', b)

// let a;

// function sum(a:number,b:number) {
//   return a+ b
// }

function sum2 (this:Window) {
  console.log('this',this)
}


let dom = document.getElementById('box')
dom?.addEventListener('click', () => {
  alert('点击')
})

