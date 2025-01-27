const GAME = document.getElementById('myGameArea');
const START_BUTTON = document.getElementById('startBtn');

let caro = new Caro();
let tbl = caro.drawGameBoard();
GAME.appendChild(tbl);
START_BUTTON.addEventListener('click', function() {
    location.href = location.href;
});