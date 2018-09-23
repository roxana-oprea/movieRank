(function () {
  'use strict';

  function renderMovies(movies) {
    // references
    const templateElement = document.querySelector('#movie-row');
    const tbodyElement = document.querySelector('tbody');

    for (let movie of movies) {
      let clone = document.importNode(templateElement.content, true);
      let cells = clone.querySelector('tr').cells;

      cells[0].textContent = movie.name;
      cells[1].textContent = movie.imdbRating;
      cells[2].textContent = movie.genre;
      cells[3].textContent = movie.director;
      cells[4].textContent = movie.year;
      cells[5].checked = movie.seen;

      tbodyElement.appendChild(clone);
    }
  }

  // populate table
  function populateTable() {

    fetch('http://localhost:3000/movies').then(response => response.json()).then(movies => {
      renderMovies(movies);
    });
  }

  populateTable();

  // references
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

  // pagination - jQuery

  $('.pagination').twbsPagination({
    totalPages: 3,
    visiblePages: 3,
    firstClass: 'd-none',
    lastClass: 'd-none',
    prev: 'Back',
  });


})();
