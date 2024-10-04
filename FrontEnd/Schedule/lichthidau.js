const raceData = [
    {
        race_name: 'Bahrain Grand Prix',
        circuit_name: 'Bahrain International Circuit',
        location: 'Sakhir, Bahrain',
        date: '2024-03-03',
        laps: 57,
        circuit_length_km: 5.41,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Bahrain_Circuit.avif'
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
        image: '/Image/Track/detail/Baku_Circuit.avif'
    },
    {
        race_name: 'Japanese Grand Prix',
        circuit_name: 'Suzuka Circuit',
        location: 'Suzuka, Japan',
        date: '2024-04-07',
        laps: 53,
        circuit_length_km: 5.807,
        race_time: '14:00:00',
        image: '/Image/Track/detail/Japan_Circuit.avif'
    },
    {
        race_name: 'Chinese Grand Prix',
        circuit_name: 'Shanghai International Circuit',
        location: 'Shanghai, China',
        date: '2024-04-21',
        laps: 56,
        circuit_length_km: 5.451,
        race_time: '15:00:00',
        image: '/Image/Track/detail/China_Circuit.png'
    },
    {
        race_name: 'Miami Grand Prix',
        circuit_name: 'Miami International Autodrome',
        location: 'Miami, USA',
        date: '2024-05-05',
        laps: 57,
        circuit_length_km: 5.412,
        race_time: '15:30:00',
        image: '/Image/Track/detail/Miami_Circuit.avif'
    },
    {
        race_name: 'Emilia Romagna Grand Prix',
        circuit_name: 'Imola Circuit',
        location: 'Imola, Italy',
        date: '2024-05-19',
        laps: 63,
        circuit_length_km: 4.909,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Emilia_Romagna_Circuit.avif'
    },
    {
        race_name: 'Monaco Grand Prix',
        circuit_name: 'Circuit de Monaco',
        location: 'Monaco, Monaco',
        date: '2024-05-26',
        laps: 78,
        circuit_length_km: 3.337,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Monoco_Circuit.avif'
    },
    {
        race_name: 'Spanish Grand Prix',
        circuit_name: 'Circuit de Barcelona-Catalunya',
        location: 'Barcelona, Spain',
        date: '2024-06-09',
        laps: 66,
        circuit_length_km: 4.675,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Spain_Circuit.avif'
    },
    {
        race_name: 'Canadian Grand Prix',
        circuit_name: 'Circuit Gilles Villeneuve',
        location: 'Montreal, Canada',
        date: '2024-06-23',
        laps: 70,
        circuit_length_km: 4.361,
        race_time: '14:00:00',
        image: '/Image/Track/detail/Canada_Circuit.avif'
    },
    {
        race_name: 'Austrian Grand Prix',
        circuit_name: 'Red Bull Ring',
        location: 'Spielberg, Austria',
        date: '2024-06-30',
        laps: 71,
        circuit_length_km: 4.318,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Austria_Circuit.avif'
    },
    {
        race_name: 'British Grand Prix',
        circuit_name: 'Silverstone Circuit',
        location: 'Silverstone, UK',
        date: '2024-07-07',
        laps: 52,
        circuit_length_km: 5.891,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Great_Britain_Circuit.avif'
    },
    {
        race_name: 'Hungarian Grand Prix',
        circuit_name: 'Hungaroring',
        location: 'Mogyoród, Hungary',
        date: '2024-07-21',
        laps: 70,
        circuit_length_km: 4.381,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Hungary_Circuit.avif'
    },
    {
        race_name: 'Belgian Grand Prix',
        circuit_name: 'Circuit de Spa-Francorchamps',
        location: 'Stavelot, Belgium',
        date: '2024-08-25',
        laps: 44,
        circuit_length_km: 7.004,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Belgium_Circuit.png'
    },
    {
        race_name: 'Dutch Grand Prix',
        circuit_name: 'Circuit Zandvoort',
        location: 'Zandvoort, Netherlands',
        date: '2024-09-01',
        laps: 72,
        circuit_length_km: 4.259,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Netherlands_Circuit.avif'
    },
    {
        race_name: 'Italian Grand Prix',
        circuit_name: 'Monza Circuit',
        location: 'Monza, Italy',
        date: '2024-09-08',
        laps: 53,
        circuit_length_km: 5.793,
        race_time: '15:00:00',
        image: '/Image/Track/detail/Italy_Circuit.avif'
    },
    {
        race_name: 'Singapore Grand Prix',
        circuit_name: 'Marina Bay Street Circuit',
        location: 'Marina Bay, Singapore',
        date: '2024-09-22',
        laps: 61,
        circuit_length_km: 5.063,
        race_time: '20:00:00',
        image: '/Image/Track/detail/Singapore_Circuit.avif'
    },
    {
        race_name: 'United States Grand Prix',
        circuit_name: 'Circuit of the Americas',
        location: 'Austin, USA',
        date: '2024-10-20',
        laps: 56,
        circuit_length_km: 5.513,
        race_time: '15:00:00',
        image: '/Image/Track/detail/USA_Circuit.avif'
    }
];

// Function to format date
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString(undefined, options);
}


function createRaceCards() {
    const raceList = document.getElementById('race-list');

    raceData.forEach((race) => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('race-card');

        // Add image
        const img = document.createElement('img');
        img.src = race.image;
        img.alt = race.race_name;
        card.appendChild(img);

        // Create content container
        const content = document.createElement('div');
        content.classList.add('race-content');

        // Race name
        const raceName = document.createElement('h3');
        raceName.textContent = race.race_name;
        content.appendChild(raceName);

        // Race date
        const raceDate = document.createElement('p');
        raceDate.classList.add('race-date');
        raceDate.textContent = formatDate(race.date);
        content.appendChild(raceDate);

        // Location
        const location = document.createElement('p');
        location.classList.add('race-location');
        location.textContent = race.location;
        content.appendChild(location);

        // Append content to card
        card.appendChild(content);

        // View Details link
        const viewDetails = document.createElement('a');
        viewDetails.href = '#';
        viewDetails.textContent = 'View Details';
        viewDetails.classList.add('view-details');
        card.appendChild(viewDetails);
        // Add event listener to "View Details" link
        viewDetails.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = `detail.html?raceIndex=${raceData.indexOf(race)}`;
        });

        // View Details link
        viewDetails.onclick = () => {
            window.location.href = `race-detail.html?race_name=${encodeURIComponent(race.race_name)}`;
        };
        // Append card to race list
        raceList.appendChild(card);
    });
}
// Initialize the page
window.onload = () => {
    createRaceCards();
};






