// const DUMMY_DATA = [
//     {id: 'd1', value: 10, region: 'USA'},
//     {id: 'd2', value: 9, region: 'India'},
//     {id: 'd3', value: 12, region: 'China'},
//     {id: 'd4', value: 6, region: 'Germany'},
// ];

const pics_class = [
    {src:'static/data/FLOOR_ART/2017-Behrisch_Michael/1_DistanceMatrix.png', title:'1_DistanceMatrix.png', content:'this is a description', id:'h1'},
    {src:'static/data/FLOOR_ART/2002-Hinneburg_Alexander/1_OPTICS.png', title:'1_OPTICS.png', content:'this is a description', id:'h2'},
    {src:'static/data/FLOOR_ART/2013-Rohrdantz_Christian/2011_1_ExploringNaturalLanguages.png', title:'2011_1_ExploringNaturalLanguages.png', content:'this is a description', id:'h3'},
    {src:'https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg', title:'title', content:'this is a description', id:'h4'},
    {src:'https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg', title:'title', content:'this is a description', id:'h5'},
    {src:'https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg', title:'title', content:'this is a description', id:'h6'}
];
console.log(pics_class);


const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 1920;
const CHART_HEIGHT = 1080 - MARGINS.top - MARGINS.bottom;

let numOFBars = pics_class.length;
console.log(numOFBars);

// let selectedData = DUMMY_DATA;
// create a copy of the original array using the spread operator. Here's an example:

let selectedData = pics_class.filter(() => true)
console.log(selectedData);

const charContainer = d3.select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom)

/* ******************************************* */
/* ************** SCALE ********************* */
const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
// const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);#

x.domain(selectedData.map(d => d.id));//specify which data should be scaled
// y.domain([0, d3.max(selectedData, d => d.src) + 3]);//specify which data should be scaled


//render new hexagons with that class bar for all the missing data-points
const chart = charContainer.append('g');//append a svg element, use g to group elements


/* ******************************************* */
/* ************** CHART ********************* */
/**
 * Renders the chart
 */
function renderChart() {
        // axe.call(d3.axisBottom(x).tickSizeOuter(0))//axis bottom extracts the axis information from the scale
    //     //axisBottom defines, that the labels should be below the axis
    //     .attr('color', '#4f009e')
    //     .attr('transform', `translate(0, ${CHART_HEIGHT})`);//move the axis to the bottom of the chart

    console.log(selectedData);

    const hexagons = chart.selectAll('.hex')//select all elements with class bar
        .data(selectedData, data => data.id);//bind data to the elements

    // Add new bars
    hexagons.enter()
        .append('rect')//append a rect element
        .classed('hex', true)//add class bar to the element
        .attr('id', data => data.id);

    // Update existing bars
    chart.selectAll('.hex').attr('height', data => CHART_HEIGHT - 100)
        .attr('width', x.bandwidth())//bandwidth gives us an equal space between the bars
        .attr('height', data => CHART_HEIGHT - 200)
        .attr('x', data => x(data.region))
        .attr('y', data => 100);


    // Remove redundant bars
    chart.selectAll('.hex').data(selectedData, data => data.id).exit().remove();


    //add a click listener to the chars
    chart.selectAll('.hex').on('click', (data) => {
        console.log(data.target.id);
        // toggleSelected(data);
    });

}

renderChart();