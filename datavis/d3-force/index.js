//four steps to implement d3-force
//1. create a simulation
//2. create a force
//3. add the force to the simulation
//4. add the simulation to the elements


var w = 750,h = 600;

var svg = d3.select("#chartdiv").append("svg").attr("width",w)
    .attr("height",h);

var node_data = [
    { "x": 599.9489445065991, "y": 306.1411964242783, "r": 13.256488050848318 }, { "x": 397.0593126266189, "y": 258.8744624309164, "r": 6.005458392309022 }, { "x": 558.3902096809361, "y": 198.30975256722496, "r": 6.464012352808089 }, { "x": 657.4509858399921, "y": 78.8103609769106, "r": 10.675771464095689 }, { "x": 389.628184341556, "y": 249.8696251562278, "r": 5.9570393181712955 }, { "x": 502.47096770258935, "y": 193.51669039608154, "r": 3.801996810213578 }, { "x": 361.4151889566336, "y": 123.26303282139511, "r": 12.688325251736291 }, { "x": 275.06377325632747, "y": 177.30592137494517, "r": 8.010852950809522 }, { "x": 441.3045888812206, "y": 163.77591251741893, "r": 3 }, { "x": 482.59108840718307, "y": 267.3410576156902, "r": 5.069372998095664 }, { "x": 426.81322179648475, "y": 203.71853139914177, "r": 4.034048277775862 }, { "x": 337.705797759481, "y": 169.73110586708958, "r": 12.90672212175106 }, { "x": 329.32243113132125, "y": 168.6885139745862, "r": 11.876472139521454 }, { "x": 545.4635797267423, "y": 303.35133973701005, "r": 5.932655412951153 }, { "x": 479.6174867417641, "y": 232.60514460507778, "r": 16.90274466220143 }, { "x": 465.90488043134815, "y": 214.81155799078593, "r": 3 }, { "x": 36.970810753490056, "y": 160.0919820880072, "r": 17.341948675992395 }, { "x": 557.509637648954, "y": 323.43559728055334, "r": 3 }, { "x": 364.38488924068014, "y": 245.5003769702188, "r": 4.1755451817922475 }, { "x": 287.41561692950023, "y": 228.86251431670695, "r": 11.374391572491733 }, { "x": 529.3633890013842, "y": 196.2527442698863, "r": 10.859292835056293 }, { "x": 136.13654745731992, "y": 314.757943408038, "r": 6.819902272946076 }, { "x": 403.75868522174324, "y": 235.05808570292425, "r": 10.254830938794385 }, { "x": 496.90896063308816, "y": 367.29295015451004, "r": 6.558176638086125 }, { "x": 533.3661391569198, "y": 255.84390841873025, "r": 16.914878155002732 }, { "x": 255.17915305330752, "y": 142.08273297002688, "r": 14.598209451771812 }, { "x": 596.5059627486766, "y": 253.61815247026448, "r": 5.065082228829257 }, { "x": 274.9163915143988, "y": 285.05870693850767, "r": 5.535899810907489 }, { "x": 662.2953948951547, "y": 335.26654809275334, "r": 16.226575551440092 }, { "x": 500.81361250382326, "y": 92.96156872159793, "r": 9.955461098557194 }, { "x": 418.9568253526507, "y": 280.58750961171205, "r": 3 }, { "x": 538.0444761290644, "y": 244.34462727714612, "r": 8.650842152411832 }, { "x": 557.6652804220205, "y": 246.5571962896606, "r": 10.76525829644362 }, { "x": 565.5337021407536, "y": 291.8294709885191, "r": 3 }, { "x": 393.8973004563132, "y": 240.5112126119003, "r": 10.758157939068496 }, { "x": 373.911235641714, "y": 165.7731787662937, "r": 3 }, { "x": 734.4960217539885, "y": 217.3632922892572, "r": 11.448520888472142 }, { "x": 362.33548741117335, "y": 227.81491752736778, "r": 8.580206676100252 }, { "x": 525.2440185673635, "y": 318.7999393477937, "r": 5.71749188247023 }, { "x": 704.2427458720534, "y": 209.87349554290824, "r": 14.46843636843965 }, { "x": 335.8000714973567, "y": 221.73456463066677, "r": 6.097604134978409 }, { "x": 427.98349911269025, "y": 314.79449501726657, "r": 7.184909340014161 }, { "x": 480.2638406384485, "y": 249.32953623855, "r": 5.034742355069681 }, { "x": 480.09701938758036, "y": 170.52261893133678, "r": 5.377391390038158 }, { "x": 410.4236912351791, "y": 195.38476906032645, "r": 15.932105980907112 }, { "x": 445.70808607183045, "y": 258.7109636934383, "r": 3.3034151736953703 }, { "x": 251.86693682397805, "y": 145.7721604276773, "r": 8.696039107220672 }, { "x": 514.2455874300828, "y": 253.6521970671774, "r": 4.125609249006761 }, { "x": 534.1940504507717, "y": 232.30514996175188, "r": 15.316712641682408 }, { "x": 392.52897981004077, "y": 193.90304556582788, "r": 19.409343505969012 }, { "x": 466.15846509881857, "y": 424.80947570005026, "r": 11.612619096251668 }, { "x": 519.0207555142863, "y": 211.1903728960614, "r": 8.261445447839137 }, { "x": 618.601817817387, "y": 272.4092028425378, "r": 10.877766449648574 }, { "x": 500.72470614276784, "y": 183.56768523044192, "r": 8.906873436286194 }, { "x": 585.7033701183713, "y": 306.7265806033661, "r": 6.20883734861755 }, { "x": 97.16629286186414, "y": 263.4477625752983, "r": 9.823345370130754 }, { "x": 557.5053386951911, "y": 340.48406193564375, "r": 16.812008646141315 }, { "x": 623.1314126680256, "y": 267.0159519062608, "r": 14.921033663872894 }, { "x": 231.56955539431985, "y": 192.42996343576195, "r": 15.255401801471592 }, { "x": 420.4093571417819, "y": 182.13248418858333, "r": 6.045300559985268 }, { "x": 263.68181779348726, "y": 269.66829768911805, "r": 5.355130099389716 }, { "x": 527.228251147763, "y": 205.44602108247597, "r": 3 }, { "x": 450.3026082259865, "y": 303.2035573454608, "r": 10.51160617539805 }, { "x": 378.27639369431915, "y": 265.16953245164956, "r": 10.271929642532072 }, { "x": 275.3915756120755, "y": 236.95842025757364, "r": 9.2291658276454 }, { "x": 428.79613934777433, "y": 237.48776193707727, "r": 3.0115935158489924 }, { "x": 424.27754741956085, "y": 281.0643873501904, "r": 3 }, { "x": 635.4070533094447, "y": 309.92201959923847, "r": 4.749043922667272 }, { "x": 515.424192063725, "y": 336.26164895021213, "r": 7.7078713384384265 }, { "x": 582.268390813792, "y": 208.38378349745437, "r": 3 }, { "x": 447.7791700092732, "y": 293.61039245789107, "r": 13.314894571104933 }, { "x": 619.5821580723122, "y": 429.3173800824363, "r": 7.728053408697173 }, { "x": 580.5966556570371, "y": 290.47608299880363, "r": 6.311216661302663 }, { "x": 645.1997717638311, "y": 296.57753989703355, "r": 11.320372450802843 }, { "x": 171.4423571651756, "y": 240.94665842387786, "r": 9.768734008531936 }, { "x": 549.9680744023939, "y": 174.66272315108438, "r": 5.816150258486525 }, { "x": 381.4508841891835, "y": 360.73248667332973, "r": 9.918581214203808 }, { "x": 349.4622366298029, "y": 229.14246870982865, "r": 6.210572257346147 }, { "x": 457.54448676541034, "y": 249.1150769247391, "r": 3 }, { "x": 438.189631224852, "y": 359.71461960808307, "r": 3 }, { "x": 510.6932794423521, "y": 161.92148201178557, "r": 16.60340380013752 }, { "x": 344.44736124855876, "y": 189.7324590703805, "r": 5.9315411001832565 }, { "x": 576.8089619485027, "y": 234.63389598789368, "r": 14.051532531302811 }, { "x": 674.3350935993427, "y": 259.2645828536171, "r": 7.980792080371882 }, { "x": 410.85967776289186, "y": 220.55050162769808, "r": 3 }, { "x": 481.96729068483944, "y": 306.8904843412346, "r": 12.90809587750929 }, { "x": 387.7014409289485, "y": 240.33012887691294, "r": 8.244703785035101 }, { "x": 418.8183612586459, "y": 173.14854918305446, "r": 12.273663937151948 }, { "x": 484.7862223151072, "y": 284.3594271927902, "r": 18.667288341649666 }, { "x": 440.71953420915884, "y": 220.28642294886706, "r": 7.948010877366004 }, { "x": 350.05473260919064, "y": 244.36060323039052, "r": 10.910112727229636 }, { "x": 533.1808793149762, "y": 137.041627317833, "r": 10.04676278135608 }, { "x": 523.6682154661472, "y": 199.21491687340162, "r": 10.724439162166496 }, { "x": 568.3480564970381, "y": 263.82267530728325, "r": 12.330177218916639 }, { "x": 626.2215470227904, "y": 269.2257578273753, "r": 12.10700346871716 }, { "x": 399.7032433013444, "y": 249.34960025096922, "r": 13.192868911570178 }, { "x": 577.0006448649083, "y": 198.32329047755553, "r": 4.919257664068077 }, { "x": 511.713387047668, "y": 189.03930944142903, "r": 7.324166431333374 }, { "x": 477.69279458469236, "y": 200.5685646371567, "r": 14.326455621208906 }, { "x": 248.82677722347353, "y": 284.1205387095447, "r": 10.763809574236292 }]

var edge_data = [
    { "source": 0, "target": 12 }, { "source": 1, "target": 47 }, { "source": 2, "target": 80 }, { "source": 3, "target": 12 }, { "source": 4, "target": 62 }, { "source": 5, "target": 67 }, { "source": 6, "target": 59 }, { "source": 7, "target": 86 }, { "source": 8, "target": 55 }, { "source": 9, "target": 39 }, { "source": 10, "target": 8 }, { "source": 11, "target": 95 }, { "source": 12, "target": 49 }, { "source": 13, "target": 21 }, { "source": 14, "target": 79 }, { "source": 15, "target": 65 }, { "source": 17, "target": 35 }, { "source": 18, "target": 40 }, { "source": 19, "target": 5 }, { "source": 20, "target": 48 }, { "source": 21, "target": 67 }, { "source": 22, "target": 19 }, { "source": 23, "target": 25 }, { "source": 24, "target": 16 }, { "source": 25, "target": 15 }, { "source": 26, "target": 6 }, { "source": 27, "target": 91 }, { "source": 28, "target": 22 }, { "source": 29, "target": 60 }, { "source": 30, "target": 19 }, { "source": 31, "target": 24 }, { "source": 32, "target": 96 }, { "source": 33, "target": 71 }, { "source": 34, "target": 20 }, { "source": 35, "target": 49 }, { "source": 36, "target": 97 }, { "source": 37, "target": 88 }, { "source": 38, "target": 88 }, { "source": 39, "target": 82 }, { "source": 40, "target": 72 }, { "source": 41, "target": 36 }, { "source": 42, "target": 97 }, { "source": 43, "target": 93 }, { "source": 44, "target": 89 }, { "source": 45, "target": 42 }, { "source": 46, "target": 88 }, { "source": 47, "target": 44 }, { "source": 48, "target": 84 }, { "source": 49, "target": 17 }, { "source": 50, "target": 44 }, { "source": 51, "target": 91 }, { "source": 52, "target": 14 }, { "source": 53, "target": 57 }, { "source": 54, "target": 44 }, { "source": 55, "target": 78 }, { "source": 56, "target": 96 }, { "source": 57, "target": 64 }, { "source": 58, "target": 74 }, { "source": 59, "target": 29 }, { "source": 60, "target": 99 }, { "source": 61, "target": 55 }, { "source": 62, "target": 40 }, { "source": 63, "target": 95 }, { "source": 64, "target": 9 }, { "source": 65, "target": 8 }, { "source": 66, "target": 72 }, { "source": 67, "target": 81 }, { "source": 68, "target": 70 }, { "source": 69, "target": 60 }, { "source": 70, "target": 43 }, { "source": 71, "target": 67 }, { "source": 72, "target": 55 }, { "source": 73, "target": 83 }, { "source": 75, "target": 1 }, { "source": 76, "target": 36 }, { "source": 77, "target": 78 }, { "source": 78, "target": 18 }, { "source": 79, "target": 8 }, { "source": 80, "target": 40 }, { "source": 81, "target": 52 }, { "source": 82, "target": 79 }, { "source": 83, "target": 2 }, { "source": 84, "target": 20 }, { "source": 85, "target": 34 }, { "source": 86, "target": 37 }, { "source": 87, "target": 27 }, { "source": 88, "target": 44 }, { "source": 89, "target": 83 }, { "source": 90, "target": 33 }, { "source": 91, "target": 82 }, { "source": 92, "target": 91 }, { "source": 93, "target": 66 }, { "source": 94, "target": 39 }, { "source": 95, "target": 8 }, { "source": 96, "target": 89 }, { "source": 97, "target": 92 }, { "source": 98, "target": 3 }, { "source": 99, "target": 44 }]

// TODO-1:
// Draw the edge and circles





//1. make a copy of the data
let nodes = node_data.map(d => Object.create(d));
let edges = edge_data.map(d => Object.create(d));

//2. create the simulation
sim = d3.forceSimulation(nodes)
    // .force("y", d3.forceY().y(300))
    // .force("x", d3.forceX().x(300))
    // .force
    // .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(250, 250))
    .force("collision", d3.forceCollide().radius(d => d.r))
    .on("tick", ticked);

//3 bind the data

const nodesEnter = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .classed("node", true)
    .attr("r", d => d.r);
    // .attr("cx", d => d.x)
    // .attr("cy", d => d.y)

const nodesEdges = svg.selectAll(".edge")
    .data(edges)
    .enter()
    .append("line")
    .classed("edge", true)
    // .attr("x1", d => node_data[d.source].x)
    // .attr("y1", d => node_data[d.source].y)
    // .attr("x2", d => node_data[d.target].x)
    // .attr("y2", d => node_data[d.target].y)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

//4. define how you update the data on each tick

// sim.on("tick", () => {
//     nodesEnter
//         .attr("cx", d => d.x)
//         .attr("cy", d => d.y)
//         .attr("r", d => d.r);
// });
//

function ticked() {
    nodesEnter
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)

    nodesEdges
        .attr("x1", d => nodes[d.source].x)
        .attr("y1", d => nodes[d.source].y)
        .attr("x2", d => nodes[d.target].x)
        .attr("y2", d => nodes[d.target].y)
}

//now we want to implelemnt the drag and drop functionality

//1. define the drag beahvior
const drag = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);

// 2. call the drag behavior on the nodes
nodesEnter.call(drag);

//3. define the drag functions
function dragstarted(event, d) {
    if (!event.active) sim.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) sim.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}



