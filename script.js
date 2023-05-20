let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Neche kinoya baxmisiniz?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Neche kinoya baxmisiniz?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('Axirinci baxdiginiz film');
        let b = prompt('Nech bal ile qiymetlendirirsiniz,');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Hazir');
        } else {
            console.log('Sehv var');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalMovie() {
    if (personalMovieDB.count < 10) {
        console.log('Siz heveskasiniz');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Siz klassik izleyicisiniz');
    } else if (personalMovieDB.count >= 30) {
        console.log('Siz kinomensiniz');
    } else {
        console.log('Sehv var');
    }    
}

detectPersonalMovie();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Xosunuza gelen ${i} nomreli janr`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();
