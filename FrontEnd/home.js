document.getElementById('fetchData').addEventListener('click', () => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data').innerText = data.message;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
});