let buf = "";
process.stdin.on("readable",function() {
    let chunk = process.stdin.read();
    if(chunk) buf += chunk.toString();
});

process.stdin.on("end",function() {
    let n = parseInt(buf);
    console.log(n);
    let money = [100,50,20,10,5,2,1];

    for (let p of money){
        console.log(`${parseInt(n/p)} nota(s) de R$ ${p},00`);
        n %= p;
    }
});

