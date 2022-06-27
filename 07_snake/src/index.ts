import './styles/index.less'
import Food from './modules/food'
import ScorePanel from './modules/scorePanel'

// 测试用
const food = new Food()
food.changeFood()
console.log('food',food.getX(),food.getY())


// 测试用
const scorePanel = new ScorePanel()
for(let i =0; i < 200; i++) {
  scorePanel.addScore()
}