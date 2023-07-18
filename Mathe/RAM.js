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

// let n = 1000;
// let k = 0;
// console.log(`n = ${n}, k = ${k}, r1 = ${divPrime(n,k)}, r2 = ${divPrime2(n,k)}`);

/**
 * log2(n)
 */
function log2(n){
    return Math.floor(Math.log2(n));
}

function log2Prime(n) {
    //RAM syntax
    let [r0, r1, r2, r3, r4] = [+n, 0, 0, 0, 0];
    r1 = 1; // power of 2
    r2 = 1; // one constant
    while (true) {
        r3 = r0 - r1; // subtract power of 2 from n
        if (r3 < 0) break; // if negative, break
        r4 = r4 + r2; // increment counter
        r1 = r1 + r1; // double power of 2
    }
    r0 = r4 - r2;
    return r0;
}

//check if log2 and log2Prime are equivalent

for (let i = 0; i < 100; i++) {
    let n = Math.floor(Math.random() * 1000);
    let r1 = log2(n);
    let r2 = log2Prime(n);
    console.log(`n = ${n}, r1 = ${r1}, r2 = ${r2}, r1 == r2: ${r1 === r2}`)
}

console.log(`n = ${128}, r1 = ${log2(128)}, r2 = ${log2Prime(128)}`);
