//  Hàm kiểm tra họ tên
function kiemTraHoTen() {
    var regex = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)+$/;
    var hoTen = document.getElementById('hoTen').value;
    var errorElement = document.getElementById('orr1');

    if(hoTen === '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(hoTen)) {
        errorElement.innerHTML = 'Họ và tên hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Họ và tên không hợp lệ. Có ít nhất 2 từ và ký tự đầu tiên của mỗi từ phải được viết hoa';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiếm tra số điện thoại
function kiemTraSĐT() {
    var regex = /^0\d{3}\.\d{3}\.\d{3}$/;
    var soDienThoai = document.getElementById('soDienThoai').value;
    var errorElement = document.getElementById('orr2');

    if(soDienThoai === '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(soDienThoai)) {
        errorElement.innerHTML = 'Số điện thoại hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Số điện thoại không hợp lệ. 0XXX.XXX.XXX trong đó X: là ký tự số';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiểm tra email
function kiemTraEmail() {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('orr3');

    if(email === '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(email)) {
        errorElement.innerHTML = 'Email hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Email không hợp lệ.  name_email@iuh.edu.vn, trong đó name_email ít nhất là 3 ký tự trong đó có kí tự chữ, ký tự số, ít nhất 1 ký tự đặc biệt';
        errorElement.style.color = 'red';
        return false;
    }
}