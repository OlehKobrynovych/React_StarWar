import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

export const peoplesFetch = (search, page) => {
    return axios.get(`${baseURL}people/?search=${search}&page=${page}`)
}

export const peopleFetch = (id) => {
    return axios.get(`${baseURL}people/${id}`)
}

export const planetFetch = (id) => {
    return axios.get(`${baseURL}planets/${id}`)
}

export const planetsFetch = (search, page) => {
    return axios.get(`${baseURL}planets/?search=${search}&page=${page}`)
}

