import React, { useState, useEffect } from "react";
import {Box, Slide} from '@mui/material';


const CarouselFilms = ({peopleFilms}) => {
    
    console.log('CarouselFilms');

    // const [page, setPage] = useState([]);
    
    // useEffect(()=>{
    //     setPage(peopleFilms.map( (el, index) => (
    //         <img 
    //             style={{width: '250px'}} 
    //             src={`https://starwars-visualguide.com/assets/img/films/${el}.jpg`}
    //             />
    //     )))
    //  }, [page])

    return (
        <Box my={2}>

                        {peopleFilms.map( (el, index) => (
                            <img 
                                style={{width: '250px'}} 
                                src={`https://starwars-visualguide.com/assets/img/films/${el}.jpg`}
                                /> 
                        ))}
           
        </Box>
    )
}

export default React.memo(CarouselFilms);