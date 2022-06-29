import Food from './food'
import ScorePanel from './scorePanel'
import Snake from './snake'

// 游戏的控制器
export default class GameControl {
  // 食物
  food: Food;
  // 计分板
  scorePanel: ScorePanel;
  // 蛇
  snake: Snake;
  // 控制蛇移动的方向
  directionMove: string;

  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.directionMove = 'Right';

    this.init()
  }

  // 初始化
  init() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    // 调用run方法，使蛇移动
    this.run()
  }

  /**
   * @param event 控制键盘上下左右的事件
   * 谷歌浏览器：ArrowUp  ArrowDown  ArrowLeft  ArrowRight
   * IE：Up  Down  Left  Right
   */
  keyDownHandler(event:KeyboardEvent) {
    const arr = ['ArrowUp','ArrowDown', 'ArrowLeft','ArrowRight', 'Up','Down', 'Left', 'Right']
    if (arr.indexOf(event.key) !== -1) {
      this.directionMove = event.key
    }
  }

  // 蛇移动
  run() {
    // 获取蛇现在的坐标
    let X = this.snake.snakeHeadX
    let Y = this.snake.snakeHeadY
    let time = 300 - (this.scorePanel.level - 1 ) * 30

    // 根据移动的方向来判断蛇的X、Y坐标
    switch(this.directionMove) {
      // 蛇向上移动的时候，top 减少
      case 'ArrowUp' || 'Up':
        Y -= 10;
        break;
      // 蛇向下移动的时候，top 增加
      case 'ArrowDown' || 'Down':
        Y += 10;
        break;
      // 蛇向左移动的时候，left 减少
      case 'ArrowLeft' || 'Left':
        X -= 10;
        break;
      // 蛇向右移动的时候，left 增加
      case 'ArrowRight' || 'Right':
        X += 10;
        break;
    }

    // 修改蛇的位置
    this.snake.snakeHeadX = X
    this.snake.snakeHeadY = Y
    
    setTimeout(() => {
      this.run()
    }, time)
  }
}