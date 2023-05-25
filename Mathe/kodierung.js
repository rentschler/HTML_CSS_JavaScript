function c(x,y){
    return Math.pow(2,x) * (2*y+1) - 1;
    // 2^x * (2y+1) - 1
}

function inverseC(c){
    let obj = {x:0,
        y:0};
    c++;
    //x is the amount of times we can divide c+1 by 2
    while((c)%2 === 0){
        c = (c)/2;
        obj.x++;
    }
    obj.y = (c-1)/2;
    return obj;
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`x = ${i}, y = ${j}, c = ${c(i,j)}`);
    }
}

console.log(inverseC(50470911))
console.log(c(13,3080))
// for (let i = 0; i < 100; i++) {
//
// }
for (let i = 0; i < 1000; i++) {

console.log(c(inverseC(i).x,inverseC(i).y))
}

console.log(inverseC(0))

