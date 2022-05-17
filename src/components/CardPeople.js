import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


const CardPeople = ({item}) => {
    // debugger
    const navigate = useNavigate();

    console.log('CardPeople');

    const handleChange = () => {
        navigate(`/people/${item.id}`)

    }

    return (
        <div>
            <Card className='CardPeople' sx={{ maxWidth: 300 }} onClick={handleChange} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
                            alt="green iguana"
                        />
                        <CardContent  >
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.gender}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>           
        </div>
    )

}
export default React.memo(CardPeople);