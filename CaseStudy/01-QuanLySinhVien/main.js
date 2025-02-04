let students = [];

class Student {
    constructor (id, fullname, date, gender, grade, img) {
        this.id= id;
        this.fullname= fullname;
        this.date= date;
        this.gender= gender;
        this.grade= grade;
        this.img = img;
    }
    getID() {
        return this.id;
    }
    getFullname() {
        return this.fullname;
    }
    getDate() {
        return this.date;
    }
    getGender(){
        return this.gender;
    }
    getGrade() {
        return this.grade;

    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setFullname(fullname) {
        this.fullname=fullname;
    }
    setDate(date) {
        this.date=date;
    }
    setGender(gender){
        this.gender=gender;
    }
    setGrade(grade) {
        this.grade=grade;
    }
    setImg(img){
        this.img=img;
    }

    edit(id, fullname, date,gender, grade, img){
        this.id = id;
        this.fullname = fullname;
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

function validateDate(date) {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return datePattern.test(date);
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
            table += this.students[i].fullname;
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
            table += '<img width="100px" height="100px" src=" '+this.students[i].img+'">';
            table += '</td>';

            table += '<td>' +
                '<button class="btn" style="background-color: mediumblue;" type="button" onclick="editStudent('+i+')">&nbspSửa&nbsp</button>' +
                ' <button class="btn" style="background-color: red;"  type="button" onclick="deleteStudent('+i+')">&nbspXóa&nbsp</button> ' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('list-student').innerHTML = table;
    }

    addStudent(student) {
        this.students.push(student);
    }

    delete(id) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa học viên " + this.students[id].fullname + " ?" );
        if (confirmDelete) {
            this.students.splice(id, 1);
            manage.showList();
        }
    }

    findStudentById(id){
        return this.students[id];
    }

    edit(student,id, fullname, date, gender, grade, img){
        student.edit(id, fullname, date,gender, grade, img);
    }

}

let student = new Student('001', "Trịnh Thu Liên", '27/11/1999', 'Nữ','59PM2','https://i.imgur.com/KfbztJN.jpeg' );
let student1 = new Student('002','Phạm Đình Linh','25/08/1998','Nam', '58TH3','https://i.imgur.com/IelPozF.jpeg');
let student2 = new Student('003','Lê Thị Thanh Huyền','07/07/1999','Nữ','59TH1','https://i.imgur.com/trEaU4w.jpeg');
let arr =[student, student1, student2];
let manage = new StudentManagement(arr);

function addStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    if (!validateId(id)) {
        alert("Mã học viên đã tồn tại hoặc bị bỏ trống.");
        return;
    }

    if (!validateDate(date)) {
        alert("Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng dd/mm/yyyy.");
        return;
    }

    let student = new Student(id,name,date,gender,grade,img);
    manage.addStudent(student);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.querySelector('input[name="gender"][value="Nam"]').checked = true;
    document.getElementById('grade').value = '';
    document.getElementById('img').value= '';
}

function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let studentId = 0;
function editStudent(id){
    let student = manage.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('date').value = student.date;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
    document.getElementById('grade').value = student.grade;
    document.getElementById('img').value = student.img;

    studentId = id;
}

function updateStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    let student = manage.findStudentById(studentId);
    manage.edit(student,id,name,date,gender,grade, img);
    manage.showList();
    clear();
}

manage.showList();