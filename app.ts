// var message:string = "hello World"
// console.log(message)

// // 面向对象编程
// class Site{
//   name():void {
//     console.log('name---')
//   }
// }
// var obj = new Site()
// obj.name()

// // 声明变量为数组
// // 在元素类型后面加上[]
// // let arr: number[] = [1, 2];
// // 或者使用数组泛型
// let arr: Array<number> = [1, 2];


// 可选参数
// function buildName(firstName: string, lastName ?: string) {
//   if (lastName) {
//     return firstName+ " " + lastName
//   } else {
//     return firstName
//   }
// }
// let result1 = buildName("Bob")

// 剩余参数
// function buildName(firstName:string, ...restOfName:string[]) {
//   return firstName + " " + restOfName.join(" ")
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
// console.log('employeeName',employeeName)


// function factorial(number) {
//   if (number <= 0) {         // 停止执行
//       return 1; 
//   } else {     
//       return (number * factorial(number - 1));     // 调用自身
//   } 
// }; 
// console.log(factorial(6));


// TypeScript使用 for...of 来实现迭代
// let nameSiteMapping = new Map();
// nameSiteMapping.set("Google", 1);
// nameSiteMapping.set("Runoob", 2);
// nameSiteMapping.set("Taobao", 3);
// // 使用对象解析
// for (let [key, value] of nameSiteMapping) {
//   console.log(key, value);
// }

// 使用 type 定义类型变量，类型是一个字面量类型 '123'
// type typeA = '123'

// // 使用interface 定义类型变量
// interface TypeB {
//   a: string
// }

// // 将函数类型赋值给E
// type E = (a:string) => void


interface people {
  a: string,
  b: number
}
// keyof获取对象的键
type keyofPeople = keyof people