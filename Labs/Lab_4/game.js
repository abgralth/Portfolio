var can, ctx,
            canX = [], canY = [],
            mouseIsDown = 0, len = 0, score = 0 , click = 0, seconds_left = 10;

function start(){
  console.log("Click state : " + click);
  if (click === 0){
    click = 1 ;
    init();
  }
}
        function init() {
          can = document.getElementById("theGame");
          ctx = can.getContext("2d");
            console.log("Click state : " + click);
            var interval = setInterval(function() {
              console.log("Seconds lefts : "+seconds_left);
              document.getElementById('timeGame').innerHTML ="Time : " + --seconds_left;
              if (seconds_left <= 0)
              {
                click = 0 ;
                seconds_left = 10 ;
                alert("Your score is : "+ score*500);
                location.reload();
              }
              /*else {
                can.addEventListener("mousedown", mouseDown, false);
                can.addEventListener("mousemove", mouseXY, false);
                animate();
              }*/
            }, 1000);
            var interval2 = setInterval(function() {
              can.addEventListener("mousedown", mouseDown, false);
              can.addEventListener("mousemove", mouseXY, false);
              animate();
            }, 500);

      }


        function mouseUp() {
            mouseIsDown = 0;
            mouseXY();
        }

        function mouseDown() {
            mouseIsDown = 1;
            mouseXY();
            catchSquare();
        }

        function mouseXY(e) {
            if (!e)
                e = event;
            canX[0] = e.pageX - can.offsetLeft;
            canY[0] = e.pageY - can.offsetTop;
            len = 1;
        }

        function catchSquare(){
          if(canX >= x && canY >= y && canX <= x+50 && canY <=y+50){
            score++ ;
            document.getElementById('scoreGame').innerHTML ="Score : " + ++score*500;
            //animate();
          }
        }

        function animate() {
            /*ctx.strokeStyle = "red";
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
                    if (ctx.isPointInPath(canX[j], canY[j]) && mouseIsDown){
                      bubble[i] = -30;
                      document.getElementById('scoreGame').innerHTML ="Score : " + ++score*100;
                    }

                }
                ctx.stroke();
            }
            setTimeout(animate, 40);*/
            ctx.clearRect(0,0, can.width, can.height);
            ctx.beginPath();
            x = Math.floor(Math.random()*400);
            y = Math.floor(Math.random()*400);
            ctx.rect(x, y, 50, 50);
            ctx.fillStyle = "navy";
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }
