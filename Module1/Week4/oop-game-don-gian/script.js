function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 200; // Thêm thuộc tính speed

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed; // Sử dụng speed để di chuyển
        console.log('Di chuyển sang phải: ' + this.left);
    }

    this.moveLeft = function(){
        this.left -= this.speed; // Di chuyển sang trái
        console.log('Di chuyển sang trái: ' + this.left);
    }

    this.moveUp = function(){
        this.top -= this.speed; // Di chuyển lên
        console.log('Di chuyển lên: ' + this.top);
    }

    this.moveDown = function(){
        this.top += this.speed; // Di chuyển xuống
        console.log('Di chuyển xuống: ' + this.top);
    }
}

var hero = new Hero('pikachu.png', 20, 30, 200); // Thay đổi đường dẫn ảnh

function start(){
    // Cập nhật vị trí của hero
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}

// Lắng nghe sự kiện bàn phím
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowRight':
            hero.moveRight();
            break;
        case 'ArrowLeft':
            hero.moveLeft();
            break;
        case 'ArrowUp':
            hero.moveUp();
            break;
        case 'ArrowDown':
            hero.moveDown();
            break;
    }
});

// Khởi động game
start();