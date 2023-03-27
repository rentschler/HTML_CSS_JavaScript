const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

let selectedData = DUMMY_DATA;

const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

const charContainer = d3.select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom)

x.domain(DUMMY_DATA.map(d => d.region));//specify which data should be scaled
y.domain([0, d3.max(DUMMY_DATA, d => d.value) + 3]);//specify which data should be scaled

//render new rectangles with that class bar for all the missing data-points
const chart = charContainer.append('g');//append a svg element, use g to group elements

//label below the bar, x-axis
chart.append('g').call(d3.axisBottom(x).tickSizeOuter(0))//axis bottom extracts the axis information from the scale
    //axisBottom defines, that the labels should be below the axis
    .attr('color', '#4f009e')
    .attr('transform', `translate(0, ${CHART_HEIGHT})`);//move the axis to the bottom of the chart

function renderChart(){
    chart.selectAll('.bar')//select all elements with class bar
        .data(selectedData)//bind data to the elements
        .enter()//get access for the missing elements
        .append('rect')//append a rect element
        .classed('bar', true)//add class bar to the element
        .attr('width', x.bandwidth())//bandwidth gives us an equal space between the bars
        .attr('height', data => CHART_HEIGHT - y(data.value))
        .attr('x', data => x(data.region))
        .attr('y', data => y(data.value));

    chart.selectAll('.bar').data(selectedData).exit().remove();
    //remove the bars that are not needed anymore

//add labels above the bars
    chart.selectAll('.label').data(selectedData).enter()
        .append('text')//adds a text element
        .text(data => data.value)//set the text to the value of the data
        .attr('x', data => x(data.region) + x.bandwidth() / 2)//set the x position to the middle of the bar
        .attr('y', data => y(data.value) - 20)//set the y position to the top of the bar
        .attr('text-anchor', 'middle')//set the anchor to the middle of the text
        .classed('label', true);//add class label to the element

    chart.selectAll('.label').data(selectedData).exit().remove();
    //remove the labels that are not needed anymore
}

renderChart();

//add and remove elements

//keep track of unchecked regions
let unselectedIds = [];

const listItems = d3.select('#data')
    .select('ul')
    .selectAll('li')
    .data(DUMMY_DATA)
    .enter()
    .append('li')
listItems.append('span').text(data => data.region);

listItems.append('input')
    .attr('id', data => data.id)
    .attr('title', data => data.id)
    .attr('type', 'checkbox')
    .attr('checked', true)//set the checkbox to checked
    .on('change', (data) => {
        console.log(data.target.id)
        if (unselectedIds.indexOf(data.target.id) === -1) {
            //if the id is not in the array
            unselectedIds.push(data.target.id);
        } else {
            unselectedIds = unselectedIds.filter(id => id !== data.target.id);
            //only keep the ids that are not equal to the id of the data
        }
        console.log(data);
        console.log(unselectedIds);
        selectedData = DUMMY_DATA.filter(data => unselectedIds.indexOf(data.id) === -1);
        renderChart();
    })//add a listener to the checkbox