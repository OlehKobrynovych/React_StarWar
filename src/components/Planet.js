import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams } from "react-router-dom";
import { getPlanetThunk } from "../store/planets_reducer";


const Planet = () => {
    const dispatch = useDispatch()
    const planet = useSelector(state =>state.planets.planet)
    // const count = useSelector(state =>state.peoples.count)
    // const [page, setPage] = useState(1);
    // const navigate = useNavigate();
    // debugger
    const {id} = useParams();

    console.log('Planet');


    useEffect(()=>{
       dispatch(getPlanetThunk(id))
    },[])

    return (
        <div style={{display: 'flex'}} >
            
            { planet.id ? 
            <>
                <div>
                    <img style={{width: '250px'}} 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />        
                    {/* src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`} />         */}
                </div>
                <div>
                    <p>Name {planet.name},</p>
                    <p>Rotation Period {planet.rotation_period},</p>
                    <p>Orbital Period {planet.orbital_period},</p>
                    <p>Diameter {planet.diameter},</p>
                    <p>Climate {planet.climate},</p>
                    <p>Gravity {planet.gravity},</p>
                    <p>Terrain {planet.terrain},</p>
                    <p>Surface Water {planet.surface_water},</p>
                    <p>Population {planet.population},</p>
                </div>
            </>
             : <div>Not Item</div> }

        </div>
    )
}

export default React.memo(Planet);