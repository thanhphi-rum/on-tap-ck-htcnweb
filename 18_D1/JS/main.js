// Họ và tên
function kiemTraHoTen() {
    var ten = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)+$/;
    var hoTen = document.getElementById("ten").value;
    var errorLabel = document.getElementById("orr1");
    if(ten.test(hoTen)) {
        errorLabel.innerHTML="Định dạng hợp lệ";
        errorLabel.style.color = "green";
        return true;
    } else {
        errorLabel.innerHTML="Định dạng không hợp lệ";
        errorLabel.style.color = "red";
        return false;
    }
}
// Số điện thoại
function kiemTraSoDienThoai() {
    var sdt = /^(02|03|05|06|07|08|09)\d{8}$/;
    var soDienThoai = document.getElementById("sdt").value;
    var errorLabel = document.getElementById("orr2");
    if(sdt.test(soDienThoai)) {
        errorLabel.innerHTML="Định dạng hợp lệ";
        errorLabel.style.color = "green";
        return true;
    } else {
        errorLabel.innerHTML="Định dạng không hợp lệ";
        errorLabel.style.color = "red";
        return false;
    }
}
// Tính giá tiền phụ thu hành lý
function tinhTien(giaTien) {
    var soTien = Number(giaTien);
    document.getElementById("pthl").value = soTien
}