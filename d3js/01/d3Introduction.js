// A library for manipulating documents (html dom) based on data
// d3.js allows you to automatically (re-)render HTML & SVG elements on your page
// console.log(d3);

const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

//scaling function
const xScale = d3.scaleBand() // all bars should have the same width
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0, 250])//lower, upper bound
    .padding(0.1);//percentage padding between the items
//calculate the height of the data points dynamically
const yScale = d3.scaleLinear()
    .domain([0, 15]) //allows us t ospecify wich min/max value we want to map into our char
    //"my values are between zero and 15"
    .range([200, 0]); //actual available space in pixels


// we want to render a bar chart
const container = d3.select('svg')
    .classed('container', true);//attach css class
const bars = container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data => 200 - yScale(data.value)))
    .attr('id' , data => "rect" + data.id)
    .attr('x', data => xScale(data.region))
    .attr('y', data => yScale(data.value));

//tooltip

const tool = d3.select("body").append("div")
    .attr("display", "none")
    .attr("position", "absolute");

bars.on("mouseenter", function (d) {
    let id = d3.select(this).attr("id").replace("rect", "");
    let region = DUMMY_DATA.find(data => data.id === id).region;
    console.log(region);
    tool.attr("display", "block")
        // .classed("tooltip", true)
        .attr("left", d3.event.pageX + 10)
        .attr("top", d3.event.pageY + 10)
        .html(`<p>Region: ${region}</p>`)
})
    .on("mouseLeave", function (d) {
        tool.attr("display", "none")
    });

// setTimeout(() => {
//     bars.data(DUMMY_DATA.slice(0, 2))
//         .exit()//gives all the elements that are to much and should be removed
//         .remove();
// }, 2000)

//create paragraphs
/*d3.select('div')//first div element in the file
    .selectAll('p')//select all paragraph elements
    .data(DUMMY_DATA) /!*on a selection we can call data to bind this selection to that data, it typically contains an array*!/
    // .data([1, 2, 69]) /!*on a selection we can call data to bind this selection to that data, it typically contains an array*!/
    .enter()//tell me which paragraphs are missing
    .append('p')//add the missing paragraph to the div
    .text(dta => dta.region ) // output the datapoint values*/

// d3.select('#id');
// d3.select('.class');
