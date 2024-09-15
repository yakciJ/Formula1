document.getElementById('tay-dua').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelectorAll('body > main > section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.getElementById('sec-f1-driver').style.display = 'block';
});

document.querySelector('body>header>section #doi-dua').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelectorAll('body > main > section').forEach(function(section) { 
    section.style.display = 'none';
  });
  document.querySelector('body > main #sec-f1-team').style.display = 'block'; 
});



