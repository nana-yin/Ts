export default class Snack{
  // 蛇的盒子元素
  snakeEl: HTMLElement;
  // 蛇的头元素
  snakeHeadEl: HTMLElement;
  // 蛇的身体元素
  snakeBodyEl: HTMLCollection;

  constructor() {
    this.snakeEl = document.getElementById('snake')!;
    this.snakeHeadEl = this.snakeEl.querySelector('#snake > div') as HTMLElement;
    this.snakeBodyEl = this.snakeEl.getElementsByTagName('div');
  }

  // 获取蛇头的x的位置
  get snakeHeadX() {
    return this.snakeHeadEl.offsetLeft;
  }

  // 获取蛇头的y的位置
  get snakeHeadY() {
    return this.snakeHeadEl.offsetTop;
  }

  // 设置蛇头的x的位置
  set snakeHeadX(value:number) {
    // 如果蛇头的位置和要更改的位置一样，则返回
    if(this.snakeHeadX === value) {
      return;
    }

    // X值的合法范围： 0-290  检查蛇是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }
    // 更改蛇头的坐标
    this.snakeHeadEl.style.left = value + 'px';
  }

  // 设置蛇头的y的位置
  set snakeHeadY(value:number) {
    // 如果蛇头的位置和要更改的位置一样，则返回
    if(this.snakeHeadY === value) {
      return;
    }
    // Y值的合法范围： 0-290  检查蛇是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }
    // 更改蛇头的坐标
    this.snakeHeadEl.style.top = value + 'px';
  }

  // 增加蛇的长度
  addSnakeLength() {
    this.snakeEl.insertAdjacentHTML('beforeend',"<div></div>")
  }
}