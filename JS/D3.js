// Hàm kiểm tra mã bệnh nhân
function kiemTraMaBN() {
    var regex = /^BN-\d{5}$/;
    var maBN = document.getElementById('maBenhNhan').value;
    var errorElement = document.getElementById('orr1');

    if(maBN === '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(maBN)) {
        errorElement.innerHTML = 'Mã bệnh nhân hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Mã bệnh nhân không hợp lệ. BN-YYYYY trong đó BN là cố định, YYYYY là 5 chữ số';
        errorElement.style.color = 'red';
        return false;
    }
}
// Kiểm tra định dạng ảnh
function kiemTraAnh() {
    var regex = /\.(jpg|png|gif)$/i;
    var theBaoHiem = document.getElementById('theBaoHiem').value;
    var errorElement = document.getElementById('orr2');

    if(theBaoHiem === '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(theBaoHiem)) {
        errorElement.innerHTML = 'Định dạng ảnh thẻ bảo hiểm hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Định dạng ảnh thẻ bảo hiểm không hợp lệ. Phải là .png .jpg .gif';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiểm tra ngày đăng ký khám
function kiemTraNgayDK() {
    var ngayDK = new Date(document.getElementById('ngayDangKyKham').value);
    var ngayHT = new Date();
    ngayHT.setHours(0, 0, 0, 0);
    ngayHT.setDate(ngayHT.getDate() + 1);
    var errorElement = document.getElementById('orr3');

    if(ngayDK >= ngayHT) {
        errorElement.innerHTML = 'Ngày đăng ký khám hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Ngày đăng ký khám không hợp lệ. Ngày đăng ký phải sau ngày hiện tại';
        errorElement.style.color = 'red';
        return false;
    }
}
// Tính tổng thành tiền
function tinhTongThanhTien() {
    var total = 0;
    document.querySelectorAll('input[name="loaiDichVu"]:checked').forEach(function(cb) {
        total += Number(cb.value);
    });

    document.getElementById('tongThanhTienDichVu').value = total.toLocaleString('vi-VN') + ' VNĐ';
}
// Lưu thông tin
function luuThongTin() {
    var maBN = document.getElementById('maBenhNhan').value;
    var theBaoHiem = document.getElementById('theBaoHiem').value;
    var ngayDK = document.getElementById('ngayDangKyKham').value;
    var loaiDichVuArr = [];
    document.querySelectorAll('input[name="loaiDichVu"]:checked').forEach(function(cb) {
        var label = document.querySelector('label[for="' + cb.id + '"]').innerText;
        loaiDichVuArr.push(label);
    });
    var loaiDichVu = loaiDichVuArr.join(', ')
    var tongThanhTienDichVu = document.getElementById('tongThanhTienDichVu').value;
    var chuyenKhoa = document.getElementById('chuyenKhoa').value;

    var luu = document.getElementById('thongTin');
    var stt = luu.rows.length + 1;
    var row = luu.insertRow();
    row.innerHTML = `
        <td>${stt}</td>
        <td>${maBN}</td>
        <td><img src="${URL.createObjectURL(document.getElementById('theBaoHiem').files[0])}" style="width: 80px; height: 60px;"></td>
        <td>${ngayDK}</td>
        <td>${loaiDichVu}</td>
        <td>${tongThanhTienDichVu}</td>
        <td>${chuyenKhoa}</td>
    `;

    bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
}