const raceData = [
    {
        race_name: 'Bahrain Grand Prix',
        circuit_name: 'Bahrain International Circuit',
        location: 'Sakhir, Bahrain',
        date: '2024-03-03',
        laps: 57,
        circuit_length_km: 5.41,
        race_time: '15:00:00',
    },
    {
        race_name: 'Saudi Arabian Grand Prix',
        circuit_name: 'Jeddah Corniche Circuit',
        location: 'Jeddah, Saudi Arabia',
        date: '2024-03-17',
        laps: 50,
        circuit_length_km: 6.17,
        race_time: '17:00:00',
        image: '/Image/Track/detail/Saudi_Arabia_Circuit.avif'

    },
    {
        race_name: 'Australian Grand Prix',
        circuit_name: 'Albert Park Circuit',
        location: 'Melbourne, Australia',
        date: '2024-03-31',
        laps: 58,
        circuit_length_km: 5.303,
        race_time: '14:00:00',
        image: '/Image/Track/detail/Australia_Circuit.avif'
    },
    {
        race_name: 'Azerbaijan Grand Prix',
        circuit_name: 'Baku City Circuit',
        location: 'Baku, Azerbaijan',
        date: '2024-04-28',
        laps: 51,
        circuit_length_km: 6.003,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Baku_Circuit.avif'
    },
    {
        race_name: 'Japanese Grand Prix',
        circuit_name: 'Suzuka Circuit',
        location: 'Suzuka, Japan',
        date: '2024-04-07',
        laps: 53,
        circuit_length_km: 5.807,
        race_time: '14:00:00',
        image: 'Image/Track/detail/Japan_Circuit.avif'
    },
    {
        race_name: 'Chinese Grand Prix',
        circuit_name: 'Shanghai International Circuit',
        location: 'Shanghai, China',
        date: '2024-04-21',
        laps: 56,
        circuit_length_km: 5.451,
        race_time: '15:00:00',
        image: 'Image/Track/detail/China_Circuit.png'
    },
    {
        race_name: 'Miami Grand Prix',
        circuit_name: 'Miami International Autodrome',
        location: 'Miami, USA',
        date: '2024-05-05',
        laps: 57,
        circuit_length_km: 5.412,
        race_time: '15:30:00',
        image: 'Image/Track/detail/Miami_Circuit.avif'
    },
    {
        race_name: 'Emilia Romagna Grand Prix',
        circuit_name: 'Imola Circuit',
        location: 'Imola, Italy',
        date: '2024-05-19',
        laps: 63,
        circuit_length_km: 4.909,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Emilia_Romagna_Circuit.avif'
    },
    {
        race_name: 'Monaco Grand Prix',
        circuit_name: 'Circuit de Monaco',
        location: 'Monaco, Monaco',
        date: '2024-05-26',
        laps: 78,
        circuit_length_km: 3.337,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Monoco_Circuit.avif'
    },
    {
        race_name: 'Spanish Grand Prix',
        circuit_name: 'Circuit de Barcelona-Catalunya',
        location: 'Barcelona, Spain',
        date: '2024-06-09',
        laps: 66,
        circuit_length_km: 4.675,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Spain_Circuit.avif'
    },
    {
        race_name: 'Canadian Grand Prix',
        circuit_name: 'Circuit Gilles Villeneuve',
        location: 'Montreal, Canada',
        date: '2024-06-23',
        laps: 70,
        circuit_length_km: 4.361,
        race_time: '14:00:00',
        image: 'Image/Track/detail/Canada_Circuit.avif'
    },
    {
        race_name: 'Austrian Grand Prix',
        circuit_name: 'Red Bull Ring',
        location: 'Spielberg, Austria',
        date: '2024-06-30',
        laps: 71,
        circuit_length_km: 4.318,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Austria_Circuit.avif'
    },
    {
        race_name: 'British Grand Prix',
        circuit_name: 'Silverstone Circuit',
        location: 'Silverstone, UK',
        date: '2024-07-07',
        laps: 52,
        circuit_length_km: 5.891,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Great_Britain_Circuit.avif'
    },
    {
        race_name: 'Hungarian Grand Prix',
        circuit_name: 'Hungaroring',
        location: 'Mogyoród, Hungary',
        date: '2024-07-21',
        laps: 70,
        circuit_length_km: 4.381,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Hungary_Circuit.avif'
    },
    {
        race_name: 'Belgian Grand Prix',
        circuit_name: 'Circuit de Spa-Francorchamps',
        location: 'Stavelot, Belgium',
        date: '2024-08-25',
        laps: 44,
        circuit_length_km: 7.004,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Belgium_Circuit.png'
    },
    {
        race_name: 'Dutch Grand Prix',
        circuit_name: 'Circuit Zandvoort',
        location: 'Zandvoort, Netherlands',
        date: '2024-09-01',
        laps: 72,
        circuit_length_km: 4.259,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Netherlands_Circuit.avif'
    },
    {
        race_name: 'Italian Grand Prix',
        circuit_name: 'Monza Circuit',
        location: 'Monza, Italy',
        date: '2024-09-08',
        laps: 53,
        circuit_length_km: 5.793,
        race_time: '15:00:00',
        image: 'Image/Track/detail/Italy_Circuit.avif'
    },
    {
        race_name: 'Singapore Grand Prix',
        circuit_name: 'Marina Bay Street Circuit',
        location: 'Marina Bay, Singapore',
        date: '2024-09-22',
        laps: 61,
        circuit_length_km: 5.063,
        race_time: '20:00:00',
        image: 'Image/Track/detail/Singapore_Circuit.avif'
    },
    {
        race_name: 'United States Grand Prix',
        circuit_name: 'Circuit of the Americas',
        location: 'Austin, USA',
        date: '2024-10-20',
        laps: 56,
        circuit_length_km: 5.513,
        race_time: '15:00:00',
        image: 'Image/Track/detail/USA_Circuit.avif'
    },
    {
        race_name: 'Mexico City Grand Prix',
        circuit_name: 'Autódromo Hermanos Rodríguez',
        location: 'Mexico City, Mexico',
        date: '2024-10-27',
        laps: 71,
        circuit_length_km: 4.304,
        race_time: '14:00:00',
        image: '/Image/Track/detail/Mexico_Circuit.avif'
    },
    {
        race_name: 'Brazilian Grand Prix',
        circuit_name: 'Interlagos Circuit',
        location: 'São Paulo, Brazil',
        date: '2024-11-03',
        laps: 71,
        circuit_length_km: 4.309,
        race_time: '14:00:00',
        image: '/Image/Track/detail/Brazil_Circuit.png'
    },
    {
        race_name: 'Las Vegas Grand Prix',
        circuit_name: 'Las Vegas Street Circuit',
        location: 'Las Vegas, USA',
        date: '2024-11-23',
        laps: 50,
        circuit_length_km: 6.12,
        race_time: '22:00:00',
        image: '/Image/Track/detail/Las_Vegas_Circuit.avif'
    },
    {
        race_name: 'Qatar Grand Prix',
        circuit_name: 'Lusail International Circuit',
        location: 'Lusail, Qatar',
        date: '2024-10-06',
        laps: 57,
        circuit_length_km: 5.380,
        race_time: '18:00:00',
        image: '/Image/Track/detail/Qatar_Circuit.avif'
    },
    {
        race_name: 'Abu Dhabi Grand Prix',
        circuit_name: 'Yas Marina Circuit',
        location: 'Abu Dhabi, UAE',
        date: '2024-12-01',
        laps: 58,
        circuit_length_km: 5.554,
        race_time: '17:00:00',
        image: '/Image/Track/detail/Abu_Dhabi_Circuit.avif'
    }
];

// Function to populate race details in the table
function populateRaceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const raceName = urlParams.get('race_name');
    const race = raceData.find(r => r.race_name === raceName);
    const detailsBody = document.getElementById('details-body');

    if (race) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${race.race_name}</td>
            <td>${race.circuit_name}</td>
            <td>${race.location}</td>
            <td>${new Date(race.date).toLocaleDateString()}</td>
            <td>${race.laps}</td>
            <td>${race.circuit_length_km}</td>
            <td>${race.race_time}</td>
        `;
        detailsBody.appendChild(row);
    }
}

// Back button functionality
document.getElementById('back-button').onclick = function () {
    window.history.back();
};

// Initialize the page
window.onload = () => {
    populateRaceDetails();
};