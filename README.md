# Hydrogen
Intended to be a SUPER Lightweight Canvas Display List for drawing and animating objects on 2D Canvas

File size: **1kb**

Below is an example of how to use with a loaded texture named `tex.jpg`.
```
<html>
    <head>
    </head>
    <body>
        <canvas id="mycanvas"></canvas>
        <script src="src/H.js"></script>
        <script>
            var _h = new H.Canvas('mycanvas'); //create a canvas instance using a DOM element

            _t = new Image();                  //create an image to be used as texture
            _t.src = "tex.jpg";
            _t.onload = function () {
                //texture has loaded
            }

            _s = new H.Sprite(_t);             //create a sprite with texture
            _s.s = 0.2;                        //scale
            _h.addChild(_s);                   //add to 'stage'

            var _h2 = new H.Canvas(500, 500);  //create a canvas instance with width and height
            document.body.appendChild(_h2.el); //append to DOM

            _s2 = new H.Sprite(_t);
            _s2.sy = 0.1;                      //scale y
            _s2.ox = 100;                      //set origin x (rotate and scale origin)
            _s2.oy = 100;                      //set origin y
            _h.addChild(_s2);                  //add to stage
            _h2.addChild(_s2);

            requestAnimationFrame(render);

            delta = 0;

            function render() {
                delta += 0.1;

                _h.render();                  //render the canvas
                _h2.render();

                _s.x += 1;                    //update values
                _s2.r += 0.01;
                _s2.sx = Math.sin(delta);

                requestAnimationFrame(render);
            }

        </script>
    </body>
</html>
```
