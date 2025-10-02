function register() {
    // Lấy giá trị từ các trường input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    

    // Reset lỗi
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    

    // Biến kiểm tra tính hợp lệ
    let isValid = true;

    // Kiểm tra các trường input
    if (!name) {
        document.getElementById('nameError').textContent = 'Tên không được để trống';
        isValid = false;
    } else if (name.length < 8) {
        document.getElementById('nameError').textContent = 'Tên phải có ít nhất 8 ký tự';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email không được để trống';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email không hợp lệ';
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Mật khẩu không được để trống';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Mật khẩu phải có ít nhất 8 ký tự';
        isValid = false;
    }

    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Mật khẩu xác nhận không được để trống';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Mật khẩu nhập lại không khớp';
        isValid = false;
    }
    // Nếu tất cả các trường hợp đều hợp lệ
    if (isValid) {
        // Lưu thông tin đăng ký vào localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
       

        // Chuyển đến trang đăng nhập
        window.location.href = 'index.html';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}