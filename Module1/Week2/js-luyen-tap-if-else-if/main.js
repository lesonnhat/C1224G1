let name = prompt('Nhập vào tên bạn');
if (name === 'admin') {
    let pass = prompt('Nhập vào mật khẩu');
    if (pass === 'TheMaster') {
        alert('Welcome');
    }
    else if (pass === null || pass.trim() === '') {
        alert('Canceled');
    }
    else {
        alert('Wrong password!');
    }
}
else if (name === null || name.trim() === '') {
    alert('Canceled');
}
else {
    alert("I don't know you");
}

// let name = prompt('Nhập vào tên bạn');
//
// if (name === 'admin') {
//     let pass = prompt('Nhập vào mật khẩu');
//
//     if (pass === null || pass.trim() === '') {
//         alert('Canceled');
//     } else if (pass === 'TheMaster') {
//         alert('Welcome');
//     } else {
//         alert('Wrong password!');
//     }
// } else if (name === null || name.trim() === '') {
//     alert('Canceled');
// } else {
//     alert("I don't know you");
// }