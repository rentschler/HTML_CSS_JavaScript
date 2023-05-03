let a0 = 0, b1= 0, c2 = 0;
a0=1;
b1=1;
a0 = a0 + a0;
a0 = a0 + a0;
c2 = a0 + a0;
console.log(`R0 = ${a0}, R1 = ${b1}, R2 = ${c2}`);
do {
    a0 = a0 + a0;
    c2 = c2 - b1;
} while (c2 > 0);
console.log(`R0 = ${a0}, R1 = ${b1}, R2 = ${c2}`);
