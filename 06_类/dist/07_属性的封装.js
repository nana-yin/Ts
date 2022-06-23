"use strict";
(function () {
    // 第一种写法：属性是对象中直接设置的，可以被任意的修改，这样会使对象中的数据变的不安全。
    //#region 
    // class Person {
    //   name:string;
    //   age:number;
    //   constructor(name:string,age:number) {
    //     this.name  =name
    //     this.age = age
    //   }
    //   sayHello() {
    //     console.log('你好')
    //   }
    // }
    // const person  = new Person('张三', 6)
    // person.age = -10
    // console.log('person',person)
    //#endregion
    //第二种写法：给属性添加修饰符，将属性的定义和修改写在方法中
    //#region 
    // class Person2 {
    // /**
    //  * TS中可以给属性添加修饰符
    //  *    - public 修饰的属性可以在任意地方（当前类、子类、外部）访问和修改（默认）
    //  *    - private 修饰的属性只可以在当前类的内部访问和修改
    //  *        · 可以在类中添加方法，使得私有属性可以被外部访问和修改。
    //  *    - protect 修饰的属性是被保护的属性，只能在当前类和当前类的子类中访问和修改
    //  */
    //   private _name:string;
    //   private _age:number;
    //   constructor(name:string,age:number) {
    //     this._name  =name
    //     this._age = age
    //   }
    //   /**
    //    * getter 方法用来获取属性
    //    * setter 方法用来修改属性
    //    *   - 它们被称为属性的存取器
    //    */
    //   // 定义方法，获取name属性
    //   getName() {
    //     return this._name;
    //   }
    //   // 定义方法，设置name属性
    //   setName(value:string) {
    //     this._name = value
    //   }
    //   // 定义方法，获取age属性
    //   getAge() {
    //     return this._age;
    //   }
    //   // 定义方法，设置age属性
    //   setAge(value:number) {
    //     // 判断年龄是否合法
    //     if (value >= 0) {
    //       this._age = value
    //     }
    //   }
    //   sayHello() {
    //     console.log('你好')
    //   }
    // }
    // const person2  = new Person2('李四', 10)
    // person2.getName()
    // person2.setAge(-10)
    /**
     * 虽然报错了，但是能够修改成功。
     *    - 因为private等修饰符在js中没有，所以编译成js之后，修饰符会被忽略。
     *    - 在tsconfig.json中设置noEmitOnError: true，这样就不会编译了
     */
    // person2._age = 20
    //#endregion
    // 第三种写法：TS中自带的存取器
    //#region 
    // class Person3 {
    //   private _name:string;
    //   private _age:number;
    //   constructor(name:string,age:number) {
    //     this._name  =name
    //     this._age = age
    //   }
    //   get name() {
    //     console.log('get name()执行了！！！')
    //     return this._name;
    //   }
    //   set name(value:string) {
    //     this._name = value
    //   }
    //   get age() {
    //     return this._age;
    //   }
    //   set age(value:number) {
    //     // 判断年龄是否合法
    //     if (value >= 0) {
    //       this._age = value
    //     }
    //   }
    //   sayHello() {
    //     console.log('你好')
    //   }
    // }
    // const person3  = new Person3('王五', 12)
    // // person3.name调用了get name()的这个方法
    // console.log('person3.name修改前',person3.name)
    // person3.name = '赵六'
    // console.log('person3',person3)
    //#endregion
    // 第四种写法：简化版
    class Person4 {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const person4 = new Person4('小小', 16);
    console.log('person4', person4);
})();
