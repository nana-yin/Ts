import './styles/index.less';
class Food {
    constructor() {
        // 加感叹号的含义：表示不用考虑当前的dom元素为空的情况
        this.element = document.getElementById('food');
    }
    // 获取食物的x位置
    getX() {
        return this.element.offsetTop;
    }
    // 获取食物的y位置
    getY() {
        return this.element.offsetLeft;
    }
    // 更改食物的位置
    changeFood() {
        this.element.style.top = '100px';
        this.element.style.left = '100px';
    }
}
// 测试用
const food = new Food();
food.changeFood();
console.log('food', food.getX(), food.getY());
