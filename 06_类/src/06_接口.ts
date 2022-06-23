(function () {
  // 描述一个对象的属性
  type myType = {
    name: string;
    age: number;
  }

  const obj : myType  = {
    name: '小红',
    age: 16
  }
  console.log('obj',obj)

  /**
   * 接口用来定义一个类的结构，主要是用来定义一个类应该包含哪些属性和方法。
   *  - 接口还可以被当成类型的声明使用
   *  - 接口可以限制类的结构
   *      接口中所有的属性都没有实际的值
   *      接口只定义对象的结构，而不考虑实际的值
   *      在接口中所有的方法都是抽象方法
   */
  interface myInterface {
    name:string;
    sayHello():void
  }

  /**
   *  定义一个类的时候，可以使类实现一个接口。
   *    实现接口---》使类满足接口的要求
  */
  class inter implements myInterface {
    name:string;
    constructor(name:string) {
      this.name = name
    }

    sayHello(): void {
      console.log('你好')
    }
  }

  const interInstance = new inter('小蓝')
  console.log('interInstance',interInstance)


})()