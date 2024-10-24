document.querySelectorAll('body main #sec-f1-team ul li').forEach(function (item) {
    item.addEventListener('click', function () {
        var name
        name = this.querySelector('ol li i').textContent;
        fetch(`/team/data?name=${(name)}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('full-team-name').innerText = data[0]?.FULLNAME;
                document.getElementById('base').innerText = data[0]?.BASE;
                document.getElementById('team-chief').innerText = data[0]?.Team_Chief;
                document.getElementById('technical-chief').innerText = data[0]?.Technical_Chief;
                document.getElementById('chassis').innerText = data[0]?.Chassis;
                document.getElementById('power-unit').innerText = data[0]?.Power_Unit;
                document.getElementById('first-entry').innerText = data[0]?.First_Team_Entry;
                document.getElementById('world-championships').innerText = data[0]?.World_Championships;
                document.getElementById('highest-finish').innerText = data[0]?.Highest_Race_Finish;
                document.getElementById('pole-positions').innerText = data[0]?.Pole_Positions;
                document.getElementById('fastest-laps').innerText = data[0]?.Fastest_Laps;
                document.getElementById('img_driver_1').src = data[0]?.IMG_URL;
                document.getElementById('name_driver_1').innerText = data[0]?.NAME;
                document.getElementById('img_driver_2').src = data[1]?.IMG_URL;
                document.getElementById('name_driver_2').innerText = data[1]?.NAME;
            });
        document.querySelector('body main #sec-f1-team').style.display = 'none';
        document.querySelector('body main #sec-f1-team-info').style.display = 'flex';
    });
});