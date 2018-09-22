(function () {
  'use strict';

  // populate table
  function populateTable() {
    const templateElement = document.querySelector('#movie-row');
    const tbodyElement = document.querySelector('tbody');


    fetch('http://localhost:3000/movies').then(response => response.json()).then(movies => {

      for (let movie of movies) {
        let clone = document.importNode(templateElement.content, true);
        let tdElements = clone.querySelectorAll('td');

        tdElements[0].textContent = movie.name;
        tdElements[1].textContent = movie.imdbRating;
        tdElements[2].textContent = movie.genre;
        tdElements[3].textContent = movie.director;
        tdElements[4].textContent = movie.year;
        tdElements[5].textContent = movie.seen;

        tbodyElement.appendChild(clone);
      }
    });

  }

  populateTable();

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
