let sum = 2;
const i = sum;
for (let j = 0; j < i; j++) {
    sum += sum;
    sum += sum;
}
console.log(sum);
console.log(Math.pow(2,9));