// Hàm kiểm tra mã sách
function kiemTraMaSach() {
    var regex = /^\d{3}-(2[5-9]|[3-9])-[A-Z]{3}$/;
    var maSach = document.getElementById('maSach').value;
    var errorElement = document.getElementById('orr1');

    if(maSach == '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc !';
        errorElement.style.color = 'red';
        return false;
    }

    var namHienTai = new Date().getFullYear().toString().slice(-2); // Lấy 2 số cuối của năm hiện tại
    var namNhap = parseInt(maSach.split('-')[1]);
    var namHT = parseInt(namHienTai);

    if(regex.test(maSach) && namNhap >= namHienTai) {
        errorElement.innerHTML = 'Mã sách hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Mã sách không hợp lệ. Mã sách có định dạng XXX-XX-XXX, trong có XXX là 3 chữ số, XX là 2 ký tự số thể hiện năm từ năm hiện tại về sau, XXX 2 ký tự in hoa';
        errorElement.style.color = 'red';
        return false;
    }
}
// Kiểm tra định dạng hình ảnh
function kiemTraAnh() {
    var regex = /\.(png|jpg|gif)$/i;
    var anh = document.getElementById('hinhMinhHoa').value;
    var errorElement = document.getElementById('orr2');

    // Kiểm tra rỗng
    if(anh == '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc !';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(anh)) {
        errorElement.innerHTML = 'Định dạng của ảnh hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Định dạng của ảnh không hợp lệ. Hình minh họa là các file hình có tên bất kỳ và có phần định dạng .jpg, .png, .gif';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiểm tra ngày nhập
function kiemTraNgayNhap() {
    var ngayNhap = new Date(document.getElementById('ngayNhap').value);
    var ngayHienTai = new Date();
    ngayHienTai.setHours(0, 0, 0, 0);
    ngayHienTai.setDate(ngayHienTai.getDate() + 1);
    var errorElement = document.getElementById('orr3');

    if(ngayNhap >= ngayHienTai) {
        errorElement.innerHTML = 'Ngày nhập hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Ngày nhập không hợp lệ. Ngày nhập phải sau ngày hiện tại';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiểm tra số lượng
function kiemTraSoLuong() {
    var value = document.getElementById('soLuong').value;
    var soLuong = parseInt(value);
    var errorElement = document.getElementById('orr4');

    // Kiểm tra rỗng
    if(value.trim() == '') {
        errorElement.innerHTML = 'Đây là trường bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    // Kiểm tra là số
    if(isNaN(soLuong)) {
        errorElement.innerHTML = 'Số lượng phải là số';
        errorElement.style.color = 'red';
        return false;
    }
    // Kiểm tra điều kiện
    if(soLuong > 0 && soLuong < 1000) {
        errorElement.innerHTML = 'Số lượng hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Số lượng không hợp lệ. Số lượng phải >0 và <1000';
        errorElement.style.color = 'red';
        return false;
    }
}
// Tính chiết khấu 
function tinhChietKhau(chietKhau) {
    var phanTram = document.getElementById('chietKhau');
    phanTram.value = chietKhau + '%';
}
// Lưu thông tin
function luuThongTin() {
    var maSach = document.getElementById('maSach').value;
    var hinhMinhHoa = document.getElementById('hinhMinhHoa').value;
    var ngayNhap = document.getElementById('ngayNhap').value;
    var soLuong = document.getElementById('soLuong').value;
    var nhaXuatBan = document.getElementById('nhaXuatBan').value;
    var chietKhau = document.getElementById('chietKhau').value;
    var theLoai = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(cb) {
        theLoai.push(cb.value);
    });


    var luu = document.getElementById('luuThongTin');
    var stt = luu.rows.length + 1;
    var row = luu.insertRow();
    
    row.innerHTML = `
        <td>${stt}</td>
        <td>${maSach}</td>
        <td><img src="${URL.createObjectURL(document.getElementById('hinhMinhHoa').files[0])}" style="width: 80px; height: 60px;"></td>
        <td>${ngayNhap}</td>
        <td>${soLuong}</td>
        <td>${nhaXuatBan}</td>
        <td>${chietKhau}</td>
        <td>${theLoai}</td>
    `;

    bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
}