function tinhDoF() {
    const doC = +document.getElementById('doC').value;
    const ketquaDoF = doC * 9/5 + 32;

    document.getElementById('ketquaDoF').innerHTML = ketquaDoF + ' độ F';
}

function tinhFeet() {
    const met = +document.getElementById('met').value;
    const ketquaFeet = met * 3.2808;

    if (met >= 0) {
        document.getElementById('ketquaFeet').innerHTML = ketquaFeet + ' feet';
    }
    else {
        document.getElementById('ketquaFeet').innerHTML = 'mét nhập vào phải lớn hơn 0';
    }

}

function tinhDienTichVuong() {
    const canhA = +document.getElementById('canhA').value;
    const ketquaDienTichVuong = canhA ** 2;

    if (canhA >= 0) {
        document.getElementById('ketquaDienTichVuong').innerHTML = ketquaDienTichVuong + ' m2';
    }
    else {
        document.getElementById('ketquaDienTichVuong').innerHTML = 'Cạnh nhập vào phải lớn hơn 0';
    }

}

function tinhDienTichCN() {
    const canhDai = +document.getElementById('canhDai').value;
    const canhNgan = +document.getElementById('canhNgan').value;
    const ketquaDienTichCN = canhDai * canhNgan;

    if (canhDai >= 0 && canhNgan >= 0) {
        document.getElementById('ketquaDienTichCN').innerHTML = ketquaDienTichCN + ' m2';
    }
    else {
        document.getElementById('ketquaDienTichCN').innerHTML = 'Cạnh nhập vào phải lớn hơn 0';
    }

}

function tinhDienTichTamGiac() {
    const canhkeA = +document.getElementById('canhkeA').value;
    const canhkeB = +document.getElementById('canhkeB').value;
    const ketquaDienTichTamGiac = (canhkeA * canhkeB) / 2;

    if (canhkeA >= 0 && canhkeB >= 0) {
        document.getElementById('ketquaDienTichTamGiac').innerHTML = ketquaDienTichTamGiac + ' m2';
    }
    else {
        document.getElementById('ketquaDienTichTamGiac').innerHTML = 'Cạnh nhập vào phải lớn hơn 0';
    }

}

function tinhX() {
    const nhapA = +document.getElementById('nhapA').value;
    const nhapB = +document.getElementById('nhapB').value;
    const ketquaX = (-nhapB) / nhapA;

    if (nhapA != 0) {
        document.getElementById('ketquaX').innerHTML = 'x = ' + ketquaX;
    }
    else {
        document.getElementById('ketquaX').innerHTML = 'a phải khác 0';
    }

}
