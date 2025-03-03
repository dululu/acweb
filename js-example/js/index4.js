//类
// 继承 不同种类共有的点    
// 静态方法定义 在前面加一个static，默认的是非静态方法
// 通过类名调用静态方法

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    init() {
        this.sum = this.x + this.y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
    static ps() {
        console.log('static method');
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);  //调用父类的constructor(x,y),完成初始化
        this.color = color;  // 在super之后，否则会报错
    }
    toString() {
        return this.color + ' ' + super.toString();  //调用父类的toString()
        //return `${this.color} ${super.toString()}`;  //模板字符串
    }
}


let main4 = function () {
    // let p = new Point(1,2);
    // let p2 = new Point(3,4);  // 实例，每一个对象表示当前实例.this指向当前实例

    // console.log(p.toString());
    // console.log(p2.toString());
    // console.log(p.x,p.y);
    let color = new ColorPoint(1, 2, 'red');
    console.log(color.toString());
    Point.ps(); //调用静态方法
}

export { main4 }