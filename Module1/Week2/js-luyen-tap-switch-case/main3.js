// let number = parseInt(prompt('Nhập vào một số'));
// if (number > 0) {
//     alert('1');
// }
// else if (number < 0) {
//     alert('-1');
// }
// else {
//     alert('0');
// }

let number = parseInt(prompt('Nhập vào một số'));
switch (true){
    case (number > 0):
        alert('1');
        break;
    case (number < 0):
        alert('-1');
        break;
    default:
        alert('0');
        break;
}