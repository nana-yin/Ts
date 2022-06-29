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

    /**
     * 检查蛇是否会在水平位置往回走
     *   如果蛇一开始是向右走，想要水平向左走的话：
     *      可以直接判断当前的蛇头位置是否与第2节身体的位置相同
     *          如果相同，则反向（向右）移动，即左边的键盘不起作用。
     */
    // value是蛇将要移动的位置，this.snakeBodyEl[1]是蛇第2节身体的位置
    if (this.snakeBodyEl[1] && (value === (this.snakeBodyEl[1] as HTMLElement).offsetLeft)) {
      // this.snakeHeadX 是蛇当前的位置
      if (this.snakeHeadX > value) {
        // 想要往左边走，原本是缩小，不允许缩小，所以向右走变大
        value = this.snakeHeadX + 10;
      } else {
        // 想要往右边走，原本是变大，不允许变大，所以向左走缩小
        value = this.snakeHeadX - 10;
      }
    }

    // 检查蛇是否撞到了自己


    // 将蛇的头部和身体进行拼接，并且移动
    this.headJoinBody()

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

    /**
     * 检查蛇是否会在垂直位置往回走
     *   如果蛇一开始是向上走，想要向下走的话：
     *      可以直接判断当前的蛇头位置是否与第2节身体的位置相同
     *          如果相同，则反向（向上）移动，即上边的键盘不起作用。
     */
    // value是蛇将要移动的位置，this.snakeBodyEl[1]是蛇第2节身体的位置
    if (this.snakeBodyEl[1] && (value === (this.snakeBodyEl[1] as HTMLElement).offsetTop)) {
      // this.snakeHeadX 是蛇当前的位置
      if (this.snakeHeadY > value) {
        // 想要往左边走，原本是缩小，不允许缩小，所以向右走变大
        value = this.snakeHeadY + 10;
      } else {
        // 想要往右边走，原本是变大，不允许变大，所以向左走缩小
        value = this.snakeHeadY - 10;
      }
    }


    // 将蛇的头部和身体进行拼接，并且移动
    this.headJoinBody()

    // 更改蛇头的坐标
    this.snakeHeadEl.style.top = value + 'px';
  }

  // 增加蛇的长度
  addSnakeLength() {
    this.snakeEl.insertAdjacentHTML('beforeend',"<div></div>")
  }

  /**
   * 将蛇的头部和身体进行拼接，并且移动
   * 从后往前进行移动，从前往后移动会获取不到前一个位置数据
   * 移动规则：每一段身体的第N个部分，要移动到N-1个部分的位置
   *    例如：
   *        第4节的位置 = 第3节的位置
   *        第3节的位置 = 第2节的位置
   *        第2节的位置 = 蛇头的位置
   */
  headJoinBody() {
    for (let i = this.snakeBodyEl.length - 1; i > 0; i--) {
      /**
       * 获取身体应该移动到的位置
       *  如果i = 3（第四节），应该获取 2 的位置（第三节）
       */
      let X = (this.snakeBodyEl[i-1] as HTMLElement).offsetLeft;
      let Y = (this.snakeBodyEl[i-1] as HTMLElement).offsetTop;

      // 将值赋值要当前的身体上
      (this.snakeBodyEl[i] as HTMLElement).style.left = X + 'px';
      (this.snakeBodyEl[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}