function show_Section(section_Id) {
  document.querySelectorAll('body > main > section').forEach(function(section) {
    section.style.display = 'none';
  });
  document.querySelector('body > main #' + section_Id).style.display = 'block';
}

document.getElementById('tay-dua').addEventListener('click', function(event) {
  event.preventDefault();
  show_Section('sec-f1-driver');
});

document.querySelector('body>header>section #doi-dua').addEventListener('click', function(event) {
  event.preventDefault();
  show_Section('sec-f1-team');
});

document.querySelector('body>header>section #back-home').addEventListener('click', function(event){
  event.preventDefault();
  show_Section('sec-home');
});

