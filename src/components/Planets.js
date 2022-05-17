import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPlanetsThunk } from "../store/planets_reducer";
import CardPlanets from "./CardPlanets";
import Pagination from "./Pagination";
import Search from "./Search";


const Planets = () => {
    console.log('Planets');

    const dispatch = useDispatch()
    const planets = useSelector(state =>state.planets.results)
    const count = useSelector(state =>state.planets.count)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (value) => {
        navigate(`/planets/?search=${value}&page=1`)
        setPage(1);
        setSearch(value)
    }

    const handlePage = (value) => {
        navigate(`/planets/?search=${search}&page=${value}`)
        setPage(value);
    };

    useEffect(()=>{
        let searchValue = new URLSearchParams(location.search).get('search') || '';
        let pageValue = new URLSearchParams(location.search).get('page') || 1;
        dispatch(getPlanetsThunk(searchValue, pageValue))
     },[])

    useEffect(() => {    
        let searchValue = new URLSearchParams(location.search).get('search') || '';
        let pageValue = new URLSearchParams(location.search).get('page') || 1;
        dispatch(getPlanetsThunk(searchValue, pageValue));

        if (page !== pageValue) {
            setPage(Number(pageValue));
        }
        
        if (search !== searchValue) {
            setSearch(searchValue);
        }
    }, [location]);

    return (
        <div>

            <Search search={search} handleSearch={handleSearch} />

            <Pagination count={Math.ceil(count/10)} page={page} handlePage={handlePage} />
            
            <Grid container spacing={2}>
                { planets.length ? planets.map(el => <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
                    <CardPlanets item={el} /></Grid>) : <div>Not Items</div> }
            </Grid>
        </div>
    )
}

export default React.memo(Planets);