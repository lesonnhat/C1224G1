function tinhCong() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let ketqua = num1 + num2;
    document.getElementById("ketqua").innerHTML = 'Kết quả phép tính = ' + ketqua;
}
function tinhTru() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let ketqua = num1 - num2;
    document.getElementById("ketqua").innerHTML = 'Kết quả phép tính = ' + ketqua;
}
function tinhNhan() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let ketqua = num1 * num2;
    document.getElementById("ketqua").innerHTML = 'Kết quả phép tính = ' + ketqua;
}
function tinhChia() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let ketqua = num1 / num2;
    document.getElementById("ketqua").innerHTML = 'Kết quả phép tính = ' + ketqua;
}

// Dùng 1 hàm duy nhất

// function calculate(operation) {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     let result;
//
//     switch (operation) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             result = num2 !== 0 ? num1 / num2 : 'Không thể chia cho 0';
//             break;
//         default:
//             result = 'Phép toán không hợp lệ';
//     }
//
//     document.getElementById('ketqua').innerText = `Kết quả: ${result}`;}