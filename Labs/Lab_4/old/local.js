function save() {
  var inputElement = getInputElement();
  var userString = inputElement.value ;

  localStorage.setItem("userText",userString);
}

var jsArray = ["NTM", "PLZ", "SBULRG"];

function getInputElement(){
  return document.getElementById("inputText");
}

function load(){
  var inputElement = getInputElement();
  inputElement.value = localStorage.getItem("userText");
}

Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key){
  var value = this.getItem(key);
  return JSON.parse(value);
}

/*function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

function drawSomething(){
  var canvas = document.getElementById("drawCanvas");
  var drawingContext = canvas.getContext("2d");
  var x = getRandomNumber(200);
  var y = getRandomNumber(200);
  var size = getRandomNumber(60);
  drawingContext.rect(x,y,size,size);
  drawingContext.stroke();
}

function startTheShow(){
  window.setInterval(drawSomething,100);
}*/

var can, ctx, canX, canY, mouseIsDown = 0;

       function init() {
           can = document.getElementById("drawingDecks");
           ctx = can.getContext("2d");

           can.addEventListener("mousedown", mouseDown, false);
           can.addEventListener("mousemove", mouseXY, false);
           document.body.addEventListener("mouseup", mouseUp, false);
       }

       function mouseUp() {
           mouseIsDown = 0;
           mouseXY();
       }

       function touchUp() {
           mouseIsDown = 0;
           // no touch to track, so just show state
       }

       function mouseDown() {
           mouseIsDown = 1;
           mouseXY();
       }

       function mouseXY(e) {
           if (!e)
               var e = event;
           canX = e.pageX - can.offsetLeft;
           canY = e.pageY - can.offsetTop;
           draw();
       }

       function draw(){
         ctx.beginPath();
         if(!mouseIsDown){
           x = canX ;
           y = canY ;
         }
         ctx.moveTo(x,y);
         if(mouseIsDown){
           x = canX ;
           y = canY ;
         }
         ctx.lineTo(x,y);
         ctx.closePath();
         ctx.stroke();
       }

/*var can, ctx,
  canX = [], canY = [], bubble = [],
  mouseIsDown = 0, len = 0;
  function start() {
                   can = document.getElementById("theGame");
                   ctx = can.getContext("2d");

                   can.addEventListener("mousedown", mouseDown, false);
                   can.addEventListener("mousemove", mouseXY, false);
                   can.addEventListener("touchstart", touchDown, false);
                   can.addEventListener("touchend", touchUp, false);
                   can.addEventListener("touchmove", touchXY, false);

                   document.body.addEventListener("mouseup", mouseUp, false);
                   document.body.addEventListener("touchcancel", touchUp, false);
                   for (i = 0; i < 4; i++) {
                       bubble[i] = 0;
                   }
                   animate();
               }

               function mouseUp() {
                   mouseIsDown = 0;
                   mouseXY();
               }

               function mouseDown() {
                   mouseIsDown = 1;
                   mouseXY();
               }

               function touchDown() {
                   mouseIsDown = 1;
                   touchXY();
               }

               function touchUp(e) {
                   if (!e)
                       e = event;
                   len = e.targetTouches.length;
               }

               function mouseXY(e) {
                   if (!e)
                       e = event;
                   canX[0] = e.pageX - can.offsetLeft;
                   canY[0] = e.pageY - can.offsetTop;
                   len = 1;
               }

               function touchXY(e) {
                   if (!e)
                       e = event;
                   e.preventDefault();
                   len = e.targetTouches.length;
                   for (i = 0; i < len; i++) {
                       canX[i] = e.targetTouches[i].pageX - can.offsetLeft;
                       canY[i] = e.targetTouches[i].pageY - can.offsetTop;
                   }
               }

               function animate() {
                   ctx.strokeStyle = "red";
                   ctx.clearRect(0,0, can.width, can.height);
                   // create a path for each bubble
                   for (i = 0; i < 4; i++) {
                       bubble[i]++;
                       if (bubble[i] >= can.height + 10)
                           bubble[i] = -10;
                       var y = bubble[i];
                       var x = (i + 1) * 50;
                       var radius = 20;
                       ctx.beginPath();
                       ctx.arc(x, y, radius, 0, 2 * Math.PI);
                       ctx.closePath();
                       // test each extant touch to see if it is on the bubble
                       for (j = 0;j < len; j++) {
                           if (ctx.isPointInPath(canX[j], canY[j]) && mouseIsDown)
                               bubble[i] = -30;
                       }
                       ctx.stroke();
                   }
                   setTimeout(animate, 40);
               }
*/
