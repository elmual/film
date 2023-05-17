let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i = 0; i < 2; i++) {

    let a = prompt('Axirinci baxdiginiz film');
    let b = prompt('Nech bal ile qiymetlendirirsiniz,');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB[a] = b;
        console.log('Hazir');
    } else {
        console.log('Sehv var');
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log('Siz heveskasiniz');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Siz klassik izleyicisiniz');
} else if (personalMovieDB.count >= 30) {
    console.log('Siz kinomensiniz');
} else {
    console.log('Sehv var');
}

console.log(personalMovieDB);
