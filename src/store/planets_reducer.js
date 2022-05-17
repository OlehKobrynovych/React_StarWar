import { planetFetch, planetsFetch } from "../api";

const SET_PLANETS = 'SET_PLANETS';
const SET_PLANET = 'SET_PLANET';

const initialState = {
    count: null,
    next: null,
    previous: null,
    results: [],
    planet: {}
};

const planets_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS:
            return { 
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results
            }
            case SET_PLANET:
            return { 
                ...state,
                planet: action.payload
            }
        default:
            return state;
    }
}

export default planets_reducer;

export const setPlanets_ActionCreater = (payload) => ({ type: SET_PLANETS, payload });
export const setPlanet_ActionCreater = (payload) => ({ type: SET_PLANET, payload });


export const getPlanetsThunk = (search, page) => (dispatch) => {

    // const baseURL = 'https://swapi.dev/api/';

    planetsFetch(search, page)
    // axios.get(`${baseURL}people/?page=${page}`)
        .then(res => {
            if (res.status === 200 && res.data) {
                // debugger

                let results = res.data.results.map(el => {
                    // let arr = el.url.split('/');
                    // let id = arr[arr.length-2];
                    let id = parseInt(el.url.match(/\d+/));

                    return { ...el, id: id };
                });

                dispatch(setPlanets_ActionCreater({ ...res.data, results: results }));
            }
        })
        .catch((err) => {
            dispatch(setPlanets_ActionCreater({count: null, next: null, previous: null, results: [] }));
        });
     
}


export const getPlanetThunk = (id) => (dispatch) => {

    // const baseURL = 'https://swapi.dev/api/';

    planetFetch(id)
    // axios.get(`${baseURL}planets/${id}`)
        .then(res => {
            // debugger
            if (res.status === 200 && res.data) {
                    let arr = res.data.url.split('/');
                    let id = arr[arr.length-2];

                dispatch(setPlanet_ActionCreater({...res.data, id: id}));
            }
        })
        .catch((err) => {
            dispatch(setPlanet_ActionCreater({}));
        });
     
}

