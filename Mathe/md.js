function md(x,y){
    if(x>=y)return x-y;
    else return 0;
}

function mdd(x,y){
    return md(y,md(y,x));
}

const calcM = x => {
    return Math.floor(Math.log2(x+1));
}
// console.log(md(1,2));
// console.log(md(2,1));
// console.log(mdd(1,2));
// console.log(mdd(2,1));
// console.log(mdd(2,1));
// console.log(mdd(3,1));
// console.log(mdd(1,33));
// console.log(mdd(12,12));
for (let i = 1; i < 64; i++) {
    console.log(`Zahl: ${i}, M: ${calcM(i)}`);
}
console.log(`Zahl: ${1234}, M: ${calcM(1234)}`);
console.log(`Zahl: ${69420}, M: ${calcM(69420)}`);
console.log(`Zahl: ${1024}, M: ${calcM(1024)}`);
console.log(`Zahl: ${1023}, M: ${calcM(1023)}`);
console.log(`Zahl: ${1022}, M: ${calcM(1022)}`);