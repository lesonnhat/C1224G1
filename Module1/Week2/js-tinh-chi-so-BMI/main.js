function tinhToan() {
    let chieucao = +document.getElementById('chieucao').value;
    let cannang = +document.getElementById('cannang').value;
    let bmi = cannang / ((chieucao/100) ** 2);
    let result;
    if (bmi < 18.5) {
        result = 'Tình trạng: GẦY';
    } else if (18.5 <= bmi && bmi < 25) {
        result = 'Tình trạng: BÌNH THƯỜNG';
    } else if (25 <= bmi && bmi < 30) {
        result = 'Tình trạng: THỪA CÂN';
    } else {
        result = 'Tình trạng: BÉO PHÌ';
    }
    document.getElementById('result').innerHTML = result;
}