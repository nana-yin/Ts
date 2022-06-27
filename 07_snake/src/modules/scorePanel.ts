// 定义分数等级面板类
export default class ScorePanel {
  // 用来记录分数和等级
  score:number = 0;
  level:number = 1;
  // 分数和等级所在的元素，在构造函数中初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 限制等级
  maxLevel:number;
  // 分数达到是多少可以升级
  maxScoreUp:number;

  constructor(maxLevel:number = 10,maxScoreUp:number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;

    this.maxLevel = maxLevel;
    this.maxScoreUp = maxScoreUp;
  }

  // 增加分数
  addScore() {
    // 使分数自增
    this.scoreEle.innerHTML = ++this.score +''
    // 当分数达到多少的时候，就进行等级的更改
    if (!(this.score % this.maxScoreUp)) {
      this.levelUp()
    }
  }

  // 更改等级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level +''
    }
  }

}

