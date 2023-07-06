let promise = new Promise(function (resolve, reject) {
    let returnVal = Math.random()
    setTimeout(
        () => (returnVal > .5) ? resolve(returnVal) : reject("error"), 1000
    )
});

promise.then(
    (val) => console.log(val),
    (err) => console.log(err)
);

// d3.fetch("https://api.punkapi.com/v2/beers")
//     .then((response) => {
//         if (response.status !== 200) throw new Error(response.statusText);
//     }


//async /await
// async marks a function as asynchronous. E.g. it could be executed out of order.
// it will not be executed directly.
// call a function with `await` to wait for the result of the function.

async function fetchData() {
    let response = await fetch("https://api.punkapi.com/v2/beers");
    let data = await response.json();
    console.log(data);
    return data;
}

fetchData().then((data) => console.log(data));



/*********************/


let c1 = "black",
    c2 = "white",
    jndWidth = .1
legible = noticeablyDifferent(c1, c2); // true


// create an event handler that is called on 'input' of the HTML color input
// update the color values and the jndWidth
// check if the 2 colors are noticeably different (https://github.com/connorgr/d3-jnd)
// update the HTML span with the JND result

let foo = () =>{
    c1 = d3.select("#color1").property("value");
    c2 = d3.select("#color2").property("value");
    jndWidth = d3.select("#angle").property("value");
    console.log(c1);
    legible = noticeablyDifferent(c1, c2, jndWidth); // true

    d3.select("#jnd").text(legible)
}

let input = d3.select("#color1")
    .on("change", foo);

d3.select("#color2")
    .on("change", foo);

d3.select("#angle")
    .on("input", foo);







// write an asyncronous function that
// gets an image of a dog from the url "https://random.dog/woof.json"
// update the src tag of our HTML image with the url of the response

async function getDog() {
    let response = await fetch("https://random.dog/woof.json");
    let data = await response.json();
    if(data["url"].includes(".mp4")){
        console.log("mp4");
        return getDog();
    }
    console.log(data);
    return data;
}

let newDogBtn = d3.select("#new-img")
    .on("click", function () {
        console.log("fetching new dog image")
        getDog().then((data) => {
            d3.select("#img").attr("src", data.url);
        });
    });

let btn = d3.select("body").append("button")
    .text("click me")
    .classed("btn btn-outline-primary", true)
    .on("click", function () {
        console.log("clicked");
        getDog().then((data) => {
            let image = new Image();
            image.src = data.url;
            let width = image.width;
            let height = image.height;
            console.log(width, height);


            d3.select("body").append("img")
                .attr("src", data.url)
                .attr("width", 300)
                // .attr("height", 300)
                .attr("alt", "doggo")
        });
    });







//attach an event handler that calls your asyncronous function when the button is clicked



