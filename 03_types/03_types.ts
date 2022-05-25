// 基本类型
//#region
// 声明一个变量为 字面量类型
let a : 10;
a = 10;
// a = 11; // 报错
let b : true;
let c : "hello";
// 最主要是使用 |（或运算符）进行声明
let d : 10 | true;
let e : string | number;


// 声明一个变量为any类型，表示关闭ts中的类型检测
// 使用ts时，不建议使用any类型
let f: any;
f = 10;
f = true;
f = "hello"


// 声明一个变量为unknown类型，表示这个变量不知道是什么类型。
// unknown类型的变量，不能直接赋值给其他类型的变量。
let g: unknown;
g = 10;
g = true;
g = "hello"

// unknown和any的区别：unknown是一个类型安全的any
let h = '10';
// h = f;  // 此时h也会变为any类型
// h = g; // 会报错
/* 
  类型断言，可以用来告诉解析器变量的实际类型。
  语法：
    变量 as 类型
    <类型>变量
*/
// h = g as string;
h = <string>g;


// void表示返回的是undefined，即返回值是空，无返回值
function fn() : void{
  // return undefined;
  // return null;
  // return;
}


// never表示没有值，即不能是任何值，一般用于报错
function fn2():never {
  throw new Error('报错了！')
}
//#endregion


// 复杂类型

