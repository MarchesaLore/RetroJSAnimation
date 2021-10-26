    
    function toasterFunction(id, elem, startingpositionx, startingpostiony, toastImg) {
        elem.style.display = "none";
        var posx = 0;
        var posy = 0;
        var imageN = 1;

        restart();

        function restart() {
            elem.style.display = "none";
            posx = startingpositionx + (Math.floor(Math.random() * 100));
            posy = startingpostiony - 50;

            elem.style.top = posy + 'px';
            elem.style.left = posx + 'px';

            elem.style.display = "none";

            setTimeout(function () {
                id = setInterval(frame, 70);
            }, Math.floor(Math.random() * 5000));
        }


        function frame() {
            if (window.innerWidth < 200 || window.innerHeight < 200){
                clearInterval(id);
            }
            posx -= 5;
            posy += 5;
            if (posx <= -100 || posy > (window.outerHeight + 50)) {
                elem.style.display = "none";
                clearInterval(id);
                setTimeout(function () {
                    restart();
                }, Math.floor(Math.random() * 1000));
            }
            elem.style.top = posy + 'px';
            elem.style.left = posx + 'px';
            elem.style.display = "block";
            if ((toastImg == "toast" && imageN >= 1) || (imageN >= 4)) {
                imageN = 0;
            }
            imageN++;
            elem.src = "/img/" + toastImg + imageN + ".gif";
        }  
        
    }

    //ON LOAD
    $(document).ready(function () {
        /**
         * toaster
         */
        var elem1 = document.getElementById("toaster1");
        var elem2 = document.getElementById("toaster2");
        var elem3 = document.getElementById("toaster3");

        var elem4 = document.getElementById("toast1");
        var elem5 = document.getElementById("toast2");
        
        var id1;
        var id2;
        var id3;
        var id4;
        var id5;

        toasterFunction(id1, elem1, window.outerWidth, 0, "flyer");
        toasterFunction(id2, elem2, window.outerWidth / 2, 0, "flyer");
        toasterFunction(id3, elem3, window.outerWidth, window.outerHeight / 2, "flyer");
        

        toasterFunction(id4, elem4, window.outerWidth, window.outerHeight / 3, "toast");
        toasterFunction(id5, elem5, window.outerWidth / 3, 0, "toast");



    });
    
    