"use strict";
(function () {
    const obj = {
        name: '小红',
        age: 16
    };
    console.log('obj', obj);
    /**
     *  定义一个类的时候，可以使类实现一个接口。
     *    实现接口---》使类满足接口的要求
    */
    class inter {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('你好');
        }
    }
    const interInstance = new inter('小蓝');
    console.log('interInstance', interInstance);
})();
