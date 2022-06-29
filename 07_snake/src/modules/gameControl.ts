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
  // 游戏是否结束
  isLive: boolean;

  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.directionMove = 'Right';
    this.isLive = true

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

    // 检查蛇是否吃到食物
    this.checkSnakeEatFood(X, Y)

    try {
      // 修改蛇的位置
      this.snake.snakeHeadX = X
      this.snake.snakeHeadY = Y
    } catch (e:any) {
      alert(e.message + '  GAME OVER！')
      // 游戏结束标志
      this.isLive = false
    }
    
    this.isLive && setTimeout(() => {
      this.run()
    }, time)
  }


  // 检查蛇是否吃到食物
  checkSnakeEatFood(X:number, Y:number) {
    console.log('X', X, this.food.X)
    console.log('Y', Y, this.food.Y)
    // 蛇吃到食物之后
    if ((X === this.food.X) && (Y === this.food.Y)) {
      // 更改食物的位置
      this.food.changeFood();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇的身体增加
      this.snake.addSnakeLength();
    }
  }
}