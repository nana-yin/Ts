class Dog {
  name:string;
  age:number;

  // constructor构造器，会在对象创建的时候调用
  constructor(name:string,age:number) {
    // 在实例的方法中，this就表示当前的实例
    // 在构造函数中，当前对象就是当前新建的那个对象
    // 可以通过this来向新创建的对象中添加属性
    this.name = name;
    this.age = age;
  };
  bark() {
    // 在方法中  this就是当前调用方法的对象
    console.log(this, this.name)
  }
}

const dog = new Dog('旺财', 4)
console.log('dog', dog)
const dog2 = new Dog('兜兜', 2)
console.log('dog', dog2.bark())