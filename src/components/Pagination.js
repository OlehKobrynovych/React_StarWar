import React, { useState } from "react";
import {Box, Pagination as Pagin} from '@mui/material';

const Pagination = ({page, handlePage, count}) => {
    
    console.log('Pagination');

    return (
        <Box my={2} className='pagination-wrap'>
            <Pagin color="secondary" count={count} page={page} onChange={(e, value)=>handlePage(value)} />
        </Box>
    )
}

export default React.memo(Pagination);