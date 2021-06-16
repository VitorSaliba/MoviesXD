// Initial Values
const API_KEY = '2f0e8537e29cc979d65a738d10c3d77f';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=2f0e8537e29cc979d65a738d10c3d77f';

function generateUrl(path){
    const url = `https://api.themoviedb.org/3${path}?api_key=2f0e8537e29cc979d65a738d10c3d77f`;
    return url;
}

function requestMovies(url, onComplete, onError){
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value){
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;

    requestMovies(url, renderSearchMovies, handleError);
}

function getUpcomingMovies(){
    const path = '/movie/upcoming';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Novos títulos' });
    requestMovies(url, render, handleError);
}

function getTopRatedMovies(){
    const path = '/movie/top_rated';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Filmes com melhor avaliação' });
    requestMovies(url, render, handleError);
}

function getPopularMovies(){
    const path = '/movie/popular';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Filmes populares' });
    requestMovies(url, render, handleError);
}