function md(x, y) {
    if (x >= y) return x - y;
    else return 0;
}

function mdd(x, y) {
    return md(y, md(y, x));
}

const calcM = x => {
    return Math.floor(Math.log2(x + 1));
}
// console.log(md(1,2));
// console.log(md(2,1));
// console.log(mdd(1,2));
// console.log(mdd(2,1));
// console.log(mdd(2,1));
// console.log(mdd(3,1));
// console.log(mdd(1,33));
// console.log(mdd(12,12));
// for (let i = 1; i < 64; i++) {
//     console.log(`Zahl: ${i}, M: ${calcM(i)}`);
// }
// console.log(`Zahl: ${1234}, M: ${calcM(1234)}`);
// console.log(`Zahl: ${69420}, M: ${calcM(69420)}`);
// console.log(`Zahl: ${1024}, M: ${calcM(1024)}`);
// console.log(`Zahl: ${1023}, M: ${calcM(1023)}`);
// console.log(`Zahl: ${1022}, M: ${calcM(1022)}`);

let dec = 123; // Hier kannst du die Dezimalzahl eingeben, die du in eine Binärzahl umwandeln möchtest

const decimalToBinary = (dec) => {
    console.log(`input : dec: ${dec}`)
    let binary = ""; // Wir starten mit einer leeren Zeichenkette, um die Binärzahl aufzubauen
    while (dec > 0) {
        let remainder = dec % 2; // Wir berechnen den Rest der Division durch 2
        binary = remainder + binary; // Wir fügen den Rest der Binärzahl am Anfang hinzu
        dec = Math.floor(dec / 2); // Wir aktualisieren die Dezimalzahl durch die Division durch 2 (abgerundet)
    }
    console.log(`output: binary: ${binary}`)
    return binary;
}

const binaryToDecimal = (binary) => {
    console.log(`input : binary: ${binary}`)
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        let bit = binary.charAt(i); // Wir lesen das i-te Bit der Binärzahl
        if (bit !== "0" && bit !== "1") // Wir prüfen, ob das Bit eine 0 oder eine 1 ist
            return NaN; // Wenn nicht, geben wir NaN zurück
        decimal = decimal + parseInt(bit) * Math.pow(2, binary.length - i - 1)
    }
    console.log(`output: decimal: ${decimal}`)
    return decimal;
}

const dyadischToDecimal = (dyadisch) => {
    console.log(`input : dyadisch: ${dyadisch}`)
    let decimal = 0;
    for (let i = dyadisch.length - 1; i >= 0; i--) {
        let bit = dyadisch.charAt(i); // Wir lesen das i-te Bit der Binärzahl
        if (bit !== "1" && bit !== "2") // Wir prüfen, ob das Bit eine 0 oder eine 1 ist
            return NaN; // Wenn nicht, geben wir NaN zurück
        decimal = decimal + parseInt(bit) * Math.pow(2, i);
    }
    console.log(`output: decimal: ${decimal}`)
    return decimal;
}
const decimalToDyadisch = (dec) => {
    console.log(`input : dec: ${dec}`)
    let dyadisch = recursive(dec);
    console.log(`output: dyadisch: ${dyadisch}`)
    return dyadisch;
}

const recursive = (dec) => {
    let m = calcM(dec);
    if(m === 0) return "";
    if(calcM(dec - Math.pow(2, m - 1)) === m - 1) return recursive(dec - Math.pow(2, m - 1))+"1";
    else if(calcM(dec - 2 * Math.pow(2, m - 1)) === m - 1) return recursive(dec - 2 * Math.pow(2, m - 1))+"2";
    else return NaN;
}

const dyadischToBinary = (dyadisch) => {
    return decimalToBinary(dyadischToDecimal(dyadisch));
}
console.log(decimalToBinary(123));
console.log(decimalToBinary(7));
console.log(binaryToDecimal(decimalToBinary(123)));
console.log(binaryToDecimal("1100"));
console.log(dyadischToDecimal("2111"));
console.log(decimalToDyadisch(14));
console.log(decimalToDyadisch(69420));
console.log(dyadischToBinary("2122121122221111"));
console.log(dyadischToBinary("12211"));
