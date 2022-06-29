
// 食物类
export default class Food {
  element: HTMLElement;

  constructor() {
    // 加感叹号的含义：表示不用考虑当前的dom元素为空的情况
    this.element = document.getElementById('food')!;
  }

  // 获取食物的x位置
  get X() {
    return this.element.offsetLeft;
  }

  // 获取食物的y位置
  get Y() {
    return this.element.offsetTop;
  }


  // 更改食物的位置
  changeFood() {
    let top = Math.floor(Math.random() * 29) * 10
    let left = Math.floor(Math.random() * 29) * 10

    this.element.style.top = top+ 'px'
    this.element.style.left = left+ 'px'
  }
}
