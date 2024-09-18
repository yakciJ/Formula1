function show_Section(section_Id) {
    document.querySelectorAll('body > main > section').forEach(function(section) {
      section.style.display = 'none';
    });
    document.querySelector('body > main #' + section_Id).style.display = 'block';
  }
  
 
  
  
  
  