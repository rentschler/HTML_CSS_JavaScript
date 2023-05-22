console.log(`script loaded`)

const covid = [
    {
        "date": "28/01/2020",
        "cases": 2,
        "index": 0
    },
    {
        "date": "03/02/2020",
        "cases": 1,
        "index": 1
    },
    {
        "date": "07/02/2020",
        "cases": 1,
        "index": 2
    },
    {
        "date": "15/02/2020",
        "cases": 1,
        "index": 3
    },
    {
        "date": "24/02/2020",
        "cases": 1,
        "index": 4
    },
    {
        "date": "28/02/2020",
        "cases": 47,
        "index": 5
    },
    {
        "date": "03/03/2020",
        "cases": 84,
        "index": 6
    },
    {
        "date": "07/03/2020",
        "cases": 142,
        "index": 7
    },
    {
        "date": "11/03/2020",
        "cases": 756,
        "index": 8
    },
    {
        "date": "15/03/2020",
        "cases": 980,
        "index": 9
    },
    {
        "date": "19/03/2020",
        "cases": 4056,
        "index": 10
    },
    {
        "date": "23/03/2020",
        "cases": 3730,
        "index": 11
    },
    {
        "date": "27/03/2020",
        "cases": 5977,
        "index": 12
    },
    {
        "date": "31/03/2020",
        "cases": 6060,
        "index": 13
    },
    {
        "date": "04/04/2020",
        "cases": 4343,
        "index": 14
    },
    {
        "date": "08/04/2020",
        "cases": 5277,
        "index": 15
    },
    {
        "date": "12/04/2020",
        "cases": 1866,
        "index": 16
    },
    {
        "date": "16/04/2020",
        "cases": 3419,
        "index": 17
    },
    {
        "date": "20/04/2020",
        "cases": 1713,
        "index": 18
    },
    {
        "date": "24/04/2020",
        "cases": 1905,
        "index": 19
    },
    {
        "date": "28/04/2020",
        "cases": 1462,
        "index": 20
    },
    {
        "date": "02/05/2020",
        "cases": 620,
        "index": 21
    },
    {
        "date": "06/05/2020",
        "cases": 1220,
        "index": 22
    },
    {
        "date": "10/05/2020",
        "cases": 341,
        "index": 23
    },
    {
        "date": "14/05/2020",
        "cases": 808,
        "index": 24
    },
    {
        "date": "18/05/2020",
        "cases": 544,
        "index": 25
    },
    {
        "date": "22/05/2020",
        "cases": 525,
        "index": 26
    },
    {
        "date": "26/05/2020",
        "cases": 618,
        "index": 27
    },
    {
        "date": "30/05/2020",
        "cases": 373,
        "index": 28
    },
    {
        "date": "03/06/2020",
        "cases": 497,
        "index": 29
    },
    {
        "date": "07/06/2020",
        "cases": 164,
        "index": 30
    },
    {
        "date": "11/06/2020",
        "cases": 281,
        "index": 31
    },
    {
        "date": "15/06/2020",
        "cases": 259,
        "index": 32
    },
    {
        "date": "19/06/2020",
        "cases": 990,
        "index": 33
    },
    {
        "date": "23/06/2020",
        "cases": 545,
        "index": 34
    },
    {
        "date": "27/06/2020",
        "cases": 324,
        "index": 35
    },
    {
        "date": "01/07/2020",
        "cases": 483,
        "index": 36
    },
    {
        "date": "05/07/2020",
        "cases": 144,
        "index": 37
    },
    {
        "date": "09/07/2020",
        "cases": 423,
        "index": 38
    },
    {
        "date": "13/07/2020",
        "cases": 329,
        "index": 39
    },
    {
        "date": "17/07/2020",
        "cases": 524,
        "index": 40
    },
    {
        "date": "21/07/2020",
        "cases": 524,
        "index": 41
    },
    {
        "date": "25/07/2020",
        "cases": 543,
        "index": 42
    },
    {
        "date": "29/07/2020",
        "cases": 911,
        "index": 43
    },
    {
        "date": "02/08/2020",
        "cases": 305,
        "index": 44
    },
    {
        "date": "06/08/2020",
        "cases": 1170,
        "index": 45
    },
    {
        "date": "10/08/2020",
        "cases": 1104,
        "index": 46
    },
    {
        "date": "14/08/2020",
        "cases": 1376,
        "index": 47
    },
    {
        "date": "18/08/2020",
        "cases": 1533,
        "index": 48
    },
    {
        "date": "22/08/2020",
        "cases": 919,
        "index": 49
    },
    {
        "date": "26/08/2020",
        "cases": 1618,
        "index": 50
    },
    {
        "date": "30/08/2020",
        "cases": 537,
        "index": 51
    },
    {
        "date": "03/09/2020",
        "cases": 1517,
        "index": 52
    },
    {
        "date": "07/09/2020",
        "cases": 1414,
        "index": 53
    },
    {
        "date": "11/09/2020",
        "cases": 1650,
        "index": 54
    },
    {
        "date": "15/09/2020",
        "cases": 2003,
        "index": 55
    },
    {
        "date": "19/09/2020",
        "cases": 1392,
        "index": 56
    },
    {
        "date": "23/09/2020",
        "cases": 2212,
        "index": 57
    },
    {
        "date": "27/09/2020",
        "cases": 873,
        "index": 58
    },
    {
        "date": "01/10/2020",
        "cases": 2926,
        "index": 59
    },
    {
        "date": "05/10/2020",
        "cases": 2413,
        "index": 60
    },
    {
        "date": "09/10/2020",
        "cases": 5059,
        "index": 61
    },
    {
        "date": "13/10/2020",
        "cases": 5367,
        "index": 62
    },
    {
        "date": "17/10/2020",
        "cases": 5689,
        "index": 63
    },
    {
        "date": "21/10/2020",
        "cases": 12411,
        "index": 64
    },
    {
        "date": "25/10/2020",
        "cases": 7453,
        "index": 65
    },
    {
        "date": "29/10/2020",
        "cases": 19847,
        "index": 66
    },
    {
        "date": "02/11/2020",
        "cases": 15251,
        "index": 67
    },
    {
        "date": "06/11/2020",
        "cases": 21580,
        "index": 68
    },
    {
        "date": "10/11/2020",
        "cases": 19611,
        "index": 69
    },
    {
        "date": "14/11/2020",
        "cases": 15794,
        "index": 70
    },
    {
        "date": "18/11/2020",
        "cases": 23693,
        "index": 71
    },
    {
        "date": "22/11/2020",
        "cases": 8828,
        "index": 72
    },
    {
        "date": "26/11/2020",
        "cases": 22758,
        "index": 73
    },
    {
        "date": "30/11/2020",
        "cases": 13297,
        "index": 74
    },
    {
        "date": "04/12/2020",
        "cases": 22258,
        "index": 75
    },
    {
        "date": "08/12/2020",
        "cases": 22798,
        "index": 76
    },
    {
        "date": "12/12/2020",
        "cases": 20604,
        "index": 77
    },
    {
        "date": "16/12/2020",
        "cases": 31363,
        "index": 78
    },
    {
        "date": "20/12/2020",
        "cases": 13900,
        "index": 79
    },
    {
        "date": "24/12/2020",
        "cases": 21158,
        "index": 80
    },
    {
        "date": "28/12/2020",
        "cases": 15739,
        "index": 81
    },
    {
        "date": "01/01/2021",
        "cases": 10273,
        "index": 82
    },
    {
        "date": "05/01/2021",
        "cases": 27435,
        "index": 83
    },
    {
        "date": "09/01/2021",
        "cases": 16661,
        "index": 84
    },
    {
        "date": "13/01/2021",
        "cases": 24103,
        "index": 85
    },
    {
        "date": "17/01/2021",
        "cases": 6594,
        "index": 86
    },
    {
        "date": "21/01/2021",
        "cases": 16808,
        "index": 87
    },
    {
        "date": "25/01/2021",
        "cases": 6753,
        "index": 88
    },
    {
        "date": "29/01/2021",
        "cases": 12578,
        "index": 89
    },
    {
        "date": "02/02/2021",
        "cases": 12302,
        "index": 90
    },
    {
        "date": "06/02/2021",
        "cases": 8391,
        "index": 91
    },
    {
        "date": "10/02/2021",
        "cases": 10279,
        "index": 92
    },
    {
        "date": "14/02/2021",
        "cases": 3761,
        "index": 93
    },
    {
        "date": "18/02/2021",
        "cases": 9238,
        "index": 94
    },
    {
        "date": "22/02/2021",
        "cases": 4406,
        "index": 95
    },
    {
        "date": "26/02/2021",
        "cases": 9456,
        "index": 96
    },
    {
        "date": "02/03/2021",
        "cases": 10967,
        "index": 97
    },
    {
        "date": "06/03/2021",
        "cases": 8300,
        "index": 98
    },
    {
        "date": "10/03/2021",
        "cases": 13998,
        "index": 99
    },
    {
        "date": "14/03/2021",
        "cases": 4838,
        "index": 100
    },
    {
        "date": "18/03/2021",
        "cases": 16742,
        "index": 101
    },
    {
        "date": "22/03/2021",
        "cases": 8907,
        "index": 102
    },
    {
        "date": "26/03/2021",
        "cases": 20043,
        "index": 103
    },
    {
        "date": "30/03/2021",
        "cases": 20392,
        "index": 104
    },
    {
        "date": "03/04/2021",
        "cases": 10637,
        "index": 105
    },
    {
        "date": "07/04/2021",
        "cases": 23734,
        "index": 106
    },
    {
        "date": "11/04/2021",
        "cases": 8856,
        "index": 107
    },
    {
        "date": "15/04/2021",
        "cases": 25080,
        "index": 108
    },
    {
        "date": "19/04/2021",
        "cases": 12301,
        "index": 109
    },
    {
        "date": "23/04/2021",
        "cases": 22974,
        "index": 110
    },
    {
        "date": "27/04/2021",
        "cases": 25273,
        "index": 111
    },
    {
        "date": "01/05/2021",
        "cases": 15069,
        "index": 112
    },
    {
        "date": "05/05/2021",
        "cases": 20853,
        "index": 113
    },
    {
        "date": "09/05/2021",
        "cases": 5316,
        "index": 114
    },
    {
        "date": "13/05/2021",
        "cases": 9669,
        "index": 115
    },
    {
        "date": "17/05/2021",
        "cases": 5247,
        "index": 116
    },
    {
        "date": "21/05/2021",
        "cases": 7577,
        "index": 117
    },
    {
        "date": "25/05/2021",
        "cases": 3671,
        "index": 118
    },
    {
        "date": "29/05/2021",
        "cases": 3691,
        "index": 119
    },
    {
        "date": "02/06/2021",
        "cases": 4491,
        "index": 120
    },
    {
        "date": "06/06/2021",
        "cases": 1130,
        "index": 121
    },
    {
        "date": "10/06/2021",
        "cases": 2279,
        "index": 122
    },
    {
        "date": "14/06/2021",
        "cases": 932,
        "index": 123
    },
    {
        "date": "18/06/2021",
        "cases": 1029,
        "index": 124
    },
    {
        "date": "22/06/2021",
        "cases": 1062,
        "index": 125
    },
    {
        "date": "26/06/2021",
        "cases": 485,
        "index": 126
    },
    {
        "date": "30/06/2021",
        "cases": 861,
        "index": 127
    },
    {
        "date": "04/07/2021",
        "cases": 209,
        "index": 128
    },
    {
        "date": "08/07/2021",
        "cases": 957,
        "index": 129
    },
    {
        "date": "12/07/2021",
        "cases": 800,
        "index": 130
    },
    {
        "date": "16/07/2021",
        "cases": 1619,
        "index": 131
    },
    {
        "date": "20/07/2021",
        "cases": 2338,
        "index": 132
    },
    {
        "date": "24/07/2021",
        "cases": 1594,
        "index": 133
    },
    {
        "date": "28/07/2021",
        "cases": 2841,
        "index": 134
    },
    {
        "date": "01/08/2021",
        "cases": 783,
        "index": 135
    },
    {
        "date": "05/08/2021",
        "cases": 3535,
        "index": 136
    },
    {
        "date": "09/08/2021",
        "cases": 2925,
        "index": 137
    },
    {
        "date": "13/08/2021",
        "cases": 5787,
        "index": 138
    },
    {
        "date": "17/08/2021",
        "cases": 8913,
        "index": 139
    },
    {
        "date": "21/08/2021",
        "cases": 6823,
        "index": 140
    },
    {
        "date": "25/08/2021",
        "cases": 12720,
        "index": 141
    },
    {
        "date": "29/08/2021",
        "cases": 3744,
        "index": 142
    },
    {
        "date": "02/09/2021",
        "cases": 12730,
        "index": 143
    },
    {
        "date": "06/09/2021",
        "cases": 7017,
        "index": 144
    },
    {
        "date": "10/09/2021",
        "cases": 11134,
        "index": 145
    },
    {
        "date": "14/09/2021",
        "cases": 13393,
        "index": 146
    },
    {
        "date": "18/09/2021",
        "cases": 7038,
        "index": 147
    },
    {
        "date": "22/09/2021",
        "cases": 10452,
        "index": 148
    },
    {
        "date": "26/09/2021",
        "cases": 2643,
        "index": 149
    },
    {
        "date": "30/09/2021",
        "cases": 9496,
        "index": 150
    },
    {
        "date": "04/10/2021",
        "cases": 5668,
        "index": 151
    },
    {
        "date": "08/10/2021",
        "cases": 9218,
        "index": 152
    },
    {
        "date": "12/10/2021",
        "cases": 12642,
        "index": 153
    },
    {
        "date": "16/10/2021",
        "cases": 8490,
        "index": 154
    },
    {
        "date": "20/10/2021",
        "cases": 17986,
        "index": 155
    },
    {
        "date": "24/10/2021",
        "cases": 5177,
        "index": 156
    },
    {
        "date": "28/10/2021",
        "cases": 24349,
        "index": 157
    },
    {
        "date": "01/11/2021",
        "cases": 11488,
        "index": 158
    },
    {
        "date": "05/11/2021",
        "cases": 33746,
        "index": 159
    },
    {
        "date": "09/11/2021",
        "cases": 47161,
        "index": 160
    },
    {
        "date": "13/11/2021",
        "cases": 34026,
        "index": 161
    },
    {
        "date": "17/11/2021",
        "cases": 63197,
        "index": 162
    },
    {
        "date": "21/11/2021",
        "cases": 24771,
        "index": 163
    },
    {
        "date": "25/11/2021",
        "cases": 71911,
        "index": 164
    },
    {
        "date": "29/11/2021",
        "cases": 44412,
        "index": 165
    },
    {
        "date": "03/12/2021",
        "cases": 62550,
        "index": 166
    },
    {
        "date": "07/12/2021",
        "cases": 69338,
        "index": 167
    },
    {
        "date": "11/12/2021",
        "cases": 34670,
        "index": 168
    },
    {
        "date": "15/12/2021",
        "cases": 52430,
        "index": 169
    },
    {
        "date": "19/12/2021",
        "cases": 12230,
        "index": 170
    },
    {
        "date": "23/12/2021",
        "cases": 34994,
        "index": 171
    },
    {
        "date": "27/12/2021",
        "cases": 24493,
        "index": 172
    },
    {
        "date": "31/12/2021",
        "cases": 28972,
        "index": 173
    },
    {
        "date": "04/01/2022",
        "cases": 64515,
        "index": 174
    },
    {
        "date": "08/01/2022",
        "cases": 37051,
        "index": 175
    },
    {
        "date": "12/01/2022",
        "cases": 88438,
        "index": 176
    },
    {
        "date": "16/01/2022",
        "cases": 35630,
        "index": 177
    },
    {
        "date": "20/01/2022",
        "cases": 144510,
        "index": 178
    },
    {
        "date": "24/01/2022",
        "cases": 139036,
        "index": 179
    },
    {
        "date": "28/01/2022",
        "cases": 187510,
        "index": 180
    },
    {
        "date": "01/02/2022",
        "cases": 230152,
        "index": 181
    },
    {
        "date": "05/02/2022",
        "cases": 133135,
        "index": 182
    },
    {
        "date": "09/02/2022",
        "cases": 247412,
        "index": 183
    },
    {
        "date": "13/02/2022",
        "cases": 73958,
        "index": 184
    },
    {
        "date": "17/02/2022",
        "cases": 213072,
        "index": 185
    },
    {
        "date": "21/02/2022",
        "cases": 139363,
        "index": 186
    },
    {
        "date": "25/02/2022",
        "cases": 171380,
        "index": 187
    },
    {
        "date": "01/03/2022",
        "cases": 193732,
        "index": 188
    },
    {
        "date": "05/03/2022",
        "cases": 121849,
        "index": 189
    },
    {
        "date": "09/03/2022",
        "cases": 259514,
        "index": 190
    },
    {
        "date": "13/03/2022",
        "cases": 88435,
        "index": 191
    },
    {
        "date": "17/03/2022",
        "cases": 292884,
        "index": 192
    },
    {
        "date": "21/03/2022",
        "cases": 235387,
        "index": 193
    },
    {
        "date": "25/03/2022",
        "cases": 241991,
        "index": 194
    },
    {
        "date": "29/03/2022",
        "cases": 272315,
        "index": 195
    },
    {
        "date": "02/04/2022",
        "cases": 92238,
        "index": 196
    },
    {
        "date": "06/04/2022",
        "cases": 187833,
        "index": 197
    },
    {
        "date": "10/04/2022",
        "cases": 42114,
        "index": 198
    },
    {
        "date": "14/04/2022",
        "cases": 149467,
        "index": 199
    },
    {
        "date": "18/04/2022",
        "cases": 35660,
        "index": 200
    },
    {
        "date": "22/04/2022",
        "cases": 116804,
        "index": 201
    },
    {
        "date": "26/04/2022",
        "cases": 101174,
        "index": 202
    }
]

const xDim = "index"
const yDim = "cases"
const yExtent = d3.extent(covid, d => d[yDim])
const yRange = [300,0]

const xScale = d3.scaleLinear()
    .domain(d3.extent(covid, d => d[xDim]))
    .range([0, 600])

const timeArray = covid.map((e) => d3.timeParse("%d/%m/%Y")(e.date));

const timeScale = d3.scaleTime().domain(d3.extent(timeArray))
    .range([0, 600]).nice()

const parser = d3.timeParse("%d/%m/%Y");

console.log(parser("04/03/2023"));
console.log(d3.extent(timeArray));

//linear y scale
var yScaleLin = d3.scaleLinear()
    .domain(yExtent)
    .range(yRange).nice()

//logarithmic y scale
var yScaleLog = d3.scaleLog()
    .domain(yExtent)
    .range(yRange)

//initial y scale is set to linear
var yScale = yScaleLin

var lineGen = d3.line()
    .x((d) => xScale(d[xDim]))
    .y((d) => yScale(d[yDim]))


d3.select('#x-axis')
    .attr("transform", "translate(0," + 300 + ")")
    .call(d3.axisBottom(timeScale))

d3.select('#y-axis-lin')
    .call(d3.axisLeft(yScaleLin))

d3.select('#y-axis-log')
    .style('display', 'none')
    .call(d3.axisLeft(yScaleLog))

//updates the d attribute of the path
function updateLine(value) {
    if (value == "linear") {
        yScale = yScaleLin;
        d3.select('#y-axis-lin').style("display", "block");
        d3.select('#y-axis-log').style('display', 'none');
    } else {
        yScale = yScaleLog;
        d3.select('#y-axis-lin').style("display", "none");
        d3.select('#y-axis-log').style('display', 'block');
    }

    let lineD = lineGen(covid)
    d3.select('#line-path').attr('d', lineD)
}

updateLine("linear")


d3.select("#scale-select").on("input", function(event) {
    const value = event.currentTarget.value;
    updateLine(value);
});


// TODO:
// - using d3, add an event listener for the <select id="scale-select"> tag, triggering whenever the input changes
// - get the value of the <select> tag
// - according to this value (either 'linear' or 'log'),
//     - set the 'yScale' variable to either 'yScaleLin' or 'yScaleLog'
//     - hide / show the appropriate y-axis
// - call the 'updateLine()' function
