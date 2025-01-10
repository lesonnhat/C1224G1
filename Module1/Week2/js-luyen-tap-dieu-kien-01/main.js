function kiemTraAB() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let ketquaAB;

    if (b!== 0) {
        if (a % b === 0) {
            ketquaAB = a + ' chia hết cho ' + b;
        }
        else {
            ketquaAB = a + ' không chia hết cho ' + b;
        }
    }
    else {
        ketquaAB = 'Không thể chia cho 0';
    }
    document.getElementById("ketquaAB").innerHTML = ketquaAB;
}

function kiemtraTuoi() {
    let tuoiHS = +document.getElementById("tuoiHS").value;
    let ketquaTuoi;
    if (tuoiHS > 0) {
        if (tuoiHS >= 15) {
            ketquaTuoi = 'Hợp lệ';
        }
        else {
            ketquaTuoi = 'Học sinh chưa đủ tuổi vào lớp 10';
        }
    }
    else {
        ketquaTuoi = 'Tuổi không thể nhỏ hơn 0';
    }
    document.getElementById("ketquaTuoi").innerHTML = ketquaTuoi;
}

function kiemtraSoNguyen() {
    let soNguyen = +document.getElementById("soNguyen").value;
    let ketquaSoNguyen;
    if (soNguyen > 0) {
        ketquaSoNguyen = soNguyen + ' lớn hơn 0';
    }
    else if (soNguyen === 0) {
        ketquaSoNguyen = 'Đây là số ' + soNguyen;
    }
    else {
        ketquaSoNguyen = soNguyen + ' nhỏ hơn 0';
    }
    document.getElementById("ketquaSoNguyen").innerHTML = ketquaSoNguyen;
}

function kiemtra3So() {
    let soNguyen1 = +document.getElementById("soNguyen1").value;
    let soNguyen2 = +document.getElementById("soNguyen2").value;
    let soNguyen3 = +document.getElementById("soNguyen3").value;

    let ketqua3So;
    if (soNguyen1 > soNguyen2) {
        if (soNguyen1 > soNguyen3 || soNguyen1 === soNguyen3) {
            ketqua3So = soNguyen1 + ' là số lớn nhất';
        }
        else {
            ketqua3So = soNguyen3 + ' là số lớn nhất';
        }
    }
    else {
        if (soNguyen2 > soNguyen3 || soNguyen2 === soNguyen3) {
            ketqua3So = soNguyen2 + ' là số lớn nhất';
        }
        else {
            ketqua3So = soNguyen3 + ' là số lớn nhất';
        }
    }
    document.getElementById("ketqua3So").innerHTML = ketqua3So;
}

function kiemtraDiem() {
    let diemKiemTra = +document.getElementById("diemKiemTra").value;
    let diemGiuaKy = +document.getElementById("diemGiuaKy").value;
    let diemCuoiKy = +document.getElementById("diemCuoiKy").value;

    let diemTB = (diemKiemTra + diemGiuaKy + diemCuoiKy) / 3;

    let ketquaDiem;
    if (diemTB >= 9) {
        ketquaDiem = 'Chúc mừng bạn. Bạn đạt học lực Giỏi';
    }
    else if (7 <= diemTB && diemTB < 9) {
        ketquaDiem = 'Bạn đạt học lực Khá';
    }
    else if (5 <= diemTB && diemTB < 7) {
        ketquaDiem = 'Bạn đạt học lực Trung Bình';
    }
    else {
        ketquaDiem = 'Bạn đạt học lực Yếu. Cần cố gắng hơn!'
    }
    document.getElementById("ketquaDiem").innerHTML = ketquaDiem;
}

function tinhHoaHong() {
    let doanhSo = +document.getElementById("doanhSo").value;
    let tienHoaHong;

    if (doanhSo > 0 || doanhSo ===0) {
        if (0 <= doanhSo && doanhSo <= 49999999) {
            tienHoaHong = 'Doanh số tháng này vẫn chưa đủ. Cố gắng thêm nhé!';
        }
        if (50000000 <= doanhSo && doanhSo <= 149999999) {
            tienHoaHong = 'Tiền hoa hồng của bạn là: ' + (doanhSo * 0.03).toFixed(2) + ' VNĐ';
        }
        if (150000000 <= doanhSo && doanhSo <= 299999999) {
            tienHoaHong = 'Tiền hoa hồng của bạn là: ' + (doanhSo * 0.06).toFixed(2) + ' VNĐ';
        }
        if (300000000 <= doanhSo && doanhSo <= 499999999) {
            tienHoaHong = 'Tiền hoa hồng của bạn là: ' + (doanhSo * 0.09).toFixed(2) + ' VNĐ';
        }
        if (doanhSo >= 500000000) {
            tienHoaHong = 'Tuyệt vời! Tiền hoa hồng của bạn là: ' + (doanhSo * 0.12).toFixed(2) + ' VNĐ';
        }
    }
    else {
        tienHoaHong = 'Bạn quá báooo';
    }
    document.getElementById("tienHoaHong").innerHTML = tienHoaHong;
}