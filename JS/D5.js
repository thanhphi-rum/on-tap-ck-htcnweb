// Hàm kiếm tra họ tên
function kiemTraHoTen() {
    var regex = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)+$/;
    var hoTen = document.getElementById('ht').value;
    var errorElement = document.getElementById('orr1');

    if(hoTen === '') {
        errorElement.innerHTML = 'Đây là trường dữ liệu bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(hoTen)) {
        errorElement.innerHTML = 'Họ tên hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Họ tên không hợp lệ. Ký tự đầu của mỗi từ là chữ hoa (vd: Le Van An)';
        errorElement.style.color = 'red';
        return false;
    }
}
// Kiểm tra ngày sinh (phải trước ngày hiện tại)
function kiemTraNgaySinh() {
    var ngaySinh = new Date(document.getElementById('ns').value);
    var ngayHienTai = new Date();
    ngaySinh.setHours(0, 0, 0, 0);
    var errorElement = document.getElementById('orr2');

    if(ngaySinh < ngayHienTai) {
        errorElement.innerHTML = 'Ngày sinh hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Ngày sinh không hợp lệ. Ngày sinh phải trước ngày hiện tại';
        errorElement.style.color = 'red';
        return false;
    }
    
}
// Hàm kiểm tra số điện thoại
function kiemTraSDT() {
    var regex = /^(09|08|03)\d{8}$/;
    var soDienThoai = document.getElementById('sdt').value;
    var errorElement = document.getElementById('orr3');
    
    if(soDienThoai === '') {
        errorElement.innerHTML = 'Đây là trường dữ liệu bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(soDienThoai)) {
        errorElement.innerHTML = 'Số điện thoại hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Số điện thoại không hợp lệ. Có định dạng 10 số, được bắt đầu với 09,03,08';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm kiểm tra email
function kiemTraEmail() {
    var regex = /^[A-Za-z0-9._]+@[A-Za-z0-9]+\.com$/;
    var email = document.getElementById('em').value;
    var errorElement = document.getElementById('orr4');
    
    if(email === '') {
        errorElement.innerHTML = 'Đây là trường dữ liệu bắt buộc';
        errorElement.style.color = 'red';
        return false;
    }
    if(regex.test(email)) {
        errorElement.innerHTML = 'Email hợp lệ';
        errorElement.style.color = 'green';
        return true;
    } else {
        errorElement.innerHTML = 'Email không hợp lệ. Phải có ký tự @ và kết thúc với .com';
        errorElement.style.color = 'red';
        return false;
    }
}
// Hàm hiển thị thời gian học
function thoiGianHoc(tg) {
    var thoiGian = document.getElementById('tgh');
    thoiGian.value = tg + ' tháng';
}
// Hình thức học
function hinhThucHoc() {
    var radios = document.getElementsByName("hinhThucHoc");
    var error = document.getElementById("orr5");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            error.innerHTML = "✓ Hợp lệ";
            error.style.color = "green";
            return true;
        }
    }
    error.innerHTML = "Vui lòng chọn hình thức học";
    error.style.color = "red";
    return false;
}
// Kỹ năng luyện tập (checkbox bắt buộc chọn ít nhất 1)
function kiemTraKyNang() {
    var checkboxes = document.getElementsByName("kyNangLT");
    var error = document.getElementById("orr6");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            error.innerHTML = "✓ Hợp lệ";
            error.style.color = "green";
            return true;
        }
    }
    error.innerHTML = "Vui lòng chọn ít nhất 1 kỹ năng";
    error.style.color = "red";
    return false;
}
// Hàm lưu thông tin
function saveData() {
    if (!kiemTraHoTen()) return;
    if (!kiemTraNgaySinh()) return;
    if (!kiemTraSDT()) return;
    if (!kiemTraEmail()) return;
    if (!hinhThucHoc()) return;
    if (!kiemTraKyNang()) return;

    var ht = document.getElementById("ht").value.trim();
    var ns = document.getElementById("ns").value;
    var sdt = document.getElementById("sdt").value.trim();
    var em = document.getElementById("em").value.trim();
    var ckh = document.getElementById("ckh");
    var khoaHoc = ckh.options[ckh.selectedIndex].text;
    var tgh = document.getElementById("tgh").value;

    // Lấy hình thức học
    var hinhThuc = document.querySelector('input[name="hinhThucHoc"]:checked').value;

    // Lấy kỹ năng được chọn
    var kyNang = [];
    document.querySelectorAll('input[name="kyNangLT"]:checked').forEach(function(cb) {
        kyNang.push(cb.value);
    });

    var luu = document.getElementById('thongTin');
    var stt = luu.rows.length + 1;
    var row = luu.insertRow();
    row.innerHTML = `
        <td>${stt}</td>
        <td>${ht}</td>
        <td>${ns}</td>
        <td>${sdt}</td>
        <td>${em}</td>
        <td>${khoaHoc} (${tgh})</td>
        <td>${hinhThuc}</td>
        <td>${kyNang.join(", ")}</td>
    `;

    bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
}