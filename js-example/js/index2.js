//数组

let s = []; //空数组
let x = {} //空对象
let z = [1,2,"ff",[1,2,3],{name:"zhangsan",age:18}]

let main2 = function(){
    console.log(typeof s);
    console.log(z.length);
    z.push(100,101);
    z.pop();
    console.log(z);
}
export {
    main2
}