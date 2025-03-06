let main = function () {

    let $div = $('.aa');
    $div.click(function () {
        setTimeout(function () {
            console.log("xh")
        }, 2000);
    });

    let $div2 = $('.cc');
    $div2.click(function () {
        let interval = setInterval(function () {
            console.log("hhh")
        }, 2000);
        clearInterval(interval);
    });
    

}
export {
    main
};