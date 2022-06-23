// 当我们不知道数据到底是什么类型的时候，用any是不行的
// function fn(a:any):any {
//   return a
// }

/**
 * 在定义函数或者类的时候，如果遇到类型不明确的数据，就可以用泛型。
 * 主要是规范数据
 */
// 1、只有一个泛型的函数
//#region 
// function fn1<T>(a:T):T {
//   return a
// }
// // 可以直接调用具有泛型的函数
// const res1 = fn1(10) // 不指定泛型，TS可以自动对类型进行判断
// const res2 = fn1<string>('hello') // 指定泛型
// console.log('fn1',res1,res2)
//#endregion

// 2、同时指定多个泛型的函数
//#region 
// function fn2<T,K>(a:T,b:K):T {
//   console.log('指定多个泛型--b',b)
//   return a
// }
// const res = fn2(10, 'hello')
// const res2 = fn2<boolean,string>(false, 'hi')
// console.log('指定多个泛型--res',res,res2)
//#endregion

// 3、泛型是一个类
//#region 
// interface inter {
//   length: number;
// }
// // T extends Inter表示泛型T必须是Inter的实现类（子类）
// function fn3<T extends inter>(a:T):number {
//   return a.length
// }
// const res = fn3('123')
// const res2 = fn3({length: 10})
// console.log('泛型是一个类',res,res2)
//#endregion

// 4、类中使用泛型
class MyClass<T>{
  name: T;
  constructor(name: T) {
    this.name = name
  }
}

const res = new MyClass<string>('你好')
console.log('类中使用泛型', res)