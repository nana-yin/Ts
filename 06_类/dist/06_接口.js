"use strict";
(function () {
    /**
     *  以abstract开头的类是抽象类
     *    - 抽象类不能创建自身的实例对象
     *    - 抽象类只能被用来继承
     *    - 抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name) {
            /**
             * 如果不重写构造函数，在创建实例的时候，会自动调用父类的构造实例。
             * 如果要重写构造函数，那么父类构造函数的参数一定要带过来，还要在构造函数的首行加super关键字，并且将父类构造函数的参数当做super的参数进行传入。
            */
            super(name); // 调用父类的构造函数
            this.name = '狗狗';
        }
        sayHello() {
            /**
             * super表示当前类的父类
             */
            // super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财');
    console.log('dog', dog);
    dog.sayHello();
    // const a = new Animal('旺财') // 会报错
    // class Cat extends Animal{
    //   // 会报错，必须要重写sayHello
    // }
})();
