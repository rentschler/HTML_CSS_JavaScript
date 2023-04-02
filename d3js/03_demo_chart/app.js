const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 9, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];
const DUMMY_VALUE = DUMMY_DATA.map(data => data.value);
const REGIONS =
    ['USA', 'India', 'China', 'Germany', 'Japan', 'Canada', 'Mexico', 'Brazil',
        'Italy', 'Australia', 'Russia', 'Spain', 'France', 'United Kingdom',
        'South Korea', 'Turkey', 'Indonesia', 'Nigeria', 'Egypt', 'Saudi Arabia'];

const MARGINS = {top: 20, bottom: 10};
const CHART_WIDTH = 600;
const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

let numOFBars = DUMMY_DATA.length;

// let selectedData = DUMMY_DATA;
// create a copy of the original array using the spread operator. Here's an example:

let selectedData = DUMMY_DATA.filter(() => true)

const charContainer = d3.select('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom)

/* ******************************************* */
/* ************** SCALE ********************* */
const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

function adjustScale() {
    x.domain(selectedData.map(d => d.region));//specify which data should be scaled
    y.domain([0, d3.max(selectedData, d => d.value) + 3]);//specify which data should be scaled
}

adjustScale();


//render new rectangles with that class bar for all the missing data-points
const chart = charContainer.append('g');//append a svg element, use g to group elements

/* ******************************************* */
/* ************** AXES ********************* */
const axe = chart.append('g');
axe.call(d3.axisBottom(x).tickSizeOuter(0))//axis bottom extracts the axis information from the scale
    //axisBottom defines, that the labels should be below the axis
    .attr('color', '#4f009e')
    .attr('transform', `translate(0, ${CHART_HEIGHT})`);//move the axis to the bottom of the chart

/* ******************************************* */


/* ************** CHART ********************* */
function renderChart() {
    adjustScale();
    axe.call(d3.axisBottom(x).tickSizeOuter(0))//axis bottom extracts the axis information from the scale
        //axisBottom defines, that the labels should be below the axis
        .attr('color', '#4f009e')
        .attr('transform', `translate(0, ${CHART_HEIGHT})`);//move the axis to the bottom of the chart

    console.log(toString(selectedData));

    const bars = chart.selectAll('.bar')//select all elements with class bar
        .data(selectedData, data => data.id);//bind data to the elements

    // Add new bars
    bars.enter()
        .append('rect')//append a rect element
        .classed('bar', true)//add class bar to the element
        .attr('id', data => data.id);

    // Update existing bars
    chart.selectAll('.bar').attr('height', data => CHART_HEIGHT - y(data.value))
        .attr('width', x.bandwidth())//bandwidth gives us an equal space between the bars
        .attr('height', data => CHART_HEIGHT - y(data.value))
        .attr('x', data => x(data.region))
        .attr('y', data => y(data.value));


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
    // .attr('x', data => x(data.region)+5);
    //Remove the labels that are not needed anymore
    chart.selectAll('.label').data(selectedData, data => data.id).exit().remove();

    //add a click listener to the chars
    chart.selectAll('.bar').on('click', (data) => {
        console.log(data.target.id);
        toggleSelected(data);
        listItems.select(`#${data.target.id}`).property('checked', false);
        if(isAltMode)
        addNew();
    });

    //change the color of the first element
    chart.selectAll('.bar').attr('fill', (data, index) => index === 0 ? 'red' : 'steelblue');

    // Set the font size based on the number of bars
    const numBars = selectedData.length;
    const fontSize = numBars <= 7 ? '16px' : `${100 / numBars}px`;

    // Set the font size of the labels
    chart.selectAll('.label')
        .style('font-size', fontSize);
    axe.selectAll('text')
        .style('font-size', fontSize);
}
renderChart();




/* ******************************************* */
/* ************** checkboxes ********************* */
let unselectedIds = [];
const listItems = d3.select('#data')
    .select('ul')
    .selectAll('li')
    .data(DUMMY_DATA)
    .enter()
    .append('li')

listItems.append('span').text(data => data.region);


/* ******************************************* */
/* ************** CLICK LISTENERS ********************* */
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
        //delete element
        //if the id is not in the array, add it
        unselectedIds.push(data.target.id);
        selectedData = selectedData.filter(data => unselectedIds.indexOf(data.id) === -1);

    } else {
        //add element
        unselectedIds = unselectedIds.filter(id => id !== data.target.id);
        //only keep the ids that are not equal to the id of the data
        selectedData = DUMMY_DATA.filter(data => unselectedIds.indexOf(data.id) === -1);

    }
    console.log(data);
    console.log(unselectedIds);
    renderChart();
}


/* ******************************************* */
/* ************** BUTTONS ********************* */
const BUTTON_NAMES = [
    {id: 'b1', name: 'Reset'},
    {id: 'b2', name: 'Random'},
    {id: 'b3', name: 'Sort'},
    {id: 'b4', name: 'Add'},
    {id: 'b5', name: 'Rerender'},
    {id: 'b6', name: 'Toggle Alt Mode'}
];


//const btn = d3.select('#buttons').classed('btnClass', true);
d3.select('#buttons').selectAll('.btn')
    .data(BUTTON_NAMES)
    .enter().append('button')
    .classed('btn', true)
    .text(data => data.name)
    .attr('id', data => data.id)
    // .attr('title', data => data.id)
    .attr('type', 'button')
    .classed('button', true);

// d3.select('#buttons').selectAll('.tglBtn')
//     .data(BUTTON_NAMES)
//     .enter().append('switch')
//     .classed('tglBtn', true)
//     .text(data => data.name)
//     .attr('id', data => data.id)
//     // .attr('title', data => data.id)
//     .attr('type', 'button')
//     .classed('button', true);
d3.select('#b1').on('click', () => {
    selectedData[0].value = DUMMY_VALUE[0];
    console.log('reset');
    selectedData = DUMMY_DATA.filter(() => true);
    unselectedIds = [];
    renderChart();
    listItems.select('input').property('checked', true);
});

//give the second button an event listener
d3.select('#b2').on('click', () => {
        console.log('btn02');
        selectedData[0].value = Math.round(Math.random() * 15);
        console.log(DUMMY_VALUE);

        renderChart();
    }
);


d3.select('#b3').on('click', () => {
    console.log('btn03');
    console.log(toString(selectedData));
    selectedData.sort((a, b) => a.value - b.value);
    renderChart();
    console.log(toString(selectedData));
    // Update the positions of the bars
    chart.selectAll(".bar")
        .data(selectedData, data => data.id)
        .transition()
        .duration(500)
        .attr("x", data => x(data.region))
        .attr("y", data => y(data.value))
        .attr("height", data => CHART_HEIGHT - y(data.value));

    // Update the positions of the labels
    chart.selectAll(".label")
        .data(selectedData, data => data.id)
        .transition()
        .duration(500)
        .attr("x", data => x(data.region) + x.bandwidth() / 2)
        .attr("y", data => y(data.value) - 20);
    renderChart();

});
function toString(data) {
    let result = "";
    for (let i = 0; i < data.length; i++) {
        result += `id: ${data[i].id}, value: ${data[i].value}, region: ${data[i].region}\n`;
    }
    return result;
}

d3.select('#b4').on('click', () => {
    addNew();
});

function addNew() {
    let name = REGIONS[numOFBars];
    if (!name) name = `region${numOFBars}`;
    console.log('add');
    numOFBars++;
    selectedData.push({id: `d${numOFBars}`, value: (Math.round(Math.random() * 12)), region: `${name}`});
    console.log(selectedData);
    renderChart();
}
d3.select('#b5').on('click', () => {
    console.log('rerender');
    renderChart();
});
let isAltMode = false;
d3.select('#b6').on('click', () => {
    console.log('toggle alt');
    isAltMode = !isAltMode;
})