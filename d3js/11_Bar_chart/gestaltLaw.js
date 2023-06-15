/*Gestalt laws is a explanation of how we see things. How our brain organizes and groups information
continuity law - if the curve is smooth we group it together
proximity law - if things are close together we group them together
closure - if we see a shape that is not complete we fill in the gaps
figures and ground - we see the figure and the background*/



//Data loading
//use csv when working with data delimited files
d3.dsv(",", "test.csv", (d) => {
    //for each row in the csv file
    //return an object with the following properties
    return {
        name: d.name,
        length: +d.length,
    }
}).then((data) => {
    //wait for the data to load
    console.log(data);
})
//d3.dsv returns a promise

//d3.csv only needs a file path and a .then() callback.


//Gestalt law.
//Foodmobile logo:
//closure:  the fruits build a car 
//proximity: the objects are close to each other, so they form something

//addidas
//Figure and ground: we either see the three ovals(black) or the white stripes
//closure you can complete the ovals with your eyes

//tokyo 2020 olympics
// connectednes: the yellow breaks of the shape of the two but you can still see the two as a whole

//McDonalds
//continuity: you smooth line 
//symmetry: it's symmetric based on the vertical axis

//F1 formula
//figure ground: F and the red lines vs the one

//Amnesty
//Proximity
//figure and ground: small hands (red) and big hand (white)

//beats
//closure: you close the gap in the outer ring

//Huawei
//symmetry: its symmetric

//asus
//continuity: we can still read the letters although there is a whit eline through it

//Mystery Islands
//proximity: they are close to each other