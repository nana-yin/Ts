// 使用class关键字来定义一个类
/* 
  对象中主要包含了两个部分：
    属性
    方法
*/
class Person {
  /**
   * 1、直接定义的属性是实例属性，需要通过对象的实例进行访问。
   * 2、使用static关键字开头的属性是静态属性，可以直接通过类进行访问。
   * 3、使用readonly开头的属性是只读属性，无法进行修改。
   */
  // 定义实例属性
  name:string = '孙悟空';
  age:number = 19;
  // 定义静态属性
  static sex = '女';
  // 定义只读属性
  readonly hobby = ['看书'];

  // 定义方法
  say() {
    console.log('你好')
  }
};

let per = new Person();
console.log('per.name修改前',per.name)
per.name = 'tom'
console.log('per.name修改后',per.name)
console.log('Person.sex静态属性修改前',Person.sex)
Person.sex = '男'
console.log('Person.sex静态属性修改后',Person.sex)
console.log('per.hobby只读属性',per.hobby)