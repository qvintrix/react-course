const baseUrl = 'https://reactjs-cdp.herokuapp.com/';

export const getFilms = () => {
    return fetch(`${baseUrl}movies`);
};

export const getFilm = (id) => {
    return fetch(`${baseUrl}movies/${id}`);
};
