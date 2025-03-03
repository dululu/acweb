//对象
// this 返回拥有该方法的对象
let person = {
    name: '张三',
    age: 18,
    money: 100,
    friends: ['李四', '王五'],
    clothes: {
        color: 'red',
        size: 'large'
    },
    add_money: function (num) {
        this.money += num
    },
}

function main() {
    person.add_money(100);
    console.log(person)
    console.log(person.money)
    console.log(person["money"])    
}

export {
    main
}