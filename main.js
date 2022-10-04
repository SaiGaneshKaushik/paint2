canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent = "empty";
color = "black";
width_of_the_line = 2; 

canvas.addEventLinstener("mousedown", my_mousedown);
function my_mousedown(e)
{
     color= document.getElementById("color").value;
     width_of_the_line= document.getElementById("width_of_the_line").value;
     radius= document.getElementById("radius").value;
     mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWideth=width_of_the_line;

        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup()
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave()
{
    mouseEvent="mouseleave"; 
}
