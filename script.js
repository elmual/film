const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Neche kinoya baxmisiniz?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Neche kinoya baxmisiniz?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalMovie: function() {
        if (personalMovieDB.count < 10) {
            console.log('Siz heveskasiniz');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Siz klassik izleyicisiniz');
        } else if (personalMovieDB.count >= 30) {
            console.log('Siz kinomensiniz');
        } else {
            console.log('Sehv var');
        }    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Xosunuza gelen ${i} nomreli janr`);
            personalMovieDB.genres[i-1] = genre;
        }
    }
}

