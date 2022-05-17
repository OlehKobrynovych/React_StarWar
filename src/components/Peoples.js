import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPeoplesThunk } from "../store/peoples_reducer";
import CardPeople from "./CardPeople";
import Pagination from "./Pagination";
import Search from "./Search";

const Peoples = () => {
    const dispatch = useDispatch()
    const peoples = useSelector(state =>state.peoples.results)
    const count = useSelector(state =>state.peoples.count)
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Peoples');

    const handleSearch = (value) => {
        navigate(`/peoples/?search=${value}&page=1`)
        setPage(1);
        setSearch(value)
    }

    const handlePage = (value) => {
        navigate(`/peoples/?search=${search}&page=${value}`)
        setPage(value);
    };
    
    useEffect(() => {
        let searchValue = new URLSearchParams(location.search).get('search') || '';
        let pageValue = new URLSearchParams(location.search).get('page') || 1;
        dispatch(getPeoplesThunk(searchValue, pageValue));

        // debugger
    }, [])
    

    useEffect(() => {    
            let searchValue = new URLSearchParams(location.search).get('search') || '';
            let pageValue = new URLSearchParams(location.search).get('page') || 1;
            dispatch(getPeoplesThunk(searchValue, pageValue));

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
                { peoples.length ? peoples.map(el => <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
                    <CardPeople item={el} /></Grid>) : <div>Not Items</div> }
            </Grid>

            <Pagination count={Math.ceil(count/10)} page={page} handlePage={handlePage} />

        </div>
    )
}

export default React.memo(Peoples);