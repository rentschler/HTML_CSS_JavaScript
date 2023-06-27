// function prod( x, y)
// begin
//     a[0] := 1;
//     b[0] := x;
//     i:= 0;
//     while (a[i]<=y) do begin
//         a[i+1] := a[i] + a[i];
//         b[i+1] := b[i] + b[i];
//         i := (i + 1);
//     end;
//     while(i>0) do begin
//         i:= (i-1);
//         if(a[i]<=y) then begin
//             y := (y - a[i]);
//             z := (z + b[i]);
//         end;
//     prod:= z;
// end;


/**
 * integer division in javascript
 */
function div(x,y) {
    if(y === 0) return x;
    var a = [1];
    var b = [y];
    var i = 0;
    var z = 0;
//x div y
    /*get the biggest i, with 2^i * y <= x*/
    while (b[i] <= x) {
        a[i + 1] = a[i] + a[i];
        b[i + 1] = b[i] + b[i];
        i++;
    }
    // console.log(a,b,i)
    while (i >= 0) {
        i--;
        if (b[i] <= x) {
            x -= b[i];
            z += a[i];
        }
    }

    return z;
}

// console.log(div(3,2));

//
// /*in RIES*/
// function div(x,y)
//     begin
//     a[0] := 1;
//     b[0] := y;
//     if(y = 0) then div:= x else do begin
//         while (b[i]<=x) do begin
//             a[i +1] := a[i] + a[i];
//             b[i +1] := b[i] + b[i];
//             i := (i + 1)
//         end;
//         while(i>0) do begin
//             if(b[i]<=x) then begin
//             x := (x - b[i]);
//             z := (z + a[i])
//             i:= (i-1);
//         end;
//         div:= z;
//     end;
// end;


// console.log(prod(99, 5));

//tests

console.log(div(99, 5), Math.floor(99/5));
console.log(div(8, 2), Math.floor(8/2));
console.log(div(8, 3), Math.floor(8/3));
console.log(div(7, 3), Math.floor(7/3));
console.log(div(1000,1000), Math.floor(1000/1000));
console.log(div(1000,1), Math.floor(1000/1));
console.log(div(1000,2), Math.floor(1000/2));
console.log(div(1000,3), Math.floor(1000/3));
console.log(div(42,0), Math.floor(42/0));


/**
 * for any input check if exp(x,y) = z without using Math.pow
 * @param x
 * @param y
 * @param zz
 * @returns {*}
 */
function xyz(x,y,zz) {
    var a = [1];
    var b = [x];
    var i = 0;
    var z = 0;
    while (b[i] <= zz) {
        a[i + 1] = a[i] * a[i];
        b[i + 1] = b[i] * b[i];
        i++;
    }
    while(i>0) {
        i--;
        if (b[i] <= zz) {
            zz /= b[i];
            z += a[i];
        }
    }
    return z;
}

/**
 * in RIES
 */

// function xyz(x,y,z);
// begin
//     w := 1;
//     while(w<z) do begin
//         w := (w * x);
//     end;
//     xyz := (w = z);
// end;


console.log(xyz(2,3,8));
console.log(xyz(2,3,9));
console.log(xyz(2,10,1024));



