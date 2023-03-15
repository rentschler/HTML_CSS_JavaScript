console.log("hello-world!!");

//store hello there inside our id box
var number = 10;
var string = 'Hello There';
var isRad = true;

if (number === 10) {
    console.log("nice")
}
document.getElementById("box").innerHTML = isRad + " " + string;

for (let i = 0; i < 10; i++) {
    console.log(i)
}

var groceries = ['Milk', 'Eggs', 'Cheese']

listGroceries()

document.getElementById("box").addEventListener('click', listGroceries)


function listGroceries(){
    for (let i = 0; i < groceries.length; i++) {
        console.log(groceries[i])
    }
}
