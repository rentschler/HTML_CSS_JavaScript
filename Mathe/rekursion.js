
//g(x + y) = x + y − g(x + y − 1)
function g(z){
    if(z === 0) return 0;
    return z - g(z-1);
}
function h(z){
    return Math.ceil(z/2)
}

//tests
for (let i = 0; i < 100; i++) {
    console.log(`i = ${i}, g(i) = ${g(i)}, h(i) = ${h(i)}`)
}