## TODO 24.03.2023

* discussed a potential layout for the hexagon interface
* talked about what the hexagon interface should be able to do
* talked about the different ways to implement the code using both d3.js and jquery
* had a look at upscaly, a tool that can upscale pictures. This could be helpfully in the future when there may be a
  need to upscale some pictures.

scheduled a meeting for April 5th, 2023 at 2:00 pm

## Protocol 05.April.2023

* First I showed Matthias the SVG Bar chart, I created according to tutorial 'D3.js - A Practical Introduction'
* I added some interactivity e.g. sorting or exporting the bar chart
* Then we talked about the code for the hexagons earlier created by Raphael
* I had to make some adjustments to the code to make it work at my local machine
* We talked about the next steps:
    * changing the hexagons / redoing it using SVG Elements instead of the div elements
    * adding interactivity
* We decided to meet again on **April 25th, 2023 at 2:30 pm**

## Current state

## Helpful Links

* [SVG ClipPath images](https://coderwall.com/p/blx8kw/svg-clippath-images)
* [Creating hexagonal heatmaps with d3.js](https://www.visualcinnamon.com/2013/07/self-organizing-maps-creating-hexagonal/)
* [insert images into d3 hexbin](https://stackoverflow.com/questions/25192912/how-to-insert-images-into-d3-hexbin)
* [copy the code from the d3.js website](view-source:https://d3js.org/ )

## My Notes
1. [ ]  **TODO: neu mit svg programmieren**
2. [ ]  **TODO: Interaktionen**
3. [ ] Design, bootsstrap
4. [ ]   Ux Design Konventionen
5. [ ]   Grauer Hintergrund
6. [ ]   Hexagons eine border geben
7. [ ]   Blacklist über json exportieren und importieren
8. [ ]   Hexagon Abstand interaktiv verändern
9. [ ]   Hexagon border interaktiv
10. [ ]   SVG elect statt div Element
11. [ ]   Überschrift dbvis Art, dbvis1 publications
12. [ ]   center images with bad aspect ratio
13. colorpicker for the background
14. 


## A long text explaining some code

The provided code is a JavaScript implementation using the D3.js library to create a zoom-able and pan-able hexagonal
grid of images. The code is organized into several sections, which are explained in detail below.

Variable declarations and setup:
The code initializes various variables such as height, imageWidth, imageHeight, radius, depth, and more, which are used
to control the appearance of the hexagonal grid. The code also sets up a hexbin object using the D3.js library, which is
used to create the hexagonal grid layout.

Data manipulation:
The data.forEach loop assigns two additional properties i and j to each data item, which are used to index the images in
the grid. After that, the d3.shuffler function shuffles the data using a random seed based on the current hour.

DOM elements and event listeners:
The code creates and manipulates several DOM elements like canvas, svg, mesh, anchor, and graphic. These elements are
used to draw the images, create the hexagonal grid, and manage mouse events. Event listeners for mousemove and resize
are also set up, which respond to user interactions with the hexagonal grid.

Image loading and drawing:
The drawImage function is responsible for drawing a single image onto the canvas within the hexagonal boundary. The
image.onload and resized functions manage the loading and resizing of the images, respectively.

Update hexagonal grid:
The resized function is called when the window is resized or initially loaded. It computes the size of the grid, updates
the positions of the hexagonal cells, draws the images, and adds anchor elements for each cell.

Mouse interactions and grid panning:
The mouse moved function updates the desired focus based on the user’s mouse position. The moved function interpolates
the current focus towards the desired focus and updates the grid’s position accordingly, creating a smooth panning
effect.

In summary, this code uses D3.js to create an interactive hexagonal grid of images, with capabilities for panning and
zooming based on user interactions. The grid responds to window resizing, and images are drawn within hexagonal
boundaries using a combination of canvas and SVG elements.


## Status update

[insert images into d3 hexbin](https://stackoverflow.com/questions/25192912/how-to-insert-images-into-d3-hexbin)
I used the code from stackoverflow and with some changes i could fill the hexagons with an image.

Then I defined an array of image locations, and assigned each hexagon an image.

I uploaded my code on gitlab in the playground folder and done some cleanup.

I haven't figured out, how to insert the images into the hexagons, from the code of the [d3js](https://d3js.org/) website.
The hexagons are only black rectangles.