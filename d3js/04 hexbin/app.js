/* https://github.com/d3/d3-plugins/tree/master/hexbin Copyright 2013 Michael Bostock. */
//d3 hexbin library

!function(){d3.hexbin=function(){function u(n){let r={};return n.forEach(function(n,t){let a=s.call(u,n,t)/o,e=Math.round(a),c=h.call(u,n,t)/i-(1&e?.5:0),f=Math.round(c),l=a-e;if(3*Math.abs(l)>1){let v=c-f,g=f+(f>c?-1:1)/2,m=e+(e>a?-1:1),M=c-g,d=a-m;v*v+l*l>M*M+d*d&&(f=g+(1&e?1:-1)/2,e=m)}let j=f+"-"+e,p=r[j];p?p.push(n):(p=r[j]=[n],p.i=f,p.j=e,p.x=(f+(1&e?.5:0))*i,p.y=e*o)}),d3.values(r)}function a(r){let t=0,u=0;return n.map(function(n){let a=Math.sin(n)*r,e=-Math.cos(n)*r,i=a-t,o=e-u;return t=a,u=e,[i,o]})}let e,i,o,c=1,f=1,h=r,s=t;return u.x=function(n){return arguments.length?(h=n,u):h},u.y=function(n){return arguments.length?(s=n,u):s},u.hexagon=function(n){return arguments.length<1&&(n=e),"m"+a(n).join("l")+"z"},u.centers=function(){for(let n=[],r=0,t=!1,u=0;f+e>r;r+=o,t=!t,++u)for(let a=t?i/2:0,h=0;c+i/2>a;a+=i,++h){let s=[a,r];s.i=h,s.j=u,n.push(s)}return n},u.mesh=function(){let n=a(e).slice(0,4).join("l");return u.centers().map(function(r){return"M"+r+"m"+n}).join("")},u.size=function(n){return arguments.length?(c=+n[0],f=+n[1],u):[c,f]},u.radius=function(n){return arguments.length?(e=+n,i=2*e*Math.sin(Math.PI/3),o=1.5*e,u):e},u.radius(1)};let n=d3.range(0,2*Math.PI,Math.PI/3),r=function(n){return n[0]},t=function(n){return n[1]}}();

let data = [
    {title: "Radial Tidy Tree", url: "https://observablehq.com/@d3/radial-tidy-tree"},
    {title: "Factorisation Diagrams", url: "https://www.jasondavies.com/factorisation-diagrams/"},
    {title: "Phylogenetic Tree of Life", url: "https://observablehq.com/@mbostock/tree-of-life"},
    {title: "Geographic Clipping", url: "https://www.jasondavies.com/maps/clip/"},
    {title: "Les Misérables Co-occurrence Matrix", url: "https://bost.ocks.org/mike/miserables/"},
    {title: "L*a*b* and HCL color spaces", url: "https://bl.ocks.org/mbostock/3014589"},
    {title: "Treemap", url: "https://observablehq.com/@d3/treemap"},
    {title: "Map Projection Transitions", url: "https://www.jasondavies.com/maps/transition/"},
    {title: "Across U.S. Companies, Tax Rates lety Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html"},
    {title: "Rotating Voronoi", url: "https://observablehq.com/@mbostock/rotating-voronoi"},
    {title: "Zoomable Geography", url: "https://observablehq.com/@d3/zoom-to-bounding-box"},
    {title: "Fisheye Distortion", url: "https://bost.ocks.org/mike/fisheye/"},
    {title: "Geodesic Rainbow", url: "https://observablehq.com/@mbostock/geodesic-rainbow"},
    {title: "Hierarchical Bar Chart", url: "https://observablehq.com/@d3/hierarchical-bar-chart"},
    {title: "Exoplanets", url: "https://observablehq.com/@mbostock/exoplanets"},
    {title: "Crossfilter", url: "http://square.github.io/crossfilter/"},
    {title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming"},
    {title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/"},
    {title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html"},
    {title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html"},
    {title: "Reprojected Raster Tiles", url: "https://www.jasondavies.com/maps/raster/"},
    {title: "Hive Plots", url: "https://bost.ocks.org/mike/hive/"},
    {title: "Donut Transitions", url: "https://bl.ocks.org/mbostock/4341417"},
    {title: "Non-Contiguous Cartogram", url: "https://observablehq.com/@d3/non-contiguous-cartogram"},
    {title: "Tadpoles", url: "https://observablehq.com/@mbostock/tadpoles"},
    {title: "Zoomable Circle Packing", url: "https://observablehq.com/@d3/zoomable-circle-packing"},
    {title: "Transform Transitions", url: "https://bl.ocks.org/mbostock/1345853"},
    {title: "Scatterplot Matrix", url: "https://observablehq.com/@d3/scatterplot-matrix"},
    {title: "Janet L. Yellen, on the Economy’s Twists and Turns", url: "http://www.nytimes.com/interactive/2013/10/09/us/yellen-fed-chart.html"},
    {title: "Front Row to Fashion Week", url: "http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html"},
    {title: "Interrupted Sinu-Mollweide", url: "https://observablehq.com/@d3/interrupted-sinu-mollweide"},
    {title: "Streamgraph", url: "https://observablehq.com/@mbostock/streamgraph-transitions"},
    {title: "Force-Directed Graph", url: "https://observablehq.com/@d3/force-directed-graph"},
    {title: "Zoomable Icicle", url: "https://observablehq.com/@d3/zoomable-icicle"},
    {title: "Collision Detection", url: "https://bl.ocks.org/mbostock/3231298"},
    {title: "Waterman Butterfly", url: "https://observablehq.com/@d3/watermans-butterfly"},
    {title: "Airocean projection", url: "https://observablehq.com/@fil/airocean-projection"},
    {title: "Countries by Area", url: "https://www.jasondavies.com/maps/countries-by-area/"},
    {title: "Zoomable Sunburst", url: "https://observablehq.com/@d3/zoomable-sunburst"},
    {title: "Map Zooming", url: "https://bl.ocks.org/mbostock/6242308"},
    {title: "Fisher–Yates Shuffle", url: "https://bost.ocks.org/mike/shuffle/"},
    {title: "Sphere Spirals", url: "https://www.jasondavies.com/maps/sphere-spirals/"},
    {title: "World Tour", url: "https://observablehq.com/@mbostock/world-tour"},
    {title: "Zoomable Treemaps", url: "https://observablehq.com/@d3/zoomable-treemap"},
    {title: "Clipped Map Tiles", url: "https://observablehq.com/@d3/clipped-map-tiles"},
    {title: "Horizon Chart", url: "https://observablehq.com/@d3/horizon-chart"},
    {title: "Voronoi Labels", url: "https://observablehq.com/@mbostock/d3-voronoi-labels"},
    {title: "Hexbin Map", url: "https://observablehq.com/@d3/hexbin-map"},
    {title: "OMG Particles!", url: "https://bl.ocks.org/mbostock/1062544"},
    {title: "Calendar View", url: "https://observablehq.com/@d3/calendar-view"},
    {title: "The Wealth & Health of Nations", url: "https://observablehq.com/@mbostock/the-wealth-health-of-nations"},
    {title: "Collapsible Tree", url: "https://observablehq.com/@d3/collapsible-tree"},
    {title: "Hexagonal Binning", url: "https://observablehq.com/@d3/hexbin"},
    {title: "Over the Decades, How States Have Shifted", url: "http://www.nytimes.com/interactive/2012/10/15/us/politics/swing-history.html"},
    {title: "China Still Dominates, but Some Manufacturers Look Elsewhere", url: "http://www.nytimes.com/interactive/2013/04/08/business/global/asia-map.html"},
    {title: "Strikeouts on the Rise", url: "http://www.nytimes.com/interactive/2013/03/29/sports/baseball/Strikeouts-Are-Still-Soaring.html?ref=baseball"},
    {title: "Epicyclic Gearing", url: "https://observablehq.com/@mbostock/epicyclic-gearing"},
    {title: "Voronoi Particles", url: "https://observablehq.com/@mbostock/voronoi-particles"},
    {title: "The state of our union is … dumber", url: "http://www.guardian.co.uk/world/interactive/2013/feb/12/state-of-the-union-reading-level"},
    {title: "Chord Dependency Diagram", url: "https://observablehq.com/@d3/chord-dependency-diagram"},
    {title: "Floating Landmasses", url: "https://observablehq.com/@mbostock/floating-landmasses"},
    {title: "Parallel Coordinates", url: "https://observablehq.com/@d3/parallel-coordinates"},
    {title: "Prime Number Patterns", url: "https://www.jasondavies.com/primos/"},
    {title: "Owls to the Max", url: "https://observablehq.com/@mbostock/owls-to-the-max"},
    {title: "Constellations of Directors and Their Stars", url: "http://www.nytimes.com/newsgraphics/2013/09/07/director-star-chart/index.html"},
    {title: "Drought and Deluge in the Lower 48", url: "http://www.nytimes.com/interactive/2012/08/11/sunday-review/drought-history.html"},
    {title: "Animated Bézier Curves", url: "https://www.jasondavies.com/animated-bezier/"},
    {title: "Histogram", url: "https://observablehq.com/@d3/histogram"},
    {title: "Stacked-to-Grouped Bars", url: "https://observablehq.com/@d3/stacked-to-grouped-bars"},
    {title: "Force-Directed States of America", url: "https://bl.ocks.org/mbostock/1073373"},
    {title: "Faux-3D Arcs", url: "http://bl.ocks.org/dwtkns/4973620"},
    {title: "512 Paths to the White House", url: "http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html"},
    {title: "Polar Clock", url: "https://observablehq.com/@mbostock/polar-clock"},
    {title: "Population Pyramid", url: "https://observablehq.com/@mbostock/u-s-population-by-age-and-sex/3"},
    {title: "The America’s Cup Finale: Oracle’s Path to Victory", url: "http://www.nytimes.com/interactive/2013/09/25/sports/americas-cup-course.html"},
    {title: "Rainbow Worm", url: "https://observablehq.com/@mbostock/rainbow-worm"},
    {title: "Four Ways to Slice Obama’s 2013 Budget Proposal", url: "http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html"},
    {title: "Quadtree", url: "https://bl.ocks.org/mbostock/4343214"},
    {title: "Bubble Chart", url: "https://observablehq.com/@d3/bubble-chart"},
    {title: "Women as Academic Authors, 1665-2010", url: "http://chronicle.com/article/Woman-as-Academic-Authors/135192/"},
    {title: "Choropleth", url: "https://observablehq.com/@d3/choropleth"},
    {title: "Gilbert’s Two-World Perspective", url: "https://www.jasondavies.com/maps/gilbert/"},
    {title: "For Eli Manning, 150 Games and Counting", url: "http://www.nytimes.com/newsgraphics/2013/09/28/eli-manning-milestone/index.html"},
    {title: "Word Tree", url: "https://www.jasondavies.com/wordtree/"},
    {title: "Mobile Patent Suits", url: "https://observablehq.com/@mbostock/mobile-patent-suits"},
    {title: "Mitchell’s Best-Candidate", url: "https://observablehq.com/@mbostock/best-candidate-circles"},
    {title: "Sankey Diagrams", url: "https://observablehq.com/@d3/sankey-diagram"},
    {title: "van Wijk Smooth Zooming", url: "https://observablehq.com/@d3/smooth-zooming"},
    {title: "Bryce Harper: A swing of beauty", url: "http://www.washingtonpost.com/wp-srv/special/sports/bryce-harper-swing-of-beauty/"},
    {title: "Dissecting a Trailer: The Parts of the Film That Make the Cut", url: "http://www.nytimes.com/interactive/2013/02/19/movies/awardsseason/oscar-trailers.html"},
    {title: "Bar Chart Race, Explained", url: "https://observablehq.com/@d3/bar-chart-race-explained"},
    {title: "Hierarchical Edge Bundling", url: "https://observablehq.com/@d3/hierarchical-edge-bundling"},
    {title: "Geographic Bounding Boxes", url: "https://www.jasondavies.com/maps/bounds/"},
    {title: "Mona Lisa Histogram", url: "https://observablehq.com/@d3/mona-lisa-histogram"},
    {title: "Zoomable Map Tiles", url: "https://observablehq.com/@d3/zoomable-map-tiles"},
    {title: "D3 Show Reel", url: "https://bl.ocks.org/mbostock/1256572"},
    {title: "Building Hamiltonian Graphs from LCF Notation", url: "http://christophermanning.org/projects/building-cubic-hamiltonian-graphs-from-lcf-notation"},
    {title: "Sequences sunburst", url: "https://observablehq.com/@kerryrodden/sequences-sunburst"},
    {title: "Azimuth and Distance from London", url: "https://www.jasondavies.com/maps/azimuth-distance/"},
    {title: "Parallel Sets", url: "https://www.jasondavies.com/parallel-sets/"}
];

data.forEach(function(d, i) {
    d.i = i % 10;
    d.j = i / 10 | 0;
});
console.log(data);

d3.shuffler(d3.randomLcg(d3.utcHour()))(data);

let height = 1000,
    imageWidth = 500,
    imageHeight = 500,
    radius = 75,
    depth = 4;

let currentFocus = [innerWidth / 2, height / 2],
    desiredFocus,
    idle = true;

let style = document.body.style,
    transform = ("webkitTransform" in style ? "-webkit-"
        : "MozTransform" in style ? "-moz-"
            : "msTransform" in style ? "-ms-"
                : "OTransform" in style ? "-o-"
                    : "") + "transform";

let hexbin = d3.hexbin()
    .radius(radius);

// if (!("ontouchstart" in document)) d3.select("#examples")
//     .on("mousemove", mousemoved);

let deep = d3.select("#examples-deep");

let canvas = deep.append("canvas")
    .attr("height", height);

let context = canvas.node().getContext("2d");

let svg = deep.append("svg")
    .attr("height", height);

// let mesh = svg.append("path")
//     .attr("class", "example-mesh");

let anchor = svg.append("g")
    .attr("class", "example-anchor")
    .selectAll("a");

let graphic = deep.selectAll("svg,canvas");

let image = new Image;
// image.src = "C:\\Git\\GitHub\\HTML_CSS_JavaScript\\d3js\\04 hexbin\\REDUCED";
image.src = "REDUCED";
image.onload = resized;

d3.select(window)
    .on("resize", resized)
    .each(resized);

function drawImage(d) {
    context.save();
    context.beginPath();
    context.moveTo(0, -radius);

    for (let i = 1; i < 6; ++i) {
        let angle = i * Math.PI / 3,
            x = Math.sin(angle) * radius,
            y = -Math.cos(angle) * radius;
        context.lineTo(x, y);
    }

    context.clip();
    context.drawImage(image,
        imageWidth * d.i, imageHeight * d.j,
        imageWidth, imageHeight,
        -imageWidth / 2, -imageHeight / 2,
        imageWidth, imageHeight);
    context.restore();
}

function resized() {
    let deepWidth = innerWidth * (depth + 1) / depth,
        deepHeight = height * (depth + 1) / depth,
        centers = hexbin.size([deepWidth, deepHeight]).centers();

    desiredFocus = [innerWidth / 2, height / 2];
    moved();

    graphic
        .style("left", Math.round((innerWidth - deepWidth) / 2) + "px")
        .style("top", Math.round((height - deepHeight) / 2) + "px")
        .attr("width", deepWidth)
        .attr("height", deepHeight);

    centers.forEach(function(center, i) {
        center.j = Math.round(center[1] / (radius * 1.5));
        center.i = Math.round((center[0] - (center.j & 1) * radius * Math.sin(Math.PI / 3)) / (radius * 2 * Math.sin(Math.PI / 3)));
        context.save();
        context.translate(Math.round(center[0]), Math.round(center[1]));
        drawImage(center.example = data[(center.i % 10) + ((center.j + (center.i / 10 & 1) * 5) % 10) * 10]);
        context.restore();
    });

    // mesh.attr("d", hexbin.mesh);

    anchor = anchor.data(centers, function(d) { return d.i + "," + d.j; });

    anchor.exit().remove();

    let anchorEnter = anchor.enter().append("a")
        .attr("xlink:href", function(d) { return d.example.url; })
        .attr("xlink:title", function(d) { return d.example.title; });

    anchorEnter.append("path")
        .attr("d", hexbin.hexagon());

    anchor = anchorEnter.merge(anchor)
        .attr("transform", function(d) { return "translate(" + d + ")"; });
}

function mousemoved(event) {
    let m = d3.pointer(event);

    desiredFocus = [
        Math.round((m[0] - innerWidth / 2) / depth) * depth + innerWidth / 2,
        Math.round((m[1] - height / 2) / depth) * depth + height / 2
    ];

    moved();
}

function moved() {
    let t = d3.timer(function() {
        if (Math.abs(desiredFocus[0] - currentFocus[0]) < .5 && Math.abs(desiredFocus[1] - currentFocus[1]) < .5) currentFocus = desiredFocus, t.stop();
        else currentFocus[0] += (desiredFocus[0] - currentFocus[0]) * .14, currentFocus[1] += (desiredFocus[1] - currentFocus[1]) * .14;
        deep.style(transform, "translate(" + (innerWidth / 2 - currentFocus[0]) / depth + "px," + (height / 2 - currentFocus[1]) / depth + "px)");
    });
}