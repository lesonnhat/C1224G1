const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Biến toàn cục
let car = { x: 400, y: 500, width: 50, height: 100, speed: 2, direction: 0 };
let obstacles = [];
let rewards = [];
let score = 0;
let gameRunning = true;

// Tạo xe
const carImage = new Image();
carImage.src = 'car.png'; // Đường dẫn đến ảnh xe

// Tạo chướng ngại vật
function createObstacles() {
    for (let i = 0; i < 5; i++) {
        obstacles.push({ x: Math.random() * 750, y: Math.random() * 500, width: 50, height: 50 });
    }
}

// Tạo phần thưởng
function createRewards() {
    for (let i = 0; i < 5; i++) {
        rewards.push({ x: Math.random() * 750, y: Math.random() * 500, width: 30, height: 30 });
    }
}

// Vẽ xe
function drawCar() {
    ctx.save();
    ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
    ctx.rotate(car.direction * Math.PI / 180);
    ctx.drawImage(carImage, -car.width / 2, -car.height / 2, car.width, car.height);
    ctx.restore();
}

// Vẽ chướng ngại vật
function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

// Vẽ phần thưởng
function drawRewards() {
    ctx.fillStyle = "gold";
    rewards.forEach(reward => {
        ctx.fillRect(reward.x, reward.y, reward.width, reward.height);
    });
}

// Vẽ điểm số
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Điểm: " + score, 10, 20);
}

// Cập nhật vị trí xe
function update() {
    if (gameRunning) {
        car.y -= car.speed;

        // Kiểm tra va chạm với chướng ngại vật
        obstacles.forEach(obs => {
            if (car.x < obs.x + obs.width && car.x + car.width > obs.x &&
                car.y < obs.y + obs.height && car.y + car.height > obs.y) {
                gameRunning = false;
                alert("Game Over!");
            }
        });

        // Kiểm tra va chạm với phần thưởng
        rewards.forEach((reward, index) => {
            if (car.x < reward.x + reward.width && car.x + car.width > reward.x &&
                car.y < reward.y + reward.height && car.y + car.height > reward.y) {
                score += 10;
                rewards.splice(index, 1); // Xóa phần thưởng đã ăn
            }
        });
    }
}

// Vẽ game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    drawObstacles();
    drawRewards();
    drawScore();
}

// Điều khiển xe
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        car.direction -= 5; // Rẽ trái
    }
    if (e.key === "ArrowRight") {
        car.direction += 5; // Rẽ phải
    }
    if (e.key === "ArrowUp") {
        car.y -= car.speed; // Đi thẳng
    }
    if (e.key === "ArrowDown") {
        car.y += car.speed; // Quay ngược lại
    }
    if (e.key === "Control") {
        car.speed += 1; // Tăng tốc
    }
});

// Khởi tạo game
function init() {
    createObstacles();
    createRewards();
    setInterval(() => {
        if (gameRunning) {
            update();
            draw();
        }
    }, 1000 / 60); // 60 FPS
}

init();