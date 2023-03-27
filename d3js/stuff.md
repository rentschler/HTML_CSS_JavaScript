**Data Binding / Data Joins**
`d3.selectAll('.bar').data(SOME_DATA)`

* selects all elements with a bar css class bar on it binds SOME_DATA to them
* those elements don't need to exist yet, we can still bind data to them and tell d3.js to find the difference between
  what currently is rendered and what should be rendered
* `.enter()` gives us the missing items
* `.exit()` gives us the items that are redundant
* 