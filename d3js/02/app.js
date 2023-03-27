//setup some data with which we can work
const countryData = {
    items: ['China', 'India', 'USA', 'Germany', 'France', 'UK', 'Japan', 'Italy', 'Brazil', 'Canada'],
    addItem(item) {
        this.items.push(item);
    },
    /**
     * remove an item from the list at the given index, and only one Item
     * @param index
     */
    removeItem(index) {
        this.items.splice(index, 1);

    },
    updateItem(index, newItem) {
        this.items[index] = newItem;
    }
};

//we want to output that data in our dom
d3.select('ul').selectAll('li')
    .data(countryData.items)//to be renderd elements
    .enter()//find the missing elements
    .append('li')//create the missing elements, renders a new List item for each missing element in the data array
    .text(item => item);//set the text of the new list item to the value of the item in the data array

setTimeout(() => {
    countryData.addItem('Russia');
    d3.select('ul').selectAll('li')
        .data(countryData.items)
        .enter()
        .append('li')
        .classed('added', true)
        .text(item => item);

}, 2000);

/**
 * removes the first element. But d3 doesnt know that we removed the first one,
 * so it will render the second one as the first one
 */
setTimeout(() => {
    countryData.removeItem(0);
    d3.select('ul').selectAll('li')
        .data(countryData.items)
        .exit()
        // .append('li')
        .classed('redundant', true);
    // .text(item => item);

}, 4000);

/**
 * d3 checks which value is missing now
 */
setTimeout(() => {
    countryData.removeItem(0);
    d3.select('ul').selectAll('li')
        .data(countryData.items, data => data) //the second parameter is a key function, which is used to identify the elements
        // we tell d3 to use the data as the key instead of the index
        .exit()
        // .append('li')
        .classed('redundant', true);
    // .text(item => item);

}, 6000);


setTimeout(() => {
    countryData.updateItem(1, 'Ukraine');
    d3.select('ul').selectAll('li')
        .data(countryData.items, data => data)
        .exit()
        // .append('li')
        .classed('updated', true)
        .text('Russia');
}, 8000);