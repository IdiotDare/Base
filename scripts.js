var canvas = document.getElementById("myCanvas")//id is in quotes
//the getContext() is a built in HTML Object, with properties and methods for drawing.
var ctx = canvas.getContext("2d");

ctx.fillStyle = "00FFFF";

//The fillRect(x,y,width,height) method draws a rectangle, filled with the fill style, on the canvas:
//      ctx.fillRect(0, 0, 150, 75);


ctx.fillRect(50, 50, 100, 100);
