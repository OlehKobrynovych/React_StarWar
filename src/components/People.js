import { Box } from "@mui/material";
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
        // <Box style={{display: 'flex'}} >
        <Box>

            { people.id ? 
            <>
                <Box display="flex"  >
                    <Box mr={4}>
                        <img 
                        style={{width: '250px'}} 
                        src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`}
                        />        
                    </Box>
                    <Box>
                        <p>Name: {people.name},</p>
                        <p>Height: {people.height},</p>
                        <p>Mass: {people.mass},</p>
                        <p>Hair Color: {people.hair_color},</p>
                        <p>Skin Color: {people.skin_color},</p>
                        <p>Eye Color: {people.eye_color},</p>
                        <p>Birth Year: {people.birth_year},</p>
                        <p>Gender: {people.gender},</p>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" >
                    <CarouselFilms peopleFilms={peopleFilms}/>
                </Box>
            </>
             : <Box>Not Item</Box> }


        </Box>
    )
}

export default React.memo(People);