function fixInfo() {

    const pts = encodeURIComponent(document.getElementById('pts').value);
    const drv= encodeURIComponent(document.getElementById('drv').value);
    const ntl= encodeURIComponent(document.getElementById('ntl').value);
    const car= encodeURIComponent(document.getElementById('car').value);
    const pn= encodeURIComponent(document.getElementById('pn').value);
    fetch(`/ranks/fix?pts=${pts}&drv=${drv}&ntl=${ntl}&car=${car}&pn=${pn}`)
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
        alert(error.message);  
        
    });
    

}
function deleteInfo() {

    const pts = encodeURIComponent(document.getElementById('pts').value);
    
    fetch(`/ranks/delete?pts=${pts}`)
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
        alert(error.message);  
        
    });
    

}
function addInfo() {

    const pts = encodeURIComponent(document.getElementById('pts').value);
    const drv= encodeURIComponent(document.getElementById('drv').value);
    const ntl= encodeURIComponent(document.getElementById('ntl').value);
    const car= encodeURIComponent(document.getElementById('car').value);
    const pn= encodeURIComponent(document.getElementById('pn').value);
    fetch(`/ranks/add?pts=${pts}&drv=${drv}&ntl=${ntl}&car=${car}&pn=${pn}`)
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
        alert(error.message);  
        
    });
    

}