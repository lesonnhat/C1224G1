class Student {
    constructor(id, fullName, date, gender, grade, img) {
        this.id = id;
        this.fullName = fullName;
        this.date = date;
        this.gender = gender;
        this.grade = grade;
        this.img = img;
    }

    edit(id, fullName, date, gender, grade, img) {
        this.id = id;
        this.fullName = fullName;
        this.date = date;
        this.gender = gender;
        this.grade = grade;
        this.img = img
    }
}

function validateId(id) {
    const idPattern = /^[0-9]+$/;
    return idPattern.test(id) && !manage.students.some(s => s.id === id);
}

class StudentManagement {
    constructor(arr) {
        this.students = arr;
    }

    showList() {
        let table = '';
        for (let i = 0; i < this.students.length; i++) {


            table += '<tr>';
            table += '<td>';
            table += this.students[i].id;
            table += '</td>';

            table += '<td>';
            table += this.students[i].fullName;
            table += '</td>';

            table += '<td>';
            table += this.students[i].date;
            table += '</td>';

            table += '<td>';
            table += this.students[i].gender;
            table += '</td>';

            table += '<td>';
            table += this.students[i].grade;
            table += '</td>';

            table += '<td>';
            table += `<img width="100px" height="100px" src="${this.students[i].img}">`;
            table += '</td>';

            table += '<td>' +
                '<button class="btn" style="background-color: mediumblue;" type="button" onclick="editStudent(' + i + ')">&nbspSửa&nbsp</button>' +
                ' <button class="btn" style="background-color: red;"  type="button" onclick="deleteStudent(' + i + ')">&nbspXóa&nbsp</button> ' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('list-student').innerHTML = table;
    }

    addStudent(student) {
        this.students.push(student);
    }

    delete(id) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sinh viên " + this.students[id].fullName + " ?");
        if (confirmDelete) {
            this.students.splice(id, 1);
            manage.showList();
        }
    }

    findStudentById(id) {
        return this.students[id];
    }

    edit(student, id, fullName, date, gender, grade, img) {
        student.edit(id, fullName, date, gender, grade, img);
    }

}

let student = new Student('001', "Trịnh Thu Liên", '27/11/1999', 'Nữ', '59PM2', 'https://i.imgur.com/KfbztJN.jpeg');
let student1 = new Student('002', 'Phạm Đình Linh', '25/08/1998', 'Nam', '59TH3', 'https://i.imgur.com/IelPozF.jpeg');
let student2 = new Student('003', 'Lê Thị Thanh Huyền', '07/07/1999', 'Nữ', '59TH1', 'https://i.imgur.com/trEaU4w.jpeg');
let arr = [student, student1, student2];
let manage = new StudentManagement(arr);

function addStudent() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullName').value;
    let date = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    if (!validateId(id)) {
        alert("Mã sinh viên đã tồn tại hoặc không hợp lệ.");
        return;
    }

    // Kiểm tra tên
    if (!name) {
        alert("Họ tên là bắt buộc!");
        return; // Ngăn không cho thêm sinh viên nếu không có họ tên
    }

    // Kiểm tra ngày sinh
    if (!date) {
        alert("Ngày sinh là bắt buộc!");
        return; // Ngăn không cho thêm sinh viên nếu không có ngày sinh
    }

    // Chuyển đổi ngày từ yyyy-mm-dd sang dd/mm/yyyy
    const formattedDate = date.split('-').reverse().join('/');

    // Kiểm tra link ảnh
    if (!img) {
        alert("Vui lòng chèn link ảnh!");
        return; // Ngăn không cho thêm sinh viên nếu không có link ảnh
    }

    let student = new Student(id, name, formattedDate, gender, grade, img);
    manage.addStudent(student);
    manage.showList();

    Swal.fire({
        title: "Thành công!",
        text: "Thêm mới sinh viên " + name,
        icon: "success"
    });
    // alert("Thêm mới thành công sinh viên " + name)
    clear();
}

function clear() {
    document.getElementById('id').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('date').value = '';
    document.querySelector('input[name="gender"][value="Nam"]').checked = true;
    document.getElementById('grade').value = '';
    document.getElementById('img').value = '';
}

function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let studentId = null; // Khởi tạo studentId với null
function editStudent(id) {
    let student = manage.findStudentById(id);
    if (student) {
        document.getElementById('id').value = student.id;
        document.getElementById('fullName').value = student.fullName;

        // Chuyển đổi từ dd/mm/yyyy sang yyyy-mm-dd
        const dateParts = student.date.split('/'); // Tách chuỗi dd/mm/yyyy
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Chuyển đổi thành yyyy-mm-dd

        document.getElementById('date').value = formattedDate;
        document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
        document.getElementById('grade').value = student.grade;
        document.getElementById('img').value = student.img;

        studentId = id; // Cập nhật studentId
    }
}

function updateStudent() {
    if (studentId !== null) { // Kiểm tra studentId có hợp lệ không
        let id = document.getElementById('id').value;
        let fullName = document.getElementById('fullName').value;
        let date = document.getElementById('date').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let grade = document.getElementById('grade').value;
        let img = document.getElementById('img').value;

        // Kiểm tra họ tên
        if (!fullName) {
            alert("Họ tên là bắt buộc!");
            return; // Ngăn không cho thêm sinh viên nếu không có họ tên
        }

        // Kiểm tra ngày sinh
        if (!date) {
            alert("Ngày sinh là bắt buộc!");
            return; // Ngăn không cho thêm sinh viên nếu không có ngày sinh
        }

        // Kiểm tra link ảnh
        if (!img) {
            alert("Vui lòng chèn link ảnh!");
            return; // Ngăn không cho thêm sinh viên nếu không có link ảnh
        }

        // Chuyển đổi ngày từ yyyy-mm-dd sang dd/mm/yyyy
        const dateParts = date.split('-');
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        // Kiểm tra mã sinh viên mới
        let existingStudent = manage.findStudentById(studentId);
        if (id !== existingStudent.id && !validateId(id)) {
            alert("Mã sinh viên đã tồn tại hoặc không hợp lệ.");
            return;
        }

        // Cập nhật thông tin sinh viên
        existingStudent.edit(id, fullName, formattedDate, gender, grade, img);

        manage.showList();
        Swal.fire({
            title: "Thành công!",
            text: "Đã cập nhật sinh viên " + fullName,
            icon: "success"
        });
        clear(); // Reset form
        studentId = null; // Reset studentId
    } else {
        alert("Vui lòng chọn sinh viên cần cập nhật.");
    }
}

manage.showList();