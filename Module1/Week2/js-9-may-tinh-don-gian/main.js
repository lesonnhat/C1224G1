function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/x/g, '*')); // Thay thế 'x' bằng '*'
    } catch (error) {
        display.value = "Lỗi"; // Hiển thị lỗi nếu có
    }
}