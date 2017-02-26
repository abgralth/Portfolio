var can, ctx,
            canX = [], canY = [], bubble = [],
            mouseIsDown = 0, len = 0, score = 0 , click = 0;

function start(){
  if (click === 0){
    init();
    click = 1 ;
  }
}


        function init() {
            can = document.getElementById("theGame");
            ctx = can.getContext("2d");
            var seconds_left = 10;
            var interval = setInterval(function() {
              document.getElementById('timeGame').innerHTML ="Time : " + --seconds_left;
              if (seconds_left <= 0)
              {
                click = 0 ;
                seconds_left = 10 ;
              }
            }, 1000);

            can.addEventListener("mousedown", mouseDown, false);
            can.addEventListener("mousemove", mouseXY, false);

            document.body.addEventListener("mouseup", mouseUp, false);
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

        function mouseXY(e) {
            if (!e)
                e = event;
            canX[0] = e.pageX - can.offsetLeft;
            canY[0] = e.pageY - can.offsetTop;
            len = 1;
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
                    if (ctx.isPointInPath(canX[j], canY[j]) && mouseIsDown){
                      bubble[i] = -30;
                      document.getElementById('scoreGame').innerHTML ="Score : " + ++score*100;
                    }

                }
                ctx.stroke();
            }
            setTimeout(animate, 40);
        }
