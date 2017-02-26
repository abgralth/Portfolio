var LINE = 1;
var RECTANGLE = 2;
var currentDrawingMode = LINE ;

var canvas = document.getElementById("drawingDecks");
var drawingContext = canvas.getContext("2d");
var startingPoint ;

function getMousePosition(canvas, event){
  var rect = canvas.getBoundingClientRect();
  return{
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

function onMouseDown(event){
  //console.log(event);
  startingPoint = getMousePosition(canvas, event);
}

function onMouseUp(){
  var realMousePosition = getMousePosition(canvas, event);

  if(currentDrawingMode === LINE){
    drawingContext.beginPath();
    drawingContext.moveTo(startingPoint.x, startingPoint.y);
    drawingContext.lineTo(realMousePosition.x, realMousePosition.y);
    drawingContext.stroke();
  }
  else if(currentDrawingMode === RECTANGLE){
    drawingContext.beginPath();
    drawingContext.rect(startingPoint.x, startingPoint.y, realMousePosition.x, realMousePosition.y);
    drawingContext.fill();
    drawingContext.stroke();
  }
}

function clearCanvas(){
  drawingContext.clearRect(0,0,canvas.width,canvas.height);
}

function setDrawingMode(newDrawingMode){
  currentDrawingMode = newDrawingMode;
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
