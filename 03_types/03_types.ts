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
if (typeof(g) === 'string') {
  h = g;
}
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
let z : object;
z = {name: '小红'};
z = function() {};
z = [];


/* 
  {}  用于指定对象中可以包含哪些属性
  语法：{属性名: 属性类型,属性名: 属性类型...}

  在属性名后面加一个 ? 表示可选属性
*/
let y : { name : string, age?: number };
y = { name: '小绿', age: 18 }


// 用方括号表示属性名是字符串类型的任意属性
let  x : { name : string, [propName: string] : unknown};
x = { name: '小黄', age: 18, gender: '男'}


/* 
  设置函数结构的类型声明：
      语法：(形参: 类型, 形参: 类型...) => 返回值
*/
let r : (a : number, b: number) => number
r = function (n1,n2) {
  return n1+n2;
}


/* 
  声明数组：
    方法一：   数组类型[]
    方法二：   Array<数组类型>
*/
// 字符串数组
let s : string[];
s = ['1','2']
// 数值数组
let t : number[];
t = [1,2]
// 数值数组
let  u : Array<string>;
u = ['3','4']


/* 
  元组（）：表示一个固定长度的数组
  语法：[类型, 类型, 类型]
*/
let v : [string, number]
v = ['1', 3]


/* 
  枚举类型（enum）：
*/

