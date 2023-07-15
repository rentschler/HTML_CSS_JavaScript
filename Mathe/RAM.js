// let a0 = 0, b1= 0, c2 = 0;
// a0=1;
// b1=1;
// a0 = a0 + a0;
// a0 = a0 + a0;
// c2 = a0 + a0;
// console.log(`R0 = ${a0}, R1 = ${b1}, R2 = ${c2}`);
// do {
//     a0 = a0 + a0;
//     c2 = c2 - b1;
// } while (c2 > 0);
// console.log(`R0 = ${a0}, R1 = ${b1}, R2 = ${c2}`);

 function divPrime(n,k){
    return Math.ceil(n/(k+1));
 }

 function divPrime2(n,k){
    let [r0,r1,r2,r3]= [+n,+k,0,0];
    r3 = 1;
    r1 = r1 + r3;
    do {
        r2 = r2 + r3;
        r0 = r0 - r1;
    } while (r0 > 0);
    r0 = r2;
    return r0;
}



//check if divPrime and divPrime2 are equivalent

// for (let i = 0; i < 100; i++) {
//     let n = Math.floor(Math.random() * 1000);
//     let k = Math.floor(Math.random() * 1000);
//     let r1 = divPrime(n,k);
//     let r2 = divPrime2(n,k);
//     console.log(`n = ${n}, k = ${k}, r1 = ${r1}, r2 = ${r2}, r1 == r2: ${r1 === r2}`)
// }

let n = 1000;
let k = 0;
console.log(`n = ${n}, k = ${k}, r1 = ${divPrime(n,k)}, r2 = ${divPrime2(n,k)}`);