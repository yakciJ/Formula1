function submitForm() {
    document.getElementById('false-password').style.display = 'none';
    const email = encodeURIComponent(document.getElementById('email').value);
    const password = encodeURIComponent(document.getElementById('password').value);
    
    fetch(`/sign/check?email=${email}&password=${password}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Sai thông tin email hoặc mật khẩu!');
        }
    })
    .then(data => {
        if (data.success) {
            window.location.href = '/home2'; 
        }
    })
    .catch(error => {
        document.getElementById('false-password').style.display = 'inline-block';   
        
    });

            
}
