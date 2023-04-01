const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

// let selectedData = DUMMY_DATA;
// create a copy of the original array using the spread operator. Here's an example:

// let selectedData = [...DUMMY_DATA];
let selectedData = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];
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
    const bars = chart.selectAll('.bar')//select all elements with class bar
        .data(selectedData, data => data.id);//bind data to the elements
    // Update existing bars
    chart.selectAll('.bar').attr('height', data => CHART_HEIGHT - y(data.value))
        .attr('x', data => x(data.region))
        .attr('y', data => y(data.value));

    //create new bars
    // chart.selectAll('.bar')
    //     .data(selectedData, data => data.id)
    //     .enter()//get access for the missing elements
    //     .append('rect')//append a rect element
    //     .classed('bar', true)//add class bar to the element
    //     .attr('id', data => data.id)
    //     .attr('width', x.bandwidth())//bandwidth gives us an equal space between the bars
    //     .attr('height', data => CHART_HEIGHT - y(data.value))
    //     .attr('x', data => x(data.region))
    //     .attr('y', data => y(data.value));
    bars.enter()
        .append('rect')//append a rect element
        .classed('bar', true)//add class bar to the element
        .attr('id', data => data.id)
        .attr('width', x.bandwidth())//bandwidth gives us an equal space between the bars
        .attr('height', data => CHART_HEIGHT - y(data.value))
        .attr('x', data => x(data.region))
        .attr('y', data => y(data.value))
        .merge(bars)
        .transition()
        .duration(500)
        .attr('width', x.bandwidth());


    // Remove redundant bars
    chart.selectAll('.bar').data(selectedData, data => data.id).exit().remove();

    //Add labels above the bars
    chart.selectAll('.label').data(selectedData, data => data.id).enter()
        .append('text')//adds a text element
        .text(data => data.value)//set the text to the value of the data
        .attr('x', data => x(data.region) + x.bandwidth() / 2)//set the x position to the middle of the bar
        .attr('y', data => y(data.value) - 20)//set the y position to the top of the bar
        .attr('text-anchor', 'middle')//set the anchor to the middle of the text
        .classed('label', true);//add class label to the element

    //Update existing labels
    chart.selectAll('.label').data(selectedData, data => data.id)
        .attr('y', data => y(data.value) - 20)
        .text(data => data.value)
        .attr('x', data => x(data.region) + x.bandwidth() / 2);
    //Remove the labels that are not needed anymore
    chart.selectAll('.label').data(selectedData, data => data.id).exit().remove();

    //add a click listener to the chars
    chart.selectAll('.bar').on('click', (data) => {
        console.log(data.target.id);
        toggleSelected(data);
        listItems.select(`#${data.target.id}`).property('checked', false);
    });
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
        //add a listener to the checkbox
        toggleSelected(data);
    })
function toggleSelected(data) {
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
    selectedData = [
        {id: 'd1', value: 10, region: 'USA'},
        {id: 'd2', value: 11, region: 'India'},
        {id: 'd3', value: 12, region: 'China'},
        {id: 'd4', value: 6, region: 'Germany'},
    ].filter(data => unselectedIds.indexOf(data.id) === -1);
    renderChart();
}



const BUTTON_NAMES = [
    {id: 'b1', name: 'Reset'},
    {id: 'b2', name: 'Test'},
    {id: 'b3', name: 'Sort'}
];
//add a button to reset the chart
const btn = d3.select('#reset').select('button').data(BUTTON_NAMES).enter().append('button');
btn.text(data => data.name)
    .attr('id', data => data.id)
    .attr('title', data => data.id)
    .attr('type', 'btn');

d3.select('#b1').on('click', () => {
    console.log('reset');
    selectedData= DUMMY_DATA;
    unselectedIds = [];
    renderChart();
    listItems.select('input').property('checked', true);
});
//give the second button an event listener


d3.select('#b2').on('click', () => {
    console.log('btn02');
    selectedData[0].value = Math.round(Math.random()*15);
    console.log(DUMMY_DATA[0].value);

    renderChart();
}
);
d3.select('#b3').on('click', () => {
    console.log('btn03');
    console.log(toString(DUMMY_DATA));
    selectedData.sort((a, b) => a.value - b.value);
    console.log(toString(DUMMY_DATA));
    renderChart();
});

function toString(data) {
    let result = "";
    for (let i = 0; i < data.length; i++) {
        result += `id: ${data[i].id}, value: ${data[i].value}, region: ${data[i].region}\n`;
    }
    return result;
}

