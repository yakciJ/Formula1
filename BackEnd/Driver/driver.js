document.querySelector('body main #sec-f1-driver ul li').addEventListener('click', function () {
    document.querySelector('body main #sec-f1-driver').style.display='none';
    document.querySelector('body main #sec-f1-driver-info').style.display='flex';
})





fetch('/driver/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('info-img').src = data[0]?.IMG_URL;
        document.getElementById('info-name').innerText = data[0]?.NAME;
        document.getElementById('info-team').innerText = data[0]?.TEAM;
        document.getElementById('info-country').innerText = data[0]?.COUNTRY;
        document.getElementById('info-podiums').innerText = data[0]?.PODIUMS;
        document.getElementById('info-points').innerText = data[0]?.POINTS;
        document.getElementById('info-grands-prix').innerText = data[0]?.GPE;
        document.getElementById('info-championships').innerText = data[0]?.WC;
        document.getElementById('info-highest-finish').innerText = data[0]?.HRF;
        document.getElementById('info-highest-grid').innerText = data[0]?.HGP;
        document.getElementById('info-dob').innerText = data[0]?.BIRTH;
        document.getElementById('info-pob').innerText = data[0]?.PLACE;
    });