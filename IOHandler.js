var freeze = false;
var moveUp = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;
var moveCloser = false;
var moveFarther = false;
var rotateRight = false;
var rotateLeft = false;
var reset = false;

function onMouseClick(event){
    freeze = !freeze;
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        freeze = !freeze;
    }

    if(event.keyCode == 87){
        moveUp = true;
    }
    
    if(event.keyCode == 83){
        moveDown = true;
    }
    
    if(event.keyCode == 68){
        moveRight = true;
    }
    
    if(event.keyCode == 65){
        moveLeft = true;
    }

    if(event.keyCode == 38){
        moveCloser = true;
    }

    if(event.keyCode == 40){
        moveFarther = true;
    }

    if(event.keyCode == 69){
        rotateRight = true;
    }

    if(event.keyCode == 81){
        rotateLeft = true;
    }

    if(event.keyCode == 82){
        reset = !reset;
    }
}

function onKeyup(event){
    if(event.keyCode == 87){
        moveUp = false;
    }
    
    if(event.keyCode == 83){
        moveDown = false;
    }

    if(event.keyCode == 68){
        moveRight = false;
    }

    if(event.keyCode == 65){
        moveLeft = false;
    }

    if(event.keyCode == 38){
        moveCloser = false;
    }

    if(event.keyCode == 40){
        moveFarther = false;
    }

    if(event.keyCode == 69){
        rotateRight = false;
    }

    if(event.keyCode == 81){
        rotateLeft = false;
    }
}

document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);