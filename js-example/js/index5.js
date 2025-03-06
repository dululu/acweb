//事件
// 鼠标交互
// 键盘事件交互
// 窗口交互
// 表单交互
let div = document.querySelector('div');
let input = document.querySelector('input');

let main5 = function() {
    div.addEventListener('dblclick', function(event) {
        console.log(event.type);
    });
    div.addEventListener('mousedown', function(event) {
        console.log(event.type,event.button);
    });

    input.addEventListener('keydown', function(event) {
        console.log(event.type,event.code,event.shiftKey);
    });
    input.addEventListener('keydown', function(event) {
        console.log(event.type,event.code,event.shiftKey);
    });

    input.addEventListener('focus', function(event) {
        console.log(event.type);
    });
    input.addEventListener('change', function(event) {
        console.log(event.type);
    });


}

export { main5 };   