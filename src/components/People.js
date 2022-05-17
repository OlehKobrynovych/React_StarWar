import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { getPeopleThunk } from "../store/peoples_reducer";
import CarouselFilms from "./CarouselFilms";


const People = () => {
    const dispatch = useDispatch()
    const people = useSelector(state =>state.peoples.people)
    // const count = useSelector(state =>state.peoples.count)
    // const [page, setPage] = useState(1);
    // const navigate = useNavigate();
    const {id} = useParams();
    
    const [peopleFilms, setPeopleFilms] = useState([]);
    // debugger

    console.log('People');


    useEffect(()=>{
        if (people.films) {
            setPeopleFilms(people.films.map(el =>{
              return parseInt(el.match(/\d+/), 10)
            // debugger
        })
        )
    }
    },[people])

    // let id = parseInt(el.url.match(/\d+/));

    useEffect(()=>{
       dispatch(getPeopleThunk(id))
    },[])

    return (
        <div style={{display: 'flex'}} >

            { people.id ? 
            <>
                <div>
                    <img 
                    style={{width: '250px'}} 
                    src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`}
                    />        
                </div>
                <div>
                    <p>Name {people.name},</p>
                    <p>Height {people.height},</p>
                    <p>Mass {people.mass},</p>
                    <p>Hair_color {people.hair_color},</p>
                    <p>Skin_color {people.skin_color},</p>
                    <p>Eye_color {people.eye_color},</p>
                    <p>Birth_year {people.birth_year},</p>
                    <p>Gender {people.gender},</p>
                </div>
                <CarouselFilms peopleFilms={peopleFilms}/>
            </>
             : <div>Not Item</div> }


        </div>
    )
}

export default React.memo(People);