var xyValues = [
    {x:0, y:0},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
];
var myChart = new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
        }]
    },
    options: {}
});
xyValues.push({x:2, y:4});

function add(values,x,y){

}
