// import { userFetch, usersFetch } from "../api";

import { peopleFetch, peoplesFetch } from "../api";

const SET_PEOPLES = 'SET_PEOPLES';
const SET_PEOPLE = 'SET_PEOPLE';

const initialState = {
    count: null,
    next: null,
    previous: null,
    results: [],
    people: {}
};

const peoples_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLES:
            return { 
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results
            }
        case SET_PEOPLE:
            return { 
                ...state,
                people: action.payload
            }
        default:
            return state;
    }
}

export default peoples_reducer;

export const setPeoples_ActionCreater = (payload) => ({ type: SET_PEOPLES, payload });
export const setPeople_ActionCreater = (payload) => ({ type: SET_PEOPLE, payload });


export const getPeoplesThunk = (search, page) => (dispatch) => {

    // const baseURL = 'https://swapi.dev/api/';

    peoplesFetch(search, page)
    // axios.get(`${baseURL}people/?page=${page}`)
        .then(res => {
            if (res.status === 200 && res.data) {
                let results = res.data.results.map(el => {

                    let id = parseInt(el.url.match(/\d+/));

            //         // let arr = el.url.split('/');
            //         // let id = arr[arr.length-2];
                    return { ...el, id: id };
                });

                dispatch(setPeoples_ActionCreater({ ...res.data, results: results }));
            }
        })
        .catch((err) => {
            dispatch(setPeoples_ActionCreater({count: null, next: null, previous: null, results: [] }));
        });
     
}


export const getPeopleThunk = (id) => (dispatch) => {

    // const baseURL = 'https://swapi.dev/api/';

    peopleFetch(id)
    // axios.get(`${baseURL}people/${id}`)
        .then(res => {
            // debugger
            if (res.status === 200 && res.data) {
                    let id = parseInt(res.data.url.match(/\d+/));

                dispatch(setPeople_ActionCreater({...res.data, id: id}));
            }
        })
        .catch((err) => {
            dispatch(setPeople_ActionCreater({}));
        });
     
}

