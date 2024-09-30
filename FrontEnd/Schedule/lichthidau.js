document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:6969/C:\Users\NC\Documents\GitHub\Formula1\BackEnd\schedule.js')
        .then(response => response.json())
        .then(data => {
            const scheduleList = document.getElementById('schedule-list');
            data.forEach(race => {
                // Tạo card cho từng lịch
                const card = document.createElement('div');
                card.classList.add('schedule-card');

                // Tên cuộc đua
                const raceName = document.createElement('h3');
                raceName.textContent = race.race_name;
                card.appendChild(raceName);

                // Tên trường đua
                const circuitName = document.createElement('p');
                circuitName.textContent = `Circuit: ${race.circuit_name}`;
                card.appendChild(circuitName);

                // ĐỊa điểm
                const location = document.createElement('p');
                location.textContent = `Location: ${race.location}`;
                card.appendChild(location);

                // ngày thi
                const raceDate = document.createElement('p');
                const date = new Date(race.race_date);
                raceDate.textContent = `Date: ${date.toDateString()}`;
                card.appendChild(raceDate);

                // laps và thời gian
                const laps = document.createElement('p');
                laps.textContent = `Laps: ${race.laps}`;
                card.appendChild(laps);

                const raceTime = document.createElement('p');
                raceTime.textContent = `Time: ${race.race_time}`;
                card.appendChild(raceTime);


                scheduleList.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
