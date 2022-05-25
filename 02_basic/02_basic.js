var a;
a = 10;
a = 11;
// a = 'hello';  // 报错，但是可以编译
var b;
b = 'hello';
// b = 10; // 报错
var c = true;
c = false;
// c = 1 // 报错
var d = true; // 声明并且赋值
// d  = 10  // 报错。ts中会对变量的声明进行类型的预判断，即一开始定义了什么类型，就认为这个变量是什么类型。
// js中不会对函数的参数进行类型的定义，也不会限制参数的个数
// function sum (a,b) {
//   return a + b;
// }
// sum(1,2) // 结果是3
// sum(1,'2') // 结果是12
// ts中将参数的类型和返回值的类型做了限制
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2)); // 结果是3
// // sum(1,'2') // 报错
