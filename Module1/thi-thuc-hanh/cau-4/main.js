class CongNhan {
    constructor(hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }
}
class QuanLyCongNhan {
    constructor(arr) {
        this.allcongnhan = arr;
    }

    hienThi() {
        let table = '';
        for (let i = 0; i < this.allcongnhan.length; i++) {

            table += '<tr>';
            table += '<td>' + (i + 1) + '</td>';
            table += '<td>' + this.allcongnhan[i].hoTen + '</td>';
            table += '<td>' + this.allcongnhan[i].ngaySinh + '</td>';
            table += '<td>' + this.allcongnhan[i].diaChi + '</td>';
            table += '<td>' + this.allcongnhan[i].luong + '</td>';
            table += '<td>' + this.allcongnhan[i].chucVu + '</td>';
            table += '</tr>';
        }
        document.getElementById('data').innerHTML = table;
    }
}

let congnhan1 = new CongNhan('Lê Quang Phú', '29-04-1999', 'Hải Dương', '2000', 'Kỹ sư');
let congnhan2 = new CongNhan('Phạm Đình Linh', '25-08-1998', 'Hà Nội', '4000', 'Quản lý kho');
let congnhan3 = new CongNhan('Trịnh Thu Liên', '27-11-1999', 'Hải Phòng', '1800', 'Hành chính nhân sự');

let arr = [congnhan1, congnhan2, congnhan3];
let quanly = new QuanLyCongNhan(arr);

quanly.hienThi();