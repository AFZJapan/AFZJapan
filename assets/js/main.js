(function($){
  $(function(){
    $(".button-collapse").sideNav();
  });
})(jQuery);

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
);

function changeLang() {
  dropdown('open');
}

$( document ).ready(function() {
  $('.pref-dropdown-trigger').dropdown({
    // ref. https://archives.materializecss.com/0.100.2/dropdown.html
    inDuration: 0,
    outDuration: 0,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left'
  });
  
  const tableRows = document.querySelectorAll('#AFZTable tr');
  const tableFallback = document.querySelector('.afz-table-fallback');
  
  // Filter by types
  const typeLinks = document.querySelectorAll('#legend a');
  const resetLink = document.querySelector('.type-show-all');
  typeLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const clickedType = this.getAttribute('data-type');
      // update map
      updateMapType(clickedType);
      
      tableRows.forEach(row => {
        row.classList.add('hidden');
        if (clickedType === '') {
          row.classList.remove('hidden');
          resetLink.style.display = 'none';
        } else {
          resetLink.style.display = 'inline-block';
          const rowType = row.getAttribute('data-type');
          if (rowType === clickedType) {
            row.classList.remove('hidden');
          } else {
            row.classList.add('hidden');
          }
        }
      });
    });
  });

  // Filter by preferctures
  const prefDropdownLinks = document.querySelectorAll('#pref-dropdown a');
  prefDropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedPref = this.getAttribute('data-pref-id');
      let tableIsEmpty = true;
      // update map
      updateMapPref(selectedPref);

      resetLink.style.display = 'none';

      tableRows.forEach(row => {
        row.classList.add('hidden');
        if (selectedPref === '') {
          row.classList.remove('hidden');
          tableIsEmpty = false;
        } else {
          const rowPref = row.getAttribute('data-pref');
          if (rowPref === selectedPref) {
            row.classList.remove('hidden');
            tableIsEmpty = false;
          } else {
            row.classList.add('hidden');
          }
        }
      });
      if (tableIsEmpty) {
        tableFallback.classList.remove('hidden');
      } else {
        tableFallback.classList.add('hidden');
      }
    });
  });

});
