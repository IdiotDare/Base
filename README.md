# Baseline dies here tonight
<p>Disclaimer, these are just my notes. Literally. Just in case. anyway. uh, copypasted blah blah blah+ my own, whatever</p>
<h2>Index</h2>
<ol>
  <li><a href="#canvas">Canvas</a></li>
</ol>

Anyway,
Here we go.
<h3 id="canvas">Canvas</h3>
  <p>HTML < canvas > creates a canvas.
  The HTML <canvas> element is used to draw graphics, on the fly, via scripting (usually JavaScript).
  The <canvas> element is only a container for graphics. You must use a script to actually draw the graphics.
  Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>
  
  <p> Canvas example code: < canvas id="myCanvas" width="200" height="100" >< /canvas > <p>
  <p>By default, canvas have no content or border. Use style to add a border.
    JS is then used to add drawing(i think...content?) on said canvas.</p>
  <p> Onto JS, used the Html DOM method getElementById()<br>
    var canvas = document.getElementById("myCanvas"); </p>
    <p>Next up, we need a drawing object for the canvas</p>
    <p> the getContext() is a built in HTML Object, with properties and methods for drawing.</p>
    <p> var ctx = canvas.getContext("2d"); </p>
    <p>Time to actually draw on the canvas. <br>
      Set a fill style!(like, color and stuff)    ctx.fillStyle = "#FF0000";<br>
      The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black. <br>
      The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas:<br>
      ctx.fillRect(0, 0, 150, 75); </p>
    <p> <strong>Canvas coordinates</strong></p>
    <p> The HTML canvas is a two-dimensional grid. The upper-left corner of the canvas has the coordinates (0,0)</p>
    <p>To draw a straight line on a canvas, use the following methods:<br>
      moveTo(x,y) - defines the starting point of the line<br>
      lineTo(x,y) - defines the ending point of the line<br>
      To actually draw the line, you must use one of the "ink" methods, like stroke(). Still usings ctx.</p>
    <p>To draw a circle on a canvas, use the following methods:
<br>
beginPath() - begins a path<br>
arc(x,y,r,startangle,endangle) - creates an arc/curve. To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI. The x and y parameters define the x- and y-coordinates of the center of the circle. The r parameter defines the radius of the circle.</p>
    
var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");
    
ctx.beginPath();
    
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    
ctx.stroke();

    
 -------------------------------------------   
    
var canvas = document.getElementById("myCanvas");
    
var ctx = canvas.getContext("2d");
    
ctx.font = "30px Arial"; 
    
ctx.fillText("Hello World", 10, 50);//draws filled text, use strokeText(text,x,y) for no fill

    -------------------------------
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2)
    ----------------------
<p>    window.onload = function() {<br>
  var canvas = document.getElementById("myCanvas");<br>
  var ctx = canvas.getContext("2d");<br>
  var img = document.getElementById("scream");<br>
  ctx.drawImage(img, 10, 10);//adds image to canvas basically drawImage(image,x,y)<br>
}<p/>
  ---------------------
<a href="https://www.w3schools.com/graphics/canvas_reference.asp">Link the list of getContext properties</a>
    
    
