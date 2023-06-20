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


function prod(x, y) {
    var a = [1];
    var b = [x];
    var i = 0;
    var z = 0;

    while (a[i] <= y) {
        a[i + 1] = a[i] + a[i];
        b[i + 1] = b[i] + b[i];
        i++;
    }

    while (i > 0) {
        i--;
        if (a[i] <= y) {
            y -= a[i];
            z += b[i];
        }
    }

    return z;
}

/**
 * integer division
 * @param x
 * @param y
 */
function div(x,y) {
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

    while (i >= 0) {
        if (b[i] <= x) {
            x -= b[i];
            z += a[i];
        }
        i--;
    }

    return z;
}

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





