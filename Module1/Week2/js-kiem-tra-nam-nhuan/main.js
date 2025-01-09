let year = parseInt(prompt('Nhập vào năm của bạn'));
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 ===0) {
            alert('Đây là năm nhuận');
        }
        else alert('Đây không phải năm nhuận');
    }
    else alert('Đây là năm nhuận');
}
else alert('Đây không phải năm nhuận');