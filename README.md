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
      Set a fill style!(like, color and stuff)    ctx.fillStyle = "#FF0000";
      The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black. <br>
      The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas:<br>
      ctx.fillRect(0, 0, 150, 75); </p>
