 "use strict"

//alert('Hello');

//const result = confirm('Aer you here?');
//console.log(result);

//const answer = prompt('Вам є 18?', '');
//console.log(typeof(answer));

//const answers = []

//answers[0] = prompt('What is your name?', '');
//answers[1] = prompt('What is surename?', '');
//answers[2] = prompt('What is your age?', '');

//document.write(answers);

//const user = 'Taras';
//alert(`Hello, ${user}`);
    
// Home work

const numberOfFilms = +prompt('How many movies have you seen?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
};

const a = prompt('One of the last watched movies?', ''),
      b = prompt('How would tou rate it?', ''),
      c = prompt('One of the last watched movies?', ''),
      d = prompt('How would tou rate it?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);





      

