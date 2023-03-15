// get the canvas element
const canvas = document.getElementById("myCanvas");

let pointsXAndY = [];//[[0, 0], [100, 100]]
let pointsX = [];
let pointsY = []

// get the 2D rendering context
const ctx = canvas.getContext("2d");

// draw the x and y axes
ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.stroke();
//arrow Y
drawLine(255,5,250,0)
drawLine(245,5,250,0)
//y
drawLine(230,5,240,20)
drawLine(240,5,235,13)
//arrow x
drawLine(495,245,500,250)
drawLine(495,255,500,250)
//x
drawLine(500,270,490,260)
drawLine(490,270,500,260)

// draw a point at (33, 44)
// drawPoint(0, 0)
// drawPoint(100, 100)

// draw a line from (1, 2) to (5, 7)
// ctx.beginPath();
// ctx.moveTo(canvas.width/2 + 1, canvas.height/2 - 2);
// ctx.lineTo(canvas.width/2 + 5, canvas.height/2 - 7);
// ctx.stroke();

//set the text of the average field
document.getElementById("averageX").innerText = "\nMean x: \n"
document.getElementById("averageY").innerText = "Mean y: \n"
document.getElementById("dX").innerText = "standard deviation x: \n"
document.getElementById("dY").innerText = "standard deviation y: \n"

//eventListeners
document.getElementById("myCanvas").addEventListener("click", divPressed);

//functions
/**
 * at a mouse-click: draw a point
 * @param elem -
 */
function divPressed(elem) {
    //get the x and y position and subtract 9 for the offset of the mouse pointer
    let x = elem.pageX;
    let y = elem.pageY;
    console.log("X: " + x + ", Y: " + y)

    if (x === undefined || y === undefined || isNaN(x)) {
        // undefined value
        return
    }
    //adjust the x and y - value corresponding to the offset
    x = x - 250 - 9
    y = y - 9

    if (y > 250) {
        y *= -1
        y += 250
    } else {
        y = 250 - y
    }

    //log the value
    pointsXAndY.push([x, y])
    pointsX.push(x)
    pointsY.push(y)
    console.log("X: " + x + ", Y: " + y)
    drawPoint(x, y)

    //change the text of average field
    document.getElementById("averageX").innerText =
        "\nMean x: " + calculateAverage(pointsXAndY, 0) + "\n"
    document.getElementById("averageY").innerText =
        "Mean y: " + calculateAverage(pointsXAndY, 1) + "\n"
    document.getElementById("dX").innerText =
        "standard deviation x: " + calculateDeviation(pointsX).toString() + "\n"
    document.getElementById("dY").innerText =
        "standard deviation y: " + calculateDeviation(pointsY).toString() + "\n"
}

function drawLine(x0,y0,x1,y1){
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

/**
 * draw the point on the scatter plot
 * @param x coordinate
 * @param y coordinate
 */
function drawPoint(x, y) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x, canvas.height / 2 - y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

/**
 * calculate the average value
 * @param a two dimensional array [[x1,y1],...]
 * @param fst if 0 then get the x values, if 1 get the y values
 * @returns {number} average value
 */
function calculateAverage(a, fst) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i][fst]
    }
    return Math.round(100 * sum / a.length) / 100
}

/**
 * calculate
 * @param array one-dimensional array containing coordinates
 * @returns {number} standard deviation
 */
function calculateDeviation(array) {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    const variance = array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n;
    return  Math.round(100 * Math.sqrt(variance))/100;
}
