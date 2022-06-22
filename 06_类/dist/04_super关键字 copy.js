"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            /**
             * 如果不重写构造函数，在创建实例的时候，会自动调用父类的构造实例。
             * 如果要重写构造函数，那么父类构造函数的参数一定要带过来，还要在构造函数的首行加super关键字，并且将父类构造函数的参数当做super的参数进行传入。
            */
            super(name, age); // 调用父类的构造函数
            this.age = 3;
        }
        sayHello() {
            /**
             * super表示当前类的父类
             */
            // super.sayHello();
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 2);
    console.log('dog', dog);
    dog.sayHello();
})();
