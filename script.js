let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Axirinci baxdiginiz film');
let b = prompt('Nech bal ile qiymetlendirirsiniz,');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
