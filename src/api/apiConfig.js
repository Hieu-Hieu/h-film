export const apiConfig = {
    baseUrl: 'https://imdb-api.com/API/',
    apiKey: process.env.REACT_APP_API_MOVIE_KEY,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}