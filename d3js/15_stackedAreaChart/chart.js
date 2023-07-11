// set the dimensions and margins of the graph
var margin = {
        top: 60,
        right: 230,
        bottom: 50,
        left: 50
    },
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

// TODO: Right now, the SVG has a fixed size in pixels. Can you modify the code below to make it responsive (dynamically resizable), without changing any other values in the script (Tip: Search for SVG viewbox)
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv").then(function (data) {

    //////////
    // GENERAL //
    //////////

    // TODO: Analyze the data, you will see a csv file with names and yearly numbers

    // List of names = header of the csv files
    const keys = data.columns.slice(1);
    console.log(data)
    console.log(keys)

    // TODO: Create a ordinal color palette: One color for each name
    const color = ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666']
    const colorScale = d3.scaleOrdinal()
        .domain(keys)
        .range(color);

    //////////
    // AXIS //
    //////////

    // Add X axis
    let x = d3.scaleLinear()
        .domain(d3.extent(data, function (d) {
            return d.year;
        }))
        .range([0, width]);
    let xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))

    // Add X axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height + 40)
        .text("Time (year)");

    // Add Y axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", 0)
        .attr("y", -20)
        .text("# of baby born")
        .attr("text-anchor", "start")

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, 200000])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y).ticks(5))


    //////////
    // BRUSHING AND CHART //
    //////////

    // Create stacked data (Tip: check d3.stack)

    let stackGen = d3.stack()
        .keys(keys)
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

    let stackedData = stackGen(data);

    console.log(stackedData)


    // TODO: Try to understand what this clipPath does (e.g. by activating/deactivating it)
    let clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    // Create the scatter variable: where both the circles and the brush take place
    let areaChart = svg.append('g')
        .attr("clip-path", "url(#clip)")

    // TODO: Write an area generator (d3.area, remember you need to defined accesors for x, y0 and y1. We have defined the necessary scales x and y)
    let area = d3.area()
        .x(function (d) {
            return x(d.data.year);
        })
        .y0(function (d) {
            return y(d[0]);
        })
        .y1(function (d) {
            return y(d[1]);
        });

    // Show the areas
    areaChart
        .selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
        .attr("class", function (d) {
            return "myArea " + d.key
        })
        .style("fill", function (d) {
            return colorScale(d.key);
        })
        .attr("d", area)

    //////////
    // HIGHLIGHT GROUP //
    //////////

    // What to do when one group is hovered:
    // TODO: Add a hovering effect by reducing the opacity of all areas, except the one you are currently hovering over.
    //  Remember that you have given each area a class based on it's index
    let highlight = function (d) {
        let clicked = d3.select(this).data()[0];

        console.log(d, clicked)

        d3.selectAll(".myArea").style("opacity", .1);

        // expect the one that is hovered
        d3.select("." + clicked).style("opacity", 1);
    }

    // And when it is not hovered anymore
    var noHighlight = function (d) {
        d3.selectAll(".myArea").style("opacity", 1)
    }

    //////////
    // LEGEND //
    //////////

    // Add one dot in the legend for each name. TODO: Try to understand what happens here
    var size = 20
    svg.selectAll("myrect")
        .data(keys.reverse())
        .enter()
        .append("rect")
        .attr("x", 400)
        .attr("y", function (d, i) {
            return 10 + i * (size + 5)
        }) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function (d) {
            return colorScale(d)
        })
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
        .data(keys)
        .enter()
        .append("text")
        .attr("x", 400 + size * 1.2)
        .attr("y", function (d, i) {
            return 10 + i * (size + 5) + (size / 2)
        }) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function (d) {
            return colorScale(d)
        })
        .text(function (d) {
            return d
        })
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .on("mouseover", highlight)
        .on("mouseleave", noHighlight)

})
