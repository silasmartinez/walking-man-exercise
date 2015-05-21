var walker = document.getElementsByTagName('img')[0];
walker.style.position = "relative";
walker.style.left = 0;
var movingLeft = false;

function doMove() {

    if (( parseInt(walker.style.left) < (document.body.offsetWidth - 300 )) && (movingLeft === false )) {
        walker.style.left = parseInt(walker.style.left) + 20 + 'px';
    } else {
        movingLeft = true;
        walker.style.transform = 'scaleX(-1)';
        walker.style.left = parseInt(walker.style.left) - 20 + 'px';

        if ( parseInt(walker.style.left) <= 0  ){
            movingLeft = false;
            walker.style.transform = 'scaleX(1)';
        }
    }
console.log(walker.style.left);
};

setInterval("doMove()", 200);