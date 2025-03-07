let main = function () {

    let $div = $('.aa');
    $div.click(function () {
        setTimeout(function () {
            console.log("xh")
        }, 2000);
    });

    let $div2 = $('.cc');
    $div2.click(function () {  
        // window.open("https://www.acwing.com")
        location.reload()
    });
    

}
export {
    main
};