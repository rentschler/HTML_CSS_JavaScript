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
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv").then(function (data) {

    // List of names = header of the csv files
    const keys = data.columns.slice(1);

    const color = ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666']
    const colorScale = d3.scaleOrdinal()
        .domain(keys)
        .range(color);

    //////////
    // AXIS //
    //////////

    let maxYAllDimensions = d3.max(data, function (d) {
        let max = 0;
        keys.forEach(function (key) {
            let maxKey = d3.max(data, function (d) {
                return +d[key];
            });
            if (maxKey > max) {
                max = maxKey;
            }
        });
        return max;
    });
    console.log(maxYAllDimensions);

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
        .domain([0, maxYAllDimensions])
        .range([height, 0])
        .nice();
    svg.append("g")
        .call(d3.axisLeft(y).ticks(5))


    //////////
    // BRUSHING AND CHART //
    //////////


    let clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    // Create the lineChart variable: where both the circles and the brush take place
    let lineChart = svg.append('g')
        .attr("clip-path", "url(#clip)")


    lineChart.selectAll(".area")
        .data(keys)
        .enter()
        .append("path")
        .attr("class", function (d) {
            return "myLine " + d
        })
        .style("fill","none")
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) {
                    return x(d.year);
                })
                .y(function (data) {
                    return y(data[d]);
                })(data)
        })
        .style("stroke", function (d) {
            return colorScale(d);
        });

    //////////
    // HIGHLIGHT GROUP //
    //////////

    // What to do when one group is hovered:
    let highlight = function (d) {
        let clicked = d3.select(this).data()[0];

        console.log(d, clicked)

        d3.selectAll(".myLine").style("opacity", .1);

        // expect the one that is hovered
        d3.select("." + clicked).style("opacity", 1);
    }

    // And when it is not hovered anymore
    var noHighlight = function (d) {
        d3.selectAll(".myLine").style("opacity", 1)
    }

    //////////
    // LEGEND //
    //////////

    // Add one dot in the legend for each name.
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
