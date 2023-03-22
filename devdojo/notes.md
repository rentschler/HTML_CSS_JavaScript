# HTML Tags
h1 bis h6: Headings
<h1> </h1>

p: paragraph
<p> </p>

ul: unordered list
<ul> </ul>
ol: orderd list from 1. to ...
<ol> </ol>
li: list item
<li> </li>

a: a link
For a link to open in a new window, the target attribute requires a value of _blank.
<a href="https://google.com"> </a>
or link to a relative path
<a href="./contact.html">Contact</a>
Thankfully, HTML allows you to turn nearly any element into a link by wrapping that element with an anchor element.
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>
jump to the target with the id 'top'
<a href="#top">Top</a>
img: image doesnt require a closing tag, alt ist der Alternativ text der erscheint, wenn das Bild nicht lädt
<img height="500" src="C:\Git\GitHub\HTML_CSS_JavaScript\devdojo\elf.png" width="500" alt = "an elf"/>

video: The controls attribute instructs the browser to include basic video controls such as pausing and playing.
    <video src = "https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" width = "320" height = "240" controls>

table : table with tr as a table row and td (table data) as a row entry
<table>
    
</table>
<tr>
    
</tr>
<td> </td>

div: a container that has stuff. It can be styled
<div>div cointaier</div>

<form action="HTML/index.html" method="get">
    <input type="text" name="name" placeholder="Name">
    <button type="submit">Submit</button>
</form>

# CSS
css is all about learning all the properties and associated values

The <em> tag emphasizes text, while the <strong> tag highlights important text.
HTML’s line break element: <br>