let a = prompt('Nhập vào a');
switch (a){
    case '0':
        alert('a = 0');
        break;
    case '1':
        alert('a = 1');
        break;
    case '2':
    case '3':
        alert('a = 2,3');
        break;
    default:
        alert('a là giá trị khác');
        break;
}