let students = [];

// Hàm hiển thị danh sách học viên
function displayStudents() {
    const table = document.getElementById('studentTable');
    table.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.email}</td>
            <td>${student.dob}</td>
            <td>${student.module}</td>
        `;
        table.appendChild(row);
    });
}

// Hàm thêm học viên
function addStudent() {
    const id = prompt("Nhập mã học viên (HV-XXXX):");
    if (!validateId(id)) {
        alert("Mã học viên không hợp lệ hoặc đã tồn tại.");
        return;
    }

    const name = prompt("Nhập tên học viên (tối đa 50 ký tự):");
    if (name.length > 50) {
        alert("Tên học viên không được vượt quá 50 ký tự.");
        return;
    }

    const className = prompt("Nhập lớp:");
    const email = prompt("Nhập email:");
    const dob = prompt("Nhập ngày sinh (dd/mm/yyyy):");
    if (!validateDate(dob)) {
        alert("Ngày sinh không hợp lệ.");
        return;
    }

    const module = prompt("Nhập module (1-6):");
    if (!validateModule(module)) {
        alert("Module không hợp lệ.");
        return;
    }

    const student = {
        id: id,
        name: name,
        class: className,
        email: email,
        dob: dob,
        module: module
    };

    students.push(student);
    displayStudents();
}

// Hàm sửa thông tin học viên
function editStudent() {
    const id = prompt("Nhập mã học viên cần sửa:");
    const student = students.find(s => s.id === id);

    if (!student) {
        alert("Mã học viên không tồn tại.");
        return;
    }

    const name = prompt("Nhập tên học viên mới:", student.name);
    if (name.length > 50) {
        alert("Tên học viên không được vượt quá 50 ký tự.");
        return;
    }

    const className = prompt("Nhập lớp mới:", student.class);
    const email = prompt("Nhập email mới:", student.email);
    const dob = prompt("Nhập ngày sinh mới (dd/mm/yyyy):", student.dob);
    if (!validateDate(dob)) {
        alert("Ngày sinh không hợp lệ.");
        return;
    }

    const module = prompt("Nhập module mới (1-6):", student.module);
    if (!validateModule(module)) {
        alert("Module không hợp lệ.");
        return;
    }

    // Cập nhật thông tin học viên
    student.name = name;
    student.class = className;
    student.email = email;
    student.dob = dob;
    student.module = module;

    displayStudents();
}

// Hàm xóa học viên
function deleteStudent() {
    const id = prompt("Nhập mã học viên cần xóa:");
    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        alert("Mã học viên không tồn tại.");
        return;
    }

    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa học viên này?");
    if (confirmDelete) {
        students.splice(studentIndex, 1);
        displayStudents();
    }
}

// Hàm kiểm tra mã học viên
function validateId(id) {
    const idPattern = /^HV-\d{4}$/;
    return idPattern.test(id) && !students.some(s => s.id === id);
}

// Hàm kiểm tra module
function validateModule(module) {
    const mod = parseInt(module);
    return mod >= 1 && mod <= 6;
}

// Hàm kiểm tra định dạng ngày
function validateDate(date) {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return datePattern.test(date);
}

// Khởi tạo giao diện
document.addEventListener('DOMContentLoaded', () => {
    displayStudents();
});

// Các nút thêm, sửa, xóa
document.getElementById('addButton').addEventListener('click', addStudent);
document.getElementById('editButton').addEventListener('click', editStudent);
document.getElementById('deleteButton').addEventListener('click', deleteStudent);