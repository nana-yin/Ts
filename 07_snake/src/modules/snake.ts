export default class Snack{
  // 蛇的盒子元素
  snakeEl: HTMLElement;
  // 蛇的头元素
  snakeHeadEl: HTMLElement;
  // 蛇的身体元素
  snakeBodyEl: HTMLCollection;


  constructor() {
    this.snakeEl = document.getElementById('snake')!;
    this.snakeHeadEl = this.snakeEl.querySelector('#snake > div')! as HTMLElement;
    this.snakeBodyEl = this.snakeEl.getElementsByTagName('div');
  }

  // 获取蛇头的x的位置
  getSnakeHeadX() {
    return this.snakeHeadEl.offsetLeft
  }

  // 获取蛇头的y的位置
  getSnakeHeadY() {
    return this.snakeHeadEl.offsetTop
  }

  // 设置蛇头的x的位置
  setSnakeHeadX() {
    this.snakeHeadEl.style.left = this.snakeHeadEl.offsetLeft +'px'
  }

  // 设置蛇头的y的位置
  setSnakeHeadY() {
    this.snakeHeadEl.style.top = this.snakeHeadEl.offsetTop +'px'
  }

  // 增加蛇的长度
  addSnakeLength() {
    this.snakeEl.insertAdjacentHTML('beforeend',"<div></div>")
  }

}