import fetch from 'isomorphic-fetch';

const baseUrl = 'https://reactjs-cdp.herokuapp.com/';

export const getFilms = (searchFilter, sortFilter, inputValue = '') => {
  const searchBy = `searchBy=${searchFilter}`;
  const sortBy = `sortBy=${sortFilter}`;
  const url = `${baseUrl}movies`;
  const urlWithParams = `?search=${inputValue}&${searchBy}&${sortBy}&sortOrder=desc`;

  return fetch(inputValue.length ? url + urlWithParams : url);
};

export const getFilm = id => fetch(`${baseUrl}movies/${id}`);
