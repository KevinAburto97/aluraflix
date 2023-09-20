const API = "https://api.themoviedb.org/";

export const getMovies = (path) => {
    return fetch(API+path, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIzMmIzYzI1OWNkZjlhNTEyYjAwZjM0MjQzNjIwMiIsInN1YiI6IjY0ZmI3MGJiZmZjOWRlMGVlMTc0OTgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wBZH3Lm0h7yyWuSlIHWrsFfvuz_pgVhLHSpm_2jyi1A'
        }
    })
    .then(response => response.json())
    .catch(err => console.error(err));
}