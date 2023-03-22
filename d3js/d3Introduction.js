// A library for manipulating documents (html dom) based on data
// d3.js allows you to automatically (re-)render HTML & SVG elements on your page
// console.log(d3);

const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

// we want to render a bar chart
const container = d3.select('div')
    .classed('container', true)//attach css class
    .style('border', '1px solid red')//inline styling
container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', (data => data.value * 15 + 'px'));


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
