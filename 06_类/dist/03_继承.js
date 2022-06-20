"use strict";
(function () {
    /**
     * 定义一个动物类
     */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        sayHello() {
            console.log('你好');
        }
    }
    // const dog = new Animal('小狗', 4);
    // const cat = new Animal('小猫', 3);
    // console.log('Animal--小狗实例',dog)
    // console.log('Animal--小猫实例',cat)
    /**
     * 使Dog类继承Animal类
     *   Animal被称为父类，Dog被称为子类
     *    - 使用继承后，子类会拥有父类的所有属性和方法
     *    - 通过继承可以将多个类中的公共属性和方法写在父类中。
     *   如果在子类中添加了一个与父类名称相同的属性或方法，则子类会覆盖掉父类
     *    - 子类覆盖父类的属性或者方法，被称为 重写。
     */
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    /**
     * 使Cat类继承Animal类
     *   Animal被称为父类，Cat被称为子类
     */
    class Cat extends Animal {
        run() {
            console.log('猫在跑');
        }
    }
    const dog = new Dog('小狗', 4);
    const cat = new Cat('小猫', 3);
    console.log('Dog--小狗实例', dog);
    dog.sayHello();
    console.log('Cat--小猫实例', cat);
    cat.sayHello();
    cat.run();
})();
