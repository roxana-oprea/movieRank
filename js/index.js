(function () {
  'use strict';

  // get references
  const searchElement = document.querySelector('#search');
  const tableElement = document.querySelector('table');

  // add event
  searchElement.addEventListener('keyup', searchMovie);

  // event handler
  function searchMovie() {
    let searchMovie = searchElement.value.toUpperCase();

    for (let row of tableElement.rows) {
      const cellText = row.cells[0].textContent.toUpperCase();
      const isMatch = cellText.indexOf(searchMovie) > -1;
      row.hidden = !isMatch;
    }
  }

})();
