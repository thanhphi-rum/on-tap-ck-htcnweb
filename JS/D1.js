// Hàm kiểm tra họ tên khách hàng
function kiemTraHoTen() {
    var regex = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)+$/
    var hoTen = document.getElementById('ten').value;
    var errorElement = document.getElementById('orr1')

    // Kiểm tra rỗng
    if(hoTen == '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc !';
        errorElement.style.color = 'red';
    } else {
        if(regex.test(hoTen)) {
            errorElement.innerHTML = 'Họ và tên hợp lệ';
            errorElement.style.color = 'green';
            return true;
        } else {
            errorElement.innerHTML = 'Họ và tên không hợp lệ. Họ tên chỉ là các ký tự in hoa, có thể có khoảng trắng, họ tên có ít nhất là 2 từ Họ, Tên';
            errorElement.style.color = 'red';
            return false;
        }
    }
}
// Hàm kiểm tra số điện thoại
function kiemTraSoDienThoai() {
    var regex = /^(07|08|09)\d{8}$/;
    var soDienThoai = document.getElementById('sdt').value;
    var errorElement = document.getElementById('orr2');
    
    // Kiểm tra rỗng
    if(soDienThoai == '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc !';
        errorElement.style.color = 'red';
    } else {
        if(regex.test(soDienThoai)) {
            errorElement.innerHTML = 'Số điện thoại hợp lệ';
            errorElement.style.color = 'green';
            return true;
        } else {
            errorElement.innerHTML = 'Số điện thoại không hợp lệ. Số điện thoại gồm 10 chữ số trong đó 2 chữ số đầu là 09, 08 hoặc 07 và theo sau là 8 chữ số.';
            errorElement.style.color = 'red';
            return false;
        }
    }
    
}
// Hàm kiểm tra ngày đi
function kiemTraNgayDi() {
    var ngayDi = new Date(document.getElementById('nd').value);
    var ngayHienTai = new Date();
    ngayHienTai.setHours(0, 0, 0, 0)
    ngayHienTai.setDate(ngayHienTai.getDate() + 1);
    var errorElement = document.getElementById('orr3');

    if(ngayDi >= ngayHienTai) {
        errorElement.innerHTML = 'Ngày đi hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Ngày đi không hợp lệ. Ngày đi phải sau ngày hiện tại từ 1 ngày trở lên';
        errorElement.style.color = 'red';
        return false;
    }
}
// Tính giá tiền phụ thu hành lý
function tinhTien(giaTien) {
    var soTien = Number(giaTien);
    document.getElementById("pthl").value = soTien
}
// Hàm kiểm tra ảnh
function kiemTraAnh() {
    var regex = /\.(jpg|jpeg|png)$/i;
    var anh = document.getElementById('hinh').value;
    var errorElement = document.getElementById('orr4');

    if(regex.test(anh)) {
        errorElement.innerHTML = 'Định dạng ảnh hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Định dạng ảnh không hợp lệ. Hình CMND là các file hình có tên bất kỳ và có phần định dạng .jpg, .png, .gif';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm lưu thông tin vào table
function luuThongTin() {
    var hoTen = document.getElementById('ten').value;
    var anhCCCD = document.getElementById('hinh').value;
    var ngayDi = document.getElementById('nd').value;
    var soDienThoai = document.getElementById('sdt').value;
    var phuThuHanhLy = document.getElementById('pthl').value;
    var thanhToan = document.querySelector('input[name="paymentMethod"]:checked').value;

    var luu = document.getElementById('thongTin');
    var stt = luu.rows.length + 1;

    var row = luu.insertRow();
    row.innerHTML= `
        <td>${stt}</td>
        <td>${hoTen}</td>
        <td><img src="${URL.createObjectURL(document.getElementById('hinh').files[0])}" style="width:80px; height:60px;"></td>
        <td>${ngayDi}</td>
        <td>${soDienThoai}</td>
        <td>${Number(phuThuHanhLy).toLocaleString('vi', 'VN')} VNĐ</td>
        <td>${thanhToan}</td>
    `;
    bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
}