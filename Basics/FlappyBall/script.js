let block = document.getElementById("block");
let hole = document.getElementById("hole");
let game = document.getElementById("game");
let character = document.getElementById("character");
let title = document.getElementById("title");
let jumping = 0;
let counter = 0;

let screenHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
let blockHeight = (screenHeight + screenHeight*0.2);
let holeHeight = screenHeight*0.2 + 10;
let gameHeight = screenHeight*0.8;

game.style.height = gameHeight + 'px';
hole.style.height = holeHeight + 'px';
block.style.height = blockHeight + 'px';

hole.style.animation = 'block '+ gameHeight/400 * 2000 +'ms infinite linear';
block.style.animation = 'block '+ gameHeight/400 * 2000 +'ms infinite linear';


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

hole.addEventListener('animationiteration', () => {
    let random = randomNumber( (gameHeight - holeHeight), (screenHeight + holeHeight) );
    hole.style.top = -random + "px";
    counter++;
})

setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let titleHeight = parseInt(window.getComputedStyle(title).getPropertyValue('height'));
    let cTop = -((screenHeight + holeHeight + titleHeight)-characterTop);
    if (characterTop > (gameHeight + titleHeight) || ( (blockLeft < 20) && (blockLeft>-50) && 
    ( (cTop < holeTop) || (cTop > (holeTop+(holeHeight-20)) ) ) )){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        block.animate([{transform: '0%'}]);
        counter=0;
        console.log(characterTop -20);
        console.log(cTop);
    }
},10)

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if ((characterTop>6) && (jumpCount<15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10)
}