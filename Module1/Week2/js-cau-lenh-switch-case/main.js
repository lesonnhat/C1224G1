function tinhToan(){
    let thang = +document.getElementById("thang").value;
    let result;
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 'Tháng ' + thang + ' có 31 ngày';
            break;
        case 2:
            result = 'Tháng ' + thang + ' có 28 hoặc 29 ngày';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = 'Tháng ' + thang + ' có 30 ngày';
            break;
        default:
            result = 'Tháng bạn nhập không hợp lệ';
            break;
    }
    document.getElementById('result').innerHTML = result;
}