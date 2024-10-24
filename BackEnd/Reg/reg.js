function regForm() {
    document.getElementById('false-password').style.display = 'none';
    const email = encodeURIComponent(document.getElementById('email').value);
    const password = encodeURIComponent(document.getElementById('password').value);
    const re_password = encodeURIComponent(document.getElementById('re_password').value);

    fetch(`/reg/check?email=${email}&password=${password}&re_password=${re_password}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status == 501) {
                throw new Error('Nhập lại mật khẩu chưa chính xác!');
            } else if (response.status == 500) {
                throw new Error('Internal Server Error!');
            } else {
                throw new Error('Email đã tồn tại!');
            }
        })
        .then(data => {
            if (data.success) {
                document.getElementById('false-password').innerText = "Đăng ký thành công!";
                document.getElementById('false-password').style.display = 'inline-block';

            }
        })
        .catch(error => {
            document.getElementById('false-password').innerText = error.message;
            document.getElementById('false-password').style.display = 'inline-block';

        });


}