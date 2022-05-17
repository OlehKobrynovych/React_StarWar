import React, { useState } from "react";
import {Box} from '@mui/material';

const CarouselFilms = ({peopleFilms}) => {
    
    console.log('CarouselFilms');

    // const [slides, setSlides] = useState([])

    // setSlides(peopleFilms.map( el => `https://starwars-visualguide.com/assets/img/films/${el}.jpg` ))
    
    // useEffect(()=>{
    //     dispatch(getSlidesThunk(id))
    //  },[slides])

    return (
        <Box my={2}>

            {peopleFilms.map( (el, index) => (
                <div key={index}>
                   <img 
                    style={{width: '250px'}} 
                    src={`https://starwars-visualguide.com/assets/img/films/${el}.jpg`}
                    /> 
                </div>
            ))}
           
        </Box>
    )
}

export default React.memo(CarouselFilms);