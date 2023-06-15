// A library for manipulating documents (html dom) based on data
// d3.js allows you to automatically (re-)render HTML & SVG elements on your page
// console.log(d3);
let data_src = 'https://raw.githubusercontent.com/curran/data/gh-pages/uci_ml/auto-mpg/auto-mpg.csv';

d3.csv(data_src).then(function(data) {
    //only a slice of the data
    data = data.slice(0, 50);
    console.log(data)
    draw(data);
});

function draw(data) {
    // const DUMMY_DATA = [
    //     {id: 'd1', value: 10, region: 'USA'},
    //     {id: 'd2', value: 11, region: 'India'},
    //     {id: 'd3', value: 12, region: 'China'},
    //     {id: 'd4', value: 6, region: 'Germany'},
    // ];
    const DUMMY_DATA = data;

    let width = 1000;
    let height = 800;

//scaling function
    const xScale = d3.scaleBand() // all bars should have the same width
        .domain(DUMMY_DATA.map(dataPoint => dataPoint.name))
        .rangeRound([0, width])//lower, upper bound
        .padding(0.1);//percentage padding between the items
//calculate the height of the data points dynamically
    const yScale = d3.scaleLinear()
        .domain([50,0])
        //"my values are between zero and 15"
        .range([height, 0]); //actual available space in pixels


// we want to render a bar chart
    const container = d3.select('svg')
        .attr('width', width)
        .attr('height', height)
        .classed('container', true);//attach css class
    const bars = container.selectAll('.bar')
        .data(DUMMY_DATA)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', xScale.bandwidth())
        .attr('height', (data => height - yScale(data.mpg)))
        .attr('id', data => "rect" + data.name)
        .attr('x', data => xScale(data.name))
        .attr('y', data => yScale(data.mpg));

//tooltip

    const tool = d3.select("body").append("div")
        .attr("id", "tooltip")
        .attr("display", "none")
        .attr("position", "absolute");

    bars.on("mouseover", function (d, e) {
        tool.style("visibility", "visible")
            .text(e.value)
    })
        .on("mousemove", function (d, e) {
            tool.style("top", (d.pageY - 10) + "px")
                .style("left", (d.pageX + 10) + "px")
                .text(e.name);
        })
        .on("mouseout", function (d) {
            tool.style("visibility", "hidden");
        });
}

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
